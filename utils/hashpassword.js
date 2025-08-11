const bcrypt  = require("bcryptjs")

const hashpassword = async(plainpassword)=>{
    const hash = await bcrypt.hash(plainpassword,10)
    return hash
}

const validatepassword = async(hashp,plainpass)=>{
    const pass = await bcrypt.compare(hashp,plainpass)
    return pass
}



module.exports.hashpassword = hashpassword
module.exports.validatepassword = validatepassword