fetch('https://--------!!!Upppsss !!!!! This is Secret')
  .then(response => response.json())
  .then(param =>{

    /***************** MAIN ARRAY VARIABLES *****************/
    let totalArray = param.data
    let totalArrayLength = param.data.length;
    let filterArray;
    let filterArrayLength;
    /*********************************************************/

    /************ MY IP ********************/
    const ownIp1 = "XXXXXXXXXXXXXX";
    const ownIp2 = "XXXXXXXXXXXXXX";
    /***************************************/
    
    /************** TIME VARIABLES **********/
    let date
    let dayAndHour
    let day
    let hourTotal
    let hour

    function time(){

         date = totalArray[i].createdAt
         dayAndHour = date.split('T')
         day = dayAndHour[0];
         hourTotal = dayAndHour[1].split('.')
         hour = hourTotal[0];
    }
    /******************************************/

    /********************** FILTER MY IP AND SALT ARRAY *******************************************/
    let filterOwnIp =  totalArray.filter(par=> par.ip == ownIp2 || par.ip == ownIp1);
    filterArray = totalArray.filter(par=> par.ip !== ownIp2 && par.ip !== ownIp1)
    filterArrayLength = filterArray.length;     
    /**********************************************************************************/

    /******************* COUNT SALT CLIENT ****************************************/
    var clientCount = totalArray.length;

    document.getElementById('total').innerHTML = clientCount - filterOwnIp.length;
    /******************************************************************************/

    /************** TURN BACK ARRAY FOR FIND LAST CLIENT ****************************/
    let turnArray = param.data.reverse()
    /********************************************************************************/
    



/************************ CREATE TOTAL CLIENT TABLE ***************************/
   for(var i = 0; i<param.data.length; i++)
      {
        totalArrayLength--;
       
        /******************** DATE PROCESS *****************************/
        time()
        /***************************************************************/

        let client = document.createElement('div')
        client.innerHTML=`
          <ul>
            <li><i class="fas fa-list-ol"></i> <span>Sıra No : </span> ${totalArrayLength+1}</li>
            <li><i class="fas fa-clock"></i> <span>Tarih</span>  : ${day}</li>
            <li><i class="fas fa-clock"></i> <span>Saat</span>  : ${hour}</li>
            <li><i class="fas fa-map-marked-alt"></i> <span>Şehir</span>  : ${totalArray[i].city}</li>
            <li><i class="fas fa-globe-americas"></i> <span>Ülke</span>   : ${totalArray[i].country}</li>
            <li><i class="fas fa-project-diagram"></i> <span>Ip</span>     : ${totalArray[i].ip}</li>
            <li><i class="fas fa-server"></i> <span>Sunucu : ${totalArray[i].org}</li>
          </ul>

        `
        client.classList.add("client");
        document.getElementById('list').appendChild(client);

      }  
/*******************************************************************************/

/************************** CREATE SALT CLIENT TABLE ***************************/
    for (var i = 0; i< filterArray.length;  i++) {

          time();

          filterArrayLength--

          let saltClient = document.createElement('div');

          saltClient.innerHTML=`

              <ul>
                <li><i class="fas fa-list-ol"></i> <span>Sıra No : </span> ${filterArrayLength+1}</li>
                <li><i class="fas fa-clock"></i> <span>Tarih</span>  : ${day} /  ${hour}</li>
                <li><i class="fas fa-map-marked-alt"></i> <span>Şehir</span>  : ${filterArray[i].city}</li>
                <li><i class="fas fa-globe-americas"></i> <span>Ülke</span>   : ${filterArray[i].country}</li>
              </ul>


          `;

          saltClient.classList.add("client");
          document.getElementById('saltList').appendChild(saltClient);
    }


  });
