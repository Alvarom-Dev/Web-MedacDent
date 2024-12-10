
// Inicializo el array de citas y el objeto donde se guardaran los datos del usuario
let contador = 1;
let arrayVacio = [];
let datoslocalStore = localStorage.getItem('LocalCitas');
let arrayLocalStorage = JSON.parse(datoslocalStore);
let Persona ={
    indice: 0,
    fechaCita:"",
    nombre:"",
    apellidos:"",
    dni:"",
    telefono:"",
    fechaNacimiento:"",
    fullname: function(){
        return `${this.fechaCita} ${this.nombre} ${this.apellidos} ${this.dni} ${this.telefono} ${this.fechaNacimiento}`;
    }
    
}

// Creo  el funcion para recoger los datos del formulario

function recogerDatos(){
   
    let fechaCita = document.getElementById("cajaFecha").value;
    let nombreUsuario = document.getElementById("cajaNombre").value;
    let apellidosUsuario = document.getElementById("cajaApellidos").value;
    let dniUsuario = document.getElementById("cajaDni").value;
    let telefonoUsuario = document.getElementById("cajaTelefono").value;
    let fechaNacimientoUsuario = document.getElementById("cajaFechaNacimiento").value;


    let usuario = Object.create(Persona);
        usuario.fechaCita = fechaCita;
        usuario.nombre=nombreUsuario;
        usuario.apellidos = apellidosUsuario;
        usuario.dni = dniUsuario;
        usuario.telefono =  telefonoUsuario;
        usuario.fechaNacimiento= fechaNacimientoUsuario;
           
//Añado los objetos creados a mi array si los datos estan correctamente introducidos
     let indiceObj = document.getElementById("index").value;

     if(usuario.fechaCita == "" || usuario.nombre == "" || usuario.apellidos == "" || usuario.dni == "" ||  usuario.telefono == "" ||  usuario.fechaNacimiento == ""){
        alert("Introduzca todos los datos correctamente para obtener su cita");
     }else if(validarFecha()!=true || validacionCampoNombre() != true || validacionCampoApellidos() != true || validacionCampoDni() != true || validacionCampoTelefono() != true || validarFechaNacimiento() != true){

        return false;
           
    }else if(indiceObj){
 
     arrayLocalStorage[indiceObj] = usuario;
     document.getElementById("index").value = "";
     document.getElementById("indice").innerHTML="";
     arrayLocalStorage.sort((a,b)=>a.fechaCita.localeCompare(b.fechaCita));
     guardarCitasLocalStorage(arrayLocalStorage);
     crearLista(arrayLocalStorage);
    }else if(datoslocalStore==null){
        let datosLocalStoreInicio = localStorage.getItem('LocalCitas');
        let arrayLocalStorageInicio = JSON.parse(datosLocalStoreInicio);
        arrayLocalStorageInicio.push(usuario);
        crearLista(arrayLocalStorageInicio);      
        guardarCitasLocalStorage(arrayLocalStorageInicio); 
        datoslocalStore = datosLocalStoreInicio;
        arrayLocalStorage = arrayLocalStorageInicio;

    }else{
        arrayLocalStorage.push(usuario);
        arrayLocalStorage.sort((a,b)=>a.fechaCita.localeCompare(b.fechaCita));
        guardarCitasLocalStorage(arrayLocalStorage);
        crearLista(arrayLocalStorage);
        
    }
            
 };

//Funcion para modificar cita

function modificar(index){
    //let usuarioModificado = datosArray[index];
    let usuarioModificado = arrayLocalStorage[index];
    document.getElementById("cajaFecha").value = usuarioModificado.fechaCita;
    document.getElementById("cajaNombre").value =  usuarioModificado.nombre;
    document.getElementById("cajaApellidos").value =  usuarioModificado.apellidos;
    document.getElementById("cajaDni").value = usuarioModificado.dni; 
    document.getElementById("cajaTelefono").value = usuarioModificado.telefono;
    document.getElementById("cajaFechaNacimiento").value = usuarioModificado.fechaNacimiento;
    document.getElementById("index").value = index;
    document.getElementById("indice").innerHTML=`<strong>Modificando cita Numero ${index}</strong>`;    
    
}
// Funcion para borrar la cita

function borrar(index){
    borrarFilas();
    arrayLocalStorage.splice(index,1);
    document.removeChildTag
    crearLista(arrayLocalStorage);  
    guardarCitasLocalStorage(arrayLocalStorage);
    
}
function borrarFilas(){
    let filas = document.getElementsByTagName('td');
        
    let arrayFilas = Array.from(filas);
    arrayFilas.forEach(function(filas){
        filas.parentNode.removeChild(filas);
        });
}

//La funcion crearLista3 representa en la tabla la cita modificada

function crearLista(lista){
     
    borrarFilas();
    let div = document.getElementById("filaInicial");
    if(div){
        div.remove();
    };
   
    
    let trNueva = document.getElementById("bodyTabla");

    for(let index = 0; index<lista.length;index++){
        let obj = lista[index];
        

        let tr = document.createElement("tr");
        tr.setAttribute("id", "fila");

        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
        let td5 = document.createElement("td");
        let td6 = document.createElement("td");
        let td7 = document.createElement("td");
       
    
        let nuevaCita = document.createTextNode(`${obj.fechaCita}`);
        let nombreNuevo = document.createTextNode(`${obj.nombre}`);
        let apellidosNuevo = document.createTextNode(`${obj.apellidos}`);
        let dniNuevo = document.createTextNode(`${obj.dni}`);
        let telefonoNuevo = document.createTextNode(`${obj.telefono}`);
        let fechaNacimientoNuevo = document.createTextNode(`${obj.fechaNacimiento}`);
       
    
        //Boton eliminar
        let botonEliminar = document.createElement("button");
        botonEliminar.setAttribute('onclick', `borrar(${index})`);
        botonEliminar.id = "botonEliminar";
        botonEliminar.appendChild(document.createTextNode("Eliminar"));
        
        //Boton modificar
        let botonModificar = document.createElement("button");
        botonModificar.setAttribute('onclick', `modificar(${index})`);
        botonModificar.id ="botonModificar";
        botonModificar.appendChild(document.createTextNode("Modificar"));
    
       
         td1.appendChild(nuevaCita);
         td2.appendChild(nombreNuevo);
         td3.appendChild(apellidosNuevo);
         td4.appendChild(dniNuevo);
         td5.appendChild(telefonoNuevo);
         td6.appendChild(fechaNacimientoNuevo);
         td7.appendChild(botonModificar);
         td7.appendChild(botonEliminar);

         tr.appendChild(td1);
         tr.appendChild(td2);
         tr.appendChild(td3);
         tr.appendChild(td4);
         tr.appendChild(td5);
         tr.appendChild(td6);
         tr.appendChild(td7);
         trNueva.appendChild(tr);
    }
   

};

//Función que guarda los datos del formulario en el localStorage

function guardarCitasLocalStorage(lista){
   
   
        localStorage.setItem('LocalCitas', JSON.stringify(lista));
    
};


document.addEventListener('DOMContentLoaded', function(){
    if(datoslocalStore != null){
        crearLista(arrayLocalStorage);
     }

     if(datoslocalStore == null){
       localStorage.setItem('LocalCitas', JSON.stringify(arrayVacio));
        
     }
        
});
   


