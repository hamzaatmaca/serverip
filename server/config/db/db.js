const mongoose = require('mongoose');


const db = async ()=>{

	try{

		const conn = await mongoose.connect('mongodb+srv://hamza:atmaca1990@cluster0.qkjwf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
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

