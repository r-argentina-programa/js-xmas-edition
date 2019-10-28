<<<<<<< HEAD
function probarValidarNombre() {
  console.assert(
      validarNombre('') === 'Este campo debe tener al menos 1 caracter',
      'Validar nombre no validó que el nombre no sea vacío',
  );

  console.assert(
      validarNombre(
          '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
      'Este campo debe tener menos de 50 caracteres',
      'Validar nombre no validó que el nombre sea menor a 50 caracteres',
  );
}

probarValidarNombre();
=======
function sumar(a, b) {
  return a + b;
}

console.assert(sumar(1, 2) === 3, 'la suma de 1 + 2 no dio 3');
>>>>>>> parent of e6b7fbd... crea los archivos necesarios para la tarea de la clase 7
