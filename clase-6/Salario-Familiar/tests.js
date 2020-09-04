function probarValidarSalarios () {

    console.assert (
        validarSalarios ([0]).ingresoIncorrecto === "El número ingresado debe ser mayor a cero",
        "validarSalario no validó que el salario ingresado sea válido"
    );
}

probarValidarSalarios();