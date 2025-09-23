# Exemplos de Integração


## Exemplos de Integração do Mundo Real

Aprenda como integrar nossa plataforma de moda com plataformas de e-commerce populares, frameworks e aplicações personalizadas através de exemplos práticos.

## Integrações de Plataformas de E-commerce

### Integração Shopify

#### Sincronização e Enriquecimento de Produtos
```javascript
// Shopify webhook handler for new products
app.post('/webhook/shopify/product/create', async (req, res) => {
  const shopifyProduct = req.body;

  // Enrich product with our platform
  const enrichedData = await fashionClient.catalog.enrichProduct({
    sku: shopifyProduct.variants[0].sku,
    name: shopifyProduct.title,
    description: shopifyProduct.body_html,
    images: shopifyProduct.images.map(img => img.src),
    price: shopifyProduct.variants[0].price
  });

  // Update Shopify product with enriched data
  await shopify.product.update(shopifyProduct.id, {
    body_html: enrichedData.enhanced_description,
    tags: enrichedData.style_tags.join(','),
    metafields: enrichedData.attributes
  });

  res.status(200).send('OK');
});
```

#### Template de Tema com Recomendações
```liquid
<!-- Shopify theme liquid template -->
<div class="product-recommendations">
  {% if product.metafields.fashion.style_recommendations %}
    <h3>Complete the Look</h3>
    <div class="recommended-products">
      {% for recommendation_id in product.metafields.fashion.style_recommendations %}
        {% assign recommended_product = all_products[recommendation_id] %}
        {% if recommended_product %}
          <div class="recommended-item">
            <img src="{{ recommended_product.featured_image | img_url: '300x300' }}" alt="{{ recommended_product.title }}">
            <h4>{{ recommended_product.title }}</h4>
            <p class="price">{{ recommended_product.price | money }}</p>
            <button onclick="addToCart('{{ recommended_product.variants.first.id }}')">
              Adicionar ao Carrinho
            </button>
          </div>
        {% endif %}
      {% endfor %}
    </div>
  {% endif %}
</div>
```

### Integração WooCommerce

#### Enriquecimento Automático de Produtos
```php
// WooCommerce hook for product save
add_action('woocommerce_process_product_meta', 'enrich_product_with_fashion_ai');

function enrich_product_with_fashion_ai($product_id) {
    $product = wc_get_product($product_id);

    // Call Fashion Platform API
    $api_response = wp_remote_post('https://api.fashionplatform.com/enrich', [
        'headers' => [
            'Authorization' => 'Bearer ' . get_option('fashion_api_key'),
            'Content-Type' => 'application/json'
        ],
        'body' => json_encode([
            'product_id' => $product_id,
            'name' => $product->get_name(),
            'description' => $product->get_description(),
            'images' => array_map(function($id) {
                return wp_get_attachment_url($id);
            }, $product->get_gallery_image_ids()),
            'price' => $product->get_price()
        ])
    ]);

    if (!is_wp_error($api_response)) {
        $enriched_data = json_decode(wp_remote_retrieve_body($api_response), true);

        // Update product with enriched data
        $product->set_description($enriched_data['enhanced_description']);

        // Add style attributes
        foreach ($enriched_data['attributes'] as $key => $value) {
            update_post_meta($product_id, '_fashion_' . $key, $value);
        }

        $product->save();
    }
}
```

## Integrações de Framework

### React.js com Search API

#### Hook Personalizado para Busca
```javascript
import { useState, useEffect } from 'react';

const useFashionSearch = (query, filters = {}) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) return;

    const searchProducts = async () => {
      setLoading(true);
      setError(null);

      try {
        // Get enhanced search results from Fashion Platform
        const response = await fetch('/api/fashion/search', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ query, filters })
        });

        const data = await response.json();

        // Reorder results based on fashion relevance
        const enhancedResults = data.products.map(product => ({
          ...product,
          fashionScore: product.style_relevance || 0
        }));

        setResults(enhancedResults.sort((a, b) => b.fashionScore - a.fashionScore));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    searchProducts();
  }, [query, filters]);

  return { results, loading, error };
};

export default useFashionSearch;
```

