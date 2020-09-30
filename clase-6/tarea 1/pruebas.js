function probarValidarIngresoIntegrantes() {

    console.assert(
        validarIngresoIntegrantes (0) === "El número ingresado es incorrecto. No puede ser menor a cero.", 
            "ValidarIngresoIntegrantes no validó que el nuúmero ingresado sea correcto.",
    );

}

function probarValidarIngresoEdades () {
    
    console.assert(
        validarIngresoEdades ([{value: 0}]) === "La edad ingresada no es correcta.",
        "ValidarIngresoEdades no validó que la edad sea correcta", 
    );

}

probarValidarIngresoIntegrantes();
probarValidarIngresoEdades ();

