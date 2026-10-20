import { Product } from "@/types/product";

/**
 * Site and seller configuration.
 *
 * TO CUSTOMIZE:
 * - Replace `sellerWhatsAppNumber` with your actual WhatsApp phone number including country code.
 *   Format: digits only, NO plus sign (+), NO dashes, NO spaces.
 *   Example for US (+1 555 123 4567): "15551234567"
 *   Example for UK (+44 7911 123456): "447911123456"
 *   Example for India (+91 98765 43210): "919876543210"
 */
export const siteConfig = {
  name: "Lumina Minimal Goods",
  tagline: "Curated objects for modern living & mindful workspaces",
  description:
    "A minimal catalog of thoughtfully designed everyday goods. Enquire directly on WhatsApp for instant assistance and orders.",
  sellerWhatsAppNumber: "918943254024", // Replace with your WhatsApp phone number (digits only, with country code)
  currency: {
    symbol: "$",
    code: "USD",
  },
  supportHours: "Mon – Sat: 9:00 AM – 7:00 PM",
  responseTime: "Usually responds within an hour",
};

/**
 * Format a number into currency string (e.g. 129 -> $129.00 or $129)
 */
export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: siteConfig.currency.code,
    minimumFractionDigits: Number.isInteger(price) ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(price);
}

/**
 * Build the WhatsApp click-to-chat URL with a pre-filled, URL-encoded message.
 *
 * @param product The product being enquired about
 * @param productUrl The absolute or relative URL to the product page
 * @returns Fully formatted wa.me URL
 */
export function getWhatsAppEnquiryUrl(product: Product, productUrl?: string): string {
  const cleanPhone = siteConfig.sellerWhatsAppNumber.replace(/[^0-9]/g, "");
  const formattedPrice = formatPrice(product.price);

  // Build the message text
  let message = `Hi, I'm interested in ${product.name}. The listed price is ${formattedPrice}.`;
  
  if (productUrl) {
    message += `\nProduct Link: ${productUrl}`;
  }
  
  message += `\nCould you share more details?`;

  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}

