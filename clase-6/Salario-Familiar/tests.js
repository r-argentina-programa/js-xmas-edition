function probarValidarSalarios () {

    console.assert (
        validarSalarios ([-1]) === "El número ingresado debe ser mayor a cero",
        "validarSalario no válido que el salario ingresado sea válido"
    );
}

probarValidarSalarios();