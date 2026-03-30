# Product Catalog Import

Import or update your product catalog using the CSV template from your FashionAI dashboard.

## When to use this import

Use product catalog import when you want to:

- create your initial catalog
- update many products at once
- correct product information in bulk
- migrate products from another platform

The template and available fields may vary by client. For that reason, this guide focuses on the process, and your downloaded CSV template is the source of truth.

## Step by step

### 1. Download the product template

1. Log in to FashionAI
2. Go to **Settings** -> **Products Manager**
3. Download the CSV template for products

### 2. Fill in your CSV

Open the file in your preferred editor and add your product data.

Best practices:

- keep one product per row
- preserve the original template structure
- use consistent product identifiers
- review names, descriptions, categories, and images before upload

If you have questions about a field, check **Spreadsheet Fields** in the dashboard.

### 3. Save the file as CSV

When your file is ready, save or export it as a **CSV** file.

### 4. Upload the file

1. Return to **Settings** -> **Products Manager**
2. Upload the CSV file
3. Wait for FashionAI to process it

### 5. Review the import result

After processing, review the import summary:

- **Success** means the file was imported correctly
- **Partial success** means some rows were imported and some need correction
- **Error** means the file needs to be fixed before the import can complete

If needed, adjust the CSV file and upload it again. Successful items are updated, not duplicated.

## What usually causes issues

- using an outdated template
- changing the CSV structure manually
- inconsistent product identifiers across uploads
- formatting differences in some rows
- file saved in a format other than CSV
- encoding problems after exporting the file

## Encoding tip

If accented characters or special symbols look wrong in your file, upload the data to Google Sheets and download the CSV from there before importing. This often resolves encoding issues.

## Recommended first import

If this is your first upload, start with a small batch. This makes it easier to confirm that the template, CSV field format, and import behavior are all correct before you upload the full catalog.

## After the import

Once your products are in FashionAI, you can continue with:

- [Product image upload](./images-upload.md)
- [Shop The Look import](./shop-the-look.md)
- [Vision Enrichment](../vision-enrichment/index.md)
- [Recommendations](../recomendations/index.md)

## Need help?

If you are not sure why a file failed, review the import summary in the dashboard and contact **support@generativecrm.com** with the error details.
