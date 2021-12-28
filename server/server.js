const express = require('express');
const app = express();
const dotenv = require('dotenv');
const PORT = process.env.PORT || 3000;
const cors = require('cors');


dotenv.config({path:'./config/congif.env'});

/**** IMPORT REMOTE ******/
const coreIn = require('./Core-In/remote/remote.js') 
const coreOut = require('./Core-Out/remote/remote.js')

/****** PREVENT CORS ******/
app.use(cors());
/****** PARSING BODY ******/
app.use(express.json());


app.use('/api/remoteserver/v1/ip',coreIn);
app.use('/api/remoteserver/v1/client',coreOut);

app.listen(PORT,()=>{
	console.log(`Server is listening on port : ${ PORT }`);
})