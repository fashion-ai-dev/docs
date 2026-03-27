# Importacion de Catalogo de Productos

Importa o actualiza tu catalogo de productos usando la plantilla CSV de tu panel de FashionAI.

## Cuando usar esta importacion

Usa la importacion de catalogo cuando quieras:

- crear tu catalogo inicial
- actualizar muchos productos de una sola vez
- corregir informacion de productos en bloque
- migrar productos desde otra plataforma

La plantilla y los campos disponibles pueden variar segun el cliente. Por eso, esta guia se centra en el proceso, y la plantilla CSV descargada es la referencia principal.

## Paso a paso

### 1. Descarga la plantilla de productos

1. Inicia sesion en FashionAI
2. Ve a **Settings** -> **Products Manager**
3. Descarga la plantilla CSV para productos

### 2. Completa tu CSV

Abre el archivo en la herramienta que prefieras y agrega los datos de tus productos.

Buenas practicas:

- mantén un producto por fila
- conserva la estructura original de la plantilla
- usa identificadores de producto consistentes
- revisa nombres, descripciones, categorias e imagenes antes de cargar

Si tienes dudas sobre algun campo, revisa **Campos CSV** en el panel.

### 3. Guarda el archivo en CSV

Cuando el archivo este listo, guarda o exporta en **CSV**.

### 4. Sube el archivo

1. Vuelve a **Settings** -> **Products Manager**
2. Sube el archivo CSV
3. Espera a que FashionAI lo procese

### 5. Revisa el resultado de la importacion

Despues del procesamiento, revisa el resumen de la importacion:

- **Exito** significa que el archivo se importo correctamente
- **Exito parcial** significa que algunas filas se importaron y otras necesitan correccion
- **Error** significa que el archivo debe corregirse antes de completar la importacion

Si hace falta, ajusta el archivo CSV y subelo otra vez. Los elementos importados con exito se actualizan, no se duplican.

## Lo que normalmente causa problemas

- usar una plantilla desactualizada
- cambiar manualmente la estructura del CSV
- usar identificadores inconsistentes entre cargas
- diferencias de formato en algunas filas
- guardar el archivo en un formato distinto de CSV

## Primera importacion recomendada

Si esta es tu primera carga, empieza con un lote pequeño. Eso facilita validar que la plantilla, el formato de los campos y el comportamiento de la importacion sean correctos antes de subir todo el catalogo.

## Despues de la importacion

Cuando tus productos ya esten en FashionAI, puedes seguir con:

- [Importacion de Shop The Look](./shop-the-look.md)
- [Vision Enrichment](../../vision-enrichment/index.md)
- [Recommendations](../../recomendations/index.md)

## Necesitas ayuda?

Si no esta claro por que el archivo fallo, revisa el resumen de la importacion en el panel y contacta a **support@generativecrm.com** con los detalles del error.
