function validarSalarios(sueldos) {
  

  for (let i = 0; i < sueldos.length; i++) {
    
    if (/[0-9]$/(sueldos[i].value).test) {
      salariosIngresados.push("El número ingresado debe ser mayor a cero");
    } else {
      salariosIngresados.push("");
    }

  }
  
  return salariosIngresados;
}
