---
sidebar_position: 4
---

# API de Perfilado de Clientes

Referencia técnica de los endpoints de la API de Perfilado de Clientes de Fashion.AI. Esta API analiza el comportamiento de compra y navegación de los clientes para generar perfiles detallados y accionables con insights impulsados por IA para personalización de marketing, ventas y CRM.

## Visión General

El servicio Fashion AI Profiling genera automáticamente perfiles completos de clientes analizando:

- Historial de compras
- Patrones de navegación
- Preferencias de productos
- Insights conductuales

Para una explicación detallada de los casos de uso y estructura del perfil, consulte la [Guía del Usuario: Perfilado](../user-guide/profiling).

## Configuración Base

**URL Base:**
```
https://catalog.api.fashionaiale.com/api/v1/crm
```

**Headers Obligatorios:**
```http
Content-Type: application/json
X-FashionAI-APP-Token: <tu_app_token>
```

> **Obtén tu token:** https://app.generativecrm.com/settings?tab=app-tokens

**Autenticación:** Todos los endpoints usan el mismo método de autenticación que las demás APIs Fashion.AI. Consulta [Autenticación de la API](./authentication) para más detalles.

## Endpoints de la API

Todos los endpoints retornan la misma estructura de perfil. Elige el endpoint basándote en el identificador de cliente que tengas disponible.

### Endpoints Disponibles

| Endpoint | Parámetro | Descripción |
|----------|-----------|-------------|
| `GET /protected/profile/user-profile-id/:userProfileId` | User Profile ID | Recuperar perfil por identificador Fashion AI |
| `GET /protected/profile/phone/:phone` | Teléfono | Recuperar perfil por número de teléfono |
| `GET /protected/profile/email/:email` | Email | Recuperar perfil por dirección de email |
| `GET /protected/profile/document/:document` | Documento | Recuperar perfil por documento (CPF, ID, etc.) |

### Ejemplo Básico

```bash
curl -X GET \
  'https://catalog.api.fashionaiale.com/api/v1/crm/protected/profile/email/cliente@ejemplo.com' \
  -H 'Content-Type: application/json' \
  -H 'X-FashionAI-APP-Token: <tu_app_token>'
```

### Ejemplos de Código

<details>
<summary><strong>JavaScript/Node.js</strong></summary>

```javascript
const obtenerPerfil = async (identificador, tipo = 'email') => {
  const response = await fetch(
    `https://catalog.api.fashionaiale.com/api/v1/crm/protected/profile/${tipo}/${identificador}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-FashionAI-APP-Token': process.env.FASHION_AI_TOKEN
      }
    }
  );

  if (!response.ok) {
    throw new Error(`Error HTTP! status: ${response.status}`);
  }

  return await response.json();
};

// Ejemplos de uso
const perfilPorEmail = await obtenerPerfil('cliente@ejemplo.com', 'email');
const perfilPorTelefono = await obtenerPerfil('5511999998888', 'phone');
const perfilPorDoc = await obtenerPerfil('12345678900', 'document');
```
</details>

<details>
<summary><strong>TypeScript</strong></summary>

```typescript
interface PerfilCliente {
  userProfileId: string;
  profile: {
    perfil_cliente: {
      descricao_geral: string;
      estilo_geral: string;
    };
    ocasioes_relevantes: Array<{
      ocasião: string;
      persona_na_ocasião: string;
      sugestao_look: string[];
    }>;
    briefing_marketing: {
      tom_de_voz: string[];
      direcao_visual: string[];
      orientacao_campanhas: string[];
    };
    ganchos_conteudo: string[];
    momento_compra_atual: {
      navegacoes: string[];
      resumo_momento: string;
      relacao_com_historico: string;
      novo_comportamento: boolean;
      oportunidades: string[];
    };
  };
}

