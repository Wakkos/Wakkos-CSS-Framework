# Wakkos SASS framework

### Configuración:

#### style.scss
Configura primeramente el archivo `scss/style.scss` con los archivos que quieres incluir.
Si no quieres incluir el archivo _fuentes.scss porque no los vas a usar o cualquiero otro
archivo por cualqueir otra razón, comenta esa línea para que no compile CSS de más y
optimizar en peso.

#### variables.scss
Pasa a configurar las variables y diferentes opciones de la atmósfera de diseño,
nos vamos a `variables.scss` donde podremos configurar colores, fuentes, tamaños, 
etc...

### Breakpoints 
Los breakpoints los he colocado en EM en vez de pixels para que el diseño no se 
vea afectado por acciones como el ZOOM. Para más info leer a 
[Chris Coyer](http://css-tricks.com/why-ems/) y a [Lyza Gardner](http://blog.cloudfour.com/the-ems-have-it-proportional-media-queries-ftw/) con argumentos al respecto.

```scss
$bp1 : 30em;      // 480px
$bp2 : 37.5em;    // 600px
$bp3 : 48em;      // 768px
$bp4 : 56.25em;   // 900px
$bp5 : 68.75em;   // 1100px
```

### Nomenclatura
La convención de nombre sigue este patrón:
```css
    .bloque{}
    .bloque__elemento{}
    .bloque--modificador{}
```

* '.bloque' representa el primer nivel de una abstracción o componente.
* '.bloque__element' representa un descendente de '.bloque' que se ayuda de 
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
		_contenido.scss
		debug.scss
		lt-ie9.scss
		style.scss
		--componentes
                     _botones.scss
                     _elementos.scss
                     _formularios.scss
                     _fuentes.scss
                     _links.scss
                     _navegacion.scss
                     _normalize
                     _paginacion.scss
                     _reset.scss
                     _tablas.scss
                     _texturas.scss
                     _tipografia.scss

        --layout
        			_2x.scss
        			_breakpoints.scss
        			_sitio.scss

        --lib
        			_mixins.scss
        			_placeholders.scss
        			_variables.scss
``

El archivo `contenido.scss` se compila al principio del `style.css` para dar una 
guía de donde tenemos nuestros elementos y su nombre, gracias a los comentarios 
BEM na búsqueda `cmd/ctrl + f`en SublimeText que empiece por $NOMBREDESECCION 
nos ayudará mucho a encontrar el contenido.

A su vez están todas las secciones separadas unas de las otras para ubicar rápidamente
 cuando echamos un vistazo.

El archivo `_debug.scss` viene comentado, pero lo puedes incluir para tener una 
pequeña guía de la semántica de tu documento html.

El archivo `lt-ie9.scss` incluye un fallback para todo lo que incluimos en los
 mediaqueries con la clase `.ie8-sucks`. Si os da corte con vuestro cliente, 
 podéis cambiar la clase en el archivo `_variables.scss`.

### Codekit
Iré adaptándolo a Codekit pero sin que afecte a los que no lo usan. De momento si 
usas Codekit, incluyo el archivo `config.codekit`y todos los `.scss`son compilados 
en la carpeta `css`.

## Patrones
Siempre necesito una guía de estilos o de patrones para hacerme una idea de la 
atmósfera de diseño de la web. Para esto tengo la carpeta `patrones`donde tengo 
el `index.html` que me da un pequeño resumen de los elementos de la web y se ajusta
a la configuración de nuestro CSS.

Me gustaría poner código en cada elemento para así hacer que sea funcional no solo
al diseñador sino al frontend, pero ese trabajo va a tener que esperar.


## Tip
_Modulariza_ **todo** lo que puedas, el archivo `style.scss` 
es para meter archivos. Crea módulos, divide tu CSS en tantos archivos como puedas; 
el CSS del header en `header.scss`, `content-home.scss`, `footer.scss`, etc...


