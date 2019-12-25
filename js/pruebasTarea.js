function probarValidarNombre() {
	console.assert(
		validarNombre(
			"masde50caracteresmasde50caracteresmasde50caracteresmasde50caracteresmasde50caracteresmasde50caracteres"
		) === "Mas de 50 caracteres",
		"validarNombre deberia tirar error si hay mas de 50 caracteres, pero no lo hace"
	);
	console.assert(
		validarNombre("") === "No escribiste nada",
		"validarNombre deberia dar error si el input esta vacio."
	);
	console.assert(validarNombre("asd") === "", "Algo se rompio.");
}

function probarValidarCiudad() {
	console.assert(
		validarCiudad("") === "No se eligio ninguna ciudad",
		"Algo se rompio"
	);
}

function probarValidarComportamiento() {
	console.assert(
		validarComportamiento("") === "No elegiste ningun comportamiento",
		"Hay algo que no funciona, algo deberia ser seleccionado por default"
	);
	console.assert(
		validarComportamiento("asd") === "",
		"validarComportamiento no deberia admitir strings vacios"
	);
}

function probarValidarDescripcionRegalo() {
	console.assert(
		validarDescripcionRegalo("") ===
			"Tenes que escribir algo en la descripcion",
		"No se deberia aceptar una descripcion vacia"
	);
	console.assert(
		validarDescripcionRegalo(
			"qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq"
		) === "No se pueden usar mas de 100 caracteres",
		"La funcion no deberia permitir mas de 100 caracteres"
	);
}
probarValidarComportamiento();
probarValidarNombre();
probarValidarCiudad();
probarValidarDescripcionRegalo();
