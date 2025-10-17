# Importación CSV de Shop The Look

Cree combinaciones de productos y sugerencias de conjuntos vinculando productos que funcionen bien juntos.

## Descripción General

Shop The Look le permite:
- Crear sugerencias de conjuntos completos
- Vincular productos complementarios
- Construir combinaciones de productos curadas
- Mejorar oportunidades de venta cruzada
- Ayudar a los clientes a descubrir artículos que combinan

**Ejemplo:** Vincule un vestido con zapatos, bolso y accesorios que crean un conjunto completo.

## Antes de Comenzar

**Importante:** Todos los productos deben existir ya en su catálogo antes de crear relaciones de Shop The Look.

Si aún no ha importado sus productos:
1. [Importe sus productos primero](./products.md)
2. Luego regrese aquí para crear relaciones

## Guía Paso a Paso

### Paso 1: Descargar la Plantilla

1. Inicie sesión en su panel de FashionAI
2. Vaya a **Configuración** → **Administrador de Productos**
3. Haga clic en **Descargar Plantilla de Shop The Look**
4. Guarde el archivo CSV en su computadora

### Paso 2: Comprender el Formato

## Formato CSV

### Columnas Requeridas

Cada fila debe tener estas columnas completadas:

| Columna | Descripción | Ejemplo |
|--------|-------------|---------|
| **MAIN_SKU** | Código/SKU del producto principal | "DRESS-001" |
| **RELATED_SKU_1** o **RELATED_EAN_1** | Primer código de producto relacionado o EAN | "SHOE-123" o "7891234567890" |

**Importante:** Debe proporcionar al menos UN producto relacionado usando el SKU (código de producto) o EAN (número de código de barras).

### Columnas Opcionales

Puede agregar hasta 4 productos relacionados por producto principal (si necesita más de 4 productos relacionados envíenos un mensaje :mailbox: **support@generativecrm.com**):

| Columna | Descripción |
|--------|-------------|
| **RELATED_SKU_1** | 1er código de producto relacionado |
| **RELATED_EAN_1** | 1er EAN de producto relacionado |
| **RELATED_SKU_2** | 2do código de producto relacionado |
| **RELATED_EAN_2** | 2do EAN de producto relacionado |
| **RELATED_SKU_3** | 3er código de producto relacionado |
| **RELATED_EAN_3** | 3er EAN de producto relacionado |
| **RELATED_SKU_4** | 4to código de producto relacionado |
| **RELATED_EAN_4** | 4to EAN de producto relacionado |

## Ejemplo de CSV

Aquí hay un ejemplo completo mostrando diferentes escenarios:

```csv
MAIN_SKU,RELATED_SKU_1,RELATED_EAN_1,RELATED_SKU_2,RELATED_EAN_2,RELATED_SKU_3,RELATED_EAN_3,RELATED_SKU_4,RELATED_EAN_4
DRESS-001,SHOE-123,7891234567890,BAG-456,,NECKLACE-789,,BRACELET-012,
SHIRT-002,PANTS-234,,,BELT-567,,SHOE-890,,
JEANS-003,BELT-111,7891234567891,SHIRT-222,,,,,
SHOE-004,SOCKS-333,,,,,BOTTLE-444,,
```

**Qué significa esto:**
- **Fila 1:** Vestido de verano (DRESS-001) combinado con zapatos (usando tanto SKU como EAN), bolso, collar y pulsera
- **Fila 2:** Camisa polo (SHIRT-002) combinada con pantalones (solo SKU), cinturón (usando EAN) y zapatos
- **Fila 3:** Jeans (JEANS-003) combinados con cinturón (usando tanto SKU como EAN) y camisa
- **Fila 4:** Zapatos deportivos (SHOE-004) combinados con calcetines (solo SKU) y botella de agua (usando EAN)

### Paso 3: Completar Sus Relaciones

Para cada producto principal:

1. **Ingrese el producto principal:**
   - **MAIN_SKU**: Código de producto que existe en su catálogo

2. **Agregue productos relacionados:**
   - Use **RELATED_SKU** para códigos de producto O **RELATED_EAN** para códigos de barras
   - Puede usar ambos para el mismo producto (como en la Fila 1 arriba)
   - Agregue 1-4 productos relacionados por producto principal
   - Deje las celdas vacías si no necesita los 4 productos relacionados

