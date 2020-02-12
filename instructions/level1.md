Nivel 1 - Formulario
====================


Como funciona un formulario web?
=========================


1. Un cliente visita una pagina web que contiene un formulario.
2. El navegador web muestra el formulario HTML.
3. El cliente completa el formulario y lo envia.
4. El navegador manda los datos del formulario enviado hacia el servidor web.
5. Un script de procesamiento de formularios ejecutandose en el servidor web procesa los datos del formulario.
   Los pasos del procesamiento pueden incluir:
      - realizar el envio del formulario por email, 
      - guardar el envio del formulario en una tabla o en un archivo de una base de datos.
6. Una pagina de respuesta es enviada al navegador

Un formulario web estandar tiene las siguientes partes:
1. El codigo HTML para el formulario (podes leer mas detalles en el archivo html-form-description.txt).
2. Validacion de las entradas ingresadas.
3. El script de procesamiento del formulario.



Validacion de las entradas
==========================


* Validacion del lado del Cliente:
La validacion de las entradas es esencial para cualquier formulario web, ya que ayuda al visitante del sitio web a enviar la entrada correcta. La validacion es usualmente escrita en el lenguaje utilizado por el lado del cliente - Javascript.
Validar las entradas del formulario con JavaScript es una tarea sencilla y puede ahorrar un monton de llamadas innecesarias al servidor, ya que todo el procesamiento es realizado por el navegador web. Puede prevenir dejar campos vacios, evitar ingresar de mas o de menos, o de usar caracteres invalidos, por ejemplo.

Para un acercamiento distinto a la validacion del lado del usuario, sin JavaScript, fijate en la Validacion de Formulario HTML5, la cual esta disponible en la mayoria de los navegadores modernos. Pero como on podemos darle estilos, usamos validacion js en este taller.

https://developer.mozilla.org/es/docs/Learn/HTML/Forms/Validacion_formulario_datos

* Validacion del lado del servidor.
Cuando la entrada del formulario es importante, siempre deberia ser verificada usando un script seguro del lado del servidor. De otro modo, un navegador con JavaScript deshabilitado, o un hacker tratando de comprometer la seguridad de tu sitio, facilmente puede enviar datos invalidos.



Para validar nuestro formulario, tenemos que hacer lo siguiente:
1. Obtener valores del formulario
2. Validacion general:
    - no vacio
    - extension minima 2
    - extension maxima 250
    - solo letras
    - solo numeros
    - letras y numeros
3. Validacion individual:
    - para el nombre
    - lista - ciudad
    - descripcion
    - tipo de archivo
    - tamanio de archivo
4. Validar el formulario completo cuando lo enviamos
5. Limpiar el codigo
6. CSS:
    - cambiar el campo erroneo - rojo
    - mensajes de alerta

Estas serian todas las validaciones de nuestro formulario


