const Server = require('../../config/model/ServerModel')

class Core{
	constructor(address,path,data){

	/********* GET INFORMATION DATA FROM DNS ********/

		this.address = address;
		this.path = path;
		this.data = data;
		
	}

	async init(){

		try{

		/************ INJECT DB *************/
		
			let clientBody ={
				address:this.address,
				path:this.path,
				ip:this.data.ip,
				city:this.data.city,
				country:this.data.country,
				org:this.data.org,
			}

			const client = await Server.create(clientBody);
			
		}
		catch(err){
			console.log(err.message);
		}
	}
}

module.exports = Core




