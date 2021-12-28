const dns = require('dns');
const Core = require('../engine/core.js');


function findIp(path,data){
	
	/*********** PARSE URL *********/
	let parseURL = path.split('/')
	

	/*********** FIND URL IP *******/
	dns.lookup(parseURL[2],(err,address)=>{

		try{
			/********* SEND TO CORE ********/
			let core = new Core(address,path,data);
			core.init();

		}catch(err){

			console.log(`There is A Problem : ${err}`)
		}
	})
}

module.exports={
	dns,
	findIp
}


