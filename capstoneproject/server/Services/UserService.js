const mongoose=require("mongoose")
const UserSchema=require('../models/User')
const User=mongoose.model('User',UserSchema)

class UserService{
    async setUser(user){
        //update : _id
        if(user['_id'] !== undefined){
         return   await User.updateOne({_id:user['_id']},{$set:user})
        }
        else{
            const userObj=new User(user)
            userObj.setPassword(user.setPassword)
            const result= await userObj.save()
            result['salt']=''
            result['hash']=''
            return result
        }
    }
    async getUser(){
       return await User.find({isDel:false}).select(["-salt","-hash"])//to find everything but not select salt and hash, to select, remove the hyphen
    }
    async removeUser(_id){
      return  await User.updateOne({_id:_id},{$set:{isDel:true}})
    }
    async loginUser(email,password){
        const result=await User.find({email:email})
        if(result){
            if(result.length > 0){
                const user = result[0]
                if(user.validatePassword(password)){
                user['hash']=''
                user['salt']=''
                const objUser=User.toObject()
                objUser.token=user.generateToken()
                return objUser
                }
                else{
                return {}}
            }
        }
    }
}
module.exports=UserService