function probarValidarIngresoIntegrantes() {

    console.assert(
        validarIngresoIntegrantes (0) === "El número ingresado es incorrecto. No puede ser menor a cero.", 
            "ValidarIngresoIntegrantes no validó que el nuúmero ingresado sea correcto.",
    );

}

probarValidarIngresoIntegrantes();

//NO FUNCIONA