# Integración Shopify

Guía completa para integrar FashionAI con tu tienda Shopify para enriquecimiento automatizado de productos y gestión de catálogo.

## Configuración Inicial

Para integrar tu tienda Shopify con nuestra plataforma, necesitarás crear una aplicación personalizada en el admin de Shopify y generar credenciales de API. Estas credenciales permitirán que nuestro sistema se conecte de forma segura con tu tienda y acceda a los datos necesarios.

### Paso 1: Acceder al Admin de Shopify

1. Inicia sesión en Shopify como administrador
2. En el menú lateral, haz clic en **Configuraciones**
3. Ve a **Aplicaciones y canales de venta**

### Paso 2: Crear una Aplicación Personalizada

1. Haz clic en **Desarrollar aplicaciones**
2. Haz clic en **Crear una aplicación**
3. Dale un nombre a la aplicación, ej.: **Integración FashionAI API**
4. Haz clic en **Crear aplicación**

### Paso 3: Configurar Permisos de API

En la aplicación creada, ve a la pestaña **Credenciales de API**.

1. Haz clic en **Configurar alcances de Admin API**
2. Selecciona los siguientes permisos:

| Permiso | Descripción |
|---------|-------------|
| **read_products** | Para leer productos |
| **write_products** | Para editar productos (incluyendo imágenes) |
| **read_publications** | Para leer publicaciones |
| **read_inventory** | Para leer inventario |
| **read_customers** | Para leer clientes |
| **read_orders** | Para leer pedidos |
| **read_marketplace_orders** | Para leer pedidos realizados a través de marketplaces |
| **read_buyer_membership_orders** | Para leer pedidos relacionados con membresías de compradores |

3. Haz clic en **Guardar**

### Paso 4: Generar la Clave de API y Token de Acceso

Aún en la pestaña **Credenciales de API**:

1. Haz clic en **Instalar aplicación**
2. Confirma la instalación
3. Shopify generará las siguientes credenciales:
   - **Token de Acceso de Admin API** (¡Este token se muestra solo una vez! Guárdalo inmediatamente)

## Credenciales Necesarias

Después de completar la configuración, tendrás:

- **Store URL**: `https://tu-tienda.myshopify.com`
- **Admin API Access Token**: Token generado en el paso 4

## Configuración en la Plataforma FashionAI

### 1. Habilitar Vision Enrichment

1. En el menú derecho de la plataforma, haz clic en **Configuraciones**
2. En **Configuraciones Generales**, habilita el botón **Vision Enrichment**

### 2. Configurar Credenciales Shopify

1. Ve a la pestaña **Configuraciones Shopify**
2. Inserta tus credenciales de API Shopify para sincronización de datos:
   - **Store URL**: Tu URL de tienda Shopify
   - **Access Token**: El token generado anteriormente

### 3. Configuración Adicional

Puedes dejar cualquier campo en blanco si quieres ignorar esa regla.

**Canales de Venta (IDs de Publicación)**
Ingresa los IDs separados por coma, ej.: `123,456`
Estos son los IDs de publicación (canales de venta) donde el producto estará disponible. Si necesitas configurar más de uno, sepáralos con una coma.

**Vendedores Excluidos**
Ingresa nombres de vendedores separados por coma, ej.: `Nike,Adidas,Puma`
Estos son los vendedores (marcas) que serán excluidos del procesamiento. Si necesitas agregar múltiples vendedores, sepáralos con una coma.

**Origen del Pedido (Plataforma de Venta)**
Ingresa el nombre del origen del pedido, ej.: `web,pos,api`
Esto define el origen de los pedidos basado en la plataforma de venta. Usa el nombre del origen (por ejemplo: web para tienda en línea, pos para Punto de Venta, api para pedidos de API). Si aplican múltiples orígenes, sepáralos con una coma.

## Próximos Pasos

Después de completar la configuración:

1. **Probar la conexión** - Verificar que FashionAI pueda acceder a tu catálogo
2. **Configurar reglas de enriquecimiento** - Definir qué productos deben ser procesados
3. **Monitorear sincronización** - Verificar el estado de la integración en la plataforma

## Solución de Problemas

### Problemas Comunes

- **Errores de autenticación**: Verifica las credenciales de API y permisos
- **Fallas de sincronización**: Verifica la configuración de credenciales y endpoints
- **Productos ausentes**: Asegúrate de que todos los productos deseados estén publicados

### Soporte

Para soporte técnico con la integración Shopify, contacta a nuestro equipo en shopify@generativecrm.com

## Observaciones Importantes

- El **Token de Acceso de Admin API** se muestra solo una vez durante la creación. Asegúrate de guardarlo en un lugar seguro
- Mantén tus credenciales seguras y no las compartas públicamente
- Revisa periódicamente los permisos para garantizar que estén actualizados según tus necesidades