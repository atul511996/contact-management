const user = require("../model/user")
const helper = require("../utils/helper")

let signUp = async(req, res)=>{
	try{
	if(!req.body.phone || !req.body.password || !req.body.name){
		 res.status(403).send("Invalid Inputs")
		 return;
	}

		let result = await user.signUp(req.body.phone , req.body.password , req.body.name)
		res.status(200).json(helper.getMessage(200, "Success", result))
	}catch(err){
		res.status(500).send(err)
	}


}
module.exports = {
	signUp
}
