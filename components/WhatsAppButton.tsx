"use client";

import React from "react";
import { Product } from "@/types/product";
import { getWhatsAppEnquiryUrl } from "@/lib/config";

interface WhatsAppButtonProps {
  product: Product;
  productUrl?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  label?: string;
}

export default function WhatsAppButton({
  product,
  productUrl,
  className = "",
  size = "md",
  fullWidth = false,
  label = "Enquire on WhatsApp",
}: WhatsAppButtonProps) {
  const fallbackUrl = productUrl || `/products/${product.slug}`;
  const defaultHref = getWhatsAppEnquiryUrl(product, fallbackUrl);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If an explicit absolute URL wasn't provided, use window.location.origin
    if (!productUrl && typeof window !== "undefined") {
      e.preventDefault();
      const absoluteProductUrl = `${window.location.origin}/products/${product.slug}`;
      const fullWhatsAppUrl = getWhatsAppEnquiryUrl(product, absoluteProductUrl);
      window.open(fullWhatsAppUrl, "_blank", "noopener,noreferrer");
    }
  };

  const sizeClasses = {
    sm: "px-3 py-1.5 text-xs font-medium gap-1.5",
    md: "px-4 py-2.5 text-sm font-semibold gap-2",
    lg: "px-6 py-3.5 text-base font-semibold gap-2.5",
  };

  return (
    <a
      href={defaultHref}
      onClick={handleClick}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Enquire about ${product.name} on WhatsApp`}
      className={`inline-flex items-center justify-center rounded-lg transition-all duration-200 shadow-xs hover:shadow-md active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 ${
        sizeClasses[size]
      } ${
        fullWidth ? "w-full" : ""
      } bg-[#25D366] hover:bg-[#20ba5a] text-white ${className}`}
    >
      {/* WhatsApp Official SVG Icon */}
      <svg
        className={size === "sm" ? "w-4 h-4" : size === "lg" ? "w-6 h-6" : "w-5 h-5"}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.11 7.43C8.94 7.43 8.78 7.44 8.63 7.53C8.42 7.66 8.02 8.04 8.02 8.87C8.02 9.71 8.63 10.51 8.72 10.63C8.81 10.75 9.92 12.47 11.63 13.21C12.91 13.76 13.44 13.79 14.15 13.68C14.58 13.62 15.48 13.12 15.67 12.59C15.86 12.06 15.86 11.6 15.8 11.51C15.74 11.42 15.58 11.36 15.34 11.24C15.09 11.12 13.86 10.52 13.63 10.43C13.4 10.35 13.24 10.31 13.08 10.55C12.92 10.79 12.46 11.33 12.32 11.49C12.18 11.65 12.04 11.67 11.8 11.55C11.55 11.43 10.51 11.09 9.28 9.99C8.32 9.14 7.68 8.08 7.49 7.76C7.3 7.43 7.47 7.26 7.59 7.14C7.7 7.03 7.84 6.85 7.96 6.71C8.08 6.57 8.12 6.47 8.2 6.31C8.28 6.15 8.24 6.01 8.18 5.89C8.12 5.77 7.66 4.64 7.47 4.17C7.28 3.71 7.09 3.77 6.95 3.77H6.5C6.34 3.77 6.18 3.77 6.02 3.89C5.54 4.25 5 4.8 5 6.04C5 7.28 5.9 8.48 6.02 8.64C6.14 8.8 8.27 12.06 11.5 13.45C13.88 14.47 14.59 14.33 15.37 14.25C16.27 14.15 17.72 13.37 18.06 12.41C18.4 11.45 18.4 10.63 18.3 10.45C18.2 10.27 18.04 10.17 17.8 10.05L16.21 9.26Z" />
      </svg>
      <span>{label}</span>
    </a>
  );
}

