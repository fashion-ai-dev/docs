# VTEX Integration

Complete guide to integrate FashionAI with your VTEX store for automated product enrichment and catalog management.

## Initial Setup

### 1. Enable Vision Enrichment

1. In the platform's right menu, click on **Settings**
2. In **General Settings**, enable the **Vision Enrichment** button

### 2. Configure VTEX Settings

1. Go to the **VTEX Settings** tab
2. Insert your VTEX API credentials for data synchronization

## Required Permissions

For proper authentication and authorization within the VTEX ecosystem, your token must have specific permissions granted. Below is a table with the necessary access and their respective scopes:

| Product | Category | Resource |
|---------|----------|----------|
| Catalog | Content | Product and SKU Management |
| Catalog | Content | Category Management |
| Catalog | Content | Category |
| Catalog | Content | SKUs |
| OMS | OMS Access | List Orders |
| OMS | OMS Access | View Order |
| Checkout | Checkout Resources | Full Order Access |

## Affiliate System Configuration

### How to Configure the Affiliate System for Catalog Consumption

To enable FashionAI to consume your VTEX catalog, you need to create an affiliate configuration.

### Creating an Affiliate

1. In the admin side menu, click on **Order Management**
2. Click on **Settings**
3. Click on the **Affiliates** tab
4. Click the **New Affiliate** button
5. Fill in the New Affiliate panel fields:

| Field | Value |
|-------|-------|
| **Name** | FashionAI |
| **ID** | FFF |
| **Trade Policy** | 1 |
| **Follow-up Email** | vtex@generativecrm.com |
| **Search Endpoint** | Generate Link |
| **Search Endpoint Version** | 1.x.x |
| **Use my payment method** | ❌ Do not check this option |

6. Click **Save**

### Important Note

If any of the affiliate panel field information is different, please fill out the form that will be provided below.

## Next Steps

After completing the affiliate configuration:

1. **Test the connection** - Verify that FashionAI can access your catalog
2. **Configure enrichment rules** - Set up which products should be processed
3. **Monitor synchronization** - Check the integration status in the platform

## Troubleshooting

### Common Issues

- **Authentication errors**: Verify API credentials and permissions
- **Sync failures**: Check affiliate configuration and endpoints
- **Missing products**: Ensure trade policy includes all desired items

### Support

For technical support with VTEX integration, contact our team at vtex@generativecrm.com