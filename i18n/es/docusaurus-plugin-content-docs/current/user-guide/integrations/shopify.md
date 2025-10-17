# Integración con Shopify

Conecte su tienda Shopify con FashionAI para enriquecer automáticamente su catálogo de productos con descripciones y atributos generados por IA.

## Lo que Necesitará

Antes de comenzar, asegúrese de tener:
- Acceso de administrador a su tienda Shopify
- Acceso a Settings de la plataforma FashionAI
- 10-15 minutos para completar la configuración

## Configuración Paso a Paso

### Paso 1: Habilitar Vision Enrichment

Primero, active la función Vision Enrichment en FashionAI:

1. Haga clic en **Settings** en el menú derecho
2. Vaya a **General Settings**
3. Active el interruptor **Vision Enrichment**

**Qué hace esto:** Permite que nuestra IA analice imágenes de productos y genere automáticamente descripciones, etiquetas y atributos.

### Paso 2: Crear una Aplicación Personalizada en Shopify

Necesitará crear una aplicación personalizada en Shopify para conectarse con FashionAI:

1. Inicie sesión en su **Shopify Admin**
2. Vaya a **Settings** → **Apps and sales channels**
3. Haga clic en **Develop apps**
4. Haga clic en **Create an app**
5. Nómbrela: **FashionAI API Integration**
6. Haga clic en **Create app**

### Paso 3: Configurar los Permisos de API

Ahora configure a qué datos puede acceder FashionAI:

1. En su nueva aplicación, vaya a la pestaña **API credentials**
2. Haga clic en **Configure Admin API scopes**
3. Seleccione estos permisos:

| Permiso | Por Qué lo Necesitamos |
|---------|-------------|
| **read_products** | Para leer su catálogo de productos |
| **write_products** | Para actualizar productos con contenido generado por IA |
| **read_publications** | Para saber qué productos están publicados |
| **read_inventory** | Para verificar la disponibilidad de productos |
| **read_customers** | Para recomendaciones personalizadas |
| **read_orders** | Para comprender patrones de compra |

4. Haga clic en **Save**

### Paso 4: Generar su Token de Acceso

1. Aún en la pestaña **API credentials**, haga clic en **Install app**
2. Confirme la instalación
3. **Copie el Admin API Access Token** que aparece

**Importante:** ¡Este token se muestra solo una vez! Guárdelo en un lugar seguro (como un administrador de contraseñas).

### Paso 5: Conectar Shopify a FashionAI

1. Vaya a **Settings** de FashionAI
2. Haga clic en la pestaña **Shopify Settings**
3. Ingrese sus credenciales:
   - **Store URL**: La URL de su tienda Shopify (ejemplo: `https://your-store.myshopify.com`)
   - **Access Token**: El token que copió en el Paso 4

4. Haga clic en **Test Connection** para verificar que todo funciona
5. Haga clic en **Save**

## Opcional: Filtros Avanzados

Puede controlar qué productos son procesados por FashionAI:

### Sales Channels
- Ingrese IDs de publicación (separados por comas) para sincronizar solo canales específicos
- Ejemplo: `123,456`
- Deje en blanco para sincronizar todos los canales

### Excluded Brands
- Ingrese nombres de marcas (separados por comas) para excluir del procesamiento de IA
- Ejemplo: `Nike,Adidas,Puma`
- Deje en blanco para procesar todas las marcas

### Order Sources
- Filtre pedidos según su origen
- Ejemplo: `web,pos,api`
- Deje en blanco para incluir todos los orígenes de pedidos

## Cómo Funciona

Una vez que la integración esté activa, esto es lo que sucede automáticamente:

1. **Los productos nuevos** agregados a Shopify son detectados
2. **La IA analiza** las imágenes de productos usando visión computacional
3. **Se generan descripciones** basadas en el contenido visual
4. **Se extraen atributos** (colores, estilos, patrones, materiales)
5. **Los datos se sincronizan** de vuelta a su catálogo Shopify

## Consejos para Obtener los Mejores Resultados

### Imágenes de Productos
Para el mejor contenido generado por IA:
- Use **imágenes de alta resolución** (mínimo 1000x1000 píxeles)
- Incluya **fondos claros** (blanco o neutro funciona mejor)
- Agregue **múltiples ángulos** (frente, espalda, tomas de detalles)
- Asegure **buena iluminación** y colores precisos

### Personalización de la Salida de IA
Puede personalizar cómo la IA genera contenido en la plataforma:
- **Tone of voice**: Elija casual, profesional o de lujo
- **Description length**: Corta, media o detallada
- **Language**: Múltiples idiomas soportados
- **Custom attributes**: Agregue atributos específicos de marca

## Verificación del Estado de la Integración

Para verificar que todo está funcionando:

1. Vaya a **Settings** → **Integrations** en FashionAI
2. Verifique el estado de la integración con Shopify:
   - ✅ **Active**: Todo se está sincronizando exitosamente
   - ⏳ **Syncing**: Actualización en progreso
   - ⚠️ **Warning**: Problemas menores detectados
   - ❌ **Error**: Algo necesita atención

## Problemas Comunes

### Los Productos No se Sincronizan

**Posibles causas:**
- Los productos no están publicados en el canal de ventas correcto
- El filtro de marcas excluidas está bloqueando productos
- Los permisos de API no están configurados correctamente

**Solución:**
- Verifique la configuración de publicación en Shopify
- Revise su configuración de filtros
- Verifique que todos los permisos del Paso 3 estén habilitados

### Errores de Conexión

**Posibles causas:**
- El token de acceso es incorrecto o ha expirado
- La URL de la tienda tiene un formato incorrecto

**Solución:**
- Verifique nuevamente las credenciales en Shopify Settings
- Asegúrese de que Store URL incluya `https://` y `.myshopify.com`
- Intente regenerar el token de acceso si es necesario

### El Enrichment No Funciona

**Posibles causas:**
- Vision Enrichment está deshabilitado
- Las imágenes de productos son de baja calidad o inaccesibles
- Los productos no cumplen con los criterios de filtro

**Solución:**
- Confirme que Vision Enrichment esté activado en General Settings
- Verifique que las imágenes de productos sean de alta calidad y públicamente accesibles
- Revise su configuración de filtros avanzados

## ¿Necesita Ayuda?

Si encuentra algún problema:
- **Email**: support@generativecrm.com
- **Incluya**: La URL de su tienda, mensajes de error y ejemplos de productos afectados

## Próximos Pasos

Después de que su integración esté completa:

- [Aprenda sobre Vision Enrichment](../vision-enrichment/index.md)
- [Explore Recommendations](../recomendations/index.md)
- [Configure Behaviors](../behaviors/index.md)
