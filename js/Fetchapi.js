
let pUrl = "js\fakeapiex.js";


fetch(pUrl)
 .then(response => response.json()) 
 .then(data => {
     //Acá completamos la funcionalidad que necesitamos con la data
    console.log(data);

    //Dibujar en el HTML una tabla
    let tablaHTML = "<table class='table table-responsive table-striped table-hover'>" +
                    "<thead> <tr><th> Nombre</th> <th>Temp</th> <th>Descripción</th> </tr> </thead> ";

    let lista = data.flores;  

    if ( lista.length > 0){
        tablaHTML = tablaHTML + " <tbody>";

  
        lista.forEach( element => {
            tablaHTML = tablaHTML + 
                       " <tr><td>" + element.nombre + "</td> " +
                             "<td>" + element.temperatura + "</td>" +
                             " <td>" + element.descripcion + "</td> </tr>";                    
        });

        tablaHTML = tablaHTML + " </tbody>";

    } else {
        tablaHTML = tablaHTML + 
                   "<tbody><tr><td colspan='3'> No existen categorias de equipos a mostrar</td></tr></tbody>";        
    }

    tablaHTML = tablaHTML + "</table>";

    document.getElementById('listajugadores').innerHTML = tablaHTML;

    document.getElementById("titulo").innerHTML = data.tituloPag;

    console.log(tablaHTML);

 }    
 )
 .catch(error => console.log(error)); 