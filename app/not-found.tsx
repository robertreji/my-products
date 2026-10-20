import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
      <div className="max-w-md mx-auto">
        <p className="text-sm font-semibold text-neutral-400 uppercase tracking-widest">
          404 Error
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
          Product Not Found
        </h1>
        <p className="mt-4 text-base text-neutral-600">
          The product you are looking for doesn&apos;t exist or may have been removed from our catalog.
        </p>
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium rounded-lg text-white bg-neutral-900 hover:bg-neutral-800 transition-colors shadow-xs"
          >
            &larr; Back to Catalog
          </Link>
        </div>
      </div>
    </div>
  );
}

