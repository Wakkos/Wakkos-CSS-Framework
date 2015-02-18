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
                     _tablas.scss
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

## Patrones
Lo trabajaré en otra rama, ya que ahora mismo no provee ninguna ventaja.


## Tip
_Modulariza_ **todo** lo que puedas, el archivo `style.scss`
es para meter archivos. Crea módulos, divide tu CSS en tantos archivos como puedas;
el CSS del header en `header.scss`, `content-home.scss`, `footer.scss`, etc...


