export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  description: string;
  longDescription?: string;
  category: string;
  image: string;
  availability: "In Stock" | "Low Stock" | "Pre-order" | "Out of Stock";
  features?: string[];
}

