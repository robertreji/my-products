# Lumina Minimal Goods — Next.js Product Catalog

A simple, minimal product catalog built with **Next.js App Router, TypeScript, and Tailwind CSS**, featuring direct **WhatsApp click-to-chat integration**.

---

## Features

- **Product Catalog Homepage**: Responsive grid layout with product imagery, names, prices, category filters, and "View Details" buttons.
- **Dedicated Product Details Page**: Dynamic route (`/products/[slug]`) showcasing high-resolution imagery, availability badges, specifications, and full descriptions.
- **WhatsApp Click-to-Chat Integration**: One-click enquiry button opening WhatsApp (`https://wa.me/`) with a pre-filled, URL-encoded message containing the product name, price, and exact URL link.
- **Zero Backend / Zero Database**: All product data is centralized in a clean, typed TypeScript array.
- **Fast & Responsive**: Fully responsive for mobile and desktop screens, optimized with Next.js App Router static site generation (SSG) and Next.js `Image`.

---

## Project Structure

```text
├── app/
│   ├── globals.css                # Base Tailwind CSS styling & clean light theme
│   ├── layout.tsx                 # Root layout with Navbar and Footer
│   ├── not-found.tsx              # 404 handler for missing products
│   ├── page.tsx                   # Product catalog homepage
│   └── products/
│       └── [slug]/
│           └── page.tsx           # Product details page with WhatsApp action
├── components/
│   ├── Footer.tsx                 # Site footer with ordering guide
│   ├── Navbar.tsx                 # Navigation bar with direct WhatsApp badge
│   ├── ProductCard.tsx            # Reusable product card component
│   ├── ProductCatalog.tsx         # Client component with search & category filters
│   └── WhatsAppButton.tsx         # Reusable prominent green WhatsApp enquiry button
├── data/
│   └── products.ts                # Hardcoded product array and helper functions
├── lib/
│   └── config.ts                  # Central site and seller WhatsApp configuration
├── types/
│   └── product.ts                 # Product TypeScript interface
└── next.config.ts                 # Next.js configuration (Unsplash remote patterns)
```

---

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to explore the catalog.

### 3. Build for Production

```bash
npm run build
npm run start
```

---

## How to Customize

### 1. Changing the Seller WhatsApp Phone Number

Open [`lib/config.ts`](lib/config.ts) and edit `sellerWhatsAppNumber`:

```typescript
export const siteConfig = {
  name: "Your Store Name",
  sellerWhatsAppNumber: "15550192834", // Replace with your digits-only phone number with country code
  currency: {
    symbol: "$",
    code: "USD",
  },
  // ...
};
```

> **Important**: The WhatsApp number must contain **digits only** with the country code (no `+`, no spaces, no dashes).
> - US (+1 555 123 4567) &rarr; `"15551234567"`
> - UK (+44 7911 123456) &rarr; `"447911123456"`
> - India (+91 98765 43210) &rarr; `"919876543210"`

### 2. Adding, Editing, or Removing Products

Open [`data/products.ts`](data/products.ts) and modify the `products` array. Each product has the following TypeScript schema:

```typescript
{
  id: "prod-1",
  slug: "matte-ceramic-mug", // URL slug for /products/[slug]
  name: "Minimalist Matte Ceramic Mug",
  price: 28,
  category: "Kitchen & Dining",
  availability: "In Stock", // "In Stock" | "Low Stock" | "Pre-order" | "Out of Stock"
  image: "https://images.unsplash.com/...", // Image URL
  description: "Short summary for the catalog card.",
  longDescription: "Detailed description for the product page.",
  features: [
    "Capacity: 350ml / 12 fl oz",
    "Lead-free, non-toxic matte glaze",
    "Microwave and dishwasher safe"
  ]
}
```

### 3. Adding New External Image Hosts

If you use images from domains other than `images.unsplash.com`, add their hostname to `next.config.ts`:

```typescript
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "your-image-domain.com",
      },
    ],
  },
};
```
