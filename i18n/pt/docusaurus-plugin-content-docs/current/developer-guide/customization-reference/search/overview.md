# Visão Geral da Busca de Produtos

Integre a API de Busca de Produtos para entregar resultados inteligentes e relevantes do seu catálogo. Este guia fornece uma visão abrangente da funcionalidade de busca e endpoints disponíveis.

## Introdução

A API de Busca fornece capacidades de busca inteligente de produtos para seu catálogo. Ela processa consultas de busca e retorna correspondências de produtos relevantes com suporte de paginação.

## Características Principais

- **Busca de Produtos**: Encontre produtos por nome, categoria ou atributos
- **Paginação**: Lida com conjuntos de resultados grandes de forma eficiente
- **Rastreamento de Sessão**: Rastreia o comportamento de busca do usuário
- **Suporte Multi-idioma**: Busca em diferentes idiomas
- **Resultados em Tempo Real**: Tempos de resposta rápidos para melhor experiência do usuário

## Endpoint

```
POST https://catalog.api.fashionaiale.com/api/v1/products/protected/search?page={page}&limit={limit}&query={query}
```

## Início Rápido

1. **Obtenha Seu Token**: Obtenha seu token de API do painel de controle
2. **Faça uma Solicitação**: Envie uma solicitação POST com sua consulta de busca
3. **Processe Resultados**: Processe os IDs de produtos retornados
4. **Implemente Paginação**: Use os parâmetros de página e limite para conjuntos de dados grandes

## Fluxo de Solicitação

```mermaid
sequenceDiagram
    Cliente->>API: POST /search com consulta
    API->>Banco de Dados: Buscar produtos
    Banco de Dados->>API: Retornar produtos correspondentes
    API->>Cliente: Retornar IDs de produtos + paginação
```

## Estrutura de Resposta

A API retorna uma estrutura de resposta consistente:

```json
{
  "totalItems": 47,
  "totalPages": 5,
  "currentPage": 1,
  "items": ["147748", "149250", "148070"]
}
```

## Próximos Passos

- [Autenticação](../authentication) - Aprenda como autenticar suas solicitações
- [Exemplos de Implementação](./examples) - Veja exemplos de código em diferentes linguagens
