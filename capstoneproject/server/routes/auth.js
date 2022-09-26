const jwt=require('express-jwt')

const getTokenFromHeader=(req)=>{
    const {
        headers:{authorization},
    } = req
    if(authorization && authorization.spilt(" ")[0]==='Token'){
        return authorization.spilt(" ")[1]
    }
    return null
}

const auth={
    required: jwt({
        secret:'ABCD',
        userProperty:"user", //route
        getToken:getTokenFromHeader,
        algorithms:['HS256'],
    }),
}
module.exports=auth