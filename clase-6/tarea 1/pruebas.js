function probarValidarIngresoIntegrantes() {

    console.assert(
        validarIngresoIntegrantes (String(-1) ===  
            "El número ingresado es incorrecto. No puede ser menor a cero."),
    );

}

probarValidarIngresoIntegrantes();

//NO FUNCIONA