# Importación CSV de Productos

Importe su catálogo completo de productos usando un archivo CSV simple.

## Descripción General

La importación CSV de Productos le permite:
- Agregar múltiples productos a la vez
- Actualizar productos existentes de forma masiva
- Importar información completa de productos
- Configurar su catálogo inicial rápidamente

## Guía Paso a Paso

### Paso 1: Descargar la Plantilla

1. Inicie sesión en su panel de FashionAI
2. Vaya a **Configuración** → **Administrador de Productos**
3. Haga clic en **Descargar Plantilla de Productos**
4. Guarde el archivo CSV en su computadora

### Paso 2: Preparar Sus Datos

Abra la plantilla CSV en su aplicación de hoja de cálculo preferida (Excel, Google Sheets, etc.) y complete la información de sus productos.

## Formato CSV

### Columnas Requeridas

Estas columnas **deben** completarse para cada producto:

| Columna | Descripción | Ejemplo |
|--------|-------------|---------|
| **Product Name** | Nombre de visualización del producto | "Camiseta Azul de Algodón" |
| **Category ID** | Identificador único de categoría | "shirts-123" |
| **Image URL** | Enlace de imagen principal del producto | "https://example.com/image.jpg" |
| **Category** | Nombre de categoría del producto | "Camisetas" |

### Columnas Opcionales

Estas columnas ayudan a mejorar las recomendaciones y búsqueda:

| Columna | Descripción | Ejemplo |
|--------|-------------|---------|
| **Product ID** | Su código interno de producto | "SKU-12345" |
| **Description** | Detalles del producto | "Camiseta de algodón cómoda..." |
| **Brand** | Marca del producto | "Nike" |
| **Color** | Color del producto | "Azul" |
| **Size** | Tallas disponibles | "M, L, XL" |
| **Price** | Precio del producto | "29.99" |
| **Tags** | Palabras clave adicionales | "casual, verano, algodón" |
| **Additional Images** | URLs de imágenes adicionales | "https://example.com/img2.jpg" |

## Ejemplo de CSV

Así es como debe verse su CSV:

```csv
Product Name,Product ID,Category ID,Category,Image URL,Brand,Color,Price,Description
Cotton Blue T-Shirt,SKU-001,shirts-123,T-Shirts,https://example.com/tshirt.jpg,Nike,Blue,29.99,Comfortable cotton t-shirt for everyday wear
Denim Jeans,SKU-002,pants-456,Jeans,https://example.com/jeans.jpg,Levi's,Blue,79.99,Classic fit denim jeans with stretch
Summer Dress,SKU-003,dress-789,Dresses,https://example.com/dress.jpg,Zara,Floral,49.99,Light and breezy summer dress
```

### Paso 3: Completar Sus Productos

Para cada producto, complete todas las columnas requeridas y cualquier columna opcional que aplique:

**Consejos:**
- Un producto por fila
- Mantenga las descripciones claras y concisas
- Use URLs de imágenes de alta calidad
- Sea consistente con los nombres de categorías
- Incluya nombres de marcas cuando estén disponibles

### Paso 4: Guardar Su Archivo

1. Haga clic en **Archivo** → **Guardar Como**
2. Elija el formato **CSV (delimitado por comas)**
3. Nombre su archivo (ejemplo: "products-import-2024.csv")
4. Guarde en una ubicación que recordará

### Paso 5: Cargar a FashionAI

1. Haga clic en **Elegir Archivo** o arrastre y suelte su CSV
2. Haga clic en **Cargar**
3. Espere a que se complete el procesamiento (generalmente 5-10 minutos)

### Paso 6: Revisar Resultados de Importación

Después del procesamiento, verá un resumen:

- **Importaciones exitosas**: Productos agregados/actualizados exitosamente
- **Errores**: Productos que no pudieron importarse
- **Advertencias**: Productos importados con problemas menores

## Comprender los Mensajes de Estado

### Procesando ⏳
Su archivo se está procesando. Esto puede tardar hasta 5 minutos dependiendo del tamaño del archivo. Puede salir de la página y regresar más tarde.

### Procesado
Sus productos fueron cargados exitosamente a la base de datos y nuestra IA está leyendo las imágenes para generar los datos (etiquetas, descripción, atributos,...).

### Completado ✅
¡Todos los productos fueron leídos exitosamente!

### Errores ❌
Algunos productos no pudieron importarse. Verifique el informe de errores para más detalles.

## Errores Comunes y Soluciones

### Columnas Requeridas Faltantes

**Mensaje de Error:**
```
Missing required data
```

**Solución:**
- Abra su CSV y verifique los encabezados de columna
- Asegúrese de que todas las columnas requeridas existan
- Verifique si hay errores tipográficos en los nombres de columna
- Asegúrese de que las columnas no estén vacías

### URLs de Imágenes Inválidas

**Mensaje de Error:**
```
Invalid or inaccessible image URL
```

**Solución:**
- Verifique que la URL de la imagen sea correcta
- Asegúrese de que las imágenes sean accesibles públicamente (no detrás de inicio de sesión)
- Verifique que las URLs comiencen con `http://` o `https://`
- Pruebe la URL en un navegador para confirmar que funciona

### Formato de Archivo Inválido

**Mensaje de Error:**
```
File format not supported
```

**Solución:**
- Asegúrese de que el archivo esté guardado como formato CSV (no .xlsx o .xls)
- Intente guardar como "CSV UTF-8" si está disponible
- Elimine cualquier formato especial de Excel

### Archivo Demasiado Grande

**Mensaje de Error:**
```
File exceeds maximum size of 10MB
```

**Solución:**
- Divida su importación en varios archivos más pequeños
- Elimine columnas innecesarias
- Comprima imágenes grandes antes de cargar

## Mejores Prácticas

### URLs de Imágenes
- Use imágenes de alta resolución (mínimo 800x800 píxeles)
- Asegúrese de que las imágenes estén alojadas en un servidor confiable
- Use URLs de imagen directas (que terminen en .jpg, .png, etc.)
- Pruebe las URLs antes de importar

### Pruebas
- Comience con un archivo de prueba pequeño (10-20 productos)
- Verifique que la importación fue exitosa
- Verifique que los productos aparezcan correctamente en el panel
- Luego importe el resto de su catálogo

## Actualizar Productos Existentes

Puede usar el mismo formato CSV para actualizar productos:

1. Incluya la columna **Product ID** con IDs existentes
2. Cambie la información que desea actualizar
3. Cargue el CSV
4. Los productos existentes se actualizarán con la nueva información

## Importaciones Idempotentes

Puede cargar el mismo CSV varias veces de forma segura:
- No se crearán productos duplicados
- Los productos existentes se actualizarán
- Se agregarán nuevos productos

## Retención de Archivos

Los archivos CSV cargados se conservan durante **7 días** después de la carga. Después de eso, necesitará volver a cargarlos si desea procesarlos nuevamente.

## ¿Necesita Ayuda?

Si encuentra problemas:
- Revise los mensajes de error cuidadosamente
- Consulte la sección de errores comunes arriba
- Intente primero con un archivo de prueba más pequeño
- Contacte a soporte: support@generativecrm.com

Incluya en su solicitud de soporte:
- Su archivo CSV (o una muestra)
- El mensaje de error que recibió
- Número de productos que está intentando importar

## Siguientes Pasos

Después de importar sus productos:

- [Configurar relaciones de Shop The Look](./shop-the-look.md)
- [Habilitar Enriquecimiento de Visión](../../vision-enrichment/index.md)
- [Configurar Recomendaciones](../../recomendations/index.md)
