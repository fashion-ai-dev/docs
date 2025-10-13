# Integración de Shopify

Guía completa para integrar FashionAI con tu tienda Shopify para enriquecimiento automático de productos y gestión de catálogo.

## Descripción General

La integración de Shopify permite a FashionAI:

- **Enriquecer automáticamente catálogos de productos** con descripciones y atributos generados por IA
- **Sincronizar datos de productos** en tiempo real con tu tienda Shopify
- **Procesar contenido visual** usando capacidades de Vision Enrichment
- **Gestionar pedidos y datos de clientes** para segmentación conductual

## Configuración Inicial

### 1. Habilitar Vision Enrichment

1. En el menú derecho de la plataforma, haz clic en **Configuración**
2. Navega a **Configuración General**
3. Habilita el interruptor **Vision Enrichment**

![Activar Catálogo](/img/activate-catalog.png)

**Qué hace Vision Enrichment:**
- Analiza imágenes de productos usando IA de visión por computadora
- Genera descripciones de productos basadas en contenido visual
- Extrae atributos como color, estilo, patrón y material
- Enriquece tu catálogo con metadatos precisos y consistentes

### 2. Crear Aplicación Personalizada de Shopify

Para conectar FashionAI con tu tienda Shopify, crea una aplicación personalizada:

1. Inicia sesión en **Shopify Admin** como administrador
2. Ve a **Configuración** > **Aplicaciones y canales de venta**
3. Haz clic en **Desarrollar aplicaciones** > **Crear una aplicación**
4. Nombra la aplicación: **Integración de API de FashionAI**
5. Haz clic en **Crear aplicación**

### 3. Configurar Permisos de API

En la aplicación creada, configura los permisos necesarios:

1. Ve a la pestaña **Credenciales de API**
2. Haz clic en **Configurar ámbitos de Admin API**
3. Selecciona los siguientes permisos:

| Permiso | Descripción |
|---------|-------------|
| **read_products** | Leer productos |
| **write_products** | Editar productos (incluyendo imágenes) |
| **read_publications** | Leer publicaciones |
| **read_inventory** | Leer inventario |
| **read_customers** | Leer clientes |
| **read_orders** | Leer pedidos |
| **read_marketplace_orders** | Leer pedidos de marketplace |
| **read_buyer_membership_orders** | Leer pedidos de membresía de compradores |

4. Haz clic en **Guardar**

Para más detalles sobre los permisos de la API de Shopify, consulta la [Documentación de la API de Shopify](https://shopify.dev/docs/api/admin-rest).

### 4. Generar Token de Acceso

1. En la pestaña **Credenciales de API**, haz clic en **Instalar aplicación**
2. Confirma la instalación
3. **Copia el Token de Acceso de Admin API inmediatamente** (¡se muestra solo una vez!)
4. Almacena el token de forma segura

**Importante:** El Token de Acceso de Admin API se muestra solo una vez. Guárdalo en un gestor de contraseñas seguro.

### 5. Configurar Ajustes de Shopify en FashionAI

1. Ve a la pestaña **Configuración de Shopify** en el menú de Configuración
2. Inserta tus credenciales de Shopify:

| Campo | Descripción | Ejemplo |
|-------|-------------|---------|
| **URL de la Tienda** | Tu URL de tienda Shopify | `https://tu-tienda.myshopify.com` |
| **Token de Acceso** | Token de Acceso de Admin API | `shpat_xxxxxxxxxxxxxxxxxxxxx` |

3. Haz clic en **Probar Conexión** para verificar las credenciales
4. Haz clic en **Guardar** para activar la integración

## Configuración Avanzada

### Reglas de Filtrado Opcionales

Configura reglas adicionales para controlar qué productos se procesan:

**Canales de Venta (IDs de Publicación)**
- Ingresa IDs de publicación separados por comas
- Ejemplo: `123,456`
- Define de qué canales de venta sincronizar productos

**Proveedores Excluidos**
- Ingresa nombres de proveedores separados por comas
- Ejemplo: `Nike,Adidas,Puma`
- Marcas excluidas del procesamiento de IA

**Origen de Pedido (Plataforma de Ventas)**
- Ingresa nombres de origen de pedido separados por comas
- Ejemplo: `web,pos,api`
- Filtrar pedidos por origen (`web` para tienda online, `pos` para Punto de Venta, `api` para pedidos de API)

Deja los campos en blanco para ignorar estas reglas.

## Flujo de Trabajo de Vision Enrichment

1. **Carga de Imagen de Producto:** Cuando se agrega una imagen de producto a Shopify
2. **Detección Automática:** FashionAI detecta la nueva imagen vía webhook
3. **Análisis de IA:** La visión por computadora analiza la imagen
4. **Extracción de Atributos:** La IA identifica colores, patrones, estilos, materiales
5. **Generación de Descripción:** La IA crea descripciones de productos
6. **Actualización de Catálogo:** Los datos enriquecidos se sincronizan de vuelta a Shopify

## Monitoreo de Integración

Rastrea el estado de sincronización en **Configuración** > **Integraciones** > **Shopify**:

- ✅ **Activo:** Sincronizando exitosamente
- ⏳ **Sincronizando:** Actualización en progreso
- ⚠️ **Advertencia:** Sincronización parcial o problemas menores
- ❌ **Error:** Sincronización fallida - verifica los registros de errores

## Mejores Prácticas

### Calidad de Imagen de Producto

Para resultados de enriquecimiento óptimos:

- Usa imágenes de alta resolución (mínimo 1000x1000 píxeles)
- Asegura fondos limpios (blancos o neutros)
- Incluye múltiples ángulos (frente, atrás, detalles)
- Verifica iluminación adecuada y colores precisos

### Configuración de Enriquecimiento

Personaliza el enriquecimiento en la plataforma:

- **Tono de Voz:** Casual, profesional, lujo
- **Longitud de Descripción:** Corta, media o detallada
- **Idioma:** Múltiples idiomas soportados
- **Atributos Personalizados:** Atributos específicos de marca

## Solución de Problemas

### Problemas Comunes

**Errores de Autenticación:**
- Verifica las credenciales de API en Configuración de Shopify
- Confirma que todos los permisos requeridos están otorgados en la aplicación personalizada

**Productos No Se Sincronizan:**
- Verifica la configuración de publicación en Shopify
- Verifica que el filtro de proveedores excluidos no esté bloqueando productos
- Revisa los registros de errores de sincronización en el panel de integración

**Enriquecimiento No Funciona:**
- Asegúrate de que Vision Enrichment esté habilitado en Configuración General
- Verifica que las imágenes de productos sean de alta calidad y accesibles
- Verifica que los productos estén publicados en los canales de venta correctos

## Soporte

Para soporte técnico con la integración de Shopify:

- **Email:** support@generativecrm.com
- **Problemas Específicos de Shopify:** [Centro de Ayuda de Shopify](https://help.shopify.com/)

**Al contactar soporte, incluye:**
- Tu URL de tienda Shopify
- Códigos o mensajes de error
- Handles de productos de ejemplo afectados
- Capturas de pantalla del problema (si aplica)

## Recursos Adicionales

- **Documentación de la API de Shopify:** [Desarrolladores de Shopify](https://shopify.dev/docs)
- **Guía de la Plataforma FashionAI:** [Primeros Pasos](../getting-started)
- **Detalles de Vision Enrichment:** [Guía de Vision Enrichment](../../user-guide/vision-enrichment/index)

