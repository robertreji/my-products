import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types/product";
import { formatPrice } from "@/lib/config";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const getAvailabilityBadge = (status: Product["availability"]) => {
    switch (status) {
      case "In Stock":
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200/60">
            <span className="w-1.5 h-1.5 mr-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            In Stock
          </span>
        );
      case "Low Stock":
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-50 text-amber-700 border border-amber-200/60">
            <span className="w-1.5 h-1.5 mr-1.5 rounded-full bg-amber-500"></span>
            Low Stock
          </span>
        );
      case "Pre-order":
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200/60">
            Pre-order
          </span>
        );
      case "Out of Stock":
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-neutral-100 text-neutral-600 border border-neutral-200">
            Out of Stock
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="group flex flex-col bg-white rounded-xl border border-neutral-200/80 hover:border-neutral-300 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300">
      {/* Clickable Image Container */}
      <Link
        href={`/products/${product.slug}`}
        className="relative block aspect-4/3 sm:aspect-square w-full overflow-hidden bg-neutral-100"
        style={{ position: "relative" }}
        tabIndex={-1}
        aria-hidden="true"
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        <div className="absolute top-3 right-3 z-10">
          {getAvailabilityBadge(product.availability)}
        </div>
      </Link>

      {/* Card Content */}
      <div className="p-5 flex flex-col flex-1 justify-between">
        <div>
          <span className="text-xs font-medium text-neutral-500 uppercase tracking-wider">
            {product.category}
          </span>
          <h3 className="mt-1 font-semibold text-neutral-900 group-hover:text-black transition-colors line-clamp-1 text-base">
            <Link href={`/products/${product.slug}`} className="focus:outline-hidden hover:underline">
              {product.name}
            </Link>
          </h3>
          <p className="mt-1.5 text-sm text-neutral-600 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Price & Actions */}
        <div className="mt-5 pt-4 border-t border-neutral-100 flex items-center justify-between gap-3">
          <div>
            <span className="text-xs text-neutral-400 block font-normal">Price</span>
            <span className="text-lg font-bold text-neutral-900">
              {formatPrice(product.price)}
            </span>
          </div>

          <Link
            href={`/products/${product.slug}`}
            className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-lg text-neutral-900 bg-neutral-100 hover:bg-neutral-200 active:bg-neutral-300 transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-1"
          >
            <span>View Details</span>
            <svg
              className="ml-1.5 w-4 h-4 text-neutral-500 group-hover:translate-x-0.5 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

