// const inputName = document.querySelectorAll("[name=nombre]");
// const radioButtons = document.querySelector("#carta-a-santa").comportamiento.value;
// const nombreCiudad = document.querySelector("#carta-a-santa").ciudad.value;

const $form = document.querySelector("#carta-a-santa");

const nombre = $form.nombre.value;
const ciudad = $form.ciudad.value;
const comportamiento = $form.comportamiento.value;
const descripcionRegalo = $form["descripcion-regalo"].value; //para nombres que tienen "-"

console.log(nombre);
console.log(ciudad);
console.log(comportamiento);
console.log(descripcionRegalo);

function validarNombre(nombre) {
	if (nombre.length === 0) {
		return "El nombre debe tener al menos un caracter.";
	}
	if (nombre.length >= 50) {
		return "El nombre debe tener menos de 50 caracteres.";
	}
	return "";
}

function validarCiudad(ciudad) {
	if (ciudad.length === 0) {
		return "Debes seleccionar una ciudad";
	}
	return "";
}

function validarDescripcionRegalo(descripcionRegalo) {
	if (descripcionRegalo.length < 20) {
		return "La descripción tiene que tener al menos 20 caracteres";
	}
	if (descripcionRegalo.length >= 400) {
		return "La descripción tiene que tener menos de 400 caracteres";
	}
	return "";
}
