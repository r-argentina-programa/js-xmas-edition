function validarSalario(sueldos) {
    
    let salarioIngresado = 0;

  sueldos.forEach(function (element) {
    
    salarioIngresado = Number(element.value);
    
    if (salarioIngresado < 0) {
      return "El número ingresado debe ser mayor a cero";
    }

    return "";
  });
}
