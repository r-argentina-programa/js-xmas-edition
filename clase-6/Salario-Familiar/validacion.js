function validarSalarios(salariosIngresados) {

  let i = 0;

  while (i < salariosIngresados.length) {
    if (salariosIngresados[i] <= 0) {
      return "El número ingresado debe ser mayor a cero";
    }
    i++;
  }

  return "";
}
