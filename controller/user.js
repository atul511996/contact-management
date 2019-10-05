const user = require("../model/user")
const helper = require("../utils/helper")
const jwt = require("../utils/jwt")

let signUp = async(req, res)=>{
	try{
	if(!req.body.phone || !req.body.password || !req.body.name){
		 res.status(403).send(helper.getMessage(403, "Invalid Inputs"))
		 return;
	}
		let is_phone_exist = await user.isPhoneExist(req.body.phone)
		if(is_phone_exist > 0){
			res.status(409).send(helper.getMessage(409 , ` Phone "${req.body.phone}" already registered!!`))
			return;
		}
		let result = await user.signUp(req.body.phone , req.body.password , req.body.name)
		res.status(200).json(helper.getMessage(200, "Success", result))
	}catch(err){
		res.status(500).send(helper.getMessage(500, err))
	}
}


let login = async(req, res)=>{
	try{
		if(!req.body.phone || !req.body.password){
			res.status(403).send(helper.getMessage(403, "Invalid Inputs"))
			return;
	   }
			let getUserInfo = await user.getUserInfo(req.body.phone)
		if(!getUserInfo){
			res.status(401).send(helper.getMessage(401 , `Phone "${req.body.phone}" not registered!!` ))
			return;
		}
		if(getUserInfo.password !=req.body.password){
			res.status(403).send(helper.getMessage(403, `Password  not matched!!!`))
			return;
		}
		let token = jwt.generateToken(getUserInfo._id)
		let jwt_token = {}
		jwt_token.token = token
			res.status(200).json(helper.getMessage(200, "Success" , jwt_token))
	}catch(err){
		res.status(500).send(helper.getMessage(500, err))	
	}
}
module.exports = {
	signUp,
	login
}
