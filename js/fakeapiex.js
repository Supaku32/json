//Declaracion de variables
let pURL = "https://jsonplaceholder.typicode.com/users";

fetch(pURL)
  .then(response => response.json())
  .then(json => {

    let tblUser = document.querySelector("#usuarios");

    let txtUsuario = "<tbody>";

    if (json.length < 1){
        txtUsuario = txtUsuario +  "<tr><td colspan='4'> No hay registros que mostrar </td></tr>";
    } else{ //Si la variable json tiene datos
        json.forEach(element => {
            txtUsuario = txtUsuario +  "<tr id='" + element.id + "' " + 
                                            "onclick='verDetalle(" + element.id + ")'><td>" + element.name + "</td>" + 
                                            "<td>" + element.username + "</td>" + 
                                            "<td>" + element.email + "</td>" +
                                            "<td>" + element.address.zipcode + "</td></tr>";
        });
    }

    txtUsuario = txtUsuario + "</tbody>"

    tblUser.innerHTML = txtUsuario;

  })
  .catch(error => console.log(error));


  function verDetalle (objeto){

    let urlObj = pURL + "/" + objeto;        
    
    fetch (urlObj)
    .then (resp => resp.json())
    .then (data => {      

      let name = document.getElementById("nameDetalle");
      let user = document.getElementById("userDetalle");
      let telf = document.getElementById("telfDetalle");
      let webSite = document.getElementById("webSiteDetalle");
  
      //Visualizando los datos
  
      name.textContent = data.name;
      user.textContent = data.username;
      telf.textContent = data.phone;
      webSiteDetalle.textContent = data.website;
      webSiteDetalle.setAttribute('href', data.website);

    })


    
  }

