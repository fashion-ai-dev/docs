# Guía de Importación CSV

Importe su catálogo de productos y relaciones de Shop The Look usando archivos CSV simples.

## ¿Qué es la Importación CSV?

La importación CSV (Valores Separados por Comas) le permite cargar datos de forma masiva usando archivos de hojas de cálculo. Esto es perfecto para:

- **Configuración inicial del catálogo** - Importar todos los productos a la vez
- **Actualizaciones masivas** - Actualizar muchos productos simultáneamente
- **Gestión sin conexión** - Trabajar en su catálogo sin internet
- **Migración** - Migrar desde otra plataforma
- **Shop The Look** - Crear combinaciones de productos y conjuntos

## Tipos de Importación Disponibles

### Importación de Productos
Cargue su catálogo completo de productos con todos los detalles como nombres, descripciones, imágenes, categorías y atributos.

[Más información sobre Importación de Productos →](./products.md)

### Importación de Shop The Look
Cree combinaciones de productos y sugerencias de conjuntos vinculando productos que funcionen bien juntos.

[Más información sobre Importación de Shop The Look →](./shop-the-look.md)

## Cómo Funciona la Importación CSV

1. **Descargar Plantilla** - Obtenga la plantilla CSV correcta para su tipo de importación
2. **Seleccionar el tipo correcto de CSV** - Puede seleccionar Producto para importar su catálogo o Shop The Look para importar sus productos relacionados
3. **Cargar Archivo** - Cargue su CSV a través del panel de FashionAI
4. **Procesamiento** - El sistema valida y procesa sus datos
5. **Revisar** - Verifique los resultados y corrija cualquier error si es necesario

## Requisitos Generales

### Formato de Archivo
- El archivo debe estar en **formato CSV** (extensión .csv)
- Use **codificación UTF-8** para caracteres especiales
- Tamaño máximo de archivo: **10 MB**
- Filas máximas: **10,000 por archivo**

### Calidad de Datos
- Los campos requeridos deben estar completos
- Los IDs de productos deben ser únicos
- Las URLs deben ser válidas y accesibles
- No debe haber filas vacías en medio de los datos

## Consejos para el Éxito

### Antes de Comenzar
- Revise la plantilla cuidadosamente
- Verifique todos los campos requeridos
- Prepare las URLs de las imágenes con anticipación
- Pruebe con un lote pequeño primero

### Durante la Carga
- Use nombres claros y consistentes
- Verifique dos veces los IDs de productos
- Asegúrese de que las URLs de las imágenes sean accesibles públicamente
- Guarde su trabajo con frecuencia

### Después de la Carga
- Revise el resumen de importación
- Verifique si hay errores o advertencias
- Verifique que los productos aparezcan correctamente
- Conserve su archivo CSV como respaldo

## Estado del Procesamiento

Cuando cargue un CSV, verá uno de estos estados:

| Estado | Qué Significa |
|--------|---------------|
| ⏳ **Procesando** | El archivo se está procesando (puede tardar hasta 5 minutos) |
| ✅ **Completado** | Importación completada exitosamente |
| ⚠️ **Advertencia** | Importación completada con algunas advertencias |
| ❌ **Error** | La importación falló - verifique los mensajes de error |

## Mensajes de Error Comunes

### Problemas de Formato de Archivo
**Error:** `Invalid file format`
**Solución:** Asegúrese de que su archivo esté guardado como CSV (no Excel .xlsx)

### Columnas Requeridas Faltantes
**Error:** `Missing required columns`
**Solución:** Verifique que todas las columnas requeridas existan en su CSV

### Productos No Encontrados
**Error:** `Products not found in catalog`
**Solución:** Importe los productos antes de crear relaciones (para Shop The Look)

### Formato de Datos Inválido
**Error:** `Invalid data format in row X`
**Solución:** Verifique la fila específica mencionada en busca de problemas de formato

## ¿Necesita Ayuda?

Si encuentra problemas con las importaciones CSV:

- Consulte la guía de importación específica para su tipo
- Revise el mensaje de error en busca de pistas
- Intente cargar un archivo de prueba más pequeño
- Contacte a soporte: support@generativecrm.com

## Siguientes Pasos

Elija el tipo de importación que desea realizar:

- [Guía de Importación de Productos](./products.md)
- [Guía de Importación de Shop The Look](./shop-the-look.md)
