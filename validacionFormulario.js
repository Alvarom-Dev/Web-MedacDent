//Obtenemos todos los inputs del formulario con la clase validar

const formulario = document.getElementById("miFormulario");
const inputs = document.querySelectorAll('.validar');

// Guardamos las expresiones regulares en este objeto
const expresiones = {
	nombre: /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	apellidos: /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{1,60}$/, // Letras y espacios, pueden llevar acentos.
	dni: /(^([0-9]{8,8}[A-Z])|^)$/, // 8 digitos y 1 letra mayuscula.
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.	
}
//Función para validar la fecha de la cita

function validarFecha(){
	let variableExpresionRegular = /^(?:(?:(?:0?[1-9]|1\d|2[0-8])[/](?:0?[1-9]|1[0-2])|(?:29|30)[/](?:0?[13-9]|1[0-2])|31[/](?:0?[13578]|1[02]))[/](?:0{2,3}[1-9]|0{1,2}[1-9]\d|0?[1-9]\d{2}|[1-9]\d{3})|29[/]0?2[/](?:\d{1,2}(?:0[48]|[2468][048]|[13579][26])|(?:0?[48]|[13579][26]|[2468][048])00))$/;

	let fechaFormulario = document.getElementById('cajaFecha').value.split("/");
	
	let dia = parseInt(fechaFormulario[0]);  
	let mes = parseInt(fechaFormulario[1]);    
	let ano = parseInt(fechaFormulario[2]);    

	let cadenaFecha = dia + "/" + mes + "/" + ano;
	
		if(cadenaFecha.match(variableExpresionRegular) == null){
			alert(" ¡Fecha incorrecta!   Introduzca la fecha con el siguiente formato: dd/mm/aaaa");	
		}else{
			let hoy = new Date();

		let anoFecha = ano;
		let mesFecha = mes;
		let diaFecha = dia; 
	
		let anoHoy = hoy.getFullYear();
		let mesHoy = hoy.getMonth()+1;
		let diaHoy = hoy.getDate();
	
		if(anoFecha < anoHoy){
			alert("La fecha de la cita no puede ser anterior al dia de hoy");
			return false;
		}else{
			if(anoFecha == anoHoy && mesFecha<mesHoy){
				alert("La fecha de la cita no puede ser anterior al dia de hoy");
				return false;
			}else{
				if(anoFecha == anoHoy && mesFecha == mesHoy && diaFecha < diaHoy){
					alert("La fecha de la cita no puede ser anterior al dia de hoy");
					return false;
				}else{
					if(anoFecha == anoHoy && mesFecha == mesHoy && diaFecha == diaHoy){	
						return true;
					}else{
						return true;
					}
				}
			}
		}
				
	}

};
	
// Funcion para validar los diferentes inputs del formulario
//function validarFormulario(e) {
const validarFormulario = (e) => {
	switch (e.target.name) {

		case "nombre":
			if (expresiones.nombre.test(e.target.value)) {
				document.querySelector('.parrafoValidacionNombre').classList.remove('parrafoValidacionNombre-activo');

			} else {
				document.querySelector('.parrafoValidacionNombre').classList.add('parrafoValidacionNombre-activo');
                return false;
			}
			break;
		case "apellidos":
			if (expresiones.apellidos.test(e.target.value)) {
				document.querySelector('.parrafoValidacionApellidos').classList.remove('parrafoValidacionApellidos-activo');
			} else {
				document.querySelector('.parrafoValidacionApellidos').classList.add('parrafoValidacionApellidos-activo');
			    return false;
			}
			break;
		case "dni":
			if (expresiones.dni.test(e.target.value)) {
				document.querySelector('.parrafoValidacionDni').classList.remove('parrafoValidacionDni-activo');
			} else {
				document.querySelector('.parrafoValidacionDni').classList.add('parrafoValidacionDni-activo');
			    return false;
			}
			break;
		case "telefono":
			if (expresiones.telefono.test(e.target.value)) {
				document.querySelector('.parrafoValidacionTelefono').classList.remove('parrafoValidacionTelefono-activo');
			} else {
				document.querySelector('.parrafoValidacionTelefono').classList.add('parrafoValidacionTelefono-activo');
			    return false;
			}
			break;
         
	}
}


