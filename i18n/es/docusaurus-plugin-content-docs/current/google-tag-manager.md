---
sidebar_position: 4
---

# Guía de Configuración de Google Tag Manager

Esta guía integral detalla cómo configurar Google Tag Manager para capturar y enviar eventos de Fashion.AI a Google Analytics 4.

## Configuración de Variables

### Crear variables en GTM

1. En el menú lateral, haz clic en **Variables > Nueva**
2. **Tipo**: Variable de capa de datos

Crea las siguientes variables:
- `event_category`
- `event_label`
- `value`

## Configuración de Activadores (Triggers)

### Activador: Visualización de recomendación

1. **Activadores > Nuevo**
2. **Tipo**: Evento personalizado
3. **Nombre del Evento**: `fashionai_view_shopthelook`

### Activador: Clic en recomendación

1. **Activadores > Nuevo**
2. **Tipo**: Evento personalizado
3. **Nombre del Evento**: `fashionai_click_shopthelook`

### Activador: Agregar al carrito

1. **Activadores > Nuevo**
2. **Tipo**: Evento personalizado
3. **Nombre del Evento**: `fashionai_addtocart_shopthelook`

## Configuración de Etiquetas GA4

### GA4 - Visualización de recomendación

1. **Etiquetas > Nueva**
2. **Tipo**: Google Analytics: evento de GA4
3. **ID de medición**: tu ID de medición (G-XXXXXXX)
4. **Nombre del Evento**: `fashionai_view_shopthelook`
5. **Parámetros**:
   - `event_category`: `{{event_category}}`
   - `event_label`: `{{event_label}}`
   - `value`: `{{value}}`
6. **Activación**: activador `fashionai_view_shopthelook`

### GA4 - Clic en recomendación

1. **Etiquetas > Nueva**
2. **Tipo**: Google Analytics: evento de GA4
3. **ID de medición**: tu ID de medición (G-XXXXXXX)
4. **Nombre del Evento**: `fashionai_click_shopthelook`
5. **Parámetros**:
   - `event_category`: `{{event_category}}`
   - `event_label`: `{{event_label}}`
   - `value`: `{{value}}`
6. **Activación**: activador `fashionai_click_shopthelook`

### GA4 - Agregar al carrito

1. **Etiquetas > Nueva**
2. **Tipo**: Google Analytics: evento de GA4
3. **ID de medición**: tu ID de medición (G-XXXXXXX)
4. **Nombre del Evento**: `fashionai_addtocart_shopthelook`
5. **Parámetros**:
   - `event_category`: `{{event_category}}`
   - `event_label`: `{{event_label}}`
   - `value`: `{{value}}`
6. **Activación**: activador `fashionai_addtocart_shopthelook`

## Pruebas y Validación

### Probar con modo Vista Previa

1. Haz clic en **Vista Previa** en GTM
2. Accede al sitio web, dispara eventos y verifica que las etiquetas aparezcan en Tag Assistant
3. Valida que los parámetros se enviaron correctamente

### Lista de Verificación de Validación

- [ ] Variables creadas correctamente
- [ ] Activadores configurados para los eventos correctos
- [ ] Etiquetas GA4 con ID de medición correcto
- [ ] Parámetros mapeados a variables
- [ ] Prueba en modo Vista Previa ejecutada exitosamente
- [ ] Eventos apareciendo en GA4 Debug View