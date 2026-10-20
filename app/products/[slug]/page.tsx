import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllProducts, getProductBySlug } from "@/data/products";
import { formatPrice, siteConfig } from "@/lib/config";
import WhatsAppButton from "@/components/WhatsAppButton";
import ProductCard from "@/components/ProductCard";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const products = getAllProducts();
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: `${product.name} | ${siteConfig.name}`,
      description: product.description,
      images: [
        {
          url: product.image,
          width: 1000,
          height: 1000,
          alt: product.name,
        },
      ],
    },
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  // Related products (exclude current)
  const allProducts = getAllProducts();
  const relatedProducts = allProducts
    .filter((p) => p.slug !== product.slug)
    .slice(0, 3);

  const getAvailabilityBadge = (status: typeof product.availability) => {
    switch (status) {
      case "In Stock":
        return (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
            <span className="w-2 h-2 mr-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            In Stock &mdash; Ready to dispatch
          </span>
        );
      case "Low Stock":
        return (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200">
            <span className="w-2 h-2 mr-1.5 rounded-full bg-amber-500"></span>
            Low Stock &mdash; Limited units remaining
          </span>
        );
      case "Pre-order":
        return (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
            Pre-order &mdash; Ships soon
          </span>
        );
      case "Out of Stock":
        return (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-neutral-100 text-neutral-600 border border-neutral-200">
            Currently Out of Stock
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Breadcrumb & Navigation */}
      <nav className="flex items-center text-sm text-neutral-500 mb-8 gap-2">
        <Link
          href="/"
          className="hover:text-neutral-900 transition-colors inline-flex items-center gap-1 font-medium"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Catalog
        </Link>
        <span>/</span>
        <span className="text-neutral-400">{product.category}</span>
        <span>/</span>
        <span className="text-neutral-900 font-medium truncate max-w-[200px] sm:max-w-none">
          {product.name}
        </span>
      </nav>

      {/* Main Product Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
        {/* Left: Product Image */}
        <div
          className="relative aspect-square w-full rounded-2xl overflow-hidden bg-neutral-100 border border-neutral-200/80 shadow-xs"
          style={{ position: "relative" }}
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
          />
        </div>

        {/* Right: Product Information */}
        <div className="flex flex-col">
          {/* Category & Status */}
          <div className="flex items-center justify-between gap-4 mb-3">
            <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">
              {product.category}
            </span>
            {getAvailabilityBadge(product.availability)}
          </div>

          {/* Product Name */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-neutral-900">
            {product.name}
          </h1>

          {/* Price */}
          <div className="mt-4 flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-neutral-900">
              {formatPrice(product.price)}
            </span>
            <span className="text-xs text-neutral-500">Taxes included</span>
          </div>

          {/* Description */}
          <div className="mt-6 pt-6 border-t border-neutral-200">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2">
              Description
            </h2>
            <p className="text-base text-neutral-700 leading-relaxed">
              {product.longDescription || product.description}
            </p>
          </div>

          {/* Key Features */}
          {product.features && product.features.length > 0 && (
            <div className="mt-6 pt-6 border-t border-neutral-200">
              <h2 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-3">
                Key Highlights
              </h2>
              <ul className="space-y-2.5">
                {product.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start text-sm text-neutral-700 gap-2.5"
                  >
                    <svg
                      className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* WhatsApp Action Area */}
          <div className="mt-8 pt-6 border-t border-neutral-200 space-y-4">
            <div>
              <WhatsAppButton
                product={product}
                size="lg"
                fullWidth
                label="Enquire on WhatsApp"
                className="py-4 text-base font-semibold shadow-sm hover:shadow-md"
              />
            </div>

            {/* Note & Info */}
            <div className="rounded-xl bg-neutral-50 p-4 border border-neutral-200/80 text-xs text-neutral-600 space-y-2">
              <div className="flex items-center gap-2 text-neutral-900 font-medium">
                <span className="w-2 h-2 rounded-full bg-[#25D366]"></span>
                Direct Chat with Seller
              </div>
              <p className="leading-relaxed">
                Clicking the green button opens WhatsApp with a pre-filled enquiry message containing the item name, listed price, and link. You can edit the text before sending.
              </p>
              <div className="pt-1 flex flex-wrap items-center gap-y-1 gap-x-4 text-[11px] text-neutral-500">
                <span>✓ Seller: +{siteConfig.sellerWhatsAppNumber}</span>
                <span>✓ {siteConfig.responseTime}</span>
                <span>✓ No account required</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <section className="mt-20 pt-12 border-t border-neutral-200">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-xl font-bold tracking-tight text-neutral-900">
                You might also like
              </h2>
              <p className="text-sm text-neutral-500 mt-1">
                More handcrafted objects from our collection
              </p>
            </div>
            <Link
              href="/"
              className="text-sm font-semibold text-neutral-900 hover:text-black underline underline-offset-4"
            >
              View all products &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

