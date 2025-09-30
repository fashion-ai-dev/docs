# Shopify Integration

Complete guide to integrate FashionAI with your Shopify store for automated product enrichment and catalog management.

## Initial Setup

To integrate your Shopify store with our platform, you'll need to create a custom application in the Shopify admin and generate API credentials. These credentials will allow our system to securely connect with your store and access the necessary data.

### Step 1: Access Shopify Admin

1. Log in to Shopify as administrator
2. In the side menu, click **Settings**
3. Go to **Apps and sales channels**

### Step 2: Create a Custom Application

1. Click **Develop apps**
2. Click **Create an app**
3. Give the application a name, e.g.: **FashionAI API Integration**
4. Click **Create app**

### Step 3: Configure API Permissions

In the created application, go to the **API credentials** tab.

1. Click **Configure Admin API scopes**
2. Select the following permissions:

| Permission | Description |
|---------|-------------|
| **read_products** | To read products |
| **write_products** | To edit products (including images) |
| **read_publications** | To read publications |
| **read_inventory** | To read inventory |
| **read_customers** | To read customers |
| **read_orders** | To read orders |
| **read_marketplace_orders** | To read orders placed through marketplaces |
| **read_buyer_membership_orders** | To read orders related to buyer memberships |

3. Click **Save**

### Step 4: Generate API Key and Access Token

Still in the **API credentials** tab:

1. Click **Install app**
2. Confirm the installation
3. Shopify will generate the following credentials:
   - **Admin API Access Token** (This token is shown only once! Save it immediately)

## Required Credentials

After completing the setup, you'll have:

- **Store URL**: `https://your-store.myshopify.com`
- **Admin API Access Token**: Token generated in step 4

## Configuration in FashionAI Platform

### 1. Enable Vision Enrichment

1. In the right menu of the platform, click **Settings**
2. In **General Settings**, enable the **Vision Enrichment** toggle

### 2. Configure Shopify Credentials

1. Go to the **Shopify Settings** tab
2. Insert your Shopify API credentials for data synchronization:
   - **Store URL**: Your Shopify store URL
   - **Access Token**: The token generated previously

### 3. Additional Configuration

You can leave any field blank if you want to ignore that rule.

**Sales Channels (Publication IDs)**
Enter IDs separated by comma, e.g.: `123,456`
These are the publication IDs (sales channels) where the product will be available. If you need to set more than one, separate them with a comma.

**Excluded Vendors**
Enter vendor names separated by comma, e.g.: `Nike,Adidas,Puma`
These are the vendors (brands) that will be excluded from processing. If you need to add multiple vendors, separate them with a comma.

**Order Source (Sales Platform)**
Enter order source name, e.g.: `web,pos,api`
This defines the origin of the orders based on the sales platform. Use the source name (for example: web for online store, pos for Point of Sale, api for API orders). If multiple sources apply, separate them with a comma.

## Next Steps

After completing the configuration:

1. **Test the connection** - Verify that FashionAI can access your catalog
2. **Configure enrichment rules** - Define which products should be processed
3. **Monitor synchronization** - Check the integration status on the platform

## Troubleshooting

### Common Issues

- **Authentication errors**: Verify API credentials and permissions
- **Sync failures**: Check credential configuration and endpoints
- **Missing products**: Ensure all desired products are published

### Support

For technical support with Shopify integration, contact our team at :mailbox: **support@generativecrm.com**

## Important Notes

- The **Admin API Access Token** is shown only once during creation. Make sure to save it in a secure location
- Keep your credentials secure and don't share them publicly
- Periodically review permissions to ensure they're updated according to your needs