# Integração VTEX

Guia completo para integrar o FashionAI com sua loja VTEX para enriquecimento automático de produtos e gerenciamento de catálogo.

## Configuração Inicial

### 1. Habilitar Vision Enrichment

1. No menu direito da plataforma, clique em **Settings**
2. Em **General Settings**, habilite o botão **Vision Enrichment**

### 2. Configurar VTEX Settings

1. Vá para a aba **VTEX Settings**
2. Insira suas credenciais da API VTEX para sincronização de dados

## Permissões Necessárias

Para garantir a autenticação e autorização corretas dentro do ecossistema VTEX, seu token deve ter permissões específicas concedidas. Abaixo está uma tabela com os acessos necessários e seus respectivos escopos:

| Produto | Categoria | Recurso |
|---------|-----------|---------|
| Catálogo | Conteúdo | Gerenciamento de Produtos e SKUs |
| Catálogo | Conteúdo | Gerenciamento de Categorias |
| Catálogo | Conteúdo | Categoria |
| Catálogo | Conteúdo | SKUs |
| OMS | Acesso OMS | Listar Pedidos |
| OMS | Acesso OMS | Visualizar Pedido |
| Checkout | Recursos do Checkout | Acesso Completo a Pedidos |

## Configuração do Sistema de Afiliados

### Como Configurar o Sistema de Afiliados para Consumo de Catálogo

Para permitir que o FashionAI consuma seu catálogo VTEX, você precisa criar uma configuração de afiliado.

### Criando um Afiliado

1. No menu lateral do admin, clique em **Gerenciamento de Pedidos**
2. Clique em **Configurações**
3. Clique na aba **Afiliados**
4. Clique no botão **Novo Afiliado**
5. Preencha os campos do painel de Novo Afiliado:

| Campo | Valor |
|-------|-------|
| **Nome** | FashionAI |
| **ID** | FFF |
| **Política Comercial** | 1 |
| **E-mail de Acompanhamento** | vtex@generativecrm.com |
| **Endpoint de Busca** | Gerar Link |
| **Versão do Endpoint de Busca** | 1.x.x |
| **Usar meu método de pagamento** | ❌ Não marque esta opção |

6. Clique em **Salvar**

### Nota Importante

Se alguma das informações dos campos do painel de afiliado for diferente, por favor, preencha o formulário que será fornecido abaixo.

## Próximos Passos

Após completar a configuração do afiliado:

1. **Teste a conexão** - Verifique se o FashionAI pode acessar seu catálogo
2. **Configure regras de enriquecimento** - Configure quais produtos devem ser processados
3. **Monitore a sincronização** - Verifique o status da integração na plataforma

## Solução de Problemas

### Problemas Comuns

- **Erros de autenticação**: Verifique credenciais da API e permissões
- **Falhas de sincronização**: Verifique configuração do afiliado e endpoints
- **Produtos ausentes**: Certifique-se de que a política comercial inclui todos os itens desejados

### Suporte

Para suporte técnico com integração VTEX, entre em contato com nossa equipe em vtex@generativecrm.com