# Importacion de Shop The Look

Crea relaciones entre productos y combinaciones de looks usando la plantilla CSV de Shop The Look.

## Antes de empezar

Tus productos ya deben existir en el catalogo antes de importar relaciones de Shop The Look.

Si todavia necesitas cargar productos, usa la [guia de importacion de catalogo](./products.md).

## Cuando usar esta importacion

Usa la importacion de Shop The Look cuando quieras:

- conectar productos que combinan entre si
- crear looks completos
- mejorar oportunidades de cross-sell
- cargar muchas relaciones de una sola vez

La plantilla y los campos aceptados pueden variar segun el cliente, por eso siempre debes usar el archivo CSV descargado desde tu panel.

## Paso a paso

### 1. Descarga la plantilla de Shop The Look

1. Inicia sesion en FashionAI
2. Ve a **Settings** -> **Products Manager**
3. Descarga la plantilla CSV de Shop The Look

### 2. Completa las relaciones

Agrega las relaciones entre productos siguiendo la estructura de la plantilla descargada.

Buenas practicas:

- asegúrate de que todos los productos referenciados ya existan en el catalogo
- mantén los identificadores exactamente iguales a los registros del catalogo
- revisa el archivo con cuidado antes de cargarlo
- empieza con un lote pequeño si es tu primera importacion de Shop The Look

### 3. Guarda el archivo en CSV

Guarda o exporta el archivo en **CSV**.

### 4. Sube el archivo

1. Vuelve a **Settings** -> **Products Manager**
2. Selecciona el tipo de importacion Shop The Look
3. Sube el archivo CSV
4. Espera a que termine el procesamiento

### 5. Revisa el resultado de la importacion

Consulta el resumen de la importacion despues del procesamiento:

- **Exito** significa que todas las relaciones se crearon correctamente
- **Exito parcial** significa que algunas relaciones se crearon y otras necesitan revision
- **Error** significa que el archivo debe corregirse antes de importar las relaciones

Si alguna referencia de producto es invalida o no existe en el catalogo, corrige el archivo CSV y vuelvelo a subir.

## Lo que normalmente causa problemas

- importar relaciones antes de que los productos existan en el catalogo
- identificadores de producto que no coinciden
- usar la plantilla incorrecta
- cambiar manualmente la estructura del CSV
- guardar el archivo en un formato distinto de CSV

## Consejos para mejores resultados

- crea combinaciones que tengan sentido para el cliente
- mantén consistentes los grupos por temporada o estilo
- revisa las relaciones importadas en el panel despues de la carga

## Despues de la importacion

Cuando las relaciones ya esten activas, puedes:

- revisarlas en la experiencia de catalogo
- seguir la interaccion en [Behaviors](../../behaviors/index.md)
- mejorar la experiencia con [Recommendations](../../recomendations/index.md)

## Necesitas ayuda?

Si la importacion falla, revisa el resumen de la importacion y contacta a **support@generativecrm.com** con los detalles del error.
