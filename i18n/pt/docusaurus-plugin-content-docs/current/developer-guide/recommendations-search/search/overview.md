# Visão Geral da Busca de Produtos

Integre a API de Busca de Produtos para entregar resultados inteligentes e relevantes do seu catálogo. Este guia fornece uma visão geral abrangente da funcionalidade de busca e dos endpoints disponíveis.

## Introdução

A API de Busca fornece capacidades inteligentes de busca de produtos para seu catálogo. Ela processa consultas de busca e retorna correspondências relevantes de produtos com suporte a paginação.

## Recursos Principais

- **Busca de Produtos**: Encontre produtos por nome, categoria ou atributos
- **Paginação**: Lide com grandes conjuntos de resultados de forma eficiente
- **Rastreamento de Sessão**: Rastreie o comportamento de busca do usuário
- **Suporte Multi-idioma**: Busque em diferentes idiomas
- **Resultados em Tempo Real**: Tempos de resposta rápidos para melhor experiência do usuário

## Endpoint
```
POST https://catalog.api.fashionaiale.com/api/v1/products/protected/search?page={page}&limit={limit}&query={query}
```

## Início Rápido

1. **Obtenha Seu Token**: Obtenha seu token de API no painel
2. **Faça uma Requisição**: Envie uma requisição POST com sua consulta de busca
3. **Processe os Resultados**: Processe os IDs de produtos retornados
4. **Implemente Paginação**: Use os parâmetros page e limit para grandes conjuntos de dados

## Fluxo de Requisição
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

- [Autenticação](../../authentication) - Aprenda como autenticar suas requisições
- [Exemplos de Implementação](./examples) - Veja exemplos de código em diferentes linguagens