# Integración con VTEX

Conecte su tienda VTEX con FashionAI para enriquecer automáticamente su catálogo de productos con descripciones y atributos impulsados por IA.

## Lo que Necesitará

Antes de comenzar, asegúrese de tener:
- Acceso de administrador a su tienda VTEX
- Acceso a la configuración de la plataforma FashionAI

## Configuración Paso a Paso

### Paso 1: Habilitar Vision Enrichment

Primero, active la función Vision Enrichment en FashionAI:

1. Haga clic en **Settings** en el menú derecho
2. Vaya a **General Settings**
3. Active el interruptor **Vision Enrichment**

Esto permite que nuestra IA analice las imágenes de sus productos y genere automáticamente descripciones y atributos.

### Paso 2: Obtener su Token API de VTEX

Necesitará un token API de VTEX con permisos específicos. Contacte a su administrador de VTEX para crear un token con estos permisos:

| Product | Category | Resource |
|---------|----------|----------|
| Catalog | Content | Product and SKU Management |
| Catalog | Content | Category Management |
| Catalog | Content | Category |
| Catalog | Content | SKUs |
| OMS | OMS Access | List Orders |
| OMS | OMS Access | View Order |
| Checkout | Checkout Resources | Full Order Access |

### Paso 3: Configurar VTEX en FashionAI

1. En FashionAI, vaya a **Settings**
2. Haga clic en la pestaña **VTEX Settings**
3. Ingrese sus credenciales API de VTEX:
   - **Store Name**: El nombre de su tienda VTEX
   - **API Key**: El token del Paso 2
   - **API Token**: Su token de aplicación VTEX

4. Haga clic en **Save**

### Paso 4: Crear un Afiliado

Esto permite que FashionAI reciba actualizaciones de su catálogo VTEX automáticamente.

1. En su administrador de VTEX, vaya a **Order Management**
2. Haga clic en **Settings** → pestaña **Affiliates**
3. Haga clic en **New Affiliate**
4. Complete la siguiente información:

| Field | What to Enter |
|-------|---------------|
| **Name** | FashionAI |
| **ID** | FFF |
| **Trade Policy** | 1 |
| **Follow-up Email** | vtex@generativecrm.com |
| **Search Endpoint** | Click "Generate Link" |
| **Search Endpoint Version** | 1.x.x |
| **Use my payment method** | Leave unchecked |

5. Haga clic en **Save**

## Cómo Funciona

Una vez que la integración está activa:

1. Los nuevos productos agregados a VTEX se detectan automáticamente
2. FashionAI analiza las imágenes de los productos usando visión computacional
3. La IA genera descripciones, etiquetas y atributos
4. Los datos enriquecidos se sincronizan de vuelta a su catálogo VTEX
5. Sus productos tienen mejores descripciones y descubribilidad

## Verificar el Estado de la Integración

Para verificar que todo está funcionando:

1. Vaya a **Settings** → **Integrations** en FashionAI
2. Revise el estado de la integración VTEX:
   - ✅ **Active**: Todo está funcionando correctamente
   - ⏳ **Syncing**: Actualización en progreso
   - ❌ **Error**: Algo necesita atención

## Problemas Comunes

### Los Productos No se Sincronizan

**Solución:**
- Verifique que su token API tenga todos los permisos requeridos
- Compruebe que el afiliado esté configurado correctamente
- Asegúrese de que la Trade Policy incluya los productos que desea sincronizar

### Errores de Conexión

**Solución:**
- Verifique nuevamente sus credenciales de VTEX en Settings
- Confirme que el token API sigue siendo válido
- Pruebe la conexión usando el botón "Test Connection"

### Productos sin Enriquecimiento

**Solución:**
- Asegúrese de que Vision Enrichment esté habilitado
- Verifique que las imágenes de los productos sean de alta calidad y accesibles
- Compruebe que los productos estén publicados en la Trade Policy correcta

## ¿Necesita Ayuda?

Si encuentra algún problema:
- Email: vtex@generativecrm.com
- Incluya: El nombre de su tienda y una descripción del problema

## Próximos Pasos

Después de completar su integración:

- [Aprenda sobre Vision Enrichment](../vision-enrichment/index.md)
- [Explore Recommendations](../recomendations/index.md)
- [Configure Behaviors](../behaviors/index.md)
