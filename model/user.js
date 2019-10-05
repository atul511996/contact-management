const userSchema = require("../schema/user")
const mongoose = require('mongoose')
const db = require("../database/db")()
const User = mongoose.model('user' , userSchema.user)
let signUp = async(phone , password , name )=>{
	try{
		let data = await User.create({
			name : name,
			password : password,
			phone : phone
		});
		return data
	}catch(err){
		console.log(err)
		return err
	}	
}


let isPhoneExist = async(phone)=>{
	try{
	let data = await User.findOne({phone : phone})
	let length = 0;
	if(data)
	length = 1
	return length
	}catch(err){
		console.log(err)
		return err
	}
}


let getUserInfo = async(phone)=>{
	try{
		let data = await User.findOne({phone : phone})
		return data
	}catch(err){
		return err
	}
}

module.exports={
	signUp,
	isPhoneExist,
	getUserInfo
}
