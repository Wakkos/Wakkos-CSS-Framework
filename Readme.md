# Wakkos SASS framework

### Configuración:

#### settings.scss
Configura primeramente el archivo `lib/settings.scss`.

Pasa a configurar las variables y diferentes opciones de la atmósfera de diseño,
donde podremos configurar colores, fuentes, tamaños, etc...

### Breakpoints
Los breakpoints los he colocado en EM en vez de pixels para que el diseño no se
vea afectado por acciones como el ZOOM. Para más info leer a
[Chris Coyer](http://css-tricks.com/why-ems/) y a [Lyza Gardner](http://blog.cloudfour.com/the-ems-have-it-proportional-media-queries-ftw/) con argumentos al respecto.

```scss
$breakpoints: (

  'small'  : 48em,
  'medium' : 56.25em,
  'large'  : 68.75em,

) !default;
```

### Nomenclatura
La convención de nombre sigue este patrón:
```css
    .bloque{}
    .bloque__elemento{}
    .bloque--modificador{}
```

* '.bloque' representa el primer nivel de una abstracción o componente.
* '.bloque__elemento' representa un descendente de '.bloque' que se ayuda de
'.bloque' como un conjunto.
* '.bloque--modificador' representa un estado diferente de '.bloque'.

Una **analogía** del funcionamiento de las clases BEM sería:
```css
    .persona{}
    .persona--mujer{}
        .persona__mano{}
        .persona__mano--izquierda{}
        .persona__mano--derecha{}
```

Para más info podéis leer mi traducción de la [guía de CSS](https://github.com/Wakkos/CSS-Guidelines) de [Harry Roberts](https://twitter.com/csswizardry)
a la cual me he ajustado en su mayoría para crear este framework.

También tenemos espacio entre secciones para que sea fácil de ubicar al ver el
archivo compilado `style.css`.

### Organización
Los archivos de **SCSS** están todos dentro de la carpeta `scss` y distribuidos
de la siguiente manera:

```
--scss
		style.scss
        -abstracciones
                     _botones.scss
                     _fonticon.scss
                     _grid.scss
                     _paginacion.scss
                     _texturas.scss
        --base
                     _contenido.scss
                     _reset.scss
                     _debug.scss
		--elementos
                     _figure.scss
                     _formulario.scss
                     _imagenes.scss
                     _links.scss
                     _reset.scss
                     _tipografia.scss
                     _tablas.scss
        --layout
        			_navegacion.scss
                    _sitio.scss
        --lib
                    _flex.scss
        			_mixins.scss
        			_placeholders.scss
        			_settings.scss
```

El archivo `contenido.scss` se compila al principio del `style.css` para dar una
guía de donde tenemos nuestros elementos y su nombre, gracias a los comentarios
BEM na búsqueda `cmd/ctrl + f` en nuestro editor que empiece por $NOMBREDESECCION
nos ayudará mucho a encontrar el contenido.

A su vez están todas las secciones separadas unas de las otras para ubicar rápidamente
 cuando echamos un vistazo.

El archivo `_debug.scss` lo usamos para tener una
pequeña guía de la semántica de tu documento html.


### Codekit
Iré adaptándolo a Codekit pero sin que afecte a los que no lo usan. De momento si
usas Codekit, incluyo el archivo `config.codekit`y todos los `.scss`son compilados
en la carpeta `css`.

### Gulp
Una alternativa a Codekit y que además permite su uso en otros sistemas operativos es Gulp.

#### Instalación
Se necesita tener instalado Nodejs (https://nodejs.org/en/) y Gulp:
`npm install gulp -g`

Una vez instalados los requisitos anteriores se ejecuta:
`npm install`
en el raíz del proyecto. Esto instalará todas las dependencias para que Gulp pueda compilar Sass.

#### Configuración y uso
Para configurar gulp podéis entrar a `gulpfile.js` y modificar el json de configuración (primeras líneas):
```
config = {
  autoprefixer : true, //Prefijos de navegadores para CSS: compatibilidad con browsers
  minify : true, // Minificado de CSS
  mergeMediaQueries: true, // Unimos el interior de las mediaQueries con las misma condición
  paths : {
    ...
  }
}
```
**Tarea autoprefixer** (true o false): tras compilar el `.scss` añade prefijos de navegadores para mejorar la compatibilidad con estos.
**Tarea minify** (true o false): tras compilar el `.scss`, minificamos el css, borrando todos los espacios innecesarios y comentarios.
**Tarea mergeMediaQueries** (true o false): tras compilar el `.scss`, unificamos todas las mediaqueries con la misma condición, lo cual es perfecto para combinar con el mixing `respond-to()`.

Nota: todas las tareas se pueden combinar como se desee.

Para hacer que gulp compile nuestro `.scss` debemos escribir `gulp` en consola.

## Patrones
Lo trabajaré en otra rama, ya que ahora mismo no provee ninguna ventaja.
