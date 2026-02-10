# Carga de Imágenes de Productos

El sistema permite cargar imágenes para tus productos en Configuración > Gestor de Imágenes

## Formatos Aceptados

| Formato | Extensión |
|---------|-----------|
| JPEG    | .jpg o .jpeg |
| PNG     | .png |
| GIF     | .gif |
| WebP    | .webp |

## Límites

- **Tamaño máximo:** 10 MB por archivo
- **Cantidad:** hasta 500 imágenes por carga

## Regla de Nomenclatura

:::tip Consejo importante
Nombra tus archivos con el **código del producto** seguido de `_01`, `_02`, etc. Este será el orden en que las imágenes aparecerán en nuestro sitio y serán descritas para SEO.

Ejemplo: `SKU12345_01.jpg`, `SKU12345_02.jpg`, `SKU12345_03.jpg`
:::

El nombre del archivo **debe terminar** con `_01` hasta `_10`:

| Nombre Original | Nombre Final |
|-----------------|--------------|
| camiseta-azul_01.jpg | CAMISETA-AZUL_01.jpg |
| camiseta-azul_1.jpg | CAMISETA-AZUL_1.jpg |
| camiseta-azul.jpg | CAMISETA-AZUL_01.jpg (sufijo agregado automáticamente) |
| Camisa Polo.png | CAMISA-POLO_01.png (sufijo agregado automáticamente) |

### Transformaciones Automáticas

El sistema estandariza automáticamente los nombres de archivos:

- Nombre convertido a **MAYÚSCULAS**
- Espacios y caracteres especiales se convierten en `-`
- Los acentos se eliminan (café → CAFE)
- Extensión siempre en minúsculas

## Lista de Verificación Antes de Cargar

- [ ] ¿Los archivos están en formato aceptado (jpg, png, gif, webp)?
- [ ] ¿Cada archivo tiene menos de 10 MB?
- [ ] ¿El nombre del archivo termina con `_01` a `_10`?

## Errores Comunes

| Error | Causa | Solución |
|-------|-------|----------|
| Tipo de archivo inválido | Formato no aceptado | Usa jpg, png, gif o webp |
| Archivo muy grande | Archivo mayor a 10 MB | Reduce el tamaño de la imagen |
| Ninguna imagen enviada | Campo vacío | Verifica si adjuntaste los archivos |
| Extensión inválida | Nombre sin extensión válida | Renombra con .jpg, .png, etc. |

## Resumen

| Característica | Valor |
|----------------|-------|
| Formatos | jpg, jpeg, png, gif, webp |
| Tamaño máximo | 10 MB por archivo |
| Límite de archivos | 500 imágenes |
| Patrón de nombre | NOMBRE_01.ext hasta NOMBRE_10.ext |
