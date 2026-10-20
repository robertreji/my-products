import { siteConfig } from "@/lib/config";

export default function Footer() {
  const cleanPhone = siteConfig.sellerWhatsAppNumber.replace(/[^0-9]/g, "");
  const generalWhatsAppUrl = `https://wa.me/${cleanPhone}`;

  return (
    <footer className="mt-auto bg-white border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Brand & Bio */}
          <div>
            <h4 className="font-semibold text-neutral-900 text-sm tracking-tight">
              {siteConfig.name}
            </h4>
            <p className="mt-2 text-xs text-neutral-600 leading-relaxed max-w-sm">
              {siteConfig.description}
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-semibold text-neutral-900 text-sm tracking-tight">
              Direct Ordering
            </h4>
            <p className="mt-2 text-xs text-neutral-600 leading-relaxed">
              Click &quot;Enquire on WhatsApp&quot; on any product card to start a direct chat with pre-filled product details. No cart, checkout, or account creation needed.
            </p>
          </div>

          {/* Column 3: Contact & Hours */}
          <div>
            <h4 className="font-semibold text-neutral-900 text-sm tracking-tight">
              WhatsApp Support
            </h4>
            <div className="mt-2 text-xs text-neutral-600 space-y-1">
              <p>Hours: {siteConfig.supportHours}</p>
              <p>{siteConfig.responseTime}</p>
              <p className="pt-1">
                <a
                  href={generalWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-700 hover:text-emerald-800 font-medium inline-flex items-center gap-1"
                >
                  +{siteConfig.sellerWhatsAppNumber} &rarr;
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-600">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Built with Next.js App Router, TypeScript &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
