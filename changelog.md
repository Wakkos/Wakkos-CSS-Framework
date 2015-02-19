# Changelog

## v1.5.0
- Modificado el mixin de .font-face para que encaje con un tamaño de fuente base de 100% y no 62.5% como estaba antes. Si tenemos un mixin para calcular todo, no nos hace falta entresijos para calcular medidas.

- Por ende, he cambiado el tamaño de fuente base a 100%.

- Arreglos varios a los botones: 
-He quitado degradados a los botones, viva el flat!.
-Ajustadas las clases y loca colores de cada textura.
-Eliminado el botón inverso (quién pude necesitar un botó con colores inversos??).

- Creado un nuevos archivos .Less para modularizar lo máximo posible: helpers.less donde meteremos las clases y así no tenerlas mezcladas con los mixins paramédicos.

- Eliminado todo soporte a cualquier navegador en concreto.

- Agregamos una navegación simple (.nav) una que ocupa el 100% del contenedor (.nav--fit) y una en bloque de donde se puede partir a una navegación en pestañas (.nav--tabs). Puede que con tiempo le asigne estilos y variables.

- Poco a poco voy modificando toda la estructura de nombres de selectores para que se sepa cual se extiende a partir de otro. Ej: .nav es un objeto y .nav--tabs es una extensión de ese objeto. Sabemos que para usar la extensión, necesitamos el objeto: class="nav nav--tabs".

