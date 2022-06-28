//Consulta mi propio fake API
let urlJSON = "https://my-json-server.typicode.com/mlismarc/myFakeAPI/consolas";

//Usando el Fetch API
fetch(urlJSON)
.then (resp => resp.json ())
.then (data => {

    let objH3 = document.querySelector("#info");
    let texto = "";
    
   data.forEach(element => {
        texto += "Codigo " + element.id + ", Nombre Consola " + element.name_consola + ", categoria " + element.categoria + "<br>";
   });

   objH3.innerHTML = texto;

})
.catch(error => console.log(error));
