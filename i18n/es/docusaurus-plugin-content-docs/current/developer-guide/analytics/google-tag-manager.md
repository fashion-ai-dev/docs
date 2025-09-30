---
sidebar_position: 4
---

# Guía de Configuración de Google Tag Manager

Esta guía completa detalla cómo configurar Google Tag Manager para capturar y enviar eventos de Fashion.AI a Google Analytics 4.

## Configuración de Variables

### Crear Variables en GTM

1. En el menú lateral, haz clic en **Variables > Nueva**
2. **Tipo**: Variable de Capa de Datos

Crea las siguientes variables:
- `event_category`
- `event_label`
- `value`

## Configuración de Activadores

### Activador: Vista de Recomendación

1. **Activadores > Nuevo**
2. **Tipo**: Evento Personalizado
3. **Nombre del Evento**: `fashionai_view_shopthelook`

### Activador: Clic de Recomendación

1. **Activadores > Nuevo**
2. **Tipo**: Evento Personalizado
3. **Nombre del Evento**: `fashionai_click_shopthelook`

### Activador: Agregar al Carrito

1. **Activadores > Nuevo**
2. **Tipo**: Evento Personalizado
3. **Nombre del Evento**: `fashionai_addtocart_shopthelook`

## Configuración de Etiquetas GA4

### GA4 - Vista de Recomendación

1. **Etiquetas > Nueva**
2. **Tipo**: Google Analytics: Evento GA4
3. **ID de Medición**: tu ID de Medición (G-XXXXXXX)
4. **Nombre del Evento**: `fashionai_view_shopthelook`
5. **Parámetros**:
   - `event_category`: `{{event_category}}`
   - `event_label`: `{{event_label}}`
   - `value`: `{{value}}`
6. **Activación**: activador `fashionai_view_shopthelook`

### GA4 - Clic de Recomendación

1. **Etiquetas > Nueva**
2. **Tipo**: Google Analytics: Evento GA4
3. **ID de Medición**: tu ID de Medición (G-XXXXXXX)
4. **Nombre del Evento**: `fashionai_click_shopthelook`
5. **Parámetros**:
   - `event_category`: `{{event_category}}`
   - `event_label`: `{{event_label}}`
   - `value`: `{{value}}`
6. **Activación**: activador `fashionai_click_shopthelook`

### GA4 - Agregar al Carrito

1. **Etiquetas > Nueva**
2. **Tipo**: Google Analytics: Evento GA4
3. **ID de Medición**: tu ID de Medición (G-XXXXXXX)
4. **Nombre del Evento**: `fashionai_addtocart_shopthelook`
5. **Parámetros**:
   - `event_category`: `{{event_category}}`
   - `event_label`: `{{event_label}}`
   - `value`: `{{value}}`
6. **Activación**: activador `fashionai_addtocart_shopthelook`

## Pruebas y Validación

### Probar con Modo de Vista Previa

1. Haz clic en **Vista Previa** en GTM
2. Accede al sitio web, activa eventos y verifica que las etiquetas aparezcan en Tag Assistant
3. Valida que los parámetros se enviaron correctamente

### Lista de Verificación de Validación

- [ ] Variables creadas correctamente
- [ ] Activadores configurados para los eventos correctos
- [ ] Etiquetas GA4 con ID de Medición correcto
- [ ] Parámetros mapeados a variables
- [ ] Prueba en modo vista previa ejecutada exitosamente
- [ ] Eventos apareciendo en Vista de Depuración GA4