const express = require('express')
const router = express.Router();
const Server = require('../../config/model/ServerModel')

router.route('/:id').get(async (req,res)=>{

	try{
		/***************** GET WEB CLIENT INFO ********************/
		const clientData = await Server.find({address:req.params.id})


		res.status(200).json({
			success:true,
			data:clientData
		})

	}catch(err){

		console.log(err);
		res.status(500).json({ err :'Server Failed'})
	}

})

module.exports = router