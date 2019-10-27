function probarValidarNombre() {
	console.assert(
		validarNombre("") === "El nombre debe tener al menos un caracter.",
		"Validar nombre no validó que el nombre no sea vacío"
	);

	console.assert(
		validarNombre("111111111111111111111111111111111111111111111111111111111111111111111111111111111111111") ===
			"El nombre debe tener menos de 50 caracteres.",
		"Validar nombre no validó que el nombre sea menor a 50 caracteres"
	);
}

function probarValidarCiudad() {
	console.assert(
		validarCiudad("") === "Debes seleccionar una ciudad",
		"Validar nombre no validó que la ciudad no sea vacía"
	);
	console.assert(validarCiudad("Corrientes") === "", "Validar nombre no validó que la ciudad no sea vacía");
}

function probarValidarDescripcionRegalo() {
	console.assert(
		validarDescripcionRegalo("") === "La descripción tiene que tener al menos 20 caracteres",
		"Validar descripción regalo no validó que la descripción no esté vacía"
	);

	console.assert(
		validarDescripcionRegalo("lorem ipsum dolor s") === "La descripción tiene que tener al menos 20 caracteres",
		"Validar descripción regalo no validó que la descripción tenga más de 20 caracteres"
	);

	console.assert(
		validarDescripcionRegalo(
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo ipsum aut praesentium quaerat. Odit qui porro magnam dolores quasi, saepe minima nemo praesentium aut ad eaque delectus atque ducimus perspiciatis iure inventore modi eos dignissimos numquam sit eius. Culpa suscipit ex corrupti possimus iure dolor maxime nulla quaerat beatae aspernatur! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo ipsum aut praesentium quaerat."
		) === "La descripción tiene que tener menos de 400 caracteres",
		"Validar descripción regalo no validó que la descripción tenga menos de 400 caracteres"
	);
}

probarValidarNombre();
probarValidarCiudad();
probarValidarDescripcionRegalo();
