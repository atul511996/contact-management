const mongoose = require('mongoose')

let user = new mongoose.Schema({
	name : { type : String , required : true},
	password : {type : String , required : true},
	phone : {type : String , required : true},
	status : { enum: ['0', '1'] }
})


module.exports = {
	user
}
