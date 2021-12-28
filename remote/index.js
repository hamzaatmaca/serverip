//https://remote-ip-server.herokuapp.com/api/remoteserver/v1/client/176.53.69.112
//https://remote-ip-server.herokuapp.com/api/remoteserver/v1/client/89.252.187.235
fetch('https://ipapi.co/json/')
.then(function(response) {
	return response.json();
})
.then(function(data) {
	
	//console.log(data);

	async function postURL( url,data){

		const response = await fetch(url,{

			method:'POST',
			mode:'cors',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({path:window.location.href,data:data})
		});

		return response.json();
	}

	postURL('https://remote-ip-server.herokuapp.com/api/remoteserver/v1/ip',data)
	.then(data => {
		console.log(data); 
	})
	.catch(err=>{
		console.log(err)
	})

});

