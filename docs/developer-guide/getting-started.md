---
sidebar_position: 1
---

# Developer Getting Started

Quick start guide for developers integrating FashionAI into their applications.

## 🚀 Quick Setup (5 minutes)

### 1. Authentication
Get your API credentials and start making requests:
- Generate API token in dashboard
- Add to headers: `Authorization: Bearer YOUR_TOKEN`
- Test with sample API call

[→ Full Authentication Guide](./authentication)

### 2. Core APIs
**Recommendations API** - Personalized product suggestions
```javascript
POST /api/recommendations
{
  "user_id": "user123",
  "context": "product_page",
  "product_id": "item456"
}
```

**Search API** - Intelligent product search
```javascript
POST /api/search
{
  "query": "red summer dress",
  "filters": { "category": "dresses" }
}
```

[→ Complete API Reference](./api-endpoints)

## 🛠️ Integration Options

### Frontend Integration
Add recommendation widgets and search to your UI:
- React/Vue/Angular components
- Vanilla JavaScript widgets
- Mobile SDKs

[→ UI Integration Guide](./ui-integration)

### Platform-Specific
Quick setup for popular e-commerce platforms:
- **Shopify** - Native app integration
- **VTEX** - Custom components
- **Custom implementations** - Real-world examples

[→ All Platform Integrations](./integrations/)

## 📊 Analytics & Tracking

### Google Analytics Enhanced Ecommerce
Track recommendation performance and search behavior:
```javascript
// Track recommendation clicks
gtag('event', 'recommendation_click', {
  'item_id': 'product123',
  'item_category': 'dresses'
});
```

[→ Analytics & Tracking Setup](./analytics/)

## 🎯 Advanced Features

### Search Configuration
- Semantic search with natural language
- Visual similarity search
- Custom ranking algorithms

[→ Search API Details](./search/overview) | [→ Search Examples](./search/examples)

### Product Organization
- Auto-categorization with taxonomies
- Style and trend classification
- Seasonal product grouping

[→ Taxonomies Guide](./taxonomies)

### Real-World Examples
Complete integration patterns and code samples:
- E-commerce store implementations
- Mobile app integrations
- Microservices architecture

[→ Integration Examples](./integrations/integration-examples)

## 🆘 Need Help?

- **API Issues** → Check [Authentication](./authentication)
- **UI Problems** → See [UI Integration](./ui-integration)
- **Platform Help** → [Platform Integrations](./integrations/)
- **Analytics Setup** → [Analytics & Tracking](./analytics/)
- **Advanced Config** → [Integration Examples](./integrations/integration-examples)

## 📋 Next Steps

1. **[Set up authentication](./authentication)** - Get your API credentials
2. **[Test API endpoints](./api-endpoints)** - Make your first calls
3. **[Add to your UI](./ui-integration)** - Integrate frontend components
4. **[Configure analytics](./analytics/)** - Track performance
5. **[Go live](./integrations/integration-examples)** - Production deployment

---

**Ready to integrate?** Start with [Authentication](./authentication) →