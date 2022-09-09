//basic schema
//https//:www.npmjs.com - find versions
//schema is a place where all definitions are done
const mongoose=require('mongoose')
const Schema=mongoose.Schema//initialization
let ProductSchema= new Schema({
    name:{type:String,required:true,max:100},
    price:{type:Number,required:true},
});

module.exports=mongoose.model("Product", ProductSchema)