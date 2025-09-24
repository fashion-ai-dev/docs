# Exemplos de Integração

## Exemplos de Integração do Mundo Real

Aprenda como integrar nossa plataforma de moda com plataformas de e-commerce populares, frameworks e aplicações personalizadas através de exemplos práticos.

## Integrações de Plataforma E-commerce

### Integração Shopify

#### Sincronização e Enriquecimento de Produtos
```javascript
// Handler de webhook Shopify para novos produtos
app.post('/webhook/shopify/product/create', async (req, res) => {
  const shopifyProduct = req.body;

  // Enriquecer produto com nossa plataforma
  const enrichedData = await fashionClient.catalog.enrichProduct({
    sku: shopifyProduct.variants[0].sku,
    name: shopifyProduct.title,
    description: shopifyProduct.body_html,
    images: shopifyProduct.images.map(img => img.src),
    price: shopifyProduct.variants[0].price
  });

  // Atualizar produto Shopify com dados enriquecidos
  await shopify.product.update(shopifyProduct.id, {
    body_html: enrichedData.enhanced_description,
    tags: enrichedData.style_tags.join(', '),
    metafields: enrichedData.seo_metadata
  });

  res.status(200).send('OK');
});
```

#### Recomendações Inteligentes de Produtos
```liquid
<!-- Template liquid do tema Shopify -->
{% assign product_id = product.id %}
<div id="fashion-recommendations" data-product-id="{{ product_id }}">
  <h3>Complete o Look</h3>
  <div id="recommendations-container"></div>
</div>

<script>
async function loadRecommendations() {
  const response = await fetch('/apps/fashion-platform/recommendations', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      product_id: '{{ product.id }}',
      customer_id: '{{ customer.id }}',
      type: 'complete_the_look'
    })
  });

  const recommendations = await response.json();
  renderRecommendations(recommendations);
}

loadRecommendations();
</script>
```

### Integração WooCommerce

#### Plugin de Enriquecimento de Produtos
```php
<?php
// Hook WooCommerce para salvar produto
add_action('woocommerce_process_product_meta', 'enrich_fashion_product');

function enrich_fashion_product($product_id) {
    $product = wc_get_product($product_id);

    if (!$product) return;

    // Chamar API da Plataforma de Moda
    $fashion_client = new FashionPlatform\Client([
        'api_key' => get_option('fashion_platform_api_key')
    ]);

    $enrichment = $fashion_client->catalog()->enrichProduct([
        'sku' => $product->get_sku(),
        'name' => $product->get_name(),
        'description' => $product->get_description(),
        'images' => array_map(function($id) {
            return wp_get_attachment_url($id);
        }, $product->get_gallery_image_ids())
    ]);

    // Atualizar produto com dados enriquecidos
    $product->set_description($enrichment['enhanced_description']);
    $product->set_short_description($enrichment['short_description']);

    // Adicionar atributos de estilo
    foreach ($enrichment['attributes'] as $key => $value) {
        update_post_meta($product_id, '_fashion_' . $key, $value);
    }

    $product->save();
}
```

### Integração Magento

#### Módulo de Melhoria de Busca
```php
<?php
namespace Fashion\Platform\Model;

class SearchEnhancer
{
    private $fashionClient;

    public function __construct(
        \Fashion\Platform\Helper\Config $configHelper
    ) {
        $this->fashionClient = new \FashionPlatform\Client([
            'api_key' => $configHelper->getApiKey()
        ]);
    }

    public function enhanceSearchResults($searchQuery, $results)
    {
        // Obter resultados de busca aprimorados da Plataforma de Moda
        $enhancedResults = $this->fashionClient->search()->semantic([
            'query' => $searchQuery,
            'existing_results' => array_map(function($product) {
                return [
                    'id' => $product->getId(),
                    'sku' => $product->getSku(),
                    'name' => $product->getName()
                ];
            }, $results->getItems())
        ]);

        // Reordenar resultados baseado na relevância de moda
        return $this->reorderByRelevance($results, $enhancedResults['rankings']);
    }
}
```