1.Obtener valores del formulario
==========================


   Primero que nada, necesitamos acceder a nuestro HTML, para ello usaremos `document`.
   Si no sabes como funciona DOM, podes leer sobre ello en [here](https://developer.mozilla.org/es/docs/Referencia_DOM_de_Gecko/Introducción), y tambien la vimos en la parte 3 de nuestra `Introduccion a Javascript`[workshop](https://github.com/r-argentina-programa/introduccion-a-js).

   Obtengamos un valor para ver como funciona, y para ello debemos revisar el archivo index.html - para ver como vas a conseguir un elemento en base a saber su clase:
   `const $nombre = document.cartaASanta.nombre.value;`

   Para hacer: ahora es tu turno de conseguir otros valores. Crea variables llamadas `ciudad`, `comportamiento`, `descripcion`, que guarden el valor correspondiente del formulario
   
   
2.Validar un valor para que sea correcto
================================


  Sigamos con nuestro ejemplo `nombre` y validemoslo.
  Primero que todo, validemos que nuestro valor `nombre` no esta vacio:
  
  ```
  function nombreErrorValidacion (valor) {
    if(valor === '') {
      return 'El nombre no puede estar vacio';
    }
    return '';
  }
  ```

  Para hacer: agrega mas validaciones dentro de la funcion `nombreErrorValidacion`:
  - Si `nombre` tiene menos de dos caracteres, que imprima un error: 'Este campo debe ser mayor que un caracter'
  - Si `nombre` tiene mas de 250 caracteres, que imprima un error: 'Este campo no puede ser mas largo que 250 caracteres'.
  


  Ahora es momento de realizar una validacion interesante mas. Queremos que nuestro nombre solo contenga letras. Pero, como podemos revisar eso? Una herramienta util que podemos usar es Expresiones Regulares (Regular Expressions - RegEx/RegExp). Un objeto que describe un patron de caracteres. Las expresiones regulares son usadas para busqueda de coincidencias como tambien funciones del tipo "buscar y reemplazar" en texto. Asi, podemos revisar si nuestro texto (o parte del texto) contiene solo letras o solo numeros, o si tenemos un conjunto particular de letras, etc. RegEx puede volverse muy complejo, pero hoy trabajaremos con una secuencia sencilla
  
  P.S.: revisa regular-expressions.txt para mas informacion sobre RegExp y links a un resumen y juegos interesantes(!!!) donde puedes practicar tus nuevas habilidades. Muy recomendado!
  
  Los objetos Expresiones Regulares pueden tener un numero de metodos. El mas simple es `test`. Si lo pasas como un string, devolvera un valor booleano (true o false) respondiendo si el string contiene una coincidencia con la secuencia introducida en la expresion.

  ```
  console.log(/abc/.test("abcde"));
    // → true
  console.log(/abc/.test("abxde"));
    // → false
  ```

  Para validar si nuestro nombre tiene solo letras podemos probar nuestro valor de la siguiente manera:

  `const soloLetras = /^[A-z]+$/.test(valor);`

  Esta prueba regresa un valor booleano, el cual sera `true` si nuestro `valor` coincide con nuestra secuencia.

  Para hacer: Agrega una validacion adicional a la funcion `nombreErrorValidacion`, la cual debe validar que solo tengamos letras. Si no, debe regresar un error: 'Este campo solo puede contener letras'.
  

3.Enviar el formulario
======================
  
  
  Ahora que hemos completado la validacion en el campo nombre, revisemos como funciona cuando enviamos el formulario. Si vas al archivo `index.html` y revisas el formulario, en el fondo, donde tenemos el boton de enviar `Enviar tu carta a Santa`, podes ver que en `onclick` ,llamamos una funcion `validarFormulario`.
  
  Para hacer:
  1. Creamos una funcion llamada `validarFormulario`, que no toma ningun argumento.
  2. Introduce la variable `nombre` con su valor a la funcion.
  3. Llama a la funcion `nombreErrorValidacion` dentro de nuestra funcion `validarFormulario` e incluye `nombre` como argumento.
  4. console.log a `nombreErrorValidacion(nombre)` para revisar si funciona

  Que sucede ahora? Cuando hacemos click en el boton enviar, obtenemos los valores del campo nombre (si hay alguno). Luego, llamamos a la funcion `nombreErrorValidacion`, la cual validara si nuestro campo nombre esta vacio, o si es de una longitud apropiada, o si nuestro nombre consiste de solo letras.
  
  Si lo intentas ahora no sucedera nada. La razon de ello es el comportamiento predeterminado del boton enviar.
  
  
4.Eventos. Boton enviar
=======================


  El comportamiento estandar del formulario al presionar enviar (es decir, todas las entras son enviadas al servidor y la pagina es recargada) era razonable un tiempo atras cuando no teniamos el concepto del concepto de una aplicacion de una sola pagina. Hoy en dia, creamos aplicaciones de una sola pagina con javascript, y queremos prevenir ese comportamiento por defecto.
  

  Para hacer:
  1. En `index.html` agrega `evento` como argumento para la funcion `validarFormulario`.
  2. En tu archivo javascript agrega `evento` como un argumento a la funcion `validarFormulario`.
  3. Dentro de la llamada a la funcion `validarFormulario` incluye el siguiente llamado: `evento.preventDefault();`


  Ahora si intentas enviar el formulario con el campo nombre vacio deberia mostrarte tus errores.
  

5.Exito o error
===============


  Creemos un handler de errores que servira para manejar nuestros errores y si tenemos errores, nos regresara error, o en caso contrario, exito.
  
  TODO:
  1. Crea una funcion `manejarError` que toma un argumento `errores`.
  2. Crea una revision dentro de esta funcion: si no tenemos errores, entonces console.log 'Exito', en caso contrario, console.log los errores.
  3. Reemplaza console.log `nombreErrorValidacion(nombre)` en la funcion `validarFormulario` con una llamada a la funcion `manejarError`, y agrega la lista de errores. Para ello tenemos que:
    - Crear una variable `errores` dentro de la funcion `validarFormulario` y hacerla igual a `nombreErrorValidacion(nombre)`,
    - Pasar como argumento la variable `errores` a la funcion `manejarError`.
  
  Corre el formulario de nuevo y si el campo nombre es llenado correctamente, deberia imprimir 'exito'. De lo contrario deberia imprimir uno de los errores que tenemos.


6.Do validation for other fields
================================


  Now, when you know all steps on how to validate 1 field do same for 
  other fields.
  
  TODO:
  1. Get the value from the field `city` and validate that it is not empty.
  2. Get the value from the field `description` and validate that it is not 
  empty, has more than 2 characters, less than 250 characters and consists 
  only of letters and numbers.

  If you remember from before, you used the syntax:

  `const onlyLetters = /^[A-z]+$/.test(value);`

  to indicate that you only want letters. In order to define only numbers,
  you can add `0-9` inside the brackets, like `[A-z0-9]`. This allows any
  letter, and any number. You might want to allow spaces as well!
  
  3. Now in `validarFormulario` we need to get errores from the `city` and `description` 
  fields. For that we have to change our variable `error`. It should be 
  an object now. First of all, turn `nombreErrorValidacion(nombre)` into a key `nombre`
  and a value `nombreErrorValidacion(nombre)`:
  
  ```
  const errores = {
    nombre: nombreErrorValidacion
(nombre)
  };
  ```

  4. Now do the same for `city` and `description`.

  When you are defining multiple keys for an object, you need to add a comma
  to the previous value. For example:

  ```
  const errors = {
    name: nameValidationError(name),
    city: cityValidationError(city)
  };
  ```
   
  Now we are passing all of our errors into the `handleErrors` function, but 
  we need to check if we have any errors differently. We need to iterate 
  through each key-value pair.
  
  5. Create variable `errorsCount` inside of `handleErrors` function.
  
  6. Now let's check if we have any errors for the `name` field and change
  our `errorsCount` if we have any errors, we can log them out like so:
  
  ```
  if (errors.name) {
    console.log(errors.name);
    errorsCount = errorsCount + 1;
  }
  ```
  
  If we do not have any errors and our name field validation returns an empty 
  string, our `if` statement it will be `false` and we will not increment `errorsCount`.
  If we do have an error we will get in the if statement and count the error.
  
  7. Inside of our function `handleErrors` we do not need an if/else check 
  now to display Success or Errors. We can do `if` checking is our 
  `errorsCount < 1` console `Success`. As our error will be consoled by check 
  of errors itself on step 6.
  
  Now if you have any mistakes in name field the validation should work properly.
   
  8. Do same checks for city and description fields.
   
  Now three of your fields should be validating in a properly.
  
  
7.Object, forEach, callback
===========================


  As you can see now we have a lot of repetitions in `handleErrors`. Since the 
  code is all working, it is time to do some cleaning and refactoring of the code.
  You can read more about `forEach` method [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach).
  
  TODO:
  1. We can iterate through errors by iterating through the through the keys with 
  the forEach function:
  
  ```
  Object.keys(errors)
    .forEach(function (key) {
       console.log(errors[key]); 
       errorsCount = errorsCount + errors[key].length;
    });
  ```
  
  Read about the Objects at the bottom of the page in NOTES.
  Replace all our `if` checks for errors inside of the `handleError` function 
  with that code.
  
  Now when you submit form it all should work the same. We do not have that many 
  repetitions in our code anymore.


8.A bit of errors interactivity
================================


  Let's add some interactivity to our user interface, because at the moment 
  only we know about the errors that we can see in the console.
  
  Let's make fields that have red errors. For that we have the `.error` class
  that we've created for you in our `index.css` file. It makes the border of the
  field that has this class red.
   
  TODO:
  1. We will need to use `document.querySelector` to target the element on
  the page, which we can do inside our `forEach` loop. So we are targeting
  the whole form and then fields with specific names (that our key will represent 
  `[name="${key}"]`). This will look like:

  ```
  document.querySelector(`[name="${key}"]`)
  ```
  
  2. After we get our element on this element we need to add class `.error`.
  For that purpose we will use `.classList.add('error')`.
  
  3. Now you'll see that we get red fields every time, because every 
  time we iterate through all of the fields it will add the class `error`. To avoid it we need
  to check if have any errors, then get elements from the page and
  add the class. Now when we have an error, the field that has it should turn red.
  
  It is also not cool that even if you put the wrong input in your field you still 
  need to delete it by yourself and type in something else. So let's automatically clear the 
  field with an error.

  4. Right after we add the class, get the same element from the page and set its value 
  to an empty string.
  
  Now when we have an error, the field that has it should turn red and empty. The
  correct fields will maintain its content.
  
  As a final step for errors, let's display them to the user.
  
  5. Let's add our errors inside of the `errorsBlock` container that we have in
  `index.html` page. You will see that we have separate
  paragraphs for each error with the same class as our key. So you can target the
  `errorsBlock` and class with key value. You can add errors to them using the
  `innerHTML` method.
  
  When you submit the form, you will get errors for the fields that have mistakes in them.
  Feel free to polish the CSS in any way you like.
  
  6. We can remove `console.log(errors[key]);` from the `handleErrors` function now,
  as we have our errors displayed on the screen.
  
  P.S.: It is always good to clean up all instances of `console.log` from your code 
  when you finish.


9.A bit of on Success interactivity
===================================


  Time to play around with what will happen on a successful . 
  We created for you a block with class name `on-success`.
  
  1. Create a variable `onSuccessWindow` in your `handleErrors` function
  and make it equal to the element from the page with the class `on-success`.
  
  2. When we have no errors and we're printing out `Success`, remove the class 
  `hiddenWindow` from `onSuccessWindow` using the `classList` method. As we added
  classes before to errors fields.

   
  Now you will see a pop up window if all fields are filled in correctly. 
  If you go to `index.html` and look at `on-success` element, you'll
  see that we have 2 buttons there with `onClick` event handlers and they both
  have different functions. Let's create them so we can get on the next level!
  
  TODO:
  1. Create the function `hideOnSuccessWindow` which will get our `on-success`
  element off the page and add the class `hiddenWindow` to it.
  
  2. Create the function `redirectToWishlist` which will redirect us to 
  `wish-list.html`. We can do it with help of `window.location.href`.
   
   
  Everything works well now, so there's just 1 more tiny thing. Did you notice that when 
  we choose to stay on the page and write another letter, our form stays filled 
  in? We can easily fix that by resetting the form when we have no errors.
  
  TODO:
  1. Get our form element from the page and use the `reset` method on it.
  2. Last step - you can delete `console.log('Success');` now.



//////////////////////////////////////////////////////////////////////////////////

  Congratulations! You have finished Part 1!
  
  Stand up, stretch your legs, celebrate your achievement.
  
  The next step will be following the instructions in level2.md.

//////////////////////////////////////////////////////////////////////////////////


NOTES
=====


  **Objects**

  Objects can be compared to real world objects (like a car, a spoon, a house, 
  etc.. ) which have properties and a particular type. In Javascript (and 
  other programming languages), an object is one of the complex data types, 
  which have a list of keys and values:
  
  ```
    const car = {
        Model : 'Honda City',
        color: 'Red',
        owner: 'X1',
        yearOfManufacture: 2017
    };
  ```
  
  In the above example each item in the list is a property (e.g: Model, color, 
  owner, year) of the object 'car'. The object can also have functions called as methods.

  The property name/key can be a string or a number.

  ```
    const age = {
        10: 'kids',
        30: 'smart and wise',
        100: 'very very experienced'
    };
  ```
  
  We use objects mostly to store data and for creating custom methods and 
  functions. There are 2 ways we can create objects:
   1. Object Literals
   2. Object Constructors

  Via Object Literals:

  We just declare an object name and within {} define all the properties 
  with its values:
  
  ```
    const myNewEmptyObject = {}

    const book = {
        name: 'Harry Potter Book1',
        author: 'J.K. Rowling',
        blurp: 'something magical... '
    };

    sayHello: function() {
        console.log('Hello There');
    };
  ```

  Via Object Constructors:
  
  Constructors are functions that are used for initialising new objects using 
  the `new()` keyword. We can set the properties via the `object.propertyname` notation:
  
  ```
    const book  = new Object();
    book.name = 'Harry Potter Book1';
    book.author = 'J.K.Rowling';
  ```
  
  Accessing properties of an object:
   - Dot notation
   - Bracket notation
   
  ```
    const book = {
        name: 'Harry Potter Book1',
        author: 'J.K. Rowling',
        blurp: 'something magical... '
    };
  ```
  
  Dot notation is the most common way we access the objects. Most of the 
  examples above use the dot notation. It follows the object-name.key-name syntax:
  
  ```
    console.log(book.name);
    console.log(book.author);
  ```
  
  Bracket notation follows the object-name[key-name] format:
  
  ```
    console.log(book['name']);
    console.log(book['author']);
    console.log(age[10]);
  ```
  
  Note: the property which is a number must use the bracket notation only.


  You can delete the properties of an object using the `delete` keyword:
  
  `delete book.blurp`
