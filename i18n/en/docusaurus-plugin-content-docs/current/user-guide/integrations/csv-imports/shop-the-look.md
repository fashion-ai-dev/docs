# Shop The Look CSV Import

Create product combinations and outfit suggestions by linking products that work well together.

## Overview

Shop The Look allows you to:
- Create complete outfit suggestions
- Link complementary products
- Build curated product combinations
- Enhance cross-selling opportunities
- Help customers discover matching items

**Example:** Link a dress with shoes, bag, and accessories that create a complete outfit.

## Before You Start

**Important:** All products must already exist in your catalog before creating Shop The Look relationships.

If you haven't imported your products yet:
1. [Import your products first](./products.md)
2. Then return here to create relationships

## Step-by-Step Guide

### Step 1: Download the Template

1. Log in to your FashionAI dashboard
2. Go to **Settings** → **Products Manager**
3. Click **Download Shop The Look Template**
4. Save the CSV file to your computer

### Step 2: Understand the Format

## CSV Format

### Required Columns

Every row must have these columns filled:

| Column | Description | Example |
|--------|-------------|---------|
| **MAIN_SKU** | Main product code/SKU | "DRESS-001" |
| **RELATED_SKU_1** or **RELATED_EAN_1** | First related product code or EAN | "SHOE-123" or "7891234567890" |

**Important:** You must provide at least ONE related product using either the SKU (product code) or EAN (barcode number).

### Optional Columns

You can add up to 4 related products per main product (if you need more than 4 related products send us a message :mailbox: **support@generativecrm.com**):

| Column | Description |
|--------|-------------|
| **RELATED_SKU_1** | 1st related product code |
| **RELATED_EAN_1** | 1st related product EAN |
| **RELATED_SKU_2** | 2nd related product code |
| **RELATED_EAN_2** | 2nd related product EAN |
| **RELATED_SKU_3** | 3rd related product code |
| **RELATED_EAN_3** | 3rd related product EAN |
| **RELATED_SKU_4** | 4th related product code |
| **RELATED_EAN_4** | 4th related product EAN |

## Example CSV

Here's a complete example showing different scenarios:

```csv
MAIN_SKU,RELATED_SKU_1,RELATED_EAN_1,RELATED_SKU_2,RELATED_EAN_2,RELATED_SKU_3,RELATED_EAN_3,RELATED_SKU_4,RELATED_EAN_4
DRESS-001,SHOE-123,7891234567890,BAG-456,,NECKLACE-789,,BRACELET-012,
SHIRT-002,PANTS-234,,,BELT-567,,SHOE-890,,
JEANS-003,BELT-111,7891234567891,SHIRT-222,,,,,
SHOE-004,SOCKS-333,,,,,BOTTLE-444,,
```

**What this means:**
- **Row 1:** Summer dress (DRESS-001) paired with shoes (using both SKU and EAN), bag, necklace, and bracelet
- **Row 2:** Polo shirt (SHIRT-002) paired with pants (SKU only), belt (using EAN), and shoes
- **Row 3:** Jeans (JEANS-003) paired with belt (using both SKU and EAN) and shirt
- **Row 4:** Running shoes (SHOE-004) paired with socks (SKU only) and water bottle (using EAN)

### Step 3: Fill in Your Relationships

For each main product:

1. **Enter the main product:**
   - **MAIN_SKU**: Product code that exists in your catalog

2. **Add related products:**
   - Use **RELATED_SKU** for product codes OR **RELATED_EAN** for barcodes
   - You can use both for the same product (like in Row 1 above)
   - Add 1-4 related products per main product
   - Leave cells empty if you don't need all 4 related products

**Tips:**
- Think about complete outfits or coordinating items
- Consider products customers often buy together
- Include accessories that complement the main product
- Mix and match SKUs and EANs based on what you have

### Step 4: Validate Your Data

Before uploading, check:

- Main products (MAIN_SKU) exist in your catalog
- Related products (RELATED_SKU/RELATED_EAN) exist in your catalog
- Each row has at least one related product
- Product codes are spelled correctly
- No empty rows in the middle of your data

### Step 5: Save Your File

1. Click **File** → **Save As**
2. Choose **CSV (Comma delimited)** format
3. Name your file (example: "shop-the-look-outfits.csv")
4. Save to a location you'll remember

### Step 6: Upload to FashionAI

1. Select **Shop the Look** on the select type of sheet.
2. Click **Choose File** or drag and drop your CSV
3. Click **Upload**
4. Wait for processing (usually 5-10 minutes)

## Understanding Processing Status

### Processing ⏳
Your file is being validated and processed. This can take up to 5 minutes.

**What happens during processing:**
- System checks if all products exist in the catalog
- Validates product codes and EANs
- Creates relationships between products
- Processes in batches of 100 rows at a time

### Done ✅
All relationships were created successfully! Your Shop The Look combinations are now active.

### Error ❌
Some relationships couldn't be created. Check the error details.

## Common Errors and Solutions

