---
sidebar_position: 2
---

# Cómo Crear y Gestionar Colecciones

Aprende a crear colecciones personalizadas de productos para mostrar en tu sitio web de forma fácil y rápida.

## ¿Qué son las Colecciones?

Las colecciones son grupos de productos que eliges destacar en tu sitio web. Por ejemplo:
- Lanzamientos de la semana
- Productos en oferta
- Looks de verano
- Más vendidos

## Paso a Paso

### 1. Accede a Colecciones

Haz clic en **Colecciones** en el menú lateral.

### 2. Crea una Nueva Colección

Crea una colección haciendo clic en el enlace mostrado en la imagen:

![Crear Colección](/img/tela1-vm-builder.png)

### 3. Abre la Colección

Haz clic en el botón **visualizar slices** para comenzar a configurar tu colección:

![Visualizar Slices](/img/tela2-vm-builder.png)

### 4. Configura la Información de la Colección

Verás una página dividida en dos partes:

**Sección Superior**: Información de la colección
- Nombre de la colección
- Descripción
- URL (endpoint) para usar esta colección en tu sitio
- Botón generar enlace (feed móvil para visualizar productos de la colección - slice activo)

**Sección Inferior**: Slices (versiones de la colección)

### 5. Entendiendo los Slices

Los slices son diferentes versiones de tu colección. Puedes crear varios, pero solo uno está activo a la vez.

**¿Por qué usar slices?**
- Preparar una nueva versión sin afectar la que está en vivo
- Realizar pruebas A/B con diferentes productos
- Tener versiones estacionales listas para activar

### 6. Crea un Slice

Crea tu primer slice:

![Crear Slice](/img/tela3-vm-builder.png)

Al crear un slice, necesitarás configurar:

- **Nombre del slice**: Dale un nombre descriptivo (ej: "Abrigos de Lana", "Productos Oferta Verano")
- **Tipo**: Elige el tipo de slice:
  - `MANUAL`: Tú seleccionas y organizas los productos manualmente
  - Otros tipos pueden estar disponibles pronto
- **Fecha de inicio**: Cuándo el slice debe activarse
- **Fecha de término**: Cuándo el slice debe expirar

> **Consejo**: Para un slice sin expiración, establece una fecha de término distante (ej: varios años en el futuro).

#### Indicadores de Estado del Slice

Los slices tienen indicadores visuales de estado basados en sus fechas:
- 🟩 **Verde (Activo)**: La fecha actual está entre la fecha de inicio y término
- 🟨 **Amarillo (Programado)**: La fecha de inicio aún no ha llegado
- 🟥 **Rojo (Expirado)**: La fecha de término ya pasó

### 7. Añade Productos

Haz clic en **Seleccionar Productos** para elegir qué productos formarán parte de la colección.

Selecciona los que deseas agregar.

### 8. Organiza el Orden de los Productos

Arrastra los productos para definir el orden en que aparecerán en tu sitio web.

**Antes de ordenar:**
![Arrastrar Productos - Estado Inicial](/img/tela4-vm-builder.png)

**Después de ordenar:**
![Arrastrar Productos - Organizado](/img/tela5-vm-builder.png)

> **Consejo**: Los productos aparecerán en el sitio exactamente en el orden que definas aquí.

### 9. Límites de Productos y Estado Activo

**Límites Importantes:**
- Cada slice puede contener **hasta 500 productos como máximo**
- Si necesitas más productos, considera crear múltiples colecciones

**Estado Activo del Producto:**
Cada producto en un slice tiene un campo `active` que indica si el producto está actualmente disponible según los filtros aplicados al slice. Esto es útil para:
- Ocultar productos sin stock
- Aplicar filtros de disponibilidad
- Gestionar productos estacionales

## Publicando tu Colección

Cuando tu colección esté lista:

1. Revisa que todos los productos sean correctos
2. Verifica que el orden sea como deseas
3. Selecciona el período en que este slice debe estar activo

¡Listo! Tu colección estará disponible en el sitio web.

## Consejos Importantes

**Da nombres claros**: "Verano 2024", "Oferta Black Friday", etc.

**Crea slices extras**: Siempre ten una versión de respaldo lista

**Solo uno activo**: Recuerda que solo un slice está activo a la vez

**Prueba primero**: Siempre revisa antes de activar un nuevo slice

## Preguntas Frecuentes

**¿Puedo tener múltiples colecciones?**
¡Sí! Crea tantas colecciones como necesites para diferentes secciones de tu sitio.

**¿Cómo sé cuál slice está activo?**
El slice activo tendrá un indicador visual en la interfaz.

**¿Cuánto tiempo tarda en actualizar en el sitio?**
Los cambios aparecen casi instantáneamente después de activar un slice.

---

**¿Necesitas ayuda?** Contacta con nuestro equipo de soporte.