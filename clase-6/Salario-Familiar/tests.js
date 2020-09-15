function probarValidarSalarios () {

    console.assert (
        validarSalarios ([-2,-1,0]) === "El número ingresado debe ser mayor a cero",
        "validarSalario no validó que el salario ingresado sea válido"
    );

    console.assert (
        validarSalarios([1,2,3]) === "",
        ""
    );
}

probarValidarSalarios();