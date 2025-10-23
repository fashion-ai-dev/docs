# Serviço de Perfilagem de Clientes Fashion AI

## O que é este serviço?

O **Fashion AI Profiling** é um serviço inteligente que analisa o comportamento de compra e navegação dos seus clientes e gera automaticamente perfis detalhados e acionáveis. Esses perfis ajudam sua equipe de marketing, vendas e CRM a entender melhor cada cliente e criar experiências personalizadas.

---

## Para que serve?

### Principais benefícios:

✅ **Personalização em escala**: Crie campanhas personalizadas para cada perfil de cliente automaticamente

✅ **Insights comportamentais**: Entenda o estilo de vida, valores e preferências estéticas dos seus clientes

✅ **Sugestões acionáveis**: Receba recomendações concretas de looks, tom de comunicação e estratégias de campanha

✅ **Detecção de oportunidades**: Identifique novos comportamentos e momentos ideais para abordagem

✅ **Criação de conteúdo**: Tenha direcionamentos claros para criar conteúdo relevante para cada cliente

---

## Como funciona?

```
Dados do Cliente → Serviço Fashion AI → Perfil Completo em JSON
(compras + navegação)    (análise IA)      (pronto para usar)
```

### Fluxo simplificado:

1. **Entrada**: Nós acessamos o histórico de compras e a navegação do cliente pelos dados da sua plataforma cadastrada no momento da integração.
2. **Processamento**: Nossa IA analisa os dados e identifica padrões comportamentais
3. **Saída**: Você recebe um perfil estruturado com insights e recomendações práticas

---

## O que você recebe no perfil gerado?

### 1. **Perfil do Cliente**
- Descrição geral do cliente: estilo de vida, valores, interesses
- Estilo geral: preferências de cores, cortes, nível de formalidade, estéticas

**Exemplo:**
```json
{
  "descricao_geral": "Mulher de 35 anos, profissional liberal, valoriza sustentabilidade e conforto no dia a dia",
  "estilo_geral": "Casual-chic com tendência minimalista, prefere tons neutros e peças atemporais"
}
```

---

### 2. **Ocasiões Relevantes**
Para cada situação importante na vida do cliente:
- Nome da ocasião (trabalho, festa, casual, etc.)
- Como o cliente se apresenta nessa ocasião
- Sugestões de looks completos

**Exemplo:**
```json
{
  "ocasião": "Trabalho - Reuniões Importantes",
  "persona_na_ocasião": "Profissional confiante, elegante sem exageros",
  "sugestao_look": [
    "Blazer alfaiataria bege",
    "Calça de sarja preta",
    "Blusa de seda off-white",
    "Scarpin nude"
  ]
}
```

---

### 3. **Briefing de Marketing**
Direcionamentos práticos para campanhas:

**Tom de voz**: Como falar com este cliente
- Exemplo: ["inspiracional", "autêntico", "sofisticado mas acessível"]

**Direção visual**: Como criar o material visual
- Exemplo: ["paleta terrosa", "cenários urbanos e naturais", "fotografia com luz natural"]

**Orientação para campanhas**: Estratégias de posicionamento
- Exemplo: ["Destacar versatilidade das peças", "Conectar produto com sustentabilidade", "Mostrar transição dia-noite"]

---

### 4. **Ganchos de Conteúdo**
Temas que ressoam com o cliente:
- Exemplo: ["Moda sustentável e consumo consciente", "Peças curingas para múltiplas ocasiões", "Minimalismo no guarda-roupa"]

---

### 5. **Momento de Compra Atual**
Análise do comportamento recente:

**Navegações recentes**: O que o cliente viu/pesquisou nos últimos dias
- Exemplo: "20/01 - Buscou 'vestido midi' e visualizou 3 produtos"

**Resumo do momento**: Interpretação comportamental
- Exemplo: "Cliente está explorando opções para eventos formais de verão"

**Relação com histórico**: Como isso se conecta com compras anteriores
- Exemplo: "Primeira vez buscando vestidos - normalmente compra peças separadas"

**Novo comportamento?**: `true` ou `false`
- Indica se o cliente está mostrando um padrão diferente do usual

**Oportunidades**: Ações recomendadas
- Exemplo: ["Enviar lookbook de vestidos midi", "Oferecer consultoria de styling virtual"]

---

## Como usar o serviço?

[Aprenda a implementar no developer guide ](../developer-guide/profiling.md)

## Casos de uso práticos

### 1. **Marketing Personalizado**
**Situação**: Você quer criar uma campanha de email segmentada

**Como usar**:
- Gere perfis de 100 clientes
- Agrupe por briefing de marketing similar
- Crie 3-4 versões de email com tom de voz e direção visual adequados
- Aumente taxa de abertura em 40%+

---

### 2. **Recomendação de Produtos**
**Situação**: Cliente navegou no site mas não comprou

**Como usar**:
- Analise o "momento_compra_atual"
- Identifique as "oportunidades" sugeridas
- Envie recomendações personalizadas baseadas nas ocasiões relevantes
- Aumente conversão em 25%+

---

### 3. **Criação de Conteúdo**
**Situação**: Precisa de ideias para posts de Instagram

**Como usar**:
- Use os "ganchos_conteudo" dos seus top clientes
- Crie posts que ressoam com esses temas
- Aumente engajamento organicamente

---

### 4. **Atendimento VIP**
**Situação**: Cliente de alto valor agendou consultoria

**Como usar**:
- Vendedor consulta o perfil antes do atendimento
- Já conhece estilo, ocasiões importantes e preferências
- Sugere looks completos durante a consultoria
- Aumente ticket médio em 60%+

---

### 5. **Detecção de Mudança de Comportamento**
**Situação**: Cliente sempre comprava casual, mas começou a buscar peças formais

**Como usar**:
- Campo "novo_comportamento" retorna `true`
- Identifique a mudança no campo "momento_compra_atual"
- Entre em contato proativamente oferecendo consultoria
- Capture oportunidade antes da concorrência

## Perguntas Frequentes

### O serviço funciona com poucos dados?
Sim, mas quanto mais dados de compra e navegação, mais rico e preciso será o perfil.

### Os perfis são atualizados automaticamente?
Não. Você deve chamar o serviço novamente quando quiser um novo perfil.

### Posso usar para clientes B2B?
Sim, o modelo se adapta ao tipo de dados fornecidos.

### Posso integrar com meu CRM?
Sim! Basta integrar via API REST. Consulte sua equipe técnica.

---

## Suporte

Para dúvidas técnicas ou comerciais, entre em contato com a equipe Fashion AI :mailbox: **support@generativecrm.com**
---

