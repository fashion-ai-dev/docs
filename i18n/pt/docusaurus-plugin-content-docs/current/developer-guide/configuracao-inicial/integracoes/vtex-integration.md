# Integração VTEX

Guia completo para integrar o FashionAI com sua loja VTEX para enriquecimento automático de produtos e gerenciamento de catálogo.

## Configuração Inicial

### 1. Habilitar Vision Enrichment

1. No menu direito da plataforma, clique em **Configurações**
2. Em **Configurações Gerais**, habilite o botão **Vision Enrichment**

### 2. Configurar Ajustes da VTEX

1. Vá para a aba **Configurações da VTEX**
2. Insira suas credenciais de API da VTEX para sincronização de dados

## Permissões Necessárias

Para autenticação e autorização adequadas dentro do ecossistema VTEX, seu token deve ter permissões específicas concedidas. Abaixo está uma tabela com os acessos necessários e seus respectivos escopos:

| Produto | Categoria | Recurso |
|---------|----------|----------|
| Catalog | Content | Product and SKU Management |
| Catalog | Content | Category Management |
| Catalog | Content | Category |
| Catalog | Content | SKUs |
| OMS | OMS Access | List Orders |
| OMS | OMS Access | View Order |
| Checkout | Checkout Resources | Full Order Access |

## Configuração do Sistema de Afiliados

### Como Configurar o Sistema de Afiliados para Consumo de Catálogo

Para permitir que o FashionAI consuma seu catálogo VTEX, você precisa criar uma configuração de afiliado.

### Criação de um Afiliado

1. No menu lateral do admin, clique em **Gerenciamento de Pedidos**
2. Clique em **Configurações**
3. Clique na aba **Afiliados**
4. Clique no botão **Novo Afiliado**
5. Preencha os campos do painel Novo Afiliado:

| Campo | Valor |
|-------|-------|
| **Nome** | FashionAI |
| **ID** | FFF |
| **Política Comercial** | 1 |
| **Email de Acompanhamento** | vtex@generativecrm.com |
| **Endpoint de Busca** | Gerar Link |
| **Versão do Endpoint de Busca** | 1.x.x |
| **Usar meu método de pagamento** | ❌ Não marque esta opção |

6. Clique em **Salvar**

### Nota Importante

Se alguma das informações do campo do painel de afiliados for diferente, por favor preencha o formulário que será fornecido abaixo.

## Próximos Passos

Após completar a configuração de afiliados:

1. **Testar a conexão** - Verifique se o FashionAI pode acessar seu catálogo
2. **Configurar regras de enriquecimento** - Configure quais produtos devem ser processados
3. **Monitorar sincronização** - Verifique o status de integração na plataforma

## Solução de Problemas

### Problemas Comuns

- **Erros de autenticação**: Verifique credenciais de API e permissões
- **Falhas de sincronização**: Verifique a configuração de afiliados e endpoints
- **Produtos faltantes**: Certifique-se de que a política comercial inclui todos os itens desejados

### Suporte

Para suporte técnico com a integração da VTEX, entre em contato com nossa equipe em vtex@generativecrm.com
