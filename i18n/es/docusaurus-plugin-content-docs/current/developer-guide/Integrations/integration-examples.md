# Ejemplos de Integración


## Ejemplos de Integración del Mundo Real

Aprende cómo integrar nuestra plataforma de moda con plataformas de e-commerce populares, frameworks y aplicaciones personalizadas a través de ejemplos prácticos.

## Integraciones de Plataformas de E-commerce

### Integración Shopify

#### Sincronización y Enriquecimiento de Productos
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

#### Template de Tema con Recomendaciones
```liquid
<!-- Shopify theme liquid template -->
<div class="product-recommendations">
  {% if product.metafields.fashion.style_recommendations %}
    <h3>Completa el Look</h3>
    <div class="recommended-products">
      {% for recommendation_id in product.metafields.fashion.style_recommendations %}
        {% assign recommended_product = all_products[recommendation_id] %}
        {% if recommended_product %}
          <div class="recommended-item">
            <img src="{{ recommended_product.featured_image | img_url: '300x300' }}" alt="{{ recommended_product.title }}">
            <h4>{{ recommended_product.title }}</h4>
            <p class="price">{{ recommended_product.price | money }}</p>
            <button onclick="addToCart('{{ recommended_product.variants.first.id }}')">
              Agregar al Carrito
            </button>
          </div>
        {% endif %}
      {% endfor %}
    </div>
  {% endif %}
</div>
```

### Integración WooCommerce

#### Enriquecimiento Automático de Productos
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

## Integraciones de Framework

### React.js con Search API

#### Hook Personalizado para Búsqueda
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

Este guía proporciona ejemplos prácticos de integración de la plataforma Fashion.AI con diferentes tecnologías y arquitecturas, permitiendo que desarrolladores implementen soluciones robustas y escalables para e-commerce de moda.