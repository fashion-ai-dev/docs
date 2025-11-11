---
sidebar_position: 2
---

# Estructura de Respuesta

Todos los endpoints de perfilado devuelven la misma estructura, proporcionando información completa sobre el cliente.

## Campos de Nivel Superior

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `userProfileId` | string | Identificador único del cliente |
| `profile` | object | Perfil completo del cliente (detalles abajo) |

## Objeto Profile

El objeto `profile` contiene cinco secciones principales:

### perfil_cliente

Descripción general del cliente y preferencias de estilo.

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `descricao_geral` | string | Estilo de vida, valores e intereses del cliente |
| `estilo_geral` | string | Estilo de moda, preferencias de colores, cortes y estética |

**Ejemplo:**
```json
{
  "descricao_geral": "Hombre de 30-40 años, profesional que valora calidad y atemporalidad",
  "estilo_geral": "Casual-elegante minimalista, tonos neutros, cortes regulares"
}
```

### ocasioes_relevantes

Array de ocasiones relevantes con sugerencias de outfits.

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `ocasião` | string | Nombre de la ocasión (trabajo, fiesta, casual, etc.) |
| `persona_na_ocasião` | string | Cómo se presenta el cliente en esta ocasión |
| `sugestao_look` | array | Sugerencia de outfit completo (lista de items) |

**Ejemplo:**
```json
[
  {
    "ocasião": "Trabajo business casual",
    "persona_na_ocasião": "Profesional confiado y alineado",
    "sugestao_look": [
      "Camisa manga larga",
      "Chino oscuro",
      "Zapato casual"
    ]
  }
]
```

### briefing_marketing

Orientación de marketing para campañas y comunicaciones.

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `tom_de_voz` | array | Recomendaciones de tono de comunicación |
| `direcao_visual` | array | Dirección visual para campañas |
| `orientacao_campanhas` | array | Estrategias de posicionamiento de campañas |

**Ejemplo:**
```json
{
  "tom_de_voz": ["inspiracional", "auténtico", "sofisticado"],
  "direcao_visual": ["Paleta neutra", "Escenarios urbanos", "Luz natural"],
  "orientacao_campanhas": [
    "Versatilidad",
    "Calidad premium",
    "Lifestyle urbano"
  ]
}
```

### ganchos_conteudo

Array de temas de contenido que resuenan con el cliente.

**Ejemplo:**
```json
[
  "Guardarropa cápsula masculino",
  "Básicos premium que valen la inversión"
]
```

### momento_compra_atual

Análisis del momento actual de compra y oportunidades.

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `navegacoes` | array | Patrones recientes de navegación/exploración |
| `resumo_momento` | string | Interpretación comportamental del momento actual |
| `relacao_com_historico` | string | Cómo se relaciona el comportamiento actual con el historial de compras |
| `novo_comportamento` | boolean | Si el cliente está mostrando comportamiento nuevo/diferente |
| `oportunidades` | array | Acciones recomendadas basadas en el momento actual |

**Ejemplo:**
```json
{
  "navegacoes": ["01/09: visualizó Short Azul Claro"],
  "resumo_momento": "Explorando piezas de verano y ocio",
  "relacao_com_historico": "Expande perfil para momentos de descontracción",
  "novo_comportamento": true,
  "oportunidades": [
    "Curaduría looks verano",
    "Bundle viaje"
  ]
}
```

## Ejemplo de Respuesta Completa
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

## Manejo de Errores

| Código de Estado | Descripción | Solución |
|------------------|-------------|----------|
| `200` | Éxito | Perfil devuelto exitosamente |
| `401` | No Autorizado | Verifique que su token APP sea correcto |
| `404` | No Encontrado | El perfil no existe para el identificador proporcionado |
| `429` | Demasiadas Solicitudes | Implemente limitación de tasa en su aplicación |
| `500` | Error Interno del Servidor | Contacte con soporte |

### Ejemplo de Respuesta de Error
```json
{
  "error": "Unauthorized",
  "message": "Invalid or missing authentication token"
}
```

## Guía de Interpretación de Campos

### Usando novo_comportamento

La bandera `novo_comportamento` indica cuando un cliente está explorando nuevos estilos o categorías:
```javascript
if (profile.profile.momento_compra_atual.novo_comportamento) {
  // ¡El cliente está mostrando nuevo comportamiento - gran oportunidad!
  const opportunities = profile.profile.momento_compra_atual.oportunidades;

  // Ejemplo: Enviar email personalizado con recomendaciones
  sendEmail({
    to: customerEmail,
    subject: "¡Notamos que estás explorando algo nuevo!",
    recommendations: opportunities
  });
}
```

### Segmentación de Marketing

Use `briefing_marketing` para crear campañas segmentadas:
```javascript
const { tom_de_voz, direcao_visual } = profile.profile.briefing_marketing;

// Segmentar clientes por preferencia de tono
if (tom_de_voz.includes("sofisticado")) {
  // Usar mensajes premium
}

if (direcao_visual.includes("Paleta neutra")) {
  // Usar visuales minimalistas
}
```

### Recomendaciones Basadas en Ocasiones

Aproveche `ocasioes_relevantes` para sugerencias contextuales de productos:
```javascript
const workOccasion = profile.profile.ocasioes_relevantes.find(
  occ => occ.ocasião.toLowerCase().includes("trabajo")
);

if (workOccasion) {
  // Recomendar productos de la colección trabajo
  recommendProducts(workOccasion.sugestao_look);
}
```

---

## Soporte

Para preguntas técnicas:
:mailbox: **support@generativecrm.com**