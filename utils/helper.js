let getMessage = (code , message , data)=>{
	let msg = {};
	msg.code = code ;
	msg.status = message;
	if(data)
	msg.data = data;
	return msg;

}


module.exports={
	getMessage
}
