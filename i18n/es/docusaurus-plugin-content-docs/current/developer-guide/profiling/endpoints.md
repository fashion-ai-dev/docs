---
sidebar_position: 1
---

# Endpoints de la API

Todos los endpoints de perfilado devuelven la misma estructura. Elija el endpoint según el identificador de cliente que tenga disponible.

## Endpoints Disponibles

| Endpoint | Parámetro | Descripción |
|----------|-----------|-------------|
| `GET /protected/profile/user-profile-id/:userProfileId` | ID de Perfil de Usuario | Recupera perfil por identificador Fashion AI |
| `GET /protected/profile/phone/:phone` | Teléfono | Recupera perfil por número de teléfono |
| `GET /protected/profile/email/:email` | Email | Recupera perfil por dirección de correo electrónico |
| `GET /protected/profile/document/:document` | Documento | Recupera perfil por documento (DNI, CI, etc.) |

## Ejemplo Básico
```bash
curl -X GET \
  'https://catalog.api.fashionaiale.com/api/v1/crm/protected/profile/email/cliente@ejemplo.com' \
  -H 'Content-Type: application/json' \
  -H 'X-FashionAI-APP-Token: <tu_token_app>'
```

## Ejemplos de Código

### JavaScript/Node.js
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
    throw new Error(`¡Error HTTP! estado: ${response.status}`);
  }

  return await response.json();
};

// Ejemplos de uso
const perfilPorEmail = await obtenerPerfil('cliente@ejemplo.com', 'email');
const perfilPorTelefono = await obtenerPerfil('5511999998888', 'phone');
const perfilPorDoc = await obtenerPerfil('12345678900', 'document');
```

### TypeScript
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

### Python
```python
import requests
import os

def obtener_perfil(identificador, tipo_perfil='email'):
    """
    Recupera perfil del cliente por identificador.

    Args:
        identificador: El identificador del cliente (email, teléfono, documento o userProfileId)
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

## Ejemplo de Respuesta

Todos los endpoints devuelven la misma estructura:
```json
{
  "userProfileId": "ddsd23223",
  "profile": {
    "perfil_cliente": {
      "descricao_geral": "Hombre de 30-40 años, profesional que valora calidad y atemporalidad",
      "estilo_geral": "Casual-elegante minimalista, tonos neutros, cortes regulares"
    },
    "ocasioes_relevantes": [
      {
        "ocasião": "Trabajo business casual",
        "persona_na_ocasião": "Profesional confiado y alineado",
        "sugestao_look": [
          "Camisa manga larga",
          "Chino oscuro",
          "Zapato casual"
        ]
      }
    ],
    "briefing_marketing": {
      "tom_de_voz": ["inspiracional", "auténtico", "sofisticado"],
      "direcao_visual": ["Paleta neutra", "Escenarios urbanos", "Luz natural"],
      "orientacao_campanhas": [
        "Versatilidad",
        "Calidad premium",
        "Lifestyle urbano"
      ]
    },
    "ganchos_conteudo": [
      "Guardarropa cápsula masculino",
      "Básicos premium que valen la inversión"
    ],
    "momento_compra_atual": {
      "navegacoes": ["01/09: visualizó Short Azul Claro"],
      "resumo_momento": "Explorando piezas de verano y ocio",
      "relacao_com_historico": "Expande perfil para momentos de descontracción",
      "novo_comportamento": true,
      "oportunidades": [
        "Curaduría looks verano",
        "Bundle viaje"
      ]
    }
  }
}
```

Para descripciones detalladas de los campos, vea [Estructura de Respuesta](./response-structure).