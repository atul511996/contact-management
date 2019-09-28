const user = require("../model/user")

let signUp = async(req, res)=>{
	try{
		console.log(req.body)
	if(!req.body.phone || !req.body.password || !req.body.name){
		 res.status(403).send("Invalid Inputs")
		 return;
	}

		 res.status(200).send("success")
	}catch(err){
		res.status(500).send(err)
	}


}
module.exports = {
	signUp
}
