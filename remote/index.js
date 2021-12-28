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

	postURL('https://------- Uppsss!! This is Secret ----------',data)
	.then(data => {
		console.log(data); 
	})
	.catch(err=>{
		console.log(err)
	})

});

