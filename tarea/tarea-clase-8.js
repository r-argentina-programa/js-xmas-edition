/*# Tarea clase 8

A las 2 tareas de la clase 6, ponerles las validaciones que consideren
necesarias.

TIP: Las edades no pueden tener decimales.
*/


function validarEdadesIntegrantes(edadIntegrantes) {
    for (let i = 0; i < edadIntegrantes.length; i++) {
      if (edadIntegrantes[i].value <= 0) {
        return "Las edades deben ser valores positivos";
      }
    }
    return "";
  }
  
  function validarPrimerForm(event) {
    const cantidadIntegrantes = $form["family-members"].value;
  
    const errorCantidadIntegrantes = validarCantidadIntegrantes(
      cantidadIntegrantes
    );
  
    const errores = {
      "family-members": errorCantidadIntegrantes,
    };
    manejarErrores(errores);
  }
  
  function validarSegundoForm() {
    const edades = document.querySelectorAll(".member");
    const errorEdadesIntegrantes = validarEdadesIntegrantes(edades);
  
    const errores = {
      age: errorEdadesIntegrantes,
    };
  
    const exito = manejarErrores(errores) === 0;
  
    if (exito) {
      showResults();
    }
  }
  
  function manejarErrores(errores) {
    let cantidadErrores = 0;
    const $errores = document.querySelector("#errores");
    const keys = Object.keys(errores);
    keys.forEach(function (key) {
      const error = errores[key];
      if (key === "age" && error !== "") {
        const nodeList = $form[key];
  
        for (let i = 0; i < nodeList.length; i++) {
          nodeList[i].classList.add("error");
        }
        crearError(error);
        return cantidadErrores++;
      } else if (error) {
        console.log(error);
        $form[key].className = "error";
        crearError(error);
        cantidadErrores++;
      } else {
        $form[key].className = ''
        const nodeList = $form[key];
        for (let i = 0; i < nodeList.length; i++) {
          nodeList[i].classList.remove('error')
        }
        $errores.className = "oculto";
      }
    });
  
    return cantidadErrores;
  }
  
  function crearError(error) {
    resetErrores();
    const $errores = document.querySelector("#errores");
    const $ul = document.querySelector(".ulErrores");
    const $newLi = document.createElement("li");
    $newLi.className = "listErrores";
    $newLi.innerText = error;
    $ul.appendChild($newLi);
    $errores.className = "";
  }
  
  function resetErrores() {
    const $listErrores = document.querySelectorAll(".listErrores");
    for (let i = 0; i < $listErrores.length; i++) {
      $listErrores[i].remove();
    }
  }