### Missing Required Columns

**Error Message:**
```
Missing required columns in CSV: MAIN_SKU and at least RELATED_SKU_1 or RELATED_EAN_1
```

**Solution:**
- Verify your CSV has the MAIN_SKU column
- Ensure at least RELATED_SKU_1 or RELATED_EAN_1 exists
- Check column names for typos
- Make sure headers match the template exactly

### Products Not Found

**Error Message:**
```
The following products were not found in the catalog:
- Line 2: Main product "DRESS-999" not found
- Line 3: Related product "SHOE-888" not found (linked to "DRESS-001")
- Line 5: Related product with EAN "1234567890123" not found
```

**What this tells you:**
- The exact line number in your CSV
- Whether it's a main product or related product
- The product code or EAN that wasn't found
- Which main product the related item was linked to

**Solution:**
1. Check if products are imported in your catalog
2. Verify product codes match exactly (case-sensitive)
3. Confirm EAN numbers are correct
4. Import missing products first
5. Upload the CSV again after products are added

**Important:** If ANY product is not found, NO relationships will be created. You must fix all errors and re-upload.

### Invalid File Format

**Error Message:**
```
Invalid file format or corrupted CSV
```

**Solution:**
- Save file as CSV format (not Excel .xlsx)
- Remove any special formatting
- Ensure UTF-8 encoding
- Try opening and re-saving the file

### File Expired

**Error Message:**
```
The file has expired and can no longer be processed
```

**Solution:**
- Files are kept for 7 days after upload
- Upload your CSV file again
- Process it within 7 days

## Important Behaviors

### All-or-Nothing Processing
If even ONE product is missing from your catalog, the entire import will fail and NO relationships will be created.

**Example:**
If you try to import 100 relationships but 1 product doesn't exist:
- 0 relationships created
- Import fails
- Error report shows which product(s) are missing

**Why?** This ensures your Shop The Look combinations are always complete and valid.

### Idempotent Imports
You can upload the same CSV multiple times safely:
- Duplicate relationships won't be created
- Existing relationships will be preserved
- Only new relationships will be added

**Example:** If you upload the same file twice, you won't get duplicate combinations.

### Batch Processing
- Files are processed in groups of 100 rows at a time
- Large files may take a few minutes
- You can safely leave the page during processing

## Best Practices

### Creating Great Combinations

**Complete Outfits:**
```csv
MAIN_SKU,RELATED_SKU_1,RELATED_SKU_2,RELATED_SKU_3,RELATED_SKU_4
DRESS-101,HEELS-201,CLUTCH-301,EARRING-401,NECKLACE-501
```
Pairs a dress with shoes, bag, and jewelry for a complete evening look.

**Coordinating Separates:**
```csv
MAIN_SKU,RELATED_SKU_1,RELATED_SKU_2,RELATED_SKU_3
BLAZ-102,SHIRT-202,PANTS-302,SHOE-402
```
Creates a professional outfit with blazer, shirt, pants, and shoes.

**Seasonal Collections:**
```csv
MAIN_SKU,RELATED_SKU_1,RELATED_SKU_2,RELATED_SKU_3
COAT-103,SCARF-203,GLOVE-303,BOOT-403
```
Groups winter essentials together.

### Tips for Success

1. **Start Small:** Test with 10-20 combinations first
2. **Be Strategic:** Think about what customers actually buy together
3. **Keep Updated:** Remove combinations when products are discontinued
4. **Use Both:** Mix COD and EAN based on what you have available
5. **Quality Over Quantity:** Better to have fewer great combinations than many poor ones

### What Makes a Good Combination?

- **Color Coordination:** Items that work well together visually
- **Style Matching:** Similar aesthetic (casual, formal, sporty)
- **Occasion-Appropriate:** Items for the same type of event
- **Price Range:** Similarly priced items
- **Seasonally Relevant:** Items for the same season

## Updating Relationships

To update Shop The Look combinations:

1. Modify your CSV file with changes
2. Upload the updated file
3. New relationships will be added
4. Existing relationships remain (won't be deleted)

To remove relationships:
- Use the dashboard to manually remove combinations
- Or contact support for bulk removal options

## Monitoring Results

After upload, check:

1. **Dashboard View:**
   - Go to Shop The Look section
   - View all active combinations
   - See which products are linked

2. **Customer View:**
   - Check your store's product pages
   - Verify "Shop The Look" suggestions appear
   - Test the customer experience

## Need Help?

If you encounter issues:
- Review error messages carefully for product names and line numbers
- Verify all products exist in your catalog
- Try a smaller test file first
- Keep your CSV as a backup

**Contact Support:**
- Email: support@generativecrm.com
- Include: Your CSV file and error messages
- Specify: Which line numbers have issues

## Next Steps

After setting up Shop The Look:

- [Monitor engagement in Analytics](../../behaviors/index.md)
- [Optimize recommendations](../../recomendations/index.md)
- [Enhance with Vision Enrichment](../../vision-enrichment/index.md)
