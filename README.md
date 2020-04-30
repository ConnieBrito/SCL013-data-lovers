# Data Lovers

## Índice

* [1. Resumen del proyecto](#1-resumen-del-proyecto)
* [2. Criterios del proyecto](#2-criterios-del-proyecto)
* [6. Parte adicional-opcional](#6-parte-adicional-opcional)
* [7. Consideraciones técnicas](#7-consideraciones-técnicas)
* [8. Pistas, tips y lecturas complementarias](#8-pistas-tips-y-lecturas-complementarias)
* [9. Checklist](#9-checklist)

***

## 1. Resumen del proyecto

En este proyecto **construimos una _página web_ para visualizar un
_conjunto de datos_** que se adecúa a lo que nuestros usuarios
necesitan.

En esta ocasión decidimos trabajar con: 

* [Pokémon]:
  En este set trabajamos con los 151 Pokémon de la región de Kanto, mostrando de la forma que analizamos mejor para nuestros usuarios del juego
  [Pokémon GO](http://pokemongolive.com).


## 2. Criterios del proyecto

### Definición del producto

Tomando en consideración los set presentados decidimos trabajar con la data de Pokémon Go,
nuestro proceso de diseño contempla la realización de una aplicación web donde el usuario pueda ingresar 
y realizar búsqueda directa de todos los pokémon o de los diferentes tipos y la correspodiente tarjeta con toda la información por pokémon.
Este producto ayuda a que nuestros usuarios puedan obtener la información necesaria para tomar mejores decisiones con respecto a escoger a sus Pokémon para la batalla, ya sea en Gimnasios o contra otros Entrenadores, y para Usuarios Novatos (aquellos que recién comienzan a jugar o se quieren interiorizar y conocer más de Pokémon) entregar una información clara sobre cada criatura de la Región de Kanto.
Dentro de las consideraciones realizamos un sketch de diseño visualizando a grandes raasgos lo que pretendíamos realizar.


### Historias de usuario

Historia 1:
**Usuario Juzera:** No es jugadora Pokémon Go (Novata)
**Necesita:** Conocer conceptos básicos (Pokémon, Pokédex, Tipo Pokémon)
**Para:** Poder entender de mejor manera la app web presentada
**Criterios de aceptación:** Agregar información sobre ¿Qué es un Pokémon?, ¿Qué es Pokédex? y ¿Qué es un tipo de Pokémon? para usuarios novatos con quienes se testeó el prototipo de baja fidelidad.
**Definición de Terminado:** Se agrega preguntas detalladas anteriormente, con breve y clara explicación para mejor entendimiento de usuarios novatos.

Historia 2:
**Usuario Ariana:** No es jugadora Pokémon Go (Novata)
**Necesita:** Visualizar un menú en el encabezado de la página.
**Para:** Poder moverse libremente dentro de la app web.
**Criterios de aceptación:** Agregar menú superior (heather) con información sobre las páginas y ubicación para facilitar el acceso.
**Definición de Terminado:** Se agrega menú en heather, incluye "Menú Novato" (preguntas) y "Menú Entrenador" (pokédex y tipos).

Historia 3:
**Usuario Sebastián:** Jugador Pokémon Go 
**Necesita:** Conocer debilidades y fortalezas, imagen de nostalgia (Pokébola 8bit, Pokémon para Game Boy)
**Para:** Obtener mayor información sobre sus Pokémon para la batalla en Gimnasios, contra otros Entrenadores e Incursiones.
**Criterios de aceptación:** Agregar información sobre Fortalezas (Debilidades se encontraban en sketch)
**Definición de Terminado:** Se agrega información detallada anteriormente, se incluyen pokébola 8bit como marco en esquinas de la página, se reordena imagen en ficha pokémon y se incluye Fortalezas, además se agrega cantidad de caramelos para evolucionar, información distribuida de forma más clara.


### Diseño de la Interfaz de Usuario

#### Prototipo de baja fidelidad

Dentro de los inicios de nuestro proyecto realizamos el diseño (sketch) del prototipo básico, el cual mostramos a continuación.

<img src="./../SCL013-data-lovers/sketch.jpeg">

Al momento de realizar iteraciones con posibles usuarios realizamos el prototipo de baja fidelidad en el programa InVision, con el cual realizamos testeo en usuarios quienes nos proporcionaron información para mejorar este diseño y del cual pudimos obtener nuestras primeras Historias de Usuario.

[Prototipo de Baja Fidelidad](https://www.loom.com/share/993af3c624d14d22a3b266d1fb6b85d5)

#### Prototipo de alta fidelidad

Al obtener los feedbacks necesarios nos propusimos realizar los cambios sugeridos para así lograr una mejor experiencia para nuestros usuarios, éste diseño se asemeja bastante a nuestro diseño real.

[Prototipo de Alta Fidelidad](https://www.loom.com/share/431f892a79a04b3a89417547e205f83e)

En este diseño tratamos de utilizar una paleta de colores simple y en relación con la temática, la cual mostramos a continuación.

<img src="https://github.com/ConnieBrito/SCL013-data-lovers/blob/master/src/images/ColoresPagPokemon-02.png">

#### Testeos de usabilidad

Durante el reto deberás hacer _tests_ de usabilidad con distintos usuarios, y
en base a los resultados, deberás iterar tus diseños. Cuéntanos
qué problemas de usabilidad detectaste a través de los _tests_ y cómo los
mejoraste en tu propuesta final.

### Implementación de la Interfaz de Usuario (HTML/CSS/JS)

Luego de diseñar tu interfaz de usuario deberás trabajar en su implementación.
**No** es necesario que construyas la interfaz exactamente como la diseñaste.
Tu tiempo de hacking es escaso, así que deberás priorizar

Como mínimo, tu implementación debe:

1. Mostrar la data en una interfaz: puede ser un card, una tabla, una lista,
   etc.
2. Permitir al usuario interactuar para obtener la infomación que necesita.
3. Ser _responsive_, es decir, debe visualizarse sin problemas desde distintos
   tamaños de pantallas: móviles, tablets y desktops.
4. Que la interfaz siga los fundamentos de _visual design_.

### Pruebas unitarias

El _boilerplate_ de este proyecto no incluye Pruebas Unitarias (_tests_), así es
que  tendrás que escribirlas tú para las funciones encargadas de  _procesar_,
_filtrar_ y _ordenar_ la data, así como _calcular_ estadísticas.

Tus _pruebas unitarias_ deben dar una cobertura del 70% de _statements_
(_sentencias_), _functions_ (_funciones_), _lines_ (_líneas_), y _branches_
(_ramas_) del archivo `src/data.js` que contenga tus funciones y está detallado
en la sección de [Consideraciones técnicas](#srcdatajs).

## 6. Parte adicional-opcional

Si **terminaste** con todo lo anterior y te queda tiempo, intenta explorar y
completar parte o todo de lo siguiente. Así podrás
profundizar y/o ejercitar más sobre los objetivos de aprendizaje del proyecto.

Features/características extra sugeridas:

* En lugar de consumir la data estática brindada en este repositorio, puedes
  consumir la data de forma dinámica, cargando un archivo JSON por medio de
  `fetch`. La carpeta `src/data` contiene una versión `.js` y una `.json` de
  de cada set datos.

* Agregarle a tu interfaz de usuario implementada visualizaciones gráficas. Para
  ello te recomendamos explorar librerías de gráficas como
  [Chart.js](https://www.chartjs.org/)
  o [Google Charts](https://developers.google.com/chart/).

* 100% Coverage de pruebas unitarias.

## 7. Consideraciones técnicas

La lógica del proyecto debe estar implementada completamente en JavaScript
(ES6), HTML y CSS. En este proyecto NO está permitido usar librerías o
frameworks, solo [vanilla JavaScript](https://medium.com/laboratoria-how-to/vanillajs-vs-jquery-31e623bbd46e),
con la excepción de librerías para hacer gráficas (charts); ver
[_Parte opcional_](#6-hacker-edition) más arriba.

No se debe utilizar la _pseudo-variable_ `this`.

El _boilerplate_ contiene una estructura de archivos como punto de partida así
como toda la configuración de dependencias:

```text
.
├── EXTRA.md
├── README.md
├── package.json
├── src
|  ├── data (según con qué data trabajes)
|  |  ├── lol
|  |  |  ├── lol.js
|  |  |  ├── lol.json
|  |  |  └── README.md
|  |  ├── pokemon
|  |  |  ├── pokemon.js
|  |  |  ├── pokemon.json
|  |  |  └── README.md
|  |  └── potter
|  |     ├── potter.js
|  |     └── potter.json
|  |     └── README.md
|  ├── data.js
|  ├── index.html
|  ├── main.js
|  └── style.css
└── test
   └── data.spec.js

directory: 6 file: 17
```

### `src/index.html`

Como en el proyecto anterior, existe un archivo `index.html`. Como ya sabes,
acá va la página que se mostrará al usuario. También nos sirve para indicar
qué scripts se usarán y unir todo lo que hemos hecho.

Encontrarás 1 etiqueta inicial, la cual si deseas puedes borrar y empezar de cero:

```
 <div id="root"></div>
```

### `src/main.js`

Acá escribirás todo el código que tenga que ver con la interacción del DOM
(seleccionar, actualizar y manipular elementos del DOM y eventos). Es decir,
en este archivo deberás invocar a tus funciones exportadas en el boilerplate,
según sea necesario para realizar operaciones como creación de nodos,
registro de manejadores de eventos (_event listeners_ o _event handlers_), ....

En este archivo encontrarás una serie de _sentencias_ `import`
_comentadas_. Para _cargar_ las diferentes fuentes de datos tendrás que
_descomentar_ estas _sentencias_. Cada una de estas sentencias importará un
objeto, el cual ya se encuentra exportado en el boilerplate. Este objeto
contiene la data correspondiente a esa fuente de datos.

Por ejemplo, si "descomentamos" la siguiente línea:

```js
// import data from './data/pokemon/pokemon.js';
```

La línea quedaría así:

```js
import data from './data/pokemon/pokemon.js';
```

Y ahora tendríamos la variable `data` disponible en el script `src/main.js`.

### `src/data.js`

El corazón de este proyecto es la manipulación de datos a través de arreglos
y objetos.

Te recomendamos que este archivo contenga toda la funcionalidad que corresponda
a obtener, procesar y manipular datos (tus funciones). Por ejemplo:

* `filterData(data, condition)`: esta función `filter` o filtrar recibiría la
  data, y nos retornaría aquellos datos que sí cumplan con la condición.

* `sortData(data, sortBy, sortOrder)`: esta función `sort` u ordenar
  recibe tres parámetros.
  El primer parámetro, `data`, nos entrega los datos.
  El segundo parámetro, `sortBy`, nos dice con respecto a cuál de los campos de
  la data se quiere ordenar.
  El tercer parámetro, `sortOrder`, indica si se quiere ordenar de manera
  ascendente o descendente.

* Y así sucesivamente, según tu proyecto en particular.

Estos nombres de funciones y de parámetros son solamente referenciales, lo que
decidas depende de tu propia implementación.

Estas funciones deben ser [_puras_](https://medium.com/laboratoria-developers/introducci%C3%B3n-a-la-programaci%C3%B3n-funcional-en-javascript-parte-2-funciones-puras-b99e08c2895d)
e independientes del DOM. Estas funciones serán después usadas desde el archivo
`src/main.js`, al cargar la página, y cada vez que el usuario interactúe (click,
filtrado, ordenado, ...).

### `src/data`

En esta carpeta están los datos de las diferentes fuentes. Encontrarás una
carpeta por cada fuente, y dentro de cada carpeta dos archivos: uno con la
extensión `.js` y otro `.json`. Ambos archivos contienen la misma data; la
diferencia es que el `.js` lo usaremos a través de una etiqueta `<script>`,
mientras que el `.json` está ahí para opcionalmente cargar la data de forma
asíncrona con [`fetch()`](https://developer.mozilla.org/es/docs/Web/API/Fetch_API)
(ver sección de [_Parte Opcional_](#6-parte-adicional-opcional)).

### `test/data.spec.js`

Tendrás también que completar las pruebas unitarias de las funciones
implementadas en el archivo `data.js`.

## 8. Pistas, tips y lecturas complementarias

### Primeros pasos

Antes de empezar a escribir código, debes definir qué deberá hacer el producto
en base al conocimiento que puedas obtener de tu usuario. Estas preguntas te
pueden ayudar:

* ¿Quiénes son los principales usuarios de producto?
* ¿Cuáles son los objetivos de estos usuarios en relación con el producto?
* ¿Cuáles son los datos más relevantes que quieren ver en la interfaz y por qué?
* ¿Cuándo utilizan o utilizarían el producto?
* Toda tu investigación previa debe tener como resultado todas las Historias
  de Usuario de tu proyecto.
* No hagas los prototipos de alta fidelidad de todas tus Historias. Comienza
  solamente por los que se necesiten para tu Sprint 1 (semana 1 de trabajo). Más
  pistas en la guía de organización para el proyecto.

Cuando ya estés lista para codear, te sugerimos empezar de esta manera:

1. Una de las integrantes del equipo debe realizar un :fork_and_knife:
   [fork](https://help.github.com/articles/fork-a-repo/) del repo de tu cohort,
   tus _coaches_ te compartirán un _link_ a un repo y te darán acceso de lectura
   en ese repo. La otra integrante del equipo deber hacer un fork **del
   repositorio de su compañera** y
   [configurar](https://gist.github.com/BCasal/026e4c7f5c71418485c1) un `remote`
   hacia el mismo.
2. :arrow_down: [Clona](https://help.github.com/articles/cloning-a-repository/)
   tu _fork_ a tu computadora (copia local).
3. 📦 Instala las dependencias del proyecto con el comando `npm install`. Esto
   asume que has instalado [Node.js](https://nodejs.org/) (que incluye [npm](https://docs.npmjs.com/)).
4. Si todo ha ido bien, deberías poder ejecutar las :traffic_light:
   pruebas unitarias (unit tests) con el comando `npm test`.
5. Para ver la interfaz de tu programa en el navegador, usa el comando
  `npm start` para arrancar el servidor web y dirígete a
  `http://localhost:5000` en tu navegador.
6. A codear se ha dicho! :rocket:

***

### Contenido de referencia

#### Diseño de experiencia de usuario (User Experience Design)

* [Investigación con usuarios / entrevistas](https://lms.laboratoria.la/cohorts/scl-2020-03-bc-core-scl013/courses/intro-ux/01-el-proceso-de-diseno/00-el-proceso-de-diseno)
* [Principios de diseño visual](https://lms.laboratoria.la/cohorts/scl-2020-03-bc-core-scl013/courses/diseno-visual)

#### Desarrollo Front-end

* [Unidad de testing en curso de JavaScript en LMS.](https://lms.laboratoria.la/cohorts/scl-2020-03-bc-core-scl013/courses/javascript/11-testing/00-opening)
* [Unidad de arreglos en curso de JavaScript en LMS.](https://lms.laboratoria.la/cohorts/scl-2020-03-bc-core-scl013/courses/javascript/04-arrays/01-arrays)
* [Unidad de objetos en curso de JavaScript en LMS.](https://lms.laboratoria.la/cohorts/scl-2020-03-bc-core-scl013/courses/javascript/05-objects/01-objects)
* [Unidad de funciones en curso de JavaScript en LMS.](https://lms.laboratoria.la/cohorts/scl-2020-03-bc-core-scl013/courses/javascript/03-functions/00-opening)
* [Unidad de DOM en curso de Browser JavaScript en LMS.](https://lms.laboratoria.la/cohorts/scl-2020-03-bc-core-scl013/courses/browser/02-dom/00-opening)
* [Array en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array)
* [Array.sort en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/sort)
* [Array.map en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/map)
* [Array.filter en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/filter)
* [Array.reduce en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/reduce)
* [Array.forEach en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/forEach)
* [Object.keys en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/keys)
* [Object.entries en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/entries)
* [Fetch API en MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
* [json.org](https://json.org/json-es.html)
* [expressions-vs-statements](https://2ality.com/2012/09/expressions-vs-statements.html)
* [expresión vs sentencia](https://openclassrooms.com/en/courses/4309531-descubre-las-funciones-en-javascript/5108986-diferencia-entre-expresion-y-sentencia)
* [datos atómicos vs datos estructurados](https://www.todojs.com/tipos-datos-javascript-es6/)
* [Modulos: Export](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/export)
* [Modulos: Import](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/import)

#### Herramientas

* [Git](https://git-scm.com/)
* [GitHub](https://github.com/)
* [GitHub Pages](https://pages.github.com/)
* [Node.js](https://nodejs.org/)
* [Jest](https://jestjs.io/)

#### Organización del Trabajo

* [Historias de Usuario](https://www.youtube.com/watch?v=ky6wFiF5vMk&t=344s).
  Ojo que Cris no diferencia _Definición de terminado_ de _Criterios de
  Aceptación_ y nosotros sí lo haremos. Más detalles en la guía.
* [Cómo dividir H.U.](https://www.youtube.com/watch?v=Ueq786iZ30I&t=341s)
* [Guía para Data Lovers](https://docs.google.com/presentation/d/e/2PACX-1vQhx9D36NjpH-Daea-ITPUDUzNL8ZiNAprq_7b5PSUrfutk45tEtaOLz2lmd8f54_5jX1hypDM8f8SM/pub?start=false&loop=false&delayms=60000)

***

## 9. Checklist

* [ ] Usa VanillaJS.
* [ ] No hace uso de `this`.
* [ ] Pasa linter (`npm run pretest`)
* [ ] Pasa tests (`npm test`)
* [ ] Pruebas unitarias cubren un mínimo del 70% de statements, functions y
  lines y branches.
* [ ] Incluye _Definición del producto_ clara e informativa en `README.md`.
* [ ] Incluye historias de usuario en `README.md`.
* [ ] Incluye _sketch_ de la solución (prototipo de baja fidelidad) en
  `README.md`.
* [ ] Incluye _Diseño de la Interfaz de Usuario_ (prototipo de alta fidelidad)
  en `README.md`.
* [ ] Incluye link a Zeplin en `README.md`.
* [ ] Incluye el listado de problemas que detectaste a través de tests de
  usabilidad en el `README.md`.
* [ ] UI: Muestra lista y/o tabla con datos y/o indicadores.
* [ ] UI: Permite ordenar data por uno o más campos (asc y desc).
* [ ] UI: Permite filtrar data en base a una condición.
* [ ] UI: Es _responsive_.
