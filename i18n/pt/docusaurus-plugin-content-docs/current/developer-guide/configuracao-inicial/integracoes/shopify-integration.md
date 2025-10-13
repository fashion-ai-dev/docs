# Integração do Shopify

Guia completo para integrar o FashionAI com sua loja Shopify para enriquecimento automático de produtos e gerenciamento de catálogo.

## Visão Geral

A integração do Shopify permite ao FashionAI:

- **Enriquecer automaticamente catálogos de produtos** com descrições e atributos gerados por IA
- **Sincronizar dados de produtos** em tempo real com sua loja Shopify
- **Processar conteúdo visual** usando capacidades do Vision Enrichment
- **Gerenciar pedidos e dados de clientes** para segmentação comportamental

## Configuração Inicial

### 1. Habilitar Vision Enrichment

1. No menu direito da plataforma, clique em **Configurações**
2. Navegue até **Configurações Gerais**
3. Habilite o botão **Vision Enrichment**

![Ativar Catálogo](/img/activate-catalog.png)

**O que o Vision Enrichment faz:**
- Analisa imagens de produtos usando IA de visão computacional
- Gera descrições de produtos baseadas em conteúdo visual
- Extrai atributos como cor, estilo, padrão e material
- Enriquece seu catálogo com metadados precisos e consistentes

### 2. Criar Aplicativo Personalizado do Shopify

Para conectar o FashionAI com sua loja Shopify, crie um aplicativo personalizado:

1. Faça login no **Shopify Admin** como administrador
2. Vá para **Configurações** > **Aplicativos e canais de venda**
3. Clique em **Desenvolver aplicativos** > **Criar um aplicativo**
4. Nomeie o aplicativo: **Integração de API do FashionAI**
5. Clique em **Criar aplicativo**

### 3. Configurar Permissões de API

No aplicativo criado, configure as permissões necessárias:

1. Vá para a aba **Credenciais de API**
2. Clique em **Configurar escopos da Admin API**
3. Selecione as seguintes permissões:

| Permissão | Descrição |
|---------|-------------|
| **read_products** | Ler produtos |
| **write_products** | Editar produtos (incluindo imagens) |
| **read_publications** | Ler publicações |
| **read_inventory** | Ler inventário |
| **read_customers** | Ler clientes |
| **read_orders** | Ler pedidos |
| **read_marketplace_orders** | Ler pedidos de marketplace |
| **read_buyer_membership_orders** | Ler pedidos de associação de compradores |

4. Clique em **Salvar**

Para mais detalhes sobre as permissões da API do Shopify, consulte a [Documentação da API do Shopify](https://shopify.dev/docs/api/admin-rest).

### 4. Gerar Token de Acesso

1. Na aba **Credenciais de API**, clique em **Instalar aplicativo**
2. Confirme a instalação
3. **Copie o Token de Acesso da Admin API imediatamente** (mostrado apenas uma vez!)
4. Armazene o token com segurança

**Importante:** O Token de Acesso da Admin API é mostrado apenas uma vez. Salve-o em um gerenciador de senhas seguro.

### 5. Configurar Ajustes do Shopify no FashionAI

1. Vá para a aba **Configurações do Shopify** no menu de Configurações
2. Insira suas credenciais do Shopify:

| Campo | Descrição | Exemplo |
|-------|-------------|---------|
| **URL da Loja** | Sua URL da loja Shopify | `https://sua-loja.myshopify.com` |
| **Token de Acesso** | Token de Acesso da Admin API | `shpat_xxxxxxxxxxxxxxxxxxxxx` |

3. Clique em **Testar Conexão** para verificar as credenciais
4. Clique em **Salvar** para ativar a integração

## Configuração Avançada

### Regras de Filtragem Opcionais

Configure regras adicionais para controlar quais produtos são processados:

**Canais de Venda (IDs de Publicação)**
- Digite IDs de publicação separados por vírgulas
- Exemplo: `123,456`
- Define de quais canais de venda sincronizar produtos

**Fornecedores Excluídos**
- Digite nomes de fornecedores separados por vírgulas
- Exemplo: `Nike,Adidas,Puma`
- Marcas excluídas do processamento de IA

**Origem do Pedido (Plataforma de Vendas)**
- Digite nomes de origem de pedido separados por vírgulas
- Exemplo: `web,pos,api`
- Filtrar pedidos por origem (`web` para loja online, `pos` para Ponto de Venda, `api` para pedidos de API)

Deixe os campos em branco para ignorar essas regras.

## Fluxo de Trabalho do Vision Enrichment

1. **Upload de Imagem de Produto:** Quando uma imagem de produto é adicionada ao Shopify
2. **Detecção Automática:** FashionAI detecta a nova imagem via webhook
3. **Análise de IA:** A visão computacional analisa a imagem
4. **Extração de Atributos:** A IA identifica cores, padrões, estilos, materiais
5. **Geração de Descrição:** A IA cria descrições de produtos
6. **Atualização de Catálogo:** Os dados enriquecidos são sincronizados de volta ao Shopify

## Monitoramento de Integração

Rastreie o status de sincronização em **Configurações** > **Integrações** > **Shopify**:

- ✅ **Ativo:** Sincronizando com sucesso
- ⏳ **Sincronizando:** Atualização em andamento
- ⚠️ **Aviso:** Sincronização parcial ou problemas menores
- ❌ **Erro:** Sincronização falhou - verifique os logs de erros

## Melhores Práticas

### Qualidade de Imagem de Produto

Para resultados de enriquecimento ideais:

- Use imagens de alta resolução (mínimo 1000x1000 pixels)
- Garanta fundos limpos (brancos ou neutros)
- Inclua múltiplos ângulos (frente, costas, detalhes)
- Verifique iluminação adequada e cores precisas

### Configuração de Enriquecimento

Personalize o enriquecimento na plataforma:

- **Tom de Voz:** Casual, profissional, luxo
- **Comprimento da Descrição:** Curta, média ou detalhada
- **Idioma:** Múltiplos idiomas suportados
- **Atributos Personalizados:** Atributos específicos da marca

## Solução de Problemas

### Problemas Comuns

**Erros de Autenticação:**
- Verifique as credenciais de API nas Configurações do Shopify
- Confirme que todas as permissões necessárias estão concedidas no aplicativo personalizado

**Produtos Não Sincronizam:**
- Verifique as configurações de publicação no Shopify
- Verifique se o filtro de fornecedores excluídos não está bloqueando produtos
- Revise os logs de erros de sincronização no painel de integração

**Enriquecimento Não Funciona:**
- Certifique-se de que o Vision Enrichment está habilitado nas Configurações Gerais
- Verifique se as imagens de produtos são de alta qualidade e acessíveis
- Verifique se os produtos estão publicados nos canais de venda corretos

## Suporte

Para suporte técnico com a integração do Shopify:

- **Email:** support@generativecrm.com
- **Problemas Específicos do Shopify:** [Central de Ajuda do Shopify](https://help.shopify.com/)

**Ao entrar em contato com o suporte, inclua:**
- Sua URL da loja Shopify
- Códigos ou mensagens de erro
- Handles de produtos de exemplo afetados
- Capturas de tela do problema (se aplicável)

## Recursos Adicionais

- **Documentação da API do Shopify:** [Desenvolvedores do Shopify](https://shopify.dev/docs)
- **Guia da Plataforma FashionAI:** [Primeiros Passos](../getting-started)
- **Detalhes do Vision Enrichment:** [Guia do Vision Enrichment](../../user-guide/vision-enrichment/index)

