import { getAllProducts } from "@/data/products";
import ProductCatalog from "@/components/ProductCatalog";
import { siteConfig } from "@/lib/config";

export default function HomePage() {
  const products = getAllProducts();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
      {/* Hero Section */}
      <div className="max-w-2xl mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 text-neutral-800 text-xs font-medium mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#25D366]"></span>
          Direct WhatsApp Ordering Available
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 leading-tight">
          Thoughtful objects for mindful everyday living.
        </h1>
        <p className="mt-3 text-base sm:text-lg text-neutral-600 leading-relaxed">
          {siteConfig.description}
        </p>
      </div>

      {/* Main Catalog with Category Filters */}
      <ProductCatalog products={products} />

      {/* Direct WhatsApp Ordering Highlights */}
      <section className="mt-20 pt-12 border-t border-neutral-200">
        <div className="text-center max-w-xl mx-auto mb-10">
          <h2 className="text-xl font-bold text-neutral-900 tracking-tight">
            How Ordering Works
          </h2>
          <p className="mt-1 text-sm text-neutral-600">
            No registration, checkout passwords, or complicated carts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center sm:text-left">
          <div className="p-6 rounded-xl border border-neutral-200/80 bg-neutral-50/50">
            <div className="w-10 h-10 rounded-lg bg-neutral-900 text-white flex items-center justify-center font-bold text-sm mb-4 mx-auto sm:mx-0">
              1
            </div>
            <h3 className="font-semibold text-neutral-900 text-base">
              Choose an Item
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Explore product specifications, imagery, materials, and current availability status.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-neutral-200/80 bg-neutral-50/50">
            <div className="w-10 h-10 rounded-lg bg-[#25D366] text-white flex items-center justify-center font-bold text-sm mb-4 mx-auto sm:mx-0">
              2
            </div>
            <h3 className="font-semibold text-neutral-900 text-base">
              Tap &quot;Enquire on WhatsApp&quot;
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Opens WhatsApp with a pre-formatted message including the item title, price, and product URL.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-neutral-200/80 bg-neutral-50/50">
            <div className="w-10 h-10 rounded-lg bg-neutral-900 text-white flex items-center justify-center font-bold text-sm mb-4 mx-auto sm:mx-0">
              3
            </div>
            <h3 className="font-semibold text-neutral-900 text-base">
              Instant Seller Response
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Chat in real time with our team, request customizations, arrange shipping, or ask questions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
