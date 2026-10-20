import { Product } from "@/types/product";

/**
 * Hardcoded product catalog data.
 * All product details are defined in this single array.
 * 
 * TO ADD OR EDIT PRODUCTS:
 * Simply edit, add, or remove objects in the `products` array below.
 */
export const products: Product[] = [
  {
    id: "prod-1",
    slug: "matte-ceramic-mug",
    name: "Minimalist Matte Ceramic Mug",
    price: 28,
    category: "Kitchen & Dining",
    availability: "In Stock",
    image:
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1000&q=80",
    description:
      "Handcrafted tactile ceramic mug with an ergonomic handle and silky matte glaze finish.",
    longDescription:
      "Crafted from premium stoneware with a silky matte finish, this minimalist mug elevates your morning ritual. Its balanced proportions and comfortable handle make it a joy to hold. Designed to retain heat while staying cool to the touch.",
    features: [
      "Capacity: 350ml / 12 fl oz",
      "Lead-free, non-toxic matte glaze",
      "Microwave and dishwasher safe",
      "Handcrafted in small batches",
    ],
  },
  {
    id: "prod-2",
    slug: "solid-walnut-desk-shelf",
    name: "Solid Walnut Desk Shelf",
    price: 149,
    category: "Workspace",
    availability: "In Stock",
    image:
      "https://images.unsplash.com/photo-1593062096033-9a26b09da705?auto=format&fit=crop&w=1000&q=80",
    description:
      "Elevates your monitor to ergonomic eye level while creating clutter-free storage underneath.",
    longDescription:
      "Precision-milled from sustainable American black walnut with brushed aluminum feet. Elevate your screen to ergonomic height to reduce neck strain while reclaiming valuable workspace beneath for keyboards and accessories.",
    features: [
      "Dimensions: 105cm W x 23cm D x 11cm H",
      "Solid American Black Walnut wood",
      "Cork-padded feet to protect desk surfaces",
      "Supports up to 45 kg (100 lbs)",
    ],
  },
  {
    id: "prod-3",
    slug: "noise-cancelling-wireless-headphones",
    name: "Acoustic Noise-Cancelling Headphones",
    price: 289,
    category: "Audio",
    availability: "Low Stock",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1000&q=80",
    description:
      "Studio-grade acoustic clarity with active noise cancellation and memory foam ear cushions.",
    longDescription:
      "Engineered for immersion and deep focus. Custom 40mm beryllium drivers produce detailed highs, warm mids, and deep non-boomy bass. Features adaptive hybrid active noise cancellation and ultra-plush protein leather ear pads for all-day comfort.",
    features: [
      "Up to 40 hours battery life with fast USB-C charge",
      "Hybrid active noise cancellation (ANC)",
      "Multi-point Bluetooth 5.3 connection",
      "Integrated beamforming microphones for crystal-clear calls",
    ],
  },
  {
    id: "prod-4",
    slug: "full-grain-leather-desk-mat",
    name: "Full-Grain Leather Desk Mat",
    price: 64,
    category: "Workspace",
    availability: "In Stock",
    image:
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1000&q=80",
    description:
      "Smooth vegetable-tanned leather surface with non-slip suede backing for mice and keyboards.",
    longDescription:
      "Crafted from vegetable-tanned full-grain cowhide leather that develops a rich, distinctive patina over time. Smooth gliding surface for precision mouse movement and a protective, handsome layer for your desk surface.",
    features: [
      "Dimensions: 80cm x 40cm",
      "100% genuine vegetable-tanned leather",
      "Water-resistant wax coating",
      "Anti-slip natural suede backing",
    ],
  },
  {
    id: "prod-5",
    slug: "anodized-aluminum-pen",
    name: "Precision Aluminum Rollerball Pen",
    price: 45,
    category: "Stationery",
    availability: "In Stock",
    image:
      "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=1000&q=80",
    description:
      "Machined from solid aircraft-grade aluminum with zero wobble and smooth Schmidt ink flow.",
    longDescription:
      "A timeless writing instrument CNC-machined from single-billet aluminum. Perfectly counterbalanced for effortless extended handwriting. Compatible with standard rollerball refills worldwide.",
    features: [
      "Weight: 32 grams, balanced center of mass",
      "Anodized satin-matte scratch-resistant coat",
      "Magnetic snap-closure cap",
      "Includes premium German Schmidt ceramic roller refill",
    ],
  },
  {
    id: "prod-6",
    slug: "linen-textured-throw-blanket",
    name: "Organic Waffle Linen Throw",
    price: 85,
    category: "Living",
    availability: "In Stock",
    image:
      "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1000&q=80",
    description:
      "Breathable pure French flax linen with a relaxed honeycomb texture and stone-washed softness.",
    longDescription:
      "Woven from 100% natural European certified organic flax. Pre-washed for lived-in tactile softness that only gets better with every wash. Naturally temperature-regulating for year-round comfort.",
    features: [
      "Dimensions: 140cm x 200cm",
      "100% certified French flax linen",
      "OEKO-TEX Standard 100 certified non-toxic",
      "Pre-washed to resist shrinkage",
    ],
  },
  {
    id: "prod-7",
    slug: "custom-mechanical-keyboard",
    name: "Custom 65% Wireless Mechanical Keyboard",
    price: 175,
    category: "Workspace",
    availability: "Pre-order",
    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=1000&q=80",
    description:
      "Gasket-mounted mechanical keyboard with pre-lubed switches and hot-swappable PCB.",
    longDescription:
      "An acoustic dream for typing enthusiasts and professionals. Features a flex-cut polycarbonate plate with multiple layers of PORON foam dampening for a deep, satisfying 'thock' sound profile.",
    features: [
      "Compact 65% layout with CNC aluminum case",
      "Hot-swappable 5-pin PCB (South-facing RGB)",
      "Tri-mode connectivity: Bluetooth 5.1 / 2.4Ghz / USB-C",
      "Factory-lubricated linear switches & screw-in stabilizers",
    ],
  },
  {
    id: "prod-8",
    slug: "insulated-thermal-flask",
    name: "Double-Wall Insulated Steel Flask",
    price: 36,
    category: "Everyday Carry",
    availability: "In Stock",
    image:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=1000&q=80",
    description:
      "Triple-insulated food-grade stainless steel bottle that keeps drinks cold for 24h or hot for 12h.",
    longDescription:
      "Built for daily hydration on the move. Crafted from 18/8 kitchen-grade stainless steel that never transfers flavors. Durable powder-coat exterior provides a slip-free grip and condensation-free exterior.",
    features: [
      "Capacity: 600ml / 20 oz",
      "Vacuum insulated 18/8 stainless steel",
      "100% leak-proof twist cap with silicone seal",
      "Fits standard automobile cup holders",
    ],
  },
];

/**
 * Helper to retrieve all products.
 */
export function getAllProducts(): Product[] {
  return products;
}

/**
 * Helper to retrieve a single product by slug.
 */
export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