#### Componente de Catálogo de Produtos com Busca
```javascript
import React, { useState } from 'react';
import useFashionSearch from './hooks/useFashionSearch';

const ProductCatalog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({});
  const { results: products, loading, error } = useFashionSearch(searchQuery, filters);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  if (error) {
    return <div className="error">Erro ao carregar produtos: {error}</div>;
  }

  return (
    <div className="product-catalog">
      <div className="search-section">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Buscar itens de moda..."
          className="search-input"
        />

        <FilterPanel onFilterChange={handleFilterChange} />
      </div>

      {loading && <div className="loading">Carregando...</div>}

      <ProductGrid products={products} />
    </div>
  );
};

const ProductGrid = ({ products }) => (
  <div className="product-grid">
    {products.map(product => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
);
```

### Vue.js com Recomendações

#### Componente de Recomendações
```vue
<template>
  <div class="recommendations-section">
    <h3>Produtos Recomendados</h3>
    <div v-if="loading" class="loading">Carregando recomendações...</div>
    <div v-else-if="error" class="error">Não foi possível carregar recomendações</div>
    <div v-else class="recommendations-grid">
      <div
        v-for="product in recommendations"
        :key="product.id"
        class="recommendation-card"
        @click="trackRecommendationClick(product)"
      >
        <img :src="product.image" :alt="product.name" />
        <h4>{{ product.name }}</h4>
        <p class="price">${{ product.price }}</p>
        <button @click.stop="addToCart(product)">Adicionar ao Carrinho</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductRecommendations',
  props: {
    productId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      recommendations: [],
      loading: false,
      error: null
    };
  },
  async mounted() {
    await this.loadRecommendations();
  },
  methods: {
    async loadRecommendations() {
      this.loading = true;
      this.error = null;

      try {
        const response = await this.$http.post('/api/recommendations', {
          productId: this.productId,
          type: 'style_match'
        });

        this.recommendations = response.data.products;
      } catch (error) {
        this.error = 'Erro ao carregar recomendações';
        console.error('Failed to load recommendations:', error);
      } finally {
        this.loading = false;
      }
    },
    trackRecommendationClick(product) {
      // Track recommendation click
      this.$analytics.track('recommendation_clicked', {
        product_id: product.id,
        source_product_id: this.productId
      });
    },
    addToCart(product) {
      this.$store.dispatch('cart/addItem', product);
    }
  }
};
</script>
```

### Angular com Busca Inteligente

#### Serviço de Busca
```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FashionSearchService {
  private apiUrl = '/api/fashion';

  constructor(private http: HttpClient) {}

  searchProducts(query: string, filters: any = {}): Observable<any> {
    return this.http.post(`${this.apiUrl}/search`, {
      query,
      filters,
      enhance_with_ai: true
    });
  }

  getSearchSuggestions(query: string): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/suggestions`, {
      params: { q: query }
    });
  }

  createSearchStream(searchTerm$: Observable<string>) {
    return searchTerm$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(term => {
        if (term.length < 2) return [];

        // Get search suggestions
        return this.getSearchSuggestions(term);
      })
    );
  }
}
```

#### Componente de Busca com Auto-complete
```typescript
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FashionSearchService } from './fashion-search.service';

@Component({
  selector: 'app-fashion-search',
  template: `
    <div class="search-container">
      <input
        [formControl]="searchControl"
        placeholder="Descreva o que você está procurando..."
        class="search-input"
      />

      <div *ngIf="suggestions.length" class="suggestions-dropdown">
        <div
          *ngFor="let suggestion of suggestions"
          class="suggestion-item"
          (click)="selectSuggestion(suggestion)"
        >
          {{ suggestion }}
        </div>
      </div>

      <div *ngIf="searchResults.length" class="search-results">
        <app-product-card
          *ngFor="let product of searchResults"
          [product]="product"
        ></app-product-card>
      </div>
    </div>
  `
})
export class FashionSearchComponent implements OnInit {
  searchControl = new FormControl('');
  suggestions: string[] = [];
  searchResults: any[] = [];

  constructor(private searchService: FashionSearchService) {}

  ngOnInit() {
    // Auto-complete suggestions
    this.searchService.createSearchStream(this.searchControl.valueChanges)
      .subscribe(suggestions => {
        this.suggestions = suggestions;
      });

    // Full search on enter or when query is long enough
    this.searchControl.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged()
    ).subscribe(query => {
      if (query && query.length >= 3) {
        this.performSearch(query);
      }
    });
  }

  selectSuggestion(suggestion: string) {
    this.searchControl.setValue(suggestion);
    this.suggestions = [];
    this.performSearch(suggestion);
  }

  performSearch(query: string) {
    this.searchService.searchProducts(query).subscribe(results => {
      this.searchResults = results.products;
    });
  }
}
```

## Integrações Avançadas

### Microserviços com Node.js

#### Serviço de Análise de Tendências
```javascript
// Fashion trend analysis
const express = require('express');
const { FashionAnalytics } = require('./services/fashion-analytics');