async function obtenerPerfil(
  identificador: string,
  tipo: 'email' | 'phone' | 'document' | 'user-profile-id'
): Promise<PerfilCliente> {
  const response = await fetch(
    `https://catalog.api.fashionaiale.com/api/v1/crm/protected/profile/${tipo}/${identificador}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-FashionAI-APP-Token': process.env.FASHION_AI_TOKEN!
      }
    }
  );

  if (!response.ok) {
    throw new Error(`Error al obtener perfil: ${response.statusText}`);
  }

  return await response.json();
}

// Uso
const perfil = await obtenerPerfil('cliente@ejemplo.com', 'email');

if (perfil.profile.momento_compra_atual.novo_comportamento) {
  console.log('¡Nuevo comportamiento detectado!');
  console.log('Oportunidades:', perfil.profile.momento_compra_atual.oportunidades);
}
```
</details>

<details>
<summary><strong>Python</strong></summary>

```python
import requests
import os

def obtener_perfil(identificador, tipo_perfil='email'):
    """
    Recupera perfil de cliente por identificador.

    Args:
        identificador: El identificador del cliente (email, phone, document o userProfileId)
        tipo_perfil: Tipo de identificador ('email', 'phone', 'document', 'user-profile-id')
    """
    url = f"https://catalog.api.fashionaiale.com/api/v1/crm/protected/profile/{tipo_perfil}/{identificador}"
    headers = {
        "Content-Type": "application/json",
        "X-FashionAI-APP-Token": os.getenv("FASHION_AI_TOKEN")
    }

    response = requests.get(url, headers=headers)
    response.raise_for_status()

    return response.json()

# Ejemplos de uso
perfil = obtener_perfil("cliente@ejemplo.com", "email")
perfil = obtener_perfil("5511999998888", "phone")
perfil = obtener_perfil("12345678900", "document")

# Acceder a datos del perfil
briefing_marketing = perfil["profile"]["briefing_marketing"]
print(f"Tono de voz: {briefing_marketing['tom_de_voz']}")
```
</details>

### Ejemplo de Respuesta

Todos los endpoints retornan la misma estructura:

```json
{
  "userProfileId": "ddsd23223",
  "profile": {
    "perfil_cliente": {
      "descricao_geral": "Homem de 30-40 anos, profissional que valoriza qualidade e atemporalidade",
      "estilo_geral": "Casual-elegante minimalista, tons neutros, cortes regulares"
    },
    "ocasioes_relevantes": [
      {
        "ocasião": "Trabalho business casual",
        "persona_na_ocasião": "Profissional confiante e alinhado",
        "sugestao_look": [
          "Camisa manga longa",
          "Chino escura",
          "Sapato casual"
        ]
      }
    ],
    "briefing_marketing": {
      "tom_de_voz": ["inspiracional", "autêntico", "sofisticado"],
      "direcao_visual": ["Paleta neutra", "Cenários urbanos", "Luz natural"],
      "orientacao_campanhas": [
        "Versatilidade",
        "Qualidade premium",
        "Lifestyle urbano"
      ]
    },
    "ganchos_conteudo": [
      "Guarda-roupa cápsula masculino",
      "Básicos premium que valem o investimento"
    ],
    "momento_compra_atual": {
      "navegacoes": ["01/09: visualizou Short Azul Claro"],
      "resumo_momento": "Explorando peças de verão e lazer",
      "relacao_com_historico": "Expande perfil para momentos de descontração",
      "novo_comportamento": true,
      "oportunidades": [
        "Curadoria looks verão",
        "Bundle viagem"
      ]
    }
  }
}
```

## Estructura de la Respuesta

Todos los endpoints retornan la misma estructura:

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `userProfileId` | string | Identificador único del cliente |
| `profile` | object | Perfil completo del cliente (detalles abajo) |

### Campos del Perfil

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `perfil_cliente` | object | Descripción general del cliente y preferencias de estilo |
| `perfil_cliente.descricao_geral` | string | Estilo de vida, valores e intereses del cliente |
| `perfil_cliente.estilo_geral` | string | Estilo de moda, preferencias de colores, cortes y estéticas |
| `ocasioes_relevantes` | array | Lista de ocasiones relevantes con sugerencias de looks |
| `ocasioes_relevantes[].ocasião` | string | Nombre de la ocasión (trabajo, fiesta, casual, etc.) |
| `ocasioes_relevantes[].persona_na_ocasião` | string | Cómo se presenta el cliente en esta ocasión |
| `ocasioes_relevantes[].sugestao_look` | array | Sugerencia de look completo (lista de items) |
| `briefing_marketing` | object | Orientaciones de marketing para campañas |
| `briefing_marketing.tom_de_voz` | array | Recomendaciones de tono de comunicación |
| `briefing_marketing.direcao_visual` | array | Dirección visual para campañas |
| `briefing_marketing.orientacao_campanhas` | array | Estrategias de posicionamiento de campaña |
| `ganchos_conteudo` | array | Temas de contenido que resuenan con el cliente |
| `momento_compra_atual` | object | Análisis del momento de compra actual |
| `momento_compra_atual.navegacoes` | array | Patrones de navegación/browsing recientes |
| `momento_compra_atual.resumo_momento` | string | Interpretación conductual del momento actual |
| `momento_compra_atual.relacao_com_historico` | string | Cómo el comportamiento actual se relaciona con el historial de compras |
| `momento_compra_atual.novo_comportamento` | boolean | Si el cliente está mostrando comportamiento nuevo/diferente |
| `momento_compra_atual.oportunidades` | array | Acciones recomendadas basadas en el momento actual |

## Manejo de Errores

| Código de Estado | Descripción | Solución |
|-----------------|-------------|----------|
| `200` | Éxito | Perfil retornado exitosamente |
| `401` | No Autorizado | Verifica que tu token APP sea correcto |
| `404` | No Encontrado | El perfil no existe para el identificador proporcionado |
| `429` | Demasiadas Peticiones | Implementa rate limiting en tu aplicación |
| `500` | Error Interno del Servidor | Contacta con soporte |

## Seguridad y CORS

> **Importante:** Las peticiones directas del navegador están bloqueadas para proteger tu token de autenticación.

El `X-FashionAI-APP-Token` no debe ser expuesto en código frontend. Si intentas llamar a la API directamente desde el navegador, recibirás un error CORS.

**Recomendado:** Realiza todas las llamadas a la API desde tu servidor backend.

**¿Necesitas acceso frontend?** Contacta con soporte para solicitar autorización de dominio:
:mailbox: **support@generativecrm.com**

## Casos de Uso

**Marketing Personalizado**
Segmenta clientes por `briefing_marketing.tom_de_voz` y crea campañas dirigidas con tono y dirección visual apropiados.

**Recomendaciones de Productos**
Usa `ocasioes_relevantes` para sugerir combinaciones completas de looks basadas en el estilo de vida del cliente.

**Creación de Contenido**
Aprovecha `ganchos_conteudo` para crear posts de blog, redes sociales y newsletters que resuenen con tu audiencia.

**Detección de Cambio de Comportamiento**
Monitorea `momento_compra_atual.novo_comportamento` para identificar clientes explorando nuevos estilos y ofrecer consultorías proactivas.

**Capacitación de Ventas**
Proporciona a los equipos de ventas datos de `perfil_cliente` antes de consultas VIP para servicio personalizado.

---

## Soporte

Para preguntas técnicas o comerciales:
:mailbox: **support@generativecrm.com**

---

## Documentación Relacionada

- [Guía de Autenticación](./authentication) - Detalles de configuración y autenticación
- [Guía del Usuario: Perfilado](../user-guide/profiling) - Casos de uso y estructura del perfil
- [Primeros Pasos](./getting-started) - Guía de integración inicial