**Consejos:**
- Piense en conjuntos completos o artículos que coordinen
- Considere productos que los clientes compran frecuentemente juntos
- Incluya accesorios que complementen el producto principal
- Mezcle y combine SKUs y EANs según lo que tenga disponible

### Paso 4: Validar Sus Datos

Antes de cargar, verifique:

- Los productos principales (MAIN_SKU) existen en su catálogo
- Los productos relacionados (RELATED_SKU/RELATED_EAN) existen en su catálogo
- Cada fila tiene al menos un producto relacionado
- Los códigos de producto están escritos correctamente
- No hay filas vacías en medio de sus datos

### Paso 5: Guardar Su Archivo

1. Haga clic en **Archivo** → **Guardar Como**
2. Elija el formato **CSV (delimitado por comas)**
3. Nombre su archivo (ejemplo: "shop-the-look-outfits.csv")
4. Guarde en una ubicación que recordará

### Paso 6: Cargar a FashionAI

1. Seleccione **Shop the Look** en el selector de tipo de hoja.
2. Haga clic en **Elegir Archivo** o arrastre y suelte su CSV
3. Haga clic en **Cargar**
4. Espere el procesamiento (generalmente 5-10 minutos)

## Comprender el Estado del Procesamiento

### Procesando ⏳
Su archivo se está validando y procesando. Esto puede tardar hasta 5 minutos.

**Qué sucede durante el procesamiento:**
- El sistema verifica si todos los productos existen en el catálogo
- Valida códigos de producto y EANs
- Crea relaciones entre productos
- Procesa en lotes de 100 filas a la vez

### Completado ✅
¡Todas las relaciones fueron creadas exitosamente! Sus combinaciones de Shop The Look ahora están activas.

### Error ❌
Algunas relaciones no pudieron crearse. Verifique los detalles del error.

## Errores Comunes y Soluciones

### Columnas Requeridas Faltantes

**Mensaje de Error:**
```
Missing required columns in CSV: MAIN_SKU and at least RELATED_SKU_1 or RELATED_EAN_1
```

**Solución:**
- Verifique que su CSV tenga la columna MAIN_SKU
- Asegúrese de que al menos RELATED_SKU_1 o RELATED_EAN_1 exista
- Verifique los nombres de columna en busca de errores tipográficos
- Asegúrese de que los encabezados coincidan exactamente con la plantilla

### Productos No Encontrados

**Mensaje de Error:**
```
The following products were not found in the catalog:
- Line 2: Main product "DRESS-999" not found
- Line 3: Related product "SHOE-888" not found (linked to "DRESS-001")
- Line 5: Related product with EAN "1234567890123" not found
```

**Qué le dice esto:**
- El número de línea exacto en su CSV
- Si es un producto principal o producto relacionado
- El código de producto o EAN que no se encontró
- A qué producto principal estaba vinculado el artículo relacionado

**Solución:**
1. Verifique si los productos están importados en su catálogo
2. Verifique que los códigos de producto coincidan exactamente (sensible a mayúsculas)
3. Confirme que los números EAN sean correctos
4. Importe primero los productos faltantes
5. Cargue el CSV nuevamente después de agregar los productos

**Importante:** Si NO se encuentra NINGÚN producto, NO se crearán relaciones. Debe corregir todos los errores y volver a cargar.

### Formato de Archivo Inválido

**Mensaje de Error:**
```
Invalid file format or corrupted CSV
```

**Solución:**
- Guarde el archivo como formato CSV (no Excel .xlsx)
- Elimine cualquier formato especial
- Asegure codificación UTF-8
- Intente abrir y volver a guardar el archivo

### Archivo Expirado

**Mensaje de Error:**
```
The file has expired and can no longer be processed
```

**Solución:**
- Los archivos se conservan durante 7 días después de la carga
- Cargue su archivo CSV nuevamente
- Procéselo dentro de 7 días

## Comportamientos Importantes

### Procesamiento Todo-o-Nada
Si incluso UN producto falta en su catálogo, toda la importación fallará y NO se crearán relaciones.

