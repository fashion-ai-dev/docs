---
sidebar_position: 4
---

# Guía de Configuración del Google Tag Manager

Esta guía completa detalla cómo configurar Google Tag Manager para capturar y enviar eventos de Fashion.AI a Google Analytics 4.

## Configuración de Variables

### Crear Variables en GTM

1. En el menú lateral, haga clic en **Variables > Nueva**
2. **Tipo**: Variable de Capa de Datos

Cree las siguientes variables:
- `event_category`
- `event_label`
- `value`

## Configuración de Activadores

### Activador: Visualización de Recomendación

1. **Activadores > Nuevo**
2. **Tipo**: Evento Personalizado
3. **Nombre del Evento**: `fashionai_view`

### Activador: Clic de Recomendación

1. **Activadores > Nuevo**
2. **Tipo**: Evento Personalizado
3. **Nombre del Evento**: `fashionai_click`

### Activador: Visualización Shop The Look

1. **Activadores > Nuevo**
2. **Tipo**: Evento Personalizado
3. **Nombre del Evento**: `fashionai_view_shopthelook`

### Activador: Clic Shop The Look

1. **Activadores > Nuevo**
2. **Tipo**: Evento Personalizado
3. **Nombre del Evento**: `fashionai_click_shopthelook`

### Activador: Agregar al Carrito (General)

1. **Activadores > Nuevo**
2. **Tipo**: Evento Personalizado
3. **Nombre del Evento**: `fashionai_addtocart`

### Activador: Agregar al Carrito (Shop The Look)

1. **Activadores > Nuevo**
2. **Tipo**: Evento Personalizado
3. **Nombre del Evento**: `fashionai_addtocart_shopthelook`

## Configuración de Etiquetas GA4

### GA4 - Visualización de Recomendación

1. **Etiquetas > Nueva**
2. **Tipo**: Google Analytics: Evento GA4
3. **ID de Medición**: su ID de Medición (G-XXXXXXX)
4. **Nombre del Evento**: `fashionai_view`
5. **Parámetros**:
   - `event_category`: `{{event_category}}`
   - `event_label`: `{{event_label}}`
   - `value`: `{{value}}`
6. **Activación**: activador `fashionai_view`

### GA4 - Clic de Recomendación

1. **Etiquetas > Nueva**
2. **Tipo**: Google Analytics: Evento GA4
3. **ID de Medición**: su ID de Medición (G-XXXXXXX)
4. **Nombre del Evento**: `fashionai_click`
5. **Parámetros**:
   - `event_category`: `{{event_category}}`
   - `event_label`: `{{event_label}}`
   - `value`: `{{value}}`
6. **Activación**: activador `fashionai_click`

### GA4 - Agregar al Carrito (General)

1. **Etiquetas > Nueva**
2. **Tipo**: Google Analytics: Evento GA4
3. **ID de Medición**: su ID de Medición (G-XXXXXXX)
4. **Nombre del Evento**: `fashionai_addtocart`
5. **Parámetros**:
   - `event_category`: `{{event_category}}`
   - `event_label`: `{{event_label}}`
   - `value`: `{{value}}`
6. **Activación**: activador `fashionai_addtocart`

### Recuerde agregar las etiquetas de compre el look (shop the look)

### Probar con Modo de Visualización

1. Haga clic en **Visualizar** en GTM
2. Acceda al sitio, dispare eventos y verifique si las etiquetas aparecen en el Asistente de Etiquetas
3. Valide si los parámetros se enviaron correctamente
