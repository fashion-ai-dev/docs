# Importación de Shop The Look

Crea relaciones entre productos y combinaciones de looks usando la plantilla CSV de Shop The Look.

## Antes de empezar

Tus productos ya deben existir en el catálogo antes de importar relaciones de Shop The Look.

Si todavía necesitas cargar productos, usa la [guía de importación de catálogo](./products.md).

## Cuándo usar esta importación

Usa la importación de Shop The Look cuando quieras:

- conectar productos que combinan entre sí
- crear looks completos
- mejorar oportunidades de cross-sell
- cargar muchas relaciones de una sola vez

La plantilla y los campos aceptados pueden variar según el cliente, por eso siempre debes usar el archivo CSV descargado desde tu panel.

## Paso a paso

### 1. Descarga la plantilla de Shop The Look

1. Inicia sesión en FashionAI
2. Ve a **Settings** -> **Products Manager**
3. Descarga la plantilla CSV de Shop The Look

### 2. Completa las relaciones

Agrega las relaciones entre productos siguiendo la estructura de la plantilla descargada.

Buenas prácticas:

- asegúrate de que todos los productos referenciados ya existan en el catálogo
- mantén los identificadores exactamente iguales a los registros del catálogo
- revisa el archivo con cuidado antes de cargarlo
- empieza con un lote pequeño si es tu primera importación de Shop The Look

### 3. Guarda el archivo en CSV

Guarda o exporta el archivo en **CSV**.

### 4. Sube el archivo

1. Vuelve a **Settings** -> **Products Manager**
2. Selecciona el tipo de importación Shop The Look
3. Sube el archivo CSV
4. Espera a que termine el procesamiento

### 5. Revisa el resultado de la importación

Consulta el resumen de la importación después del procesamiento:

- **Éxito** significa que todas las relaciones se crearon correctamente
- **Éxito parcial** significa que algunas relaciones se crearon y otras necesitan revisión
- **Error** significa que el archivo debe corregirse antes de importar las relaciones

Si alguna referencia de producto es inválida o no existe en el catálogo, corrige el archivo CSV y vuélvelo a subir.

## Lo que normalmente causa problemas

- importar relaciones antes de que los productos existan en el catálogo
- identificadores de producto que no coinciden
- usar la plantilla incorrecta
- cambiar manualmente la estructura del CSV
- guardar el archivo en un formato distinto de CSV
- problemas de encoding después de exportar

## Consejo de encoding

Si los acentos o caracteres especiales se ven mal en el archivo, sube los datos a Google Sheets y vuelve a descargar el CSV antes de importar. Esto suele resolver problemas de encoding.

## Consejos para mejores resultados

- crea combinaciones que tengan sentido para el cliente
- mantén consistentes los grupos por temporada o estilo
- revisa las relaciones importadas en el panel después de la carga

## Después de la importación

Cuando las relaciones ya estén activas, puedes:

- revisarlas en la experiencia de catálogo
- seguir la interacción en [Behaviors](../behaviors/index.md)
- mejorar la experiencia con [Recommendations](../recomendations/index.md)
