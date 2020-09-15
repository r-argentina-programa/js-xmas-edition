/*
TAREA:
Crear una interfaz que permita: 
-   agregar ó quitar (botones agregar y quitar) inputs + labels
    para completar el salario anual de cada integrante de la familia que trabaje.

-   Al hacer click en "calcular", mostrar en un elemento pre-existente 
    * el mayor salario anual, 
    * menor salario anual, 
    * salario anual promedio y 
    * salario mensual promedio.

Punto bonus: 
-   si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

let cantidadMiembros = 0;
obtenerNodos();

$botonAgregarMiembro.onclick = function () {
  agregarMiembro();
  cantidadMiembros += 1;
};

$botonCalcular.onclick = function () {
  event.preventDefault();

  const sueldos = document.querySelectorAll(".miembros");
  const salariosIngresados = [];

  

  obtenerSalarios(sueldos, salariosIngresados);
  const mensaje = validarSalarios(salariosIngresados);

  for (let i = 0; salariosIngresados.length; i++) {
    if (salariosIngresados[i] <= 0) {
      sueldos[i].classList.add("error");
    }
  }

  const errores = {
    mensajeError: mensaje,
  };

  mostrarResultados(sueldos);
};

$botonQuitarMiembro.onclick = function () {
  quitarMiembro();
};

$botonLimpiar.onclick = function () {
  resetear(cantidadMiembros);
};

function obtenerSalarios(sueldos, salariosIngresados) {
  for (let i = 0; i < sueldos.length; i++) {
    salariosIngresados.push(Number(sueldos[i].value));
  }
}

function agregarMiembro() {
  crearEtiqueta("label", "Ingrese su salario anual: ", "");
  crearEtiqueta("input", "", "number");
  mostrarBotonCalculo();
}

function crearEtiqueta(tag, texto, tipo) {
  const $div = document.createElement("div");
  const $contenedorMiembros = document.querySelector("#agrega-miembros");

  //Crea etiqueta y texto o tipo de la misma
  const $etiqueta = document.createElement(tag);

  //Crea el input para ingresar salario
  if (tipo === "number") {
    $etiqueta.type = "number";
    $etiqueta.className = "miembros";
    $etiqueta.placeholder = "Ejemplo $250000";
    $etiqueta.name = "miembro";
  } else {
    //Crea el label con lo que debe rellenar el usuario
    const $texto = document.createTextNode(texto);
    $etiqueta.appendChild($texto);
  }

  //Agrega la etiqueta nueva al nodoPadre
  $div.appendChild($etiqueta);
  $contenedorMiembros.appendChild($div);
}

function quitarMiembro() {
  borrarEtiqueta("label");
  borrarEtiqueta("input");
}

function borrarEtiqueta(tag) {
  const etiqueta = document.querySelector(tag);

  etiqueta.remove();
}

function mostrarResultados(sueldos) {
  document.querySelector("#calculos").className = "";

  mostrarSalario("mayor", mayorSalarioAnual(sueldos));
  mostrarSalario("menor", menorSalarioAnual(sueldos));
  mostrarSalario(
    "anual-promedio",
    salarioAnualPromedio(cantidadMiembros, sueldos)
  );
  mostrarSalario("mensual-promedio", salarioMensualPromedio(sueldos));
}

function ocultarResultados() {
  document.querySelector("#calculos").className = "oculto";
}

function resetear(valor) {
  for (let i = 0; i < valor; i++) {
    quitarMiembro();
  }
  ocultarResultados();
  ocultarBotonCalculo();
}

function mostrarSalario(tipo, valor) {
  document.querySelector(`#${tipo}-salario`).textContent = valor;
}

function mostrarSalarioPromedio(tipo1, tipo2, valor) {
  document.querySelector(`#${tipo1 - tipo2}-salario`).textContent = valor;
}

function mostrarBotonCalculo() {
  document.querySelector("#calcular").className = "";
}

function ocultarBotonCalculo() {
  document.querySelector("#calcular").className = "oculto";
}
