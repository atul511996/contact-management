const jwt = require("jsonwebtoken")
const jwt_key = 'contact_management'
let generateToken = (user_id)=>{
    return jwt.sign({data : user_id } , jwt_key , {expiresIn : '24h'})
}

let verifyToken = (token )=>{
    return jwt.verify(token , jwt_key)
}
module.exports={
    generateToken,
    verifyToken
}