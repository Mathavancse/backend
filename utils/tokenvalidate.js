const jwt  = require("jsonwebtoken")

const tokenvalidate = async(token)=>{
    try{
    const data = await jwt.verify(token,process.env.JWT_KEY)
    console.log("sf",data);
    
    return data
    }
    catch(err){
        return false
    }
}

module.exports.tokenvalidate = tokenvalidate