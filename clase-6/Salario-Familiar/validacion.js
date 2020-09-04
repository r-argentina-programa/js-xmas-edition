function validarSalarios(salariosIngresados) {

  const errores = {};

  for (let i = 0; i < salariosIngresados.length; i++) {
    
    if (salariosIngresados[i] <= 0 && errores.ingresoIncorrecto === undefined) {
      errores.ingresoIncorrecto = "El número ingresado debe ser mayor a cero";
    }else if (salariosIngresados[i] > 0){
      errores.ingresoCorrecto = "";
    }
  
    return errores;
    
  }

}
//Necesito guardar los mensajes para cada valor ingresado en alguna estructura de datos.
