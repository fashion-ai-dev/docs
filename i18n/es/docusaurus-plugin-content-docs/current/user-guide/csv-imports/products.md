# Importación de Catálogo de Productos

Importa o actualiza tu catálogo de productos usando la plantilla CSV de tu panel de FashionAI.

## Cuándo usar esta importación

Usa la importación de catálogo cuando quieras:

- crear tu catálogo inicial
- actualizar muchos productos de una sola vez
- corregir información de productos en bloque
- migrar productos desde otra plataforma

La plantilla y los campos disponibles pueden variar según el cliente. Por eso, esta guía se centra en el proceso, y la plantilla CSV descargada es la referencia principal.

## Paso a paso

### 1. Descarga la plantilla de productos

1. Inicia sesión en FashionAI
2. Ve a **Settings** -> **Products Manager**
3. Descarga la plantilla CSV para productos

### 2. Completa tu CSV

Abre el archivo en la herramienta que prefieras y agrega los datos de tus productos.

Buenas prácticas:

- mantén un producto por fila
- conserva la estructura original de la plantilla
- usa identificadores de producto consistentes
- revisa nombres, descripciones, categorías e imágenes antes de cargar

Si tienes dudas sobre algún campo, revisa **Campos de la Hoja de Cálculo** en el panel.

### 3. Guarda el archivo en CSV

Cuando el archivo esté listo, guarda o exporta en **CSV**.

### 4. Sube el archivo

1. Vuelve a **Settings** -> **Products Manager**
2. Sube el archivo CSV
3. Espera a que FashionAI lo procese

### 5. Revisa el resultado de la importación

Después del procesamiento, revisa el resumen de la importación:

- **Éxito** significa que el archivo se importó correctamente
- **Éxito parcial** significa que algunas filas se importaron y otras necesitan corrección
- **Error** significa que el archivo debe corregirse antes de completar la importación

Si hace falta, ajusta el archivo CSV y súbelo otra vez. Los elementos importados con éxito se actualizan, no se duplican.

## Lo que normalmente causa problemas

- usar una plantilla desactualizada
- cambiar manualmente la estructura del CSV
- usar identificadores inconsistentes entre cargas
- diferencias de formato en algunas filas
- guardar el archivo en un formato distinto de CSV
- problemas de encoding después de exportar

## Consejo de encoding

Si los acentos o caracteres especiales se ven mal en el archivo, sube los datos a Google Sheets y vuelve a descargar el CSV antes de importar. Esto suele resolver problemas de encoding.

## Primera importación recomendada

Si esta es tu primera carga, empieza con un lote pequeño. Eso facilita validar que la plantilla, el formato CSV de los campos y el comportamiento de la importación sean correctos antes de subir todo el catálogo.

## Después de la importación

Cuando tus productos ya estén en FashionAI, puedes seguir con:

- [Carga de imágenes de productos](./images-upload.md)
- [Importación de Shop The Look](./shop-the-look.md)
- [Vision Enrichment](../vision-enrichment/index.md)
- [Recommendations](../recomendations/index.md)

## Necesitas ayuda?

Si no está claro por qué el archivo falló, revisa el resumen de la importación en el panel y contacta a **support@generativecrm.com** con los detalles del error.
