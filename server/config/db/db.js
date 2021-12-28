const mongoose = require('mongoose');


const db = async ()=>{

	try{

		const conn = await mongoose.connect('mongodb+srv://XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',{
			useNewUrlParser:true,
			useUnifiedTopology:true
		});

		console.log(`MongoDB Connection is very Successfull`)

	}
	catch(err){

		console.log(err)
		process.exit(1);

	}

}

db();

module.exports= db

