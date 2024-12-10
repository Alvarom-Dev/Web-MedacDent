

let listaCitas = localStorage.getItem('LocalCitas');

if(listaCitas ==  null){
    listaCitas = [];
   
}else{
    getDatosArray();
}

//Funcion que recoge los datos del LocalStorage y los presenta en la tabla de la sección "Ver citas confirmadas"

function getDatosArray(){
    let trNueva1 = document.getElementById("tablaCitas2");
    let listaArray = JSON.parse(listaCitas).sort((a,b) => a.fechaCita.localeCompare(b.fechaCita));
   
       
    
   
    
    for(let i = 0;i<listaArray.length;i++){
       
        let objeto = listaArray[i];

        let tr1 = document.createElement("tr");

        let td11 = document.createElement("td");
        let td22 = document.createElement("td");
        let td33 = document.createElement("td");
        let td44 = document.createElement("td");
        let td55 = document.createElement("td");
        let td66 = document.createElement("td");

        let fechaCita1 = document.createTextNode(objeto.fechaCita);
        let nombre1 = document.createTextNode(objeto.nombre);
        let apellidos1 = document.createTextNode(objeto.apellidos);
        let dni1 = document.createTextNode(objeto.dni);
        let telefono1 = document.createTextNode(objeto.telefono);
        let fechaNacimiento1 = document.createTextNode(objeto.fechaNacimiento);

        td11.appendChild(fechaCita1);
        td22.appendChild(nombre1);
        td33.appendChild(apellidos1);
        td44.appendChild(dni1);
        td55.appendChild(telefono1);
        td66.appendChild(fechaNacimiento1);

        tr1.appendChild(td11);
        tr1.appendChild(td22);
        tr1.appendChild(td33);
        tr1.appendChild(td44);
        tr1.appendChild(td55);
        tr1.appendChild(td66);
        trNueva1.appendChild(tr1);

        
    };

};











