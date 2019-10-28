console.assert(verificarInputMenosDe50Caracteres("1234567890-1234567890-1234567890-1234567890-1234567890") === false, 'la verificacion de la funcion con menos de 50 cantidad de caracteres no dio false');
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
