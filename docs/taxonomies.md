# Taxonomies (Product Classification System)

Taxonomies are data structures that define how to describe products in a standardized way. Think of it as a "dictionary" that teaches the system to generate descriptions, SEO content, colors, sizes, etc. for e-commerce products.

## 🏗️ How It Works

### 📋 Two Types of Taxonomy

| Type | Description | Who Uses |
|------|-------------|----------|
| **Global Taxonomy** | Standard created by administrators | ✅ All clients |
| **Custom Taxonomy** | Version customized by client | 👤 Specific client |

### 🔄 Workflow

1. **Administrator creates** global taxonomy
2. **System distributes** to all clients
3. **Client can customize** their version

## 🎛️ Automatic Categories

Some groups automatically apply to all product categories:

- 🎨 **Prints and Colors** - Pattern and color palette descriptions
- 👔 **Pairs With** - Suggestions for harmonizing pieces
- 💰 **Sales Support** - Arguments and benefits for sales
- 🔍 **SEO Content** - Content optimized for search engines

💡 **Important:** When you add a property of these types, it's automatically copied to all existing categories.

## 🔢 Versioning System

### How Version Control Works

**Global Taxonomy:**
- Numbered versions: v1, v2, v3...
- Each update generates a new version

**Client Taxonomy:**
- Format: major.minor (example: 2.1, 2.2)
- **Major:** Based on received global version
- **Minor:** Increases with each client customization

### Practical Example

1. Client receives global taxonomy v2 → Their version becomes **2.0**
2. Client makes first customization → Version **2.1**
3. Client makes second customization → Version **2.2**
4. Admin releases new global version v3 → Client can opt to receive as **3.0**

## 📚 Available Operations

- Customize taxonomies (add examples and adjustments)
- Create complete custom versions
- **Set version as main** to make it active for product processing
- Reset to global version by setting main version

## ⚙️ How to Customize

### Step-by-Step for Clients

1. **Access** your taxonomies on the platform
2. **Select** the category you want to customize
3. **Add examples** specific to your business
5. **Save** as new custom version
6. **Set as main version** to activate for product processing

## 🎯 Activating a Taxonomy Version

### Setting Main Version

To make a taxonomy version active for processing your products:

1. **Navigate** to your taxonomy versions list
2. **Choose** the version you want to activate (e.g., "2.1", "2.2")
3. **Click "Set as Main"** to make it the active version
4. **Confirm** the change

⚠️ **Important:** Only the **main version** is used to process products. Other versions remain available but inactive.

### What Happens When You Set Main

✅ **The system will use this taxonomy to:**
- Generate product descriptions
- Create SEO content
- Extract product attributes
- Build category structures

❌ **Inactive versions:**
- Remain saved for reference
- Can be activated later
- Don't affect product processing