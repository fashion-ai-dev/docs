# Webhooks

*Lorem ipsum - este é um texto genérico placeholder*

## Real-Time Integration with Webhooks

Stay synchronized with your fashion catalog and customer events through our comprehensive webhook system. Receive instant notifications when important events occur in your platform.

## Available Webhook Events

### Catalog Events
- **`catalog.product.created`** - New product added to catalog
- **`catalog.product.updated`** - Product information modified
- **`catalog.product.deleted`** - Product removed from catalog
- **`catalog.product.enriched`** - AI enrichment completed for product
- **`catalog.bulk.import.completed`** - Bulk catalog import finished

### Search & Discovery Events
- **`search.query.performed`** - Customer search executed
- **`search.zero_results`** - Search returned no results
- **`recommendation.shown`** - Product recommendations displayed
- **`recommendation.clicked`** - Customer clicked recommended product

### Customer Behavior Events
- **`customer.product.viewed`** - Product page viewed
- **`customer.product.favorited`** - Product added to wishlist
- **`customer.cart.added`** - Product added to shopping cart
- **`customer.purchase.completed`** - Order completed

### Analytics Events
- **`analytics.report.generated`** - Scheduled report ready
- **`analytics.trend.detected`** - New fashion trend identified
- **`analytics.threshold.exceeded`** - Performance metric threshold reached

## Webhook Configuration

### Setting Up Webhooks

```bash
POST /api/v1/webhooks
Content-Type: application/json
Authorization: Bearer YOUR_API_TOKEN

{
  "url": "https://your-domain.com/webhook/endpoint",
  "events": ["catalog.product.created", "customer.purchase.completed"],
  "secret": "your-webhook-secret",
  "active": true
}
```

### Webhook Security

#### Signature Verification
All webhooks are signed with HMAC SHA256:

```python
import hmac
import hashlib

def verify_signature(payload, signature, secret):
    expected = hmac.new(
        secret.encode('utf-8'),
        payload.encode('utf-8'),
        hashlib.sha256
    ).hexdigest()
    return hmac.compare_digest(f"sha256={expected}", signature)
```

#### Headers
Each webhook request includes:
- `X-Webhook-Signature`: HMAC signature for verification
- `X-Webhook-Event`: Event type that triggered the webhook
- `X-Webhook-Delivery`: Unique delivery ID
- `User-Agent`: Platform webhook identifier

## Event Payload Examples

### Product Created Event
```json
{
  "event": "catalog.product.created",
  "timestamp": "2023-12-01T10:30:00Z",
  "data": {
    "product_id": "prod_12345",
    "sku": "DRESS-SUMMER-001",
    "name": "Floral Summer Dress",
    "category": "dresses",
    "brand": "Fashion Co",
    "price": 89.99,
    "currency": "USD",
    "attributes": {
      "color": "blue",
      "size": ["S", "M", "L"],
      "material": "cotton",
      "style": "casual"
    },
    "created_at": "2023-12-01T10:30:00Z"
  }
}
```

### Search Query Event
```json
{
  "event": "search.query.performed",
  "timestamp": "2023-12-01T10:30:00Z",
  "data": {
    "query": "red evening dress",
    "customer_id": "cust_67890",
    "results_count": 15,
    "filters_applied": {
      "color": "red",
      "category": "dresses",
      "price_range": "50-200"
    },
    "search_duration_ms": 120
  }
}
```

### Recommendation Clicked Event
```json
{
  "event": "recommendation.clicked",
  "timestamp": "2023-12-01T10:30:00Z",
  "data": {
    "customer_id": "cust_67890",
    "recommended_product_id": "prod_54321",
    "source_product_id": "prod_12345",
    "recommendation_type": "similar_style",
    "position": 2
  }
}
```

## Webhook Management

### Testing Webhooks
Use our webhook testing tool to validate your endpoint:

```bash
POST /api/v1/webhooks/{webhook_id}/test
Authorization: Bearer YOUR_API_TOKEN

{
  "event": "catalog.product.created"
}
```

### Webhook Status
Monitor webhook delivery status:

```bash
GET /api/v1/webhooks/{webhook_id}/deliveries
Authorization: Bearer YOUR_API_TOKEN
```

### Retry Policy
- **Immediate retry** for 5xx server errors
- **Exponential backoff** for failed deliveries
- **Maximum 5 retry attempts** over 24 hours
- **Automatic disabling** after 100 consecutive failures

## Best Practices

### Endpoint Implementation
1. **Respond quickly** (within 10 seconds) to avoid timeouts
2. **Return 200 status** for successful processing
3. **Implement idempotency** using delivery IDs
4. **Validate signatures** for security
5. **Handle retries gracefully** for duplicate events

### Error Handling
```python
@app.route('/webhook', methods=['POST'])
def handle_webhook():
    try:
        # Verify signature
        signature = request.headers.get('X-Webhook-Signature')
        if not verify_signature(request.data, signature, webhook_secret):
            return 'Invalid signature', 401

        # Process event
        event_data = request.json
        process_event(event_data)

        return 'OK', 200
    except Exception as e:
        # Log error but return 200 to avoid retries for processing errors
        log_error(e)
        return 'OK', 200
```

### Performance Optimization
- **Process asynchronously** for heavy operations
- **Batch similar events** when possible
- **Use queues** for reliable event processing
- **Monitor webhook health** and delivery rates

## Common Use Cases

### Inventory Synchronization
Keep external systems updated with product changes:
```python
def handle_product_updated(event_data):
    product = event_data['data']
    update_external_inventory(product['sku'], product['quantity'])
```

### Customer Behavior Tracking
Analyze shopping patterns across platforms:
```python
def handle_customer_behavior(event_data):
    event = {
        'customer_id': event_data['data']['customer_id'],
        'action': event_data['event'],
        'timestamp': event_data['timestamp']
    }
    send_to_analytics_platform(event)
```

### Personalization Engine
Update customer preferences in real-time:
```python
def handle_product_viewed(event_data):
    customer_id = event_data['data']['customer_id']
    product_id = event_data['data']['product_id']
    update_customer_preferences(customer_id, product_id)
```

## Troubleshooting

### Common Issues
- **Signature verification failures**: Check secret configuration
- **Timeout errors**: Optimize endpoint response time
- **Missing events**: Verify webhook is active and properly configured
- **Duplicate processing**: Implement idempotency checks

### Debug Mode
Enable debug mode for detailed webhook logs:
```bash
PATCH /api/v1/webhooks/{webhook_id}
Authorization: Bearer YOUR_API_TOKEN

{
  "debug_mode": true
}
```