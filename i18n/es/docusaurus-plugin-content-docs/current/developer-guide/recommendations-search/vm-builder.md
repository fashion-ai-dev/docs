---
sidebar_position: 5
---


# VM Builder – Colecciones y Subconjuntos (Slices)

El **VM Builder** te permite crear y organizar colecciones de productos usando **IA, hojas de cálculo o selección manual**.
Cada colección puede contener subconjuntos llamados **slices**, que organizan productos según criterios definidos.

## 1. Creación de una Colección

1. Haz clic en **Nueva Colección**.
2. Ingresa:
   - **Nombre de la colección** (ej., `Colección Invierno 2025`).
   - **Descripción de la colección** (ej., `Productos de invierno`).
3. Guarda la colección.

La colección se listará en la pantalla principal, mostrando:
- Nombre
- Descripción
- Fecha de creación
- Número de slices existentes

## 2. Creación de un Subconjunto (Slice)

1. Dentro de la colección, haz clic en **Nuevo Slice**.
2. Completa:
   - **Nombre del slice** (ej., `Abrigos de Lana`).
   - **Tipo** (`MANUAL`, u otros tipos si están disponibles).
   - **Fecha de inicio** (cuando se vuelve **activo**).
   - **Fecha de fin** (cuando **expira**).

> Para un slice sin expiración, usa una **fecha de fin distante**.

### Estado del slice (basado en fechas)
- 🟩 **Verde – Activo** (entre fecha de inicio y fin).
- 🟨 **Amarillo – Programado** (aún no ha comenzado).
- 🟥 **Rojo – Expirado** (fecha de fin ha pasado).

## 3. Gestión de Productos en Slice

Dentro de cada slice puedes:
- ➕ **Agregar productos**
- ➖ **Eliminar productos**
- 🔀 **Reposicionar productos** (definir el orden/`position`)

**Límite:** cada slice puede contener **hasta 500 productos**.

El campo `active` devuelto por producto en la API respeta los **filtros aplicados** al slice.

## 4. Consulta de Productos de Colección vía API

En la página de la colección, hay un endpoint para consultar los productos del **slice activo**.

### Endpoint
```http
GET https://catalog.api.fashionaiale.com/api/v1/merchandising-collections/protected/{id}
```

### Encabezados
```http
X-FashionAI-APP-Token: <app-token>
```

### Reglas de la API
- La API devuelve **solo 1 slice activo**.
- Si hay **múltiples** activos, devuelve el que tiene la **fecha de inicio más reciente**.
- Si **no hay** slice activo, devuelve **HTTP 404**.

## 5. Ejemplo de Respuesta (payload)

```json
{
  "collectionId": 1,
  "collectionName": "Colección Invierno 2025",
  "collectionDescription": "Productos de invierno",
  "sliceId": 10,
  "sliceName": "Abrigos de Lana",
  "startsAt": "2025-09-23T00:00:00.000Z",
  "endsAt": "2025-12-31T23:59:59.000Z",
  "products": [
    {
      "productId": "12345",
      "position": 1,
      "active": true
    },
    {
      "productId": "12346",
      "position": 2,
      "active": false
    }
  ]
}
```

### Campos Importantes
- `position`: orden del producto en el slice.
- `active`: indica si el producto está activo según los **filtros** del slice.

## 6. Restricciones

- ✅ Máximo de **500 productos por slice**.
- ✅ Un slice puede crearse **sin expiración** (estableciendo una fecha de fin distante).
- ❌ Sin slice activo → **la API no devuelve productos** (HTTP 404).

## 7. Notas de Mejores Prácticas

- Nombra las colecciones y slices claramente para facilitar el mantenimiento.
- Evita mantener más de un slice activo al mismo tiempo, para reducir ambigüedades.  

