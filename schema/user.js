const mongoose = require('mongoose')

let user = new mongoose.Schema({
	name : { type : String , required : true},
	password : {type : String , required : true},
	phone : {type : String , required : true},
	status : {type : String , enum: ['0', '1'] ,default : '0' }
})


module.exports = {
	user
}