## Exemplos Específicos de Framework

### Aplicação E-commerce React

#### Catálogo de Produtos com Busca
```jsx
import React, { useState, useEffect } from 'react';
import { FashionPlatform } from '@fashionplatform/sdk';

const ProductCatalog = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({});

  const fashionClient = new FashionPlatform({
    apiKey: process.env.REACT_APP_FASHION_API_KEY
  });

  useEffect(() => {
    const searchProducts = async () => {
      try {
        const results = await fashionClient.search.products({
          query: searchQuery,
          filters: filters,
          limit: 20
        });
        setProducts(results.products);
      } catch (error) {
        console.error('Busca falhou:', error);
      }
    };

    const debounceTimer = setTimeout(searchProducts, 300);
    return () => clearTimeout(debounceTimer);
  }, [searchQuery, filters]);

  return (
    <div className="product-catalog">
      <SearchBar
        value={searchQuery}
        onChange={setSearchQuery}
        placeholder="Buscar por itens de moda..."
      />

      <FilterSidebar
        filters={filters}
        onChange={setFilters}
      />

      <ProductGrid products={products} />
    </div>
  );
};

const ProductGrid = ({ products }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {products.map(product => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
);
```

#### Componente de Recomendações Inteligentes
```jsx
import { useRecommendations } from '@fashionplatform/react-hooks';

const ProductRecommendations = ({ productId, customerId }) => {
  const {
    recommendations,
    loading,
    error,
    trackClick
  } = useRecommendations({
    productId,
    customerId,
    type: 'similar_style',
    limit: 6
  });

  if (loading) return <RecommendationsSkeleton />;
  if (error) return <div>Não foi possível carregar recomendações</div>;

  return (
    <section className="recommendations">
      <h3>Você Também Pode Gostar</h3>
      <div className="recommendations-grid">
        {recommendations.map((product, index) => (
          <div
            key={product.id}
            onClick={() => trackClick(product.id, index)}
            className="recommendation-card"
          >
            <img src={product.image} alt={product.name} />
            <h4>{product.name}</h4>
            <p>R$ {product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
```

### Loja de Moda Vue.js

#### Componente de Busca Inteligente
```vue
<template>
  <div class="fashion-search">
    <input
      v-model="searchQuery"
      @input="handleSearch"
      placeholder="Descreva o que você está procurando..."
      class="search-input"
    />

    <div v-if="suggestions.length" class="search-suggestions">
      <div
        v-for="suggestion in suggestions"
        :key="suggestion.id"
        @click="selectSuggestion(suggestion)"
        class="suggestion-item"
      >
        <img :src="suggestion.image" :alt="suggestion.name" />
        <span>{{ suggestion.name }}</span>
      </div>
    </div>

    <SearchResults
      v-if="searchResults.length"
      :products="searchResults"
      :query="searchQuery"
    />
  </div>
</template>

<script>
import { FashionPlatform } from '@fashionplatform/sdk';

export default {
  name: 'FashionSearch',
  data() {
    return {
      searchQuery: '',
      suggestions: [],
      searchResults: [],
      fashionClient: new FashionPlatform({
        apiKey: process.env.VUE_APP_FASHION_API_KEY
      })
    };
  },
  methods: {
    async handleSearch() {
      if (this.searchQuery.length < 2) {
        this.suggestions = [];
        return;
      }

      // Obter sugestões de busca
      const suggestions = await this.fashionClient.search.suggest({
        query: this.searchQuery,
        limit: 5
      });
      this.suggestions = suggestions;

      // Realizar busca completa se a consulta for longa o suficiente
      if (this.searchQuery.length >= 3) {
        const results = await this.fashionClient.search.semantic({
          query: this.searchQuery,
          include_style_context: true
        });
        this.searchResults = results.products;
      }
    },

    selectSuggestion(suggestion) {
      this.searchQuery = suggestion.name;
      this.suggestions = [];
      this.handleSearch();
    }
  }
};
</script>
```

