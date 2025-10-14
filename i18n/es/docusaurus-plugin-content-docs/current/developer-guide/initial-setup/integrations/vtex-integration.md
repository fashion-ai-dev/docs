# Integración de VTEX

Guía completa para integrar FashionAI con tu tienda VTEX para enriquecimiento automático de productos y gestión de catálogo.

## Configuración Inicial

### 1. Habilitar Vision Enrichment

1. En el menú derecho de la plataforma, haz clic en **Configuración**
2. En **Configuración General**, habilita el botón **Vision Enrichment**

### 2. Configurar Ajustes de VTEX

1. Ve a la pestaña **Configuración de VTEX**
2. Inserta tus credenciales de API de VTEX para sincronización de datos

## Permisos Requeridos

Para una autenticación y autorización adecuadas dentro del ecosistema VTEX, tu token debe tener permisos específicos otorgados. A continuación se muestra una tabla con los accesos necesarios y sus respectivos ámbitos:

| Producto | Categoría | Recurso |
|---------|----------|----------|
| Catalog | Content | Product and SKU Management |
| Catalog | Content | Category Management |
| Catalog | Content | Category |
| Catalog | Content | SKUs |
| OMS | OMS Access | List Orders |
| OMS | OMS Access | View Order |
| Checkout | Checkout Resources | Full Order Access |

## Configuración del Sistema de Afiliados

### Cómo Configurar el Sistema de Afiliados para Consumo de Catálogo

Para permitir que FashionAI consuma tu catálogo VTEX, necesitas crear una configuración de afiliado.

### Creación de un Afiliado

1. En el menú lateral del admin, haz clic en **Gestión de Pedidos**
2. Haz clic en **Configuración**
3. Haz clic en la pestaña **Afiliados**
4. Haz clic en el botón **Nuevo Afiliado**
5. Completa los campos del panel Nuevo Afiliado:

| Campo | Valor |
|-------|-------|
| **Nombre** | FashionAI |
| **ID** | FFF |
| **Política Comercial** | 1 |
| **Email de Seguimiento** | vtex@generativecrm.com |
| **Endpoint de Búsqueda** | Generar Enlace |
| **Versión del Endpoint de Búsqueda** | 1.x.x |
| **Usar mi método de pago** | ❌ No marques esta opción |

6. Haz clic en **Guardar**

### Nota Importante

Si alguna de las informaciones del campo del panel de afiliados es diferente, por favor completa el formulario que se proporcionará a continuación.

## Próximos Pasos

Después de completar la configuración de afiliados:

1. **Probar la conexión** - Verifica que FashionAI pueda acceder a tu catálogo
2. **Configurar reglas de enriquecimiento** - Configura qué productos deben ser procesados
3. **Monitorear sincronización** - Verifica el estado de integración en la plataforma

## Solución de Problemas

### Problemas Comunes

- **Errores de autenticación**: Verifica credenciales de API y permisos
- **Fallas de sincronización**: Verifica la configuración de afiliados y endpoints
- **Productos faltantes**: Asegúrate de que la política comercial incluya todos los artículos deseados

### Soporte

Para soporte técnico con la integración de VTEX, contacta a nuestro equipo en vtex@generativecrm.com
