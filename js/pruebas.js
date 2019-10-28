<<<<<<< HEAD
<<<<<<< HEAD
console.assert(verificarInputMenosDe50Caracteres("1234567890-1234567890-1234567890-1234567890-1234567890") === false, 'la verificacion de la funcion con menos de 50 cantidad de caracteres no dio false');
<<<<<<< HEAD

console.assert(verificarInputMenosDe100Caracteres("1234567890-1234567890-1234567890-1234567890-12345678901234567890-1234567890-1234567890-1234567890-1234567890") === false, 'la verificaciones del input con menos de 100 caracteres no dio false!')

console.assert(verificarInputContieneSoloLetrasYNumeros("aSDSA123!&*(@&*"), 'la verificacion de que el input contenga solo letras y numeros no dio false!')

console.assert(verificarInputNoVacio("") === false, 'la verificacion de input vacio no dio false')

console.assert(verificarInputContieneSoloLetras("!@#$!@!@#>><><asd314>"), "la verificacion de input conteniendo solo letras no dio false!")
console.assert(verificarInputContieneSoloLetras("sd314"), "la verificacion de input conteniendo solo letras no dio false!")

console.assert(verificarInputMenosDe100Caracteres("1234567890-1234567890-1234567890-1234567890-12345678901234567890-1234567890-1234567890-1234567890-1234567890") === false, 'la verificaciones del input con menos de 100 caracteres no dio false!')

console.assert(verificarInputContieneSoloLetrasYNumeros("aSDSA123!&*(@&*"), 'la verificacion de que el input contenga solo letras y numeros no dio false!')

console.assert(verificarInputNoVacio("") === false, 'la verificacion de input vacio no dio false')

console.assert(verificarInputContieneSoloLetras("!@#$!@!@#>><><asd314>"), "la verificacion de input conteniendo solo letras no dio false!")
console.assert(verificarInputContieneSoloLetras("sd314"), "la verificacion de input conteniendo solo letras no dio false!")

>>>>>>> parent of e5a7b0d... Revert "Tarea clase 7"
=======
function sumar(a, b) {
  return a + b;
}

console.assert(sumar(1, 2) === 3, 'la suma de 1 + 2 no dio 3');
>>>>>>> parent of dfe196b... crea los archivos necesarios para la tarea de la clase 7
=======
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
>>>>>>> parent of f663781... Revert "Tarea clase 7"
