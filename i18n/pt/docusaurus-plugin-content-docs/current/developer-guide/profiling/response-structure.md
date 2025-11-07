---
sidebar_position: 2
---

# Estrutura da Resposta

Todos os endpoints de perfil retornam a mesma estrutura, fornecendo insights abrangentes sobre o cliente.

## Campos de Nível Superior

| Campo | Tipo | Descrição |
|-------|------|-------------|
| `userProfileId` | string | Identificador único do cliente |
| `profile` | object | Perfil completo do cliente (detalhes abaixo) |

## Objeto Profile

O objeto `profile` contém cinco seções principais:

### perfil_cliente

Descrição geral do cliente e preferências de estilo.

| Campo | Tipo | Descrição |
|-------|------|-------------|
| `descricao_geral` | string | Estilo de vida, valores e interesses do cliente |
| `estilo_geral` | string | Estilo de moda, preferências de cores, cortes e estética |

**Exemplo:**
```json
{
  "descricao_geral": "Homem de 30-40 anos, profissional que valoriza qualidade e atemporalidade",
  "estilo_geral": "Casual-elegante minimalista, tons neutros, cortes regulares"
}
```

### ocasioes_relevantes

Array de ocasiões relevantes com sugestões de looks.

| Campo | Tipo | Descrição |
|-------|------|-------------|
| `ocasião` | string | Nome da ocasião (trabalho, festa, casual, etc.) |
| `persona_na_ocasião` | string | Como o cliente se apresenta nesta ocasião |
| `sugestao_look` | array | Sugestão de look completo (lista de itens) |

**Exemplo:**
```json
[
  {
    "ocasião": "Trabalho business casual",
    "persona_na_ocasião": "Profissional confiante e alinhado",
    "sugestao_look": [
      "Camisa manga longa",
      "Chino escura",
      "Sapato casual"
    ]
  }
]
```

### briefing_marketing

Orientações de marketing para campanhas e comunicações.

| Campo | Tipo | Descrição |
|-------|------|-------------|
| `tom_de_voz` | array | Recomendações de tom de comunicação |
| `direcao_visual` | array | Direção visual para campanhas |
| `orientacao_campanhas` | array | Estratégias de posicionamento de campanhas |

**Exemplo:**
```json
{
  "tom_de_voz": ["inspiracional", "autêntico", "sofisticado"],
  "direcao_visual": ["Paleta neutra", "Cenários urbanos", "Luz natural"],
  "orientacao_campanhas": [
    "Versatilidade",
    "Qualidade premium",
    "Lifestyle urbano"
  ]
}
```

### ganchos_conteudo

Array de temas de conteúdo que ressoam com o cliente.

**Exemplo:**
```json
[
  "Guarda-roupa cápsula masculino",
  "Básicos premium que valem o investimento"
]
```

### momento_compra_atual

Análise do momento atual de compra e oportunidades.

| Campo | Tipo | Descrição |
|-------|------|-------------|
| `navegacoes` | array | Padrões recentes de navegação/exploração |
| `resumo_momento` | string | Interpretação comportamental do momento atual |
| `relacao_com_historico` | string | Como o comportamento atual se relaciona com o histórico de compras |
| `novo_comportamento` | boolean | Se o cliente está mostrando comportamento novo/diferente |
| `oportunidades` | array | Ações recomendadas baseadas no momento atual |

**Exemplo:**
```json
{
  "navegacoes": ["01/09: visualizou Short Azul Claro"],
  "resumo_momento": "Explorando peças de verão e lazer",
  "relacao_com_historico": "Expande perfil para momentos de descontração",
  "novo_comportamento": true,
  "oportunidades": [
    "Curadoria looks verão",
    "Bundle viagem"
  ]
}
```

## Exemplo de Resposta Completa
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

## Tratamento de Erros

| Código de Status | Descrição | Solução |
|------------------|-----------|----------|
| `200` | Sucesso | Perfil retornado com sucesso |
| `401` | Não Autorizado | Verifique se seu token APP está correto |
| `404` | Não Encontrado | Perfil não existe para o identificador fornecido |
| `429` | Muitas Requisições | Implemente limitação de taxa em sua aplicação |
| `500` | Erro Interno do Servidor | Entre em contato com o suporte |

### Exemplo de Resposta de Erro
```json
{
  "error": "Unauthorized",
  "message": "Invalid or missing authentication token"
}
```

## Guia de Interpretação dos Campos

### Usando novo_comportamento

A flag `novo_comportamento` indica quando um cliente está explorando novos estilos ou categorias:
```javascript
if (profile.profile.momento_compra_atual.novo_comportamento) {
  // Cliente está mostrando novo comportamento - ótima oportunidade!
  const opportunities = profile.profile.momento_compra_atual.oportunidades;

  // Exemplo: Enviar email personalizado com recomendações
  sendEmail({
    to: customerEmail,
    subject: "Percebemos que você está explorando algo novo!",
    recommendations: opportunities
  });
}
```

### Segmentação de Marketing

Use `briefing_marketing` para criar campanhas segmentadas:
```javascript
const { tom_de_voz, direcao_visual } = profile.profile.briefing_marketing;

// Segmentar clientes por preferência de tom
if (tom_de_voz.includes("sofisticado")) {
  // Usar mensagens premium
}

if (direcao_visual.includes("Paleta neutra")) {
  // Usar visuais minimalistas
}
```

### Recomendações Baseadas em Ocasiões

Aproveite `ocasioes_relevantes` para sugestões contextuais de produtos:
```javascript
const workOccasion = profile.profile.ocasioes_relevantes.find(
  occ => occ.ocasião.toLowerCase().includes("trabalho")
);

if (workOccasion) {
  // Recomendar produtos da coleção trabalho
  recommendProducts(workOccasion.sugestao_look);
}
```

---

## Suporte

Para questões técnicas:
:mailbox: **support@generativecrm.com**