const app = express();
app.use(express.json());

app.post('/api/trends/analyze', async (req, res) => {
  try {
    const { timeframe, categories, region } = req.body;

    const analytics = new FashionAnalytics();
    const trends = await analytics.analyzeTrends({
      timeframe,
      categories,
      region,
      includeColorAnalysis: true,
      includeStylePredictions: true
    });

    res.json({
      success: true,
      data: {
        trending_colors: trends.colors,
        emerging_styles: trends.styles,
        seasonal_predictions: trends.predictions,
        market_insights: trends.insights
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// Personalized product recommendations
app.post('/api/recommendations/personalized', async (req, res) => {
  const { userId, context, preferences } = req.body;

  try {
    const recommendations = await analytics.getPersonalizedRecommendations({
      userId,
      context,
      preferences,
      limit: 20
    });

    // Track recommendation display
    await analytics.trackEvent('recommendations_displayed', {
      userId,
      recommendationIds: recommendations.map(r => r.id),
      context
    });

    res.json({
      success: true,
      recommendations
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

module.exports = app;
```

### React Native para Mobile

#### Componente de Catálogo Mobile
```javascript
import React, { useState, useEffect } from 'react';
import {
  View,
  FlatList,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput
} from 'react-native';

const MobileFashionCatalog = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const response = await fetch('/api/products/mobile', {
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': 'FashionApp/1.0'
        }
      });

      const data = await response.json();
      setProducts(data.products);
    } catch (error) {
      console.error('Failed to load products:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleProductPress = (product) => {
    // Track product view
    analytics.track('product_viewed', {
      product_id: product.id,
      category: product.category,
      price: product.price
    });

    // Navigate to product detail
    navigation.navigate('ProductDetail', { productId: product.id });
  };

  const renderProduct = ({ item }) => (
    <TouchableOpacity
      style={styles.productCard}
      onPress={() => handleProductPress(item)}
    >
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>${item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Buscar produtos..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      <FlatList
        data={products}
        renderItem={renderProduct}
        numColumns={2}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.productGrid}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  searchInput: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    margin: 10,
    paddingHorizontal: 10,
    borderRadius: 5
  },
  productGrid: {
    padding: 10
  },
  productCard: {
    flex: 1,
    margin: 5,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    padding: 10
  },
  productImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    borderRadius: 5
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5
  },
  productPrice: {
    fontSize: 12,
    color: '#666',
    marginTop: 3
  }
});

export default MobileFashionCatalog;
```

### Arquitetura Event-Driven

#### Serviço de Moda com Event Sourcing
```javascript
const EventStore = require('./event-store');
const FashionPlatformClient = require('./fashion-platform-client');

class FashionService {
  constructor() {
    this.eventStore = new EventStore();
    this.fashionClient = new FashionPlatformClient();
  }

  async enrichProduct(productData) {
    const eventId = this.generateEventId();

    try {
      // Store initial event
      await this.eventStore.append('product_enrichment_started', {
        eventId,
        productId: productData.id,
        timestamp: new Date(),
        data: productData
      });

      // Enrich product using Fashion Platform
      const enrichedData = await this.fashionClient.enrichProduct(productData);

      // Store enrichment event
      await this.eventStore.append('product_enriched', {
        eventId,
        productId: productData.id,
        enrichedData,
        timestamp: new Date()
      });

      // Publish to other services
      await this.publishEvent('product_enrichment_completed', {
        productId: productData.id,
        enrichedData
      });

      return enrichedData;
    } catch (error) {
      console.error('Product enrichment failed:', error);
      // Handle retry logic or dead letter queue
      await this.eventStore.append('product_enrichment_failed', {
        eventId,
        productId: productData.id,
        error: error.message,
        timestamp: new Date()
      });

      throw error;
    }
  }

  generateEventId() {
    return `evt_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }
}
```

#### Integração WebSocket para Atualizações em Tempo Real
```javascript
const WebSocket = require('ws');
const EventEmitter = require('events');

class FashionRealtimeService extends EventEmitter {
  constructor(server) {
    super();
    this.wss = new WebSocket.Server({ server });
    this.clients = new Map();
    this.setupWebSocketHandlers();
  }

  setupWebSocketHandlers() {
    this.wss.on('connection', (ws, req) => {
      const clientId = this.generateClientId();
      this.clients.set(clientId, { ws, subscriptions: [] });

      ws.on('message', (message) => {
        try {
          const data = JSON.parse(message);
          this.handleClientMessage(clientId, data);
        } catch (error) {
          ws.send(JSON.stringify({
            type: 'error',
            message: 'Invalid message format'
          }));
        }
      });

      ws.on('close', () => {
        this.clients.delete(clientId);
      });
    });
  }

  handleClientMessage(clientId, data) {
    const client = this.clients.get(clientId);
    if (!client) return;

    switch (data.type) {
      case 'subscribe_trends':
        client.subscriptions.push('trends');
        this.sendTrendUpdates(clientId);
        break;
      case 'subscribe_recommendations':
        client.subscriptions.push(`recommendations:${data.userId}`);
        break;
    }
  }

  broadcastTrendUpdate(trendData) {
    this.clients.forEach((client, clientId) => {
      if (client.subscriptions.includes('trends')) {
        client.ws.send(JSON.stringify({
          type: 'trend_update',
          data: trendData
        }));
      }
    });
  }
}

// Usage in React component
const useFashionRealtime = () => {
  const [trendData, setTrendData] = useState(null);
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8080/fashion-realtime');

    ws.onopen = () => {
      setConnected(true);
      ws.send(JSON.stringify({ type: 'subscribe_trends' }));
    };

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.type === 'trend_update') {
        setTrendData(data.data);
      }
    };

    ws.onclose = () => setConnected(false);

    return () => ws.close();
  }, []);

  return { trendData, connected };
};

// React component using real-time data
const TrendDashboard = () => {
  const { trendData, connected } = useFashionRealtime();

  return (
    <div className="trend-dashboard">
      <div className="connection-status">
        Status: {connected ? 'Conectado' : 'Desconectado'}
      </div>

      {trendData && (
        <TrendChart data={trendData} />
      )}
    </div>
  );
};
```

## Ferramentas de Desenvolvimento

### Mock Service para Desenvolvimento
```javascript
// Mock Fashion Platform API for development
const express = require('express');
const app = express();

app.use(express.json());

// Mock product enrichment
app.post('/api/enrich', (req, res) => {
  const { product } = req.body;

  // Simulate processing time
  setTimeout(() => {
    res.json({
      enhanced_description: `${product.description} - Enhanced with AI insights`,
      style_tags: ['trendy', 'casual', 'versatile'],
      color_palette: ['#FF5733', '#33FF57', '#3357FF'],
      recommended_products: ['prod-1', 'prod-2', 'prod-3'],
      attributes: {
        fit: 'regular',
        season: 'all-season',
        occasion: 'casual'
      }
    });
  }, 1000);
});

// Mock search with semantic understanding
app.post('/api/search', (req, res) => {
  const { query, filters } = req.body;

  // Simulate semantic search with more relevant results
  const mockResults = [
    { id: 1, name: 'Vestido Floral Verão', relevance: 0.95 },
    { id: 2, name: 'Saia Midi Elegante', relevance: 0.87 },
    { id: 3, name: 'Blusa Romântica', relevance: 0.82 }
  ];

  res.json({
    products: mockResults,
    total: mockResults.length,
    query_understanding: {
      intent: 'find_summer_dress',
      style_preference: 'romantic',
      occasion: 'casual'
    }
  });
});

// Mock analytics tracking
app.post('/api/track', (req, res) => {
  console.log('Mock analytics track:', event);
  res.json({ success: true });
});

module.exports = app;

// In your test files
const request = require('supertest');
const mockApp = require('./mock-fashion-api');

describe('Fashion Integration', () => {
  test('should enrich product data', async () => {
    const response = await request(mockApp)
      .post('/api/enrich')
      .send({
        product: {
          name: 'Vestido Básico',
          description: 'Vestido simples para o dia a dia'
        }
      });

    expect(response.status).toBe(200);
    expect(response.body.style_tags).toContain('casual');
  });
});
```

Este guia fornece exemplos práticos de integração da plataforma Fashion.AI com diferentes tecnologias e arquiteturas, permitindo que desenvolvedores implementem soluções robustas e escaláveis para e-commerce de moda.