inputs.forEach((input) =>{
input.addEventListener('keyup', validarFormulario);
input.addEventListener('blur', validarFormulario);
})

//Función para validar el campo de nombre
let validacionCampoNombre = () => {

 let campoNombre = document.getElementById("cajaNombre").value;

 if (campoNombre.match(expresiones.nombre)){
	return true;
 }else{
	alert("Campo Nombre incorrecto");
	return false;
 }
};
//Funcion para validar campo apellidos
let validacionCampoApellidos = () =>{
	let campoApellidos = document.getElementById("cajaApellidos").value;
    if(campoApellidos.match(expresiones.apellidos)){
		return true;
	}else{
		alert("Campo Apellidos incorrectos");
		return false;
	}
};

//Función para validar DNI

let validacionCampoDni = () =>{
	let campoDNI = document.getElementById("cajaDni").value;
	if(campoDNI.match(expresiones.dni)){
		return true;
	}else{
		alert("Campo DNI incorrecto")
		return false;
	}
};

//Función para validar telefono

let validacionCampoTelefono = () =>{
	let campoTelefono = document.getElementById("cajaTelefono").value;
	if(campoTelefono.match(expresiones.telefono)){
		return true;
	}else{
		alert("Campo Teléfono incorrecto");
		return false;
	}
};

//Funcion para validar fecha de Nacimiento

let validarFechaNacimiento = () =>{
	let variableExpresionRegular = /^(?:(?:(?:0?[1-9]|1\d|2[0-8])[/](?:0?[1-9]|1[0-2])|(?:29|30)[/](?:0?[13-9]|1[0-2])|31[/](?:0?[13578]|1[02]))[/](?:0{2,3}[1-9]|0{1,2}[1-9]\d|0?[1-9]\d{2}|[1-9]\d{3})|29[/]0?2[/](?:\d{1,2}(?:0[48]|[2468][048]|[13579][26])|(?:0?[48]|[13579][26]|[2468][048])00))$/;

	let fechaNacimientoFormulario = document.getElementById('cajaFechaNacimiento').value.split("/");
	
	let dia = parseInt(fechaNacimientoFormulario[0]);  
	let mes = parseInt(fechaNacimientoFormulario[1]);    
	let ano = parseInt(fechaNacimientoFormulario[2]);    

	let cadenaFechaNacimiento = dia + "/" + mes + "/" + ano;
	
		if(cadenaFechaNacimiento.match(variableExpresionRegular) == null){
			alert(" ¡Fecha Nacimiento incorrecta!   Introduzca la fecha con el siguiente formato: dd/mm/aaaa");	
		}else{
			let hoy = new Date();

		let anoFecha = ano;
		let mesFecha = mes;
		let diaFecha = dia; 
	
		let anoHoy = hoy.getFullYear();
		let mesHoy = hoy.getMonth()+1;
		let diaHoy = hoy.getDate();
	
		if(anoFecha > anoHoy){
			alert("Fecha de Nacimiento incorrecta. La fecha de nacimiento debe de ser anterior al día de hoy");
			return false;
		}else{
			if(anoFecha == anoHoy && mesFecha>mesHoy){
				alert("Fecha de Nacimiento incorrecta. La fecha de nacimiento debe de ser anterior al día de hoy");
				return false;
			}else{
				if(anoFecha == anoHoy && mesFecha == mesHoy && diaFecha > diaHoy){
					alert("Fecha de Nacimiento incorrecta. La fecha de nacimiento debe de ser anterior al día de hoy");
					return false;
				}else{
					if(anoFecha == anoHoy && mesFecha == mesHoy && diaFecha == diaHoy){	
						return true;
					}else{
						return true;
					}
				}
			}
		}
				
	} 
};	
