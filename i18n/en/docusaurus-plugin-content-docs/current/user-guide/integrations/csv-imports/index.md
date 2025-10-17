# CSV Import Guide

Import your product catalog and Shop The Look relationships using simple CSV files.

## What is CSV Import?

CSV (Comma-Separated Values) import allows you to upload data in bulk using spreadsheet files. This is perfect for:

- **Initial catalog setup** - Import all products at once
- **Bulk updates** - Update many products simultaneously
- **Offline management** - Work on your catalog without internet
- **Migration** - Moving from another platform
- **Shop The Look** - Create product combinations and outfits

## Available Import Types

### Products Import
Upload your complete product catalog with all details like names, descriptions, images, categories, and attributes.

[Learn more about Products Import →](./products.md)

### Shop The Look Import
Create product combinations and outfit suggestions by linking products that work well together.

[Learn more about Shop The Look Import →](./shop-the-look.md)

## How CSV Import Works

1. **Download Template** - Get the correct CSV template for your import type
2. **Select the right type of CSV** - You can select Product to import your catalog or Shop The Look to import your relation products
3. **Upload File** - Upload your CSV through the FashionAI dashboard
4. **Processing** - The system validates and processes your data
5. **Review** - Check the results and fix any errors if needed

## General Requirements

### File Format
- File must be in **CSV format** (.csv extension)
- Use **UTF-8 encoding** for special characters
- Maximum file size: **10 MB**
- Maximum rows: **10,000 per file**

### Data Quality
- Required fields must be filled
- Product IDs must be unique
- URLs must be valid and accessible
- No empty rows in the middle of data

## Tips for Success

### Before You Start
- Review the template carefully
- Check all required fields
- Prepare image URLs in advance
- Test with a small batch first

### During Upload
- Use clear, consistent naming
- Double-check product IDs
- Ensure image URLs are publicly accessible
- Save your work frequently

### After Upload
- Review the import summary
- Check for any errors or warnings
- Verify products appear correctly
- Keep your CSV file as a backup

## Processing Status

When you upload a CSV, you'll see one of these statuses:

| Status | What It Means |
|--------|---------------|
| ⏳ **Processing** | File is being processed (may take up to 5 minutes) |
| ✅ **Done** | Import completed successfully |
| ⚠️ **Warning** | Import completed with some warnings |
| ❌ **Error** | Import failed - check error messages |

## Common Error Messages

### File Format Issues
**Error:** `Invalid file format`
**Solution:** Ensure your file is saved as CSV (not Excel .xlsx)

### Missing Required Columns
**Error:** `Missing required columns`
**Solution:** Check that all required columns exist in your CSV

### Products Not Found
**Error:** `Products not found in catalog`
**Solution:** Import products before creating relationships (for Shop The Look)

### Invalid Data Format
**Error:** `Invalid data format in row X`
**Solution:** Check the specific row mentioned for formatting issues

## Need Help?

If you encounter issues with CSV imports:

- Check the specific import guide for your type
- Review the error message for clues
- Try uploading a smaller test file
- Contact support: support@generativecrm.com

## Next Steps

Choose the type of import you want to perform:

- [Products Import Guide](./products.md)
- [Shop The Look Import Guide](./shop-the-look.md)
