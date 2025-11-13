---
sidebar_position: 4
---

# API de perfiles de clientes

Referencia técnica para la API de perfiles de clientes de Fashion.AI. Esta API analiza el comportamiento de compra y navegación de los clientes para generar perfiles detallados y prácticos con información basada en inteligencia artificial para marketing, ventas y personalización de CRM.

## Descripción general

El servicio de perfiles de Fashion AI genera automáticamente perfiles completos de los clientes mediante el análisis de:

- Historial de compras
- Patrones de navegación
- Preferencias de productos
- Información sobre el comportamiento

Cada perfil incluye las preferencias de estilo del cliente, sugerencias de atuendos para cada ocasión, orientación de marketing, temas de contenido y análisis del momento de compra actual.

Para conocer el contexto empresarial y los casos de uso, consulte la [Guía del usuario: Perfiles](../../user-guide/profiling).

## Inicio rápido

Obtenga su primer perfil de cliente en 3 pasos:

**1. Obtenga su token API**

Visite https://app.generativecrm.com/settings?tab=app-tokens y genere su token.

**2. Realice su primera solicitud**

```bash
curl -X GET \
  'https://catalog.api.fashionaiale.com/api/v1/crm/protected/profile/email/customer@example.com' \
  -H 'Content-Type: application/json' \
  -H 'X-FashionAI-APP-Token: TU_TOKEN_AQUÍ'
```

**3. Utilice los datos del perfil**

```javascript
// Acceda a las secciones clave del perfil
const { perfil_cliente, briefing_marketing, momento_compra_atual } = response.profile;

// Obtenga el estilo del cliente
console.log(perfil_cliente.estilo_geral);

// Obtenga recomendaciones de marketing
console.log(briefing_marketing.tom_de_voz);

// Comprueba si hay un nuevo comportamiento
if (momento_compra_atual.novo_comportamento) {
  console.log('Nueva oportunidad:', momento_compra_atual.oportunidades);
}
```

**Importante:** Realiza las llamadas a la API desde tu servidor backend para proteger tu token. Consulta la sección [Seguridad](#seguridad-y-cors) más abajo.

## Configuración básica

**URL base:**
```
https://catalog.api.fashionaiale.com/api/v1/crm
```

**Encabezados necesarios:**
```http
Content-Type: application/json
X-FashionAI-APP-Token: <su_token_de_aplicación>
```

**Autenticación:** Todos los endpoints utilizan el mismo método de autenticación que otras API de Fashion.AI. Consulte [Autenticación de API](../authentication) para obtener más detalles.

## Seguridad y CORS

> **Importante:** Las solicitudes directas del navegador se bloquean para proteger su token de autenticación.

El `X-FashionAI-APP-Token` no debe exponerse en el código del frontend. Si intenta llamar a la API directamente desde el navegador, recibirá un error CORS.

**Recomendado:** Realice todas las llamadas a la API desde su servidor backend.

**¿Necesita acceso al frontend?** Póngase en contacto con el servicio de asistencia para solicitar la autorización del dominio:
:mailbox: **support@generativecrm.com**

## Casos de uso

**Marketing personalizado**
Segmente a los clientes por `briefing_marketing.tom_de_voz` y cree campañas específicas con el tono y la dirección visual adecuados.

**Recomendaciones de productos**
Utilice `ocasioes_relevantes` para sugerir combinaciones completas de atuendos basadas en el estilo de vida del cliente.

**Creación de contenido**
Aproveche `ganchos_conteudo` para crear entradas de blog, redes sociales y boletines informativos que resuenen en su público.

**Detección de cambios de comportamiento**
Supervise `momento_compra_atual.novo_comportamento` para identificar a los clientes que exploran nuevos estilos y ofrecerles consultas proactivas.

**Facilitación de ventas**
Proporcione a los equipos de ventas los datos de `perfil_cliente` antes de las consultas VIP para ofrecer un servicio personalizado.

---

## Próximos pasos

- [Endpoints de la API](./endpoints) - Endpoints disponibles y ejemplos de código
- [Estructura de respuesta](./response-structure) - Campos de perfil detallados y gestión de errores
- [Guía de autenticación](../authentication) - Detalles de configuración y autenticación

---

## Asistencia

Para preguntas técnicas o comerciales:
:mailbox: **support@generativecrm.com**