### API Backend Node.js

#### Serviço de Recomendações
```javascript
const express = require('express');
const { FashionPlatform } = require('@fashionplatform/sdk');

const app = express();
const fashionClient = new FashionPlatform({
  apiKey: process.env.FASHION_PLATFORM_API_KEY
});

// Recomendações de produtos personalizadas
app.get('/api/recommendations/:customerId', async (req, res) => {
  try {
    const { customerId } = req.params;
    const { page = 'home', limit = 12 } = req.query;

    const recommendations = await fashionClient.recommendations.getPersonalized({
      customer_id: customerId,
      context: {
        page_type: page,
        time_of_day: new Date().getHours(),
        season: getCurrentSeason()
      },
      limit: parseInt(limit)
    });

    // Rastrear exibição de recomendação
    await fashionClient.analytics.track({
      event: 'recommendations_shown',
      customer_id: customerId,
      properties: {
        recommendation_ids: recommendations.map(r => r.id),
        context: page
      }
    });

    res.json(recommendations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Análise de tendências de moda
app.get('/api/trends/analyze', async (req, res) => {
  try {
    const trends = await fashionClient.analytics.getTrends({
      timeframe: '30d',
      categories: ['vestidos', 'tops', 'calças'],
      include_predictions: true
    });

    res.json({
      current_trends: trends.trending_styles,
      color_trends: trends.trending_colors,
      predictions: trends.predictions,
      updated_at: new Date().toISOString()
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

function getCurrentSeason() {
  const month = new Date().getMonth();
  if (month >= 2 && month <= 4) return 'primavera';
  if (month >= 5 && month <= 7) return 'verão';
  if (month >= 8 && month <= 10) return 'outono';
  return 'inverno';
}
```

## Integração de Aplicativo Mobile

### App de Moda React Native

#### Tela de Descoberta de Produtos
```jsx
import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { FashionPlatform } from '@fashionplatform/react-native';

const ProductDiscoveryScreen = ({ navigation, route }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fashionClient = new FashionPlatform({
    apiKey: 'sua-chave-api-mobile'
  });

  useEffect(() => {
    loadPersonalizedProducts();
  }, []);

  const loadPersonalizedProducts = async () => {
    try {
      const userPreferences = await getUserPreferences();
      const recommendations = await fashionClient.recommendations.getPersonalized({
        customer_id: userPreferences.customerId,
        context: {
          platform: 'mobile',
          location: userPreferences.location,
          weather: await getCurrentWeather()
        }
      });

      setProducts(recommendations);
    } catch (error) {
      console.error('Falha ao carregar produtos:', error);
    } finally {
      setLoading(false);
    }
  };

  const renderProduct = ({ item, index }) => (
    <TouchableOpacity
      style={styles.productCard}
      onPress={() => {
        // Rastrear visualização do produto
        fashionClient.analytics.track({
          event: 'product_viewed',
          product_id: item.id,
          source: 'discovery_feed',
          position: index
        });

        navigation.navigate('ProductDetail', { productId: item.id });
      }}
    >
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>R$ {item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={products}
      renderItem={renderProduct}
      keyExtractor={item => item.id}
      numColumns={2}
      contentContainerStyle={styles.container}
    />
  );
};
```

## Padrões de Integração Avançados

### Arquitetura de Microsserviços

