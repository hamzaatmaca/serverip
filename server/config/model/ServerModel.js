const db = require('../db/db.js');
const mongoose = require('mongoose');

const ServerModelSchema = new mongoose.Schema({
	address:{
		type:String
	},
	path:{
		type:String
	},
	ip:{
		
		type:String
	},
	city:{

		type:String,
	},
	country:{

		type:String
	},
	org:{

		type:String
	},
	createdAt:{

		type:Date,
		default:Date.now
	}



})

module.exports = mongoose.model('Server',ServerModelSchema)