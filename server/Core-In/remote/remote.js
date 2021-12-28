const express = require('express')
const router = express.Router();
const dns =require('../dns/dns.js')

router.route('/').post((req,res)=>{
		
	try{
		/*******SEND DATA TO DNS MODULE ***********/
		dns.findIp(req.body.path, req.body.data);

		res.status(200).json({
			success:true,
			data:req.body
		})
	}
	catch(err){

		console.log(err);
		res.status(500).json({ err :'Server Failed'})
	}
})


module.exports = router