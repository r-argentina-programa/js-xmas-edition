# Nivel 3. Aleatorizar función.

Para obtener un número aleatorio dentro de un rango específico

1. Función aleatoria para usar en los buenos/malos/traviesos
2. Función aleatoria para usar en las llaves de usuarios (regalos)
3. Mostrar la imagen (cuando haya tiempo)

Tareas Adicionales

---

1. Trabajando con imágenes:
    - Cargar imagen
    - Validación de imagen (tamaño/tipo/altura/ancho)
    - Guardar a almacenamiento local
    - Obtener desde almacenamiento local
2. Llamadas AJAX (Obtener desde Flickr)

Nivel 1 obtiene la información del usuario.
Nivel 2 muestra parte de esa información al usuario en forma de lista.
Ahora vayamos a la parte divertida del nivel 3.

# Math.random

El objetivo está basado en los inputs del usuario

-   Determinar si el usuario se portó Muy Bien, Bien, o fue Travieso
-   Identificar el regalo que la persona pidió
-   Enviar el regalo al usuario (Como una imagen, no el real!!!)

Ah, y ahora no estamos portándonos como Papa Noel sino como unos diablillos...
Nos vamos a poner un poco traviesos y mezclar un poco los regalos para que Papa Noel se rinda.
Cómo mezclamos las cosas?... Alterando los inputs que mostramos en `result.html`

Primero vamos a crear una función generadora de números aleatorios, que toma como
límite el input del usuario y devuelve cualquier número aleatorio desde 0 al límite.

Para hacer eso, debemos usar la función incorporada en JavaScript llamada "Math" que,
como el nombre indica, tiene propiedades y métodos para funciones y constantes matemáticas
(Por ejemplo: `Math.PI` (numero Pi), `Math.SQRT` (Raiz Cuadrada), etc). Hay muchas funciones
incorporadas como ésta disponibles en JavaScript, como Date (Fechas), String, Array, etc.

Para más funciones/constantes disponibles de Math ver:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
Versión en español:
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Math

TAREA: Para la función generadora de números aleatorios, usemos la siguiente fórmula:
`Math.floor(Math.random() * limit) +1;`

Ahora obtengamos un nivel aleatorio de ocmportamiento para el usuario - los tres tipos
de comportamiento son Muy Bueno, Bueno y Travieso.

TAREA: Crear un objeto con esos 3 comportamientos. (Recordá Objetos del nivel 1 y 2!!!).
Para facilidad de acceso, usá como llave (key) de los objetos los números:

```
  const ListaDeComportamientos = {
      1: "Muy Bueno",
      2: "Bueno",
      3: "Travieso"
  }
```

TAREA: El próximo paso es crear una función llamada `obtenerComportamientoAleatorio()`.
La función debería hacer lo siguiente:

1. Obtener un número aleatorio de 0 a 3 (como tenemos 3 tipos de comportamiento,
   definimos el límite a 3) al llamar a la función `obtenerComportamientoAleatorio()`.
2. Usar éste número aleatorio como llave(key), obtener el comportamiento de la lista
   de comportamientos (por ej: `comportamientoAleatorio = ListaComportamientos[numeroAleatorio]`
3. Mostrar el Comportamiento en el DOM, usando el query selector para la clase `.actitud`.

Luego de crear la función, vamos a verificar si funciona correctamente llamando a la función en
la sección `<body>` de `resultado.html`usando el evento `onLoad`.

Esaa! la implementación es capaz de modificar el comportamiento del usuario cáda vez que el
usuario recargue la página `resultado.html`!!!

Ahora que ya hicimos la parte de comportamiento, vamos a meternos con los regalos...

Vamos a usar la descripción de la lista de regalos en el almacenamiento local (Espero que no
te hayas olvidado del almacenamiento local del nivel 2 !!) y usar pasos similares a los de
arriba para obtener un regalo aleatorio.

TAREA: Vamos a llamar la función como `obtenerRegaloAleatorio()` y va a hacer lo siguiente:

1. Obtener un número aleatorio usando la función `obtenerNumeroAleatorio()`. Tener en cuenta
   que en éste caso el límite debería ser la cantidad de regalos en el almacenamiento local, 
   podemos usar la cuenta de `indiceAlmacenamientoLocal`.
   PD: Como incrementamos en `indiceAlmacenamientoLocal`luego de agregar un nuevo regalo, el valor
   del índice debería ser 1 extra, asi que necesitamos determinar el límite como `indiceAlmacenamientoLocal - 1`
2. Éste número aleatorio puede ser utilizado para obtener la descripción del regalo en esa posición (usá
   como llave(key) `usuario + "randomNo"`) en el almacenamiento local.
3. Mostrar el nombre `regalo.descripcion` en el DOM usando el query selector `.papa-noel-texto-regalo`.

TAREA: Vamos a revisar si ésto funciona correctamente llamando a la función en la sección `<body>` 
de `resultado.html` usando el evento `onLoad`.

Sólamente mostrar el comportamiento y la descripción del regalo es aburrido, asique vamos a
jugar con algunas imágenes.

Tenemos algunas imágenes de regalos en la carpeta img/regalos. Vamos a mostrar aleatoriamente
algunas de esas en `resultados.html`.

TAREA: Vamos a crear un objeto llamado `listaUrlImagen` que va a usar como llave(key) números y
como valores la url de las imágenes:

```
    const listaUrlImagen = {
        1: "img/regalos/regaloDorado.jpg",
        2: "img/regalos/regaloGrupal.jpg",
        3: "img/regalos/regaloRojo.jpg"
    }

```

Nuevamente estamos utilizando números como llaves(keys) para que sea más fácil usar el generador
`numeroAleatorio` para obtener éstas imágenes.

TAREA: Luego de eso, vamos a crear una función llamada `obtenerImagenRegalo()`. Debería:
1.  Obtener un número aleatorio (dependiendo de la cantidad de imágenes en la carpeta, por ahora
    es 3). Si agregas más imágenes, podés incrementar el límite proporcionalmente.
2.  Obtener la URL de la imagen usando el número aleatorio de `listaUrlImagen`, por ejemplo:
    `listaUrlImagen[numeroAleatorio]`.
3.  Setear la URL como la fuente del elemento DOM `.regalo-papa-noel` en `resultado.html`

```
    function obtenerImagenRegalo() {
        const elemento = document.querySelector(".regalo-papa-noel");
        const randomNo = obtenerNumeroAleatorio(3);
        const urlImagenRegalo = listaUrlImagen[randomNo];
        elemento.src = urlImagenRegalo;
    }
```

Podés verificar la función, llamándola en el evento `onLoad()`en la sección `<body>`.

Para la parte final, tenemos 3 funciones, pero llamamos a cada una de forma individual en el DOM
usando el evento `onLoad()`.

Estaría muy bueno si pudiéramos llamar a las 3 funciones al cuando la página cargara. ¿Cómo podríamos
lograrlo?

Una manera es llamar las 3 funciones dentro de otra función, digamos `rellenarContenido()` y luego
simplemente llamar al método `rellenarContenido()` en el evento `onLoad()`.

Dale...Probalo...
Si todos los elementos del DOM se cargaron correctamente, entonces todo funciona como corresponde!

/////////////////////////////////////////////////////////////////////////////////

Felicitaciones! Terminaste el nivel Intermedio !

Andá a festejar tu logro !!

Podés probar los pasos extra si querés probar más cosas!

/////////////////////////////////////////////////////////////////////////////////
