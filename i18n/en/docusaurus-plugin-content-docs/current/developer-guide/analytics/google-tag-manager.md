---
sidebar_position: 4
---

# Google Tag Manager Setup Guide

This comprehensive guide details how to configure Google Tag Manager to capture and send Fashion.AI events to Google Analytics 4.

## Variable Configuration

### Create Variables in GTM

1. In the sidebar menu, click **Variables > New**
2. **Type**: Data Layer Variable

Create the following variables:
- `event_category`
- `event_label`
- `value`

## Trigger Configuration

### Trigger: Recommendation View

1. **Triggers > New**
2. **Type**: Custom Event
3. **Event Name**: `fashionai_view`

### Trigger: Recommendation Click

1. **Triggers > New**
2. **Type**: Custom Event
3. **Event Name**: `fashionai_click`

### Trigger: Shop The Look View

1. **Triggers > New**
2. **Type**: Custom Event
3. **Event Name**: `fashionai_view_shopthelook`

### Trigger: Shop The Look Click

1. **Triggers > New**
2. **Type**: Custom Event
3. **Event Name**: `fashionai_click_shopthelook`

### Trigger: Add to Cart (General)

1. **Triggers > New**
2. **Type**: Custom Event
3. **Event Name**: `fashionai_addtocart`

### Trigger: Add to Cart (Shop The Look)

1. **Triggers > New**
2. **Type**: Custom Event
3. **Event Name**: `fashionai_addtocart_shopthelook`

## GA4 Tag Configuration

### GA4 - Recommendation View

1. **Tags > New**
2. **Type**: Google Analytics: GA4 Event
3. **Measurement ID**: your Measurement ID (G-XXXXXXX)
4. **Event Name**: `fashionai_view`
5. **Parameters**:
   - `event_category`: `{{event_category}}`
   - `event_label`: `{{event_label}}`
   - `value`: `{{value}}`
6. **Triggering**: trigger `fashionai_view`

### GA4 - Recommendation Click

1. **Tags > New**
2. **Type**: Google Analytics: GA4 Event
3. **Measurement ID**: your Measurement ID (G-XXXXXXX)
4. **Event Name**: `fashionai_click`
5. **Parameters**:
   - `event_category`: `{{event_category}}`
   - `event_label`: `{{event_label}}`
   - `value`: `{{value}}`
6. **Triggering**: trigger `fashionai_click`

### GA4 - Add to Cart (General)

1. **Tags > New**
2. **Type**: Google Analytics: GA4 Event
3. **Measurement ID**: your Measurement ID (G-XXXXXXX)
4. **Event Name**: `fashionai_addtocart`
5. **Parameters**:
   - `event_category`: `{{event_category}}`
   - `event_label`: `{{event_label}}`
   - `value`: `{{value}}`
6. **Triggering**: trigger `fashionai_addtocart`

### Remember to add the shop the look tags

### Test with Preview Mode

1. Click **Preview** in GTM
2. Access the website, trigger events and verify that tags appear in Tag Assistant
3. Validate that parameters were sent correctly
