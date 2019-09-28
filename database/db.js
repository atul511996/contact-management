module.exports = ()=>{
	try{
		let mongoose = require('mongoose')
		let mongoDB = 'mongodb+srv://atul511996:golu511996@cluster0-synji.mongodb.net/test'
		mongoose.connect(mongoDB , {useNewUrlParser : true}).then(()=>{
			console.log(`database connected`)
		})
		let db = mongoose.connection;
		db.on(`error` , console.error.bind(console , `MongoDB connection error : `))

	}catch(err){
		console.log(`connection failed ${err}`)
	}
}
