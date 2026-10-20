import Link from "next/link";
import { siteConfig } from "@/lib/config";

export default function Navbar() {
  const cleanPhone = siteConfig.sellerWhatsAppNumber.replace(/[^0-9]/g, "");
  const generalWhatsAppUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
    `Hi! I'm browsing ${siteConfig.name} and would like to ask a question.`
  )}`;

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <span className="w-8 h-8 rounded-lg bg-neutral-900 text-white flex items-center justify-center font-bold text-base shadow-xs group-hover:bg-neutral-800 transition-colors">
              L
            </span>
            <div>
              <span className="font-semibold text-neutral-900 tracking-tight text-lg block leading-none">
                {siteConfig.name}
              </span>
              <span className="text-[11px] text-neutral-600 hidden sm:block tracking-wide uppercase mt-0.5">
                Minimal Product Catalog
              </span>
            </div>
          </Link>

          {/* Right Action: Direct WhatsApp seller link */}
          <div className="flex items-center gap-3">
            <a
              href={generalWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs sm:text-sm font-medium text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/80 rounded-full transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