**Ejemplo:**
Si intenta importar 100 relaciones pero 1 producto no existe:
- 0 relaciones creadas
- La importación falla
- El informe de errores muestra qué producto(s) faltan

**¿Por qué?** Esto asegura que sus combinaciones de Shop The Look siempre sean completas y válidas.

### Importaciones Idempotentes
Puede cargar el mismo CSV varias veces de forma segura:
- No se crearán relaciones duplicadas
- Las relaciones existentes se preservarán
- Solo se agregarán nuevas relaciones

**Ejemplo:** Si carga el mismo archivo dos veces, no obtendrá combinaciones duplicadas.

### Procesamiento por Lotes
- Los archivos se procesan en grupos de 100 filas a la vez
- Los archivos grandes pueden tardar algunos minutos
- Puede salir de la página de forma segura durante el procesamiento

## Mejores Prácticas

### Crear Grandes Combinaciones

**Conjuntos Completos:**
```csv
MAIN_SKU,RELATED_SKU_1,RELATED_SKU_2,RELATED_SKU_3,RELATED_SKU_4
DRESS-101,HEELS-201,CLUTCH-301,EARRING-401,NECKLACE-501
```
Combina un vestido con zapatos, bolso y joyería para un look de noche completo.

**Prendas Coordinadas:**
```csv
MAIN_SKU,RELATED_SKU_1,RELATED_SKU_2,RELATED_SKU_3
BLAZ-102,SHIRT-202,PANTS-302,SHOE-402
```
Crea un conjunto profesional con blazer, camisa, pantalones y zapatos.

**Colecciones de Temporada:**
```csv
MAIN_SKU,RELATED_SKU_1,RELATED_SKU_2,RELATED_SKU_3
COAT-103,SCARF-203,GLOVE-303,BOOT-403
```
Agrupa esenciales de invierno juntos.

### Consejos para el Éxito

1. **Comience Pequeño:** Pruebe primero con 10-20 combinaciones
2. **Sea Estratégico:** Piense en lo que los clientes realmente compran juntos
3. **Mantenga Actualizado:** Elimine combinaciones cuando los productos se descontinúen
4. **Use Ambos:** Mezcle COD y EAN según lo que tenga disponible
5. **Calidad Sobre Cantidad:** Es mejor tener menos combinaciones excelentes que muchas mediocres

### ¿Qué Hace una Buena Combinación?

- **Coordinación de Color:** Artículos que funcionan bien juntos visualmente
- **Estilo Compatible:** Estética similar (casual, formal, deportivo)
- **Apropiado para la Ocasión:** Artículos para el mismo tipo de evento
- **Rango de Precio:** Artículos con precios similares
- **Relevancia Estacional:** Artículos para la misma temporada

## Actualizar Relaciones

Para actualizar combinaciones de Shop The Look:

1. Modifique su archivo CSV con los cambios
2. Cargue el archivo actualizado
3. Se agregarán nuevas relaciones
4. Las relaciones existentes permanecen (no se eliminarán)

Para eliminar relaciones:
- Use el panel para eliminar manualmente las combinaciones
- O contacte a soporte para opciones de eliminación masiva

## Monitorear Resultados

Después de la carga, verifique:

1. **Vista del Panel:**
   - Vaya a la sección Shop The Look
   - Vea todas las combinaciones activas
   - Vea qué productos están vinculados

2. **Vista del Cliente:**
   - Verifique las páginas de productos de su tienda
   - Verifique que aparezcan las sugerencias de "Shop The Look"
   - Pruebe la experiencia del cliente

## ¿Necesita Ayuda?

Si encuentra problemas:
- Revise los mensajes de error cuidadosamente en busca de nombres de productos y números de línea
- Verifique que todos los productos existan en su catálogo
- Intente primero con un archivo de prueba más pequeño
- Conserve su CSV como respaldo

**Contactar Soporte:**
- Email: support@generativecrm.com
- Incluya: Su archivo CSV y mensajes de error
- Especifique: Qué números de línea tienen problemas

## Siguientes Pasos

Después de configurar Shop The Look:

- [Monitorear participación en Analíticas](../../behaviors/index.md)
- [Optimizar recomendaciones](../../recomendations/index.md)
- [Mejorar con Enriquecimiento de Visión](../../vision-enrichment/index.md)
