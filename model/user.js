const userSchema = require("../schema/user")
const mongoose = require('mongoose')
const user = mongoose.model('user' , userSchema.user)
let signUp = async(phone , password , name )=>{
  	

	
}


module.exports={
	signUp
}