#### Serviço de Moda com Event Sourcing
```javascript
// fashion-service/src/events/ProductEnriched.js
class ProductEnrichedEvent {
  constructor(productId, enrichmentData, timestamp = new Date()) {
    this.type = 'ProductEnriched';
    this.productId = productId;
    this.enrichmentData = enrichmentData;
    this.timestamp = timestamp;
  }
}

// fashion-service/src/handlers/ProductEnrichmentHandler.js
class ProductEnrichmentHandler {
  constructor(fashionClient, eventStore, messageQueue) {
    this.fashionClient = fashionClient;
    this.eventStore = eventStore;
    this.messageQueue = messageQueue;
  }

  async handle(productCreatedEvent) {
    try {
      // Enriquecer produto usando Plataforma de Moda
      const enrichment = await this.fashionClient.catalog.enrichProduct({
        sku: productCreatedEvent.sku,
        name: productCreatedEvent.name,
        images: productCreatedEvent.images
      });

      // Armazenar evento de enriquecimento
      const enrichedEvent = new ProductEnrichedEvent(
        productCreatedEvent.productId,
        enrichment
      );

      await this.eventStore.append(enrichedEvent);

      // Publicar para outros serviços
      await this.messageQueue.publish('product.enriched', enrichedEvent);

    } catch (error) {
      console.error('Enriquecimento de produto falhou:', error);
      // Lidar com lógica de retry ou dead letter queue
    }
  }
}
```

### Dashboard de Analytics em Tempo Real

#### Integração WebSocket para Atualizações ao Vivo
```javascript
// analytics-dashboard/src/services/RealtimeAnalytics.js
class RealtimeAnalytics {
  constructor(fashionClient) {
    this.fashionClient = fashionClient;
    this.websocket = null;
    this.subscribers = new Map();
  }

  connect() {
    this.websocket = new WebSocket('wss://realtime.fashionplatform.com');

    this.websocket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      this.handleRealtimeUpdate(data);
    };
  }

  handleRealtimeUpdate(data) {
    switch (data.type) {
      case 'trend_spike':
        this.notifySubscribers('trends', data);
        break;
      case 'search_volume_change':
        this.notifySubscribers('search', data);
        break;
      case 'conversion_anomaly':
        this.notifySubscribers('conversion', data);
        break;
    }
  }

  subscribe(channel, callback) {
    if (!this.subscribers.has(channel)) {
      this.subscribers.set(channel, new Set());
    }
    this.subscribers.get(channel).add(callback);
  }

  notifySubscribers(channel, data) {
    if (this.subscribers.has(channel)) {
      this.subscribers.get(channel).forEach(callback => callback(data));
    }
  }
}

// Uso no componente React
const AnalyticsDashboard = () => {
  const [trendData, setTrendData] = useState([]);
  const analytics = useRef(new RealtimeAnalytics(fashionClient));

  useEffect(() => {
    analytics.current.connect();
    analytics.current.subscribe('trends', (data) => {
      setTrendData(prev => [...prev, data]);
    });

    return () => analytics.current.disconnect();
  }, []);

  return (
    <div className="analytics-dashboard">
      <TrendChart data={trendData} />
      <SearchVolumeWidget />
      <ConversionMetrics />
    </div>
  );
};
```

## Testando Integração

### Serviço Mock para Desenvolvimento
```javascript
// test/mocks/FashionPlatformMock.js
class FashionPlatformMock {
  constructor() {
    this.mockData = {
      products: require('./fixtures/products.json'),
      recommendations: require('./fixtures/recommendations.json'),
      trends: require('./fixtures/trends.json')
    };
  }

  search = {
    products: async (params) => {
      const filtered = this.mockData.products.filter(product =>
        product.name.toLowerCase().includes(params.query.toLowerCase())
      );
      return { products: filtered, total: filtered.length };
    },

    semantic: async (params) => {
      // Simular busca semântica com resultados mais relevantes
      return this.search.products(params);
    }
  };

  recommendations = {
    getPersonalized: async (params) => {
      return this.mockData.recommendations.slice(0, params.limit || 10);
    }
  };

  analytics = {
    track: async (event) => {
      console.log('Mock analytics track:', event);
      return { success: true };
    }
  };
}

// Nos seus arquivos de teste
const fashionClient = process.env.NODE_ENV === 'test'
  ? new FashionPlatformMock()
  : new FashionPlatform({ apiKey: process.env.API_KEY });
```