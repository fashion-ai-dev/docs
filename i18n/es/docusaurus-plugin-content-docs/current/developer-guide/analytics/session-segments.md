---
sidebar_position: 5
---

# Análisis de Segmentos de Sesión y ARPU

Esta guía explica cómo crear segmentos de sesión en Google Analytics 4 para comparar el impacto de Fashion.AI en las métricas de conversión y ARPU (Average Revenue Per User).

## Descripción General

Crear segmentos de sesión permite comparar el comportamiento y el rendimiento entre usuarios que interactuaron con recomendaciones de Fashion.AI y aquellos que no, permitiendo medir el impacto real de la herramienta en las conversiones y el carrito.

## Métricas Principales

- **ARPU (Average Revenue Per User)**: Ingresos promedio por usuario
- **Tasa de Conversión**: Porcentaje de sesiones que resultan en compra
- **Add to Cart Rate**: Porcentaje de sesiones con adición al carrito
- **Tasa de Cliques**: Porcentaje de visualizaciones que generan clics

## Estructura de Segmentos

Vamos a crear 4 segmentos para análisis comparativo:

1. **Purchase CON Fashion.AI**: Sesiones con compra E interacción con Fashion.AI
2. **Purchase SIN Fashion.AI**: Sesiones con compra PERO sin interacción con Fashion.AI
3. **Add to Cart CON Fashion.AI**: Sesiones con add to cart E interacción con Fashion.AI
4. **Add to Cart SIN Fashion.AI**: Sesiones con add to cart PERO sin interacción con Fashion.AI

## Creando los Segmentos

### Segmento 1: Purchase CON Fashion.AI

Este segmento identifica usuarios que realizaron una compra E interactuaron con Fashion.AI.

#### Paso a Paso

1. **Acceda a Google Analytics 4**
   - Vaya a **Explorar > Crear una exploración en blanco**

2. **Crear el Segmento**
   - En la pestaña **Variables**, haga clic en **+** junto a **Segmentos**
   - Seleccione **Crear un segmento personalizado**
   - Elija **Segmento de sesión**

3. **Configurar las Condiciones**
   - Nombre: `Purchase CON Fashion.AI`
   - Agregue un **grupo de condiciones** con operador **Y** entre los grupos:

   **Grupo 1: Tuvo Purchase**
   ```
   purchase
   ```

   **Grupo 2: Interactuó con Fashion.AI**
   ```
   fashionai_click
   ```

4. **Guardar el Segmento**
   - Haga clic en **Guardar y aplicar**

### Segmento 2: Purchase SIN Fashion.AI

Este segmento identifica usuarios que realizaron una compra PERO NO interactuaron con Fashion.AI.

#### Paso a Paso

1. **Crear Nuevo Segmento**
   - En la pestaña **Variables**, haga clic en **+** junto a **Segmentos**
   - Seleccione **Crear un segmento personalizado**
   - Elija **Segmento de sesión**

2. **Configurar las Condiciones**
   - Nombre: `Purchase SIN Fashion.AI`
   - Agregue un **grupo de condiciones** con operador **Y** entre los grupos:

   **Grupo 1: Tuvo Purchase**
   ```
   purchase
   ```

   **Grupo 2: NO Interactuó con Fashion.AI, haga clic en "Agregar Grupo de Exclusión"**
   ```
   fashionai_click
   ```

3. **Guardar el Segmento**
   - Haga clic en **Guardar y aplicar**

### Segmento 3: Add to Cart CON Fashion.AI

Este segmento identifica usuarios que agregaron al carrito E interactuaron con Fashion.AI.

#### Paso a Paso

1. **Crear Nuevo Segmento**
   - En la pestaña **Variables**, haga clic en **+** junto a **Segmentos**
   - Seleccione **Crear un segmento personalizado**
   - Elija **Segmento de sesión**

2. **Configurar las Condiciones**
   - Nombre: `Add to Cart CON Fashion.AI`
   - Agregue un **grupo de condiciones** con operador **Y** entre los grupos:

   **Grupo 1: Tuvo Add to Cart**
   ```
   add_to_cart
   ```

   **Grupo 2: Interactuó con Fashion.AI (use operador O entre las condiciones a continuación)**
   ```
   fashionai_addtocart (productos similares y vitrinas)
   O
   fashionai_addtocart_shopthelook (botón de compre el look en la página de producto)
   ```

3. **Guardar el Segmento**
   - Haga clic en **Guardar y aplicar**

### Segmento 4: Add to Cart SIN Fashion.AI

Este segmento identifica usuarios que agregaron al carrito PERO NO interactuaron con Fashion.AI.

#### Paso a Paso

1. **Crear Nuevo Segmento**
   - En la pestaña **Variables**, haga clic en **+** junto a **Segmentos**
   - Seleccione **Crear un segmento personalizado**
   - Elija **Segmento de sesión**

2. **Configurar las Condiciones**
   - Nombre: `Add to Cart SIN Fashion.AI`
   - Agregue un **grupo de condiciones** con operador **Y** entre los grupos:

   **Grupo 1: Tuvo Add to Cart**
   ```
   add_to_cart
   ```

   **Grupo 2: NO Interactuó con Fashion.AI, haga clic en "Agregar Grupo de Exclusión"**
   ```
   Nombre del evento | no coincide exactamente | fashionai_addtocart
   O
   Nombre del evento | no coincide exactamente | fashionai_addtocart_shopthelook
   ```

3. **Guardar el Segmento**
   - Haga clic en **Guardar y aplicar**

## Configurando el Análisis Comparativo

### Agregar Métricas

En la sección **Métricas** de su exploración, agregue:

1. **Sesiones**: Métrica estándar
2. **Usuarios activos**: Para calcular ARPU
3. **Transacciones**: Número de compras
4. **Ingresos**: Ingresos totales
5. **Eventos add_to_cart**: Total de adiciones al carrito
6. **Tasa de conversión**: Porcentaje de conversión

### Agregar Dimensiones

En la sección **Dimensiones**, agregue:

1. **Nombre del segmento**: Para comparar los segmentos
2. **Fecha**: Para análisis temporal
3. **Origen de la sesión**: Para análisis de canal

### Crear Tabla de Comparación

1. **Configurar la Tabla**
   - Formato: Tabla
   - Filas: Nombre del segmento
   - Valores: Todas las métricas agregadas

2. **Agregar Columna Calculada para ARPU**
   - Haga clic en **Métricas > Agregar métrica calculada**
   - Nombre: `ARPU (Average Revenue Per User)`
   - Fórmula: `Ingresos / Usuarios activos`
   - Formato: Moneda

3. **Agregar Columna Calculada para Tasa de Add to Cart**
   - Haga clic en **Métricas > Agregar métrica calculada**
   - Nombre: `Tasa de Add to Cart`
   - Fórmula: `Eventos add_to_cart / Sesiones`
   - Formato: Porcentual

4. **Agregar Columna Calculada para Tasa de Cliques (CTR)**
   - Haga clic en **Métricas > Agregar métrica calculada**
   - Nombre: `CTR Fashion.AI (%)`
   - Fórmula: `Eventos fashionai_click / Eventos fashionai_view`
   - Formato: Porcentual
   - **Importante**: Esta métrica muestra cuántos usuarios que vieron las recomendaciones realmente hicieron clic

5. **Agregar Columna Calculada para View Rate**
   - Haga clic en **Métricas > Agregar métrica calculada**
   - Nombre: `View Rate (%)`
   - Fórmula: `Eventos fashionai_view / Sesiones`
   - Formato: Porcentual
   - **Importante**: Esta métrica muestra qué porcentaje de usuarios se desplazaron hasta ver las recomendaciones

## Interpretando los Resultados

### Análisis 1: Comparación de Purchase

Compare los segmentos **Purchase CON Fashion.AI** vs **Purchase SIN Fashion.AI**

| Métrica | Purchase CON Fashion.AI | Purchase SIN Fashion.AI | Diferencia |
|---------|-------------------------|-------------------------|-----------|
| Sesiones | 5.000 | 8.000 | - |
| Usuarios | 4.200 | 6.500 | - |
| Transacciones | 5.000 | 8.000 | - |
| Ingresos | $ 125.000 | $ 120.000 | - |
| **ARPU** | **$ 29,76** | **$ 18,46** | **+61%** |
| **Ticket Promedio** | **$ 25,00** | **$ 15,00** | **+67%** |

**Insights Esperados:**
- Usuarios que compran después de interactuar con Fashion.AI tienden a tener un ARPU mayor
- El ticket promedio superior indica que las recomendaciones influyen en el valor de la compra, sugiriendo piezas que el cliente realmente comprará

### Análisis 2: Comparación de Add to Cart

Compare los segmentos **Add to Cart CON Fashion.AI** vs **Add to Cart SIN Fashion.AI**

| Métrica | Add to Cart CON Fashion.AI | Add to Cart SIN Fashion.AI | Diferencia |
|---------|---------------------------|---------------------------|-----------|
| Sesiones | 12.000 | 25.000 | - |
| Usuarios | 10.000 | 20.000 | - |
| Add to Cart | 15.000 | 30.000 | - |
| Transacciones | 3.600 | 5.000 | - |
| **Tasa de Conversión** | **30%** | **20%** | **+50%** |
| **Elementos por Sesión** | **1,25** | **1,20** | **+4%** |

**Insights Esperados:**
- Usuarios que agregan al carrito con Fashion.AI convierten más
- La mayor tasa de conversión indica mejor calidad de las recomendaciones
- Fashion.AI aumenta la intención de compra

### Análisis 4: Enganche con Recomendaciones (View vs Click)

Este análisis es **crucial** ya que las recomendaciones generalmente están al final de la página.

> **Importante**: El evento `fashionai_view` solo se dispara cuando las recomendaciones están **visibles en el viewport** (scroll tracking), no cuando solo se cargan en la página. Esto significa que este evento ya mide cuántos usuarios realmente vieron las recomendaciones.

## Dashboards e Informes

### Dashboard 1: Descripción General de Purchase

- ARPU: Purchase CON vs SIN Fashion.AI
- Volumen de transacciones por segmento
- Ticket promedio comparativo
- Ingresos totales por segmento

### Dashboard 2: Análisis de Add to Cart

- Tasa de add to cart: CON vs SIN Fashion.AI
- Tasa de conversión de carrito a compra
- Elementos promedio por carrito
- Abandono de carrito comparativo

### Dashboard 3: Embudo de Conversión

Visualización del embudo completo:
```
Sesiones
  ↓
Visualizaciones Fashion.AI
  ↓
Clics Fashion.AI
  ↓
Add to Cart
  ↓
Purchase
```

Con métricas de conversión en cada etapa para ambos grupos.

**Preguntas?** Consulte la documentación de [Google Analytics 4](./google-analytics) o [Google Tag Manager](./google-tag-manager).
