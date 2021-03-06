# Data Lovers

## Índice

* [1. Resumen del proyecto](#1-resumen-del-proyecto)
* [2. Criterios del proyecto](#2-criterios-del-proyecto)
* [3. Definición de Usuario](#3-definicion-de-usuario)

***

<img src="https://github.com/ConnieBrito/SCL013-data-lovers/blob/master/src/images/pogo-8bit.jpg" width= 1024px height= 512px>

## 1. Resumen del proyecto


En este proyecto **construimos una _página web_ para visualizar un
_conjunto de datos_** que se adecúa a lo que nuestros usuarios
necesitan.

En esta ocasión decidimos trabajar con: 

* [Pokémon]:
  En este set trabajamos con los 151 Pokémon de la región de Kanto, mostrando de la forma que analizamos mejor para nuestros usuarios del juego.
  [Pokémon GO](http://pokemongolive.com).

  Nota: Debido a que la data se encuentra obtenida de la Primera Generación de Pokémon de la Región de Kanto,
  en los filtros de Tipo y Debilidades habrá algunos cambios.
  Dentro del filtro "Tipo" en las selecciones de "Acero" y "Hada" no aarecerá información porque estos tipos aparecieron recién con la Generación posterior.  Asimismo, en el filtro "Debilidades" omitimos la opción "Normal" ya que este tipo no representa ningún daño a los otros tipos de Pokémon.

### Demo del Proyecto

  Invitamos a nuestros usuarios a ingresar al siguiente link que los llevará a disfrutar la experiencia de "PokéLovers"

  [PokéLovers](https://conniebrito.github.io/SCL013-data-lovers/src/index.html) (Link GH-Pages)

### Test unitarios

  AL realizar los test de nuestras funciones obtuvimos desde un 75% de aprobación

  <img src="https://github.com/ConnieBrito/SCL013-data-lovers/blob/master/src/images/testUnitarioP2v2.JPG" width= 500px height= 300px>

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

**Para:** Poder entender de mejor manera la app web presentada.

**Criterios de aceptación:** 

[X] Incluir en prototipo de Alta Fidelidad.

[X] Diseño de página (HTML, JS, CSS)

[X] Incuir secciones de información "Novato"

[X] Agregar información ¿Qué es un Pokémon?

[X] Agregar información ¿Qué es Pokédex? 

[X] Agregar información ¿Qué es un tipo de Pokémon?

[X] Subir cambios  Repositorio Git Hub.


**Definición de Terminado:** Se cumple con agregar información requerida en orden a lo propuesto en diseño de alta fidelidad, con breve y clara explicación para mejor entendimiento de usuarios novatos.


Historia 2:

**Usuario Ariana:** No es jugadora Pokémon Go (Novata)

**Necesita:** Visualizar un menú en el encabezado de la página.

**Para:** Poder moverse libremente dentro de la app web.

**Criterios de aceptación:** 

[X] Incluir en prototipo de Alta Fidelidad.

[X] Diseño de página (HTML, JS, CSS)

[X] Incluir menú para navegación en sección Header de la página.

[X] Agregar Menú Desplegable (Novato y Entrendor)

[X] Agregar buscaor interno (ubicado en header) 

[X] Subir cambios  Repositorio Git Hub.

**Definición de Terminado:** Se agrega menú en heather, incluye "Menú Novato" (preguntas) y "Menú Entrenador" (pokédex y tipos)


Historia 3:

**Usuario Sebastián:** Jugador Pokémon Go.

**Necesita:** Conocer debilidades, imagen de nostalgia (Pokébola 8bit, Pokémon para Game Boy)

**Para:** Obtener mayor información sobre sus Pokémon para la batalla en Gimnasios, contra otros Entrenadores e Incursiones.

**Criterios de aceptación:** 

[X] Incluir en prototipo de Alta Fidelidad.

[X] Diseño de página (HTML, JS, CSS)

[X] Incluir en diseño de página pokéball 8bit (marco)

[X] Crear tarjeta con información de cada pokémon.

[X] Agregar interacción, manejo de data, diseño y estilos.

[X] Subir cambios  Repositorio Git Hub.

**Definición de Terminado:** Se agrega información detallada anteriormente, se incluyen pokébola 8bit como marco en esquinas de la página, se reordena imagen en ficha pokémon y, además se agrega cantidad de caramelos para evolucionar, información distribuida de forma más clara.


### Diseño de la Interfaz de Usuario

#### Prototipo de baja fidelidad

Dentro de los inicios de nuestro proyecto realizamos el diseño (sketch) del prototipo básico, el cual mostramos a continuación.

<img src="https://github.com/ConnieBrito/SCL013-data-lovers/blob/master/src/images/sketch.jpeg" width= 900px height= 600px>

Al momento de realizar iteraciones con posibles usuarios realizamos el prototipo de baja fidelidad en el programa InVision, con el cual realizamos testeo en usuarios quienes nos proporcionaron información para mejorar este diseño y del cual pudimos obtener nuestras primeras Historias de Usuario.

[Prototipo de Baja Fidelidad](https://www.loom.com/share/993af3c624d14d22a3b266d1fb6b85d5) (link testeo loom)

<img src="https://github.com/ConnieBrito/SCL013-data-lovers/blob/master/src/images/PrototipoCompleto.JPG" width= 900px height= 600px>

#### Prototipo de alta fidelidad

Al obtener los feedbacks necesarios nos propusimos realizar los cambios sugeridos para así lograr una mejor experiencia para nuestros usuarios, éste diseño se asemeja bastante a nuestro diseño real.

[Prototipo de Alta Fidelidad](https://www.loom.com/share/431f892a79a04b3a89417547e205f83e) (link testeo loom)

<img src="https://github.com/ConnieBrito/SCL013-data-lovers/blob/master/src/images/FigmaCompleto.JPG" width= 900px height= 600px>

En este diseño trabajamos con una tipografía simple 'Roboto; sans-serif' y 'Gill Sans MT'.   Además tratamos de utilizar una paleta de colores simple y en relación con la temática, la cual mostramos a continuación.

<img src="https://github.com/ConnieBrito/SCL013-data-lovers/blob/master/src/images/ColoresPagPokemon-02.png" width= 700px height= 500px>


## 3. Definición del Usuario


Al iniciar nuestro proyecto no teníamos bien definido a nuestro usuario, esto lo decidimos 
apenas terminamos de diseñar el sketch (presentado anteriormente), con ello nos respondimos 
las siguientes preguntas para así ayudarnos a relizar los futuros diseños (baja y alta fidelidad)

* ¿Quiénes son los principales usuarios de producto?

  Nos quisimos enfocar en que nuestros usuarios fueran principiantes, quienes jueguen Pokémon Go por
  primera vez o que hayan comenzado en el juego hace poco tiempo (niveles más bajos), y además a 
  Jugadores que lleven tiempo con juego, los llamados Entrenadores. 

* ¿Cuáles son los objetivos de estos usuarios en relación con el producto?

  Los objetivos son claros, encontrar información sobre determinados pokémon (que el usuario escoja) 
  y mostrarlos en detalle el nombre, número, peso, altura, aparición en huevos, debilidades, fortalezas y evoluciones de acuerdo a caramelos necesarios. Información completa que requieren los usuarios para poder tomar decisiones y así poder combatir en gimnasios y contra otros entrenadores.

* ¿Cuáles son los datos más relevantes que quieren ver en la interfaz y por qué?

  Los datos más relevantes que pretendemos ver y mostrar son los datos de los pokémon, pero adicionalmente nos interesa poder mostrar una pequeña introducción al mundo Pokémon a través de información al inicio y luego 
  pasar a la Pokédex donde se muestran todos los pokémon y donde el usuario puede buscar, filtrar y escoger.

* ¿Cuándo utilizan o utilizarían el producto?

  Este producto se utilizará cuando el usuario decida comenzar con la aventura de Pokémon Go o cuando requiera 
  información que lo ayude en la toma de decisiones sobre qué pokémon es mejor a la hora de combatir, y así conocer las debilidades y fortalezas de sus rivales. Obteniendo ventaja de información y un mejor desempeño
  al momento de elegir a sus pokémon y combatir.

* Investigación previa: Historias de Usuario.

  Dentro del punto "Historias de Usuario" detallamos lo que obtuvimos como resultado de nuestra investigación,
  esto nos ayudó a redefinir el diseño para el prototipo de alta calidad y es con lo que trabajamos en el diseño de interfaz del producto final.
  


#### Testeos de usabilidad

  A todos nuestros usuarios les realizamos testeos de usabilidad, en primera instancia a nuestro prototipo de baja fidelidad y de acuerdo al feedback recibido por cada uno de ellos realizamos cambios en el diseño y logramos realizar el prototipo de alta fidelidad, con ello adicionalmente, al realizar el testeo con los usuarios realizamos entrevistas grabadas de la interacción de ellos con el prototipo.
  Éstas entrevistas la pueden revisar a continuación:

  *[Entrevista Usuario Ariana](https://drive.google.com/open?id=1p0i-tBVIYKT4VjqacW213BqTcJ89oTf_)

  *[Entrevista Usuario Juzera](https://drive.google.com/open?id=14GqO4Dp-dNIQhDS5qPXCLh2B8sRPp61j)
  
  *[Entrevista Usuario Rebeca](https://drive.google.com/open?id=1QRDltAQOceXEpPFThowXYb-KXj0wLuWQ)

  *[Entrevista Usuario Sebastián](https://photos.google.com/share/AF1QipNpDwD2EkWVBbRwtJtmQDuFUyiuxveNwWkO1ESchBmcTVeUdQuGjSYAueuXjqFYQQ/photo/AF1QipPfhVYWf0H9_F9ICbL-kQvoX-swKRNtVjg4fmo0?key=SVVZM2RBYW9JamVPcVhZSG82UXBPbHNVZk5TeThR)


***

#### Planificación

  En nuestro proyecto definimos la utilización del tablero Trello para mayor organización en interacción 
  de las tareas a realizar, se adjunta imagen y link del mismo.

  [Pokemon Lovers Trello](https://trello.com/invite/b/zTYsOkCi/7c2c35a10fca7106b9cad0b3ba7708f4/pokemon-lovers) (link tablero)

  <img src="https://github.com/ConnieBrito/SCL013-data-lovers/blob/master/src/images/Trello PokemonLovers.JPG" width= 900px height= 600px>

***

#### Herramientas Utilizadas

* [Trello](https://trello.com/)
* [InVision](https://invisionapp.com/)
* [Figma](https://figma.com/)
* [Maze](https://maze.design/)
* [Git](https://git-scm.com/)
* [GitHub](https://github.com/)
* [GitHub Pages](https://pages.github.com/)
* [Node.js](https://nodejs.org/)
* [Jest](https://jestjs.io/)
