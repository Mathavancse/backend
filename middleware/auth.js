const {tokenvalidate} = require("../utils/tokenvalidate")
module.exports =async function(req,res,next){
    const data = await tokenvalidate("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImttYXRoYXZhbmNzZUBnbWFpbC5jb20iLCJuYW1lIjoiSy5NYXRoYXZhbiIsImlhdCI6MTc1NDU2MTY0NiwiZXhwIjoxNzU0NTYxNzA2fQ.QcT0PZTfmsHxJ37SBeUBe8jALw7D11qf21oA2jcVmEk")
    console.log(data);
    
    if(data){
        next()
    }
    else{
        res.send("access denied")
    }
}