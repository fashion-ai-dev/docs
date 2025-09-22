# Integración VTEX

Guía completa para integrar FashionAI con tu tienda VTEX para enriquecimiento automático de productos y gestión de catálogo.

## Configuración Inicial

### 1. Habilitar Vision Enrichment

1. En el menú derecho de la plataforma, haz clic en **Settings**
2. En **General Settings**, habilita el botón **Vision Enrichment**

### 2. Configurar VTEX Settings

1. Ve a la pestaña **VTEX Settings**
2. Inserta tus credenciales de API VTEX para sincronización de datos

## Permisos Requeridos

Para garantizar la autenticación y autorización correctas dentro del ecosistema VTEX, tu token debe tener permisos específicos otorgados. A continuación hay una tabla con los accesos necesarios y sus respectivos alcances:

| Producto | Categoría | Recurso |
|----------|-----------|---------|
| Catálogo | Contenido | Gestión de Productos y SKUs |
| Catálogo | Contenido | Gestión de Categorías |
| Catálogo | Contenido | Categoría |
| Catálogo | Contenido | SKUs |
| OMS | Acceso OMS | Listar Pedidos |
| OMS | Acceso OMS | Ver Pedido |
| Checkout | Recursos de Checkout | Acceso Completo a Pedidos |

## Configuración del Sistema de Afiliados

### Cómo Configurar el Sistema de Afiliados para Consumo de Catálogo

Para permitir que FashionAI consuma tu catálogo VTEX, necesitas crear una configuración de afiliado.

### Creando un Afiliado

1. En el menú lateral del admin, haz clic en **Gestión de Pedidos**
2. Haz clic en **Configuraciones**
3. Haz clic en la pestaña **Afiliados**
4. Haz clic en el botón **Nuevo Afiliado**
5. Completa los campos del panel de Nuevo Afiliado:

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

Si alguna de la información de los campos del panel de afiliado es diferente, por favor, completa el formulario que se proporcionará a continuación.

## Próximos Pasos

Después de completar la configuración del afiliado:

1. **Prueba la conexión** - Verifica que FashionAI pueda acceder a tu catálogo
2. **Configura reglas de enriquecimiento** - Establece qué productos deben ser procesados
3. **Monitorea la sincronización** - Verifica el estado de la integración en la plataforma

## Solución de Problemas

### Problemas Comunes

- **Errores de autenticación**: Verifica credenciales de API y permisos
- **Fallos de sincronización**: Verifica configuración de afiliado y endpoints
- **Productos faltantes**: Asegúrate de que la política comercial incluya todos los elementos deseados

### Soporte

Para soporte técnico con integración VTEX, contacta a nuestro equipo en vtex@generativecrm.com