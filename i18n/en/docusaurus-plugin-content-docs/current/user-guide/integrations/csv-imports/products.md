# Products CSV Import

Import your complete product catalog using a simple CSV file.

## Overview

The Products CSV import allows you to:
- Add multiple products at once
- Update existing products in bulk
- Import complete product information
- Set up your initial catalog quickly

## Step-by-Step Guide

### Step 1: Download the Template

1. Log in to your FashionAI dashboard
2. Go to **Settings** → **Products Manager**
3. Click **Download Products Template**
4. Save the CSV file to your computer

### Step 2: Prepare Your Data

Open the CSV template in your preferred spreadsheet application (Excel, Google Sheets, etc.) and fill in your product information.

## CSV Format

### Required Columns

These columns **must** be filled for every product:

| Column | Description | Example |
|--------|-------------|---------|
| **Product Name** | Product display name | "Cotton Blue T-Shirt" |
| **Category ID** | Unique category identifier | "shirts-123" |
| **Image URL** | Main product image link | "https://example.com/image.jpg" |
| **Category** | Product category name | "T-Shirts" |

### Optional Columns

These columns help improve recommendations and search:

| Column | Description | Example |
|--------|-------------|---------|
| **Product ID** | Your internal product code | "SKU-12345" |
| **Description** | Product details | "Comfortable cotton t-shirt..." |
| **Brand** | Product brand | "Nike" |
| **Color** | Product color | "Blue" |
| **Size** | Available sizes | "M, L, XL" |
| **Price** | Product price | "29.99" |
| **Tags** | Additional keywords | "casual, summer, cotton" |
| **Additional Images** | Extra image URLs | "https://example.com/img2.jpg" |

## Example CSV

Here's what your CSV should look like:

```csv
Product Name,Product ID,Category ID,Category,Image URL,Brand,Color,Price,Description
Cotton Blue T-Shirt,SKU-001,shirts-123,T-Shirts,https://example.com/tshirt.jpg,Nike,Blue,29.99,Comfortable cotton t-shirt for everyday wear
Denim Jeans,SKU-002,pants-456,Jeans,https://example.com/jeans.jpg,Levi's,Blue,79.99,Classic fit denim jeans with stretch
Summer Dress,SKU-003,dress-789,Dresses,https://example.com/dress.jpg,Zara,Floral,49.99,Light and breezy summer dress
```

### Step 3: Fill in Your Products

For each product, fill in all required columns and any optional columns that apply:

**Tips:**
- One product per row
- Keep descriptions clear and concise
- Use high-quality image URLs
- Be consistent with category names
- Include brand names when available

### Step 4: Save Your File

1. Click **File** → **Save As**
2. Choose **CSV (Comma delimited)** format
3. Name your file (example: "products-import-2024.csv")
4. Save to a location you'll remember

### Step 5: Upload to FashionAI

1. Click **Choose File** or drag and drop your CSV
2. Click **Upload**
3. Wait for processing to complete (usually 5-10 minutes)

### Step 6: Review Import Results

After processing, you'll see a summary:

- **Successful imports**: Products added/updated successfully
- **Errors**: Products that couldn't be imported
- **Warnings**: Products imported with minor issues

## Understanding Status Messages

### Processing ⏳
Your file is being processed. This can take up to 5 minutes depending on file size. You can leave the page and come back later.

### Proccessed 
Your products were uploaded successfully to the DataBase and our AI is reading the images to generate the data (tags, description, attributes,...).

### Done ✅
All products were read successfully!

### Errors ❌
Some products couldn't be imported. Check the error report for details.

## Common Errors and Solutions

### Missing Required Columns

**Error Message:**
```
Missing required data
```

**Solution:**
- Open your CSV and check the column headers
- Ensure all required columns exist
- Check for typos in column names
- Make sure columns aren't empty

### Invalid Image URLs

**Error Message:**
```
Invalid or inaccessible image URL
```

**Solution:**
- Verify the image URL is correct
- Make sure images are publicly accessible (not behind login)
- Check that URLs start with `http://` or `https://`
- Test the URL in a browser to confirm it works

### Invalid File Format

**Error Message:**
```
File format not supported
```

**Solution:**
- Ensure file is saved as CSV format (not .xlsx or .xls)
- Try saving as "CSV UTF-8" if available
- Remove any special formatting from Excel

### File Too Large

**Error Message:**
```
File exceeds maximum size of 10MB
```

**Solution:**
- Split your import into multiple smaller files
- Remove unnecessary columns
- Compress large images before uploading

## Best Practices

### Image URLs
- Use high-resolution images (minimum 800x800 pixels)
- Ensure images are hosted on a reliable server
- Use direct image URLs (ending in .jpg, .png, etc.)
- Test URLs before importing

### Testing
- Start with a small test file (10-20 products)
- Verify the import was successful
- Check that products appear correctly in the dashboard
- Then import the rest of your catalog

## Updating Existing Products

You can use the same CSV format to update products:

1. Include the **Product ID** column with existing IDs
2. Change the information you want to update
3. Upload the CSV
4. Existing products will be updated with new information

## Idempotent Imports

You can safely upload the same CSV multiple times:
- Duplicate products won't be created
- Existing products will be updated
- New products will be added

## File Retention

Uploaded CSV files are kept for **7 days** after upload. After that, you'll need to re-upload if you want to process them again.

## Need Help?

If you encounter issues:
- Review the error messages carefully
- Check the common errors section above
- Try a smaller test file first
- Contact support: support@generativecrm.com

Include in your support request:
- Your CSV file (or a sample)
- The error message you received
- Number of products you're trying to import

## Next Steps

After importing your products:

- [Set up Shop The Look relationships](./shop-the-look.md)
- [Enable Vision Enrichment](../../vision-enrichment/index.md)
- [Configure Recommendations](../../recomendations/index.md)
