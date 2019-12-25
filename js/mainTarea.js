function validarNombre(nombre) {
	if (nombre.length >= 50) {
		return "Mas de 50 caracteres";
	}
	if (nombre.length === 0) {
		return "No escribiste nada";
	} else {
		return "";
	}
}

function validarCiudad(ciudad) {
	if (ciudad.length === 0) {
		return "No se eligio ninguna ciudad";
	} else {
		return "";
	}
}

function validarComportamiento(comportamiento) {
	if (comportamiento.length === 0) {
		return "No elegiste ningun comportamiento";
	} else {
		return "";
	}
}

function validarDescripcionRegalo(descripcion) {
	if (descripcion.length === 0) {
		return "Tenes que escribir algo en la descripcion";
	} else if (descripcion.length >= 100) {
		return "No se pueden usar mas de 100 caracteres";
	} else if (!/^[A-z0-9 ,\.]+$/.test(descripcion)) {
		return "Solo se pueden usar caracteres alfanumericos";
	} else {
		return "";
	}
}

function validarForm(event) {
	const nombre = document.formulario.nombre.value;
	const descripcionRegalo = document.formulario["descripcion-regalo"].value;
	const ciudad = document.formulario.ciudad.value;
	const errorNombre = validarNombre(nombre);
	const errorCiudad = validarCiudad(ciudad);
	const errorDescripcionRegalo = validarDescripcionRegalo(descripcionRegalo);

	const errores = {
		ciudad: errorCiudad,
		nombre: errorNombre,
		descripcionRegalo: errorDescripcionRegalo,
	};
	manejarErrores(errores);
	event.preventDefault();
}

function manejarErrores(errores) {
	const llaves = Object.keys(errores);

	llaves.forEach(function(llave) {
		const error = errores[llave];
		console.log(llave);
		if (error) {
			$form[llave].className = "error";
		} else {
			$form[llave].className = "";
		}
	});
}
// errorNombre = errores.nombre;
// errorCiudad = errores.ciudad;
// errorDescripcionRegalo = errores.descripcionRegalo;

// if (errorNombre) {
// 	$form.nombre.className = "error";
// } else {
// 	$form.nombre.className = "";
// }
// if (errorCiudad) {
// 	$form.ciudad.className = "error";
// } else {
// 	$form.ciudad.className = "";
// }
// if (errorDescripcionRegalo) {
// 	$form["descripcion-regalo"].className = "error";
// } else {
// 	$form["descripcion-regalo"].className = "";
// }

const $form = document.querySelector("#carta-a-santa");
$form.onsubmit = validarForm;
