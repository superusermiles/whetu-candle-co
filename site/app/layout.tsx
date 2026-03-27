import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import Link from "next/link";
import { Clock3, Mail, Menu, Sparkles, X } from "lucide-react";
import "./globals.css";

const siteUrl = "https://whetu-candle-co.vercel.app";

const cormorant = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Store",
  name: "Whetū Candle Co.",
  description:
    "Hand-poured soy candles from Raglan, New Zealand, with small-batch home fragrance inspired by Aotearoa's coast, botanicals, and slow living.",
  url: siteUrl,
  telephone: "+64 21 000 0000",
  email: "hello@whetucandleco.nz",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Raglan",
    addressRegion: "Waikato",
    addressCountry: "NZ",
  },
  areaServed: ["Raglan", "Waikato", "New Zealand", "Australia"],
  sameAs: ["https://instagram.com/whetucandleco"],
  knowsAbout: [
    "Hand-poured soy candles",
    "Home fragrance",
    "Wholesale candles",
    "Small-batch candles",
    "Sustainable candles",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Hand-Poured Soy Candles Raglan NZ | Whetū Candle Co.",
  description:
    "Shop hand-poured soy candles in Raglan, New Zealand. Whetū Candle Co. creates small-batch home fragrance for gifting, interiors, and wholesale stockists.",
  keywords: [
    "hand-poured soy candles Raglan",
    "soy candles New Zealand",
    "Raglan candles",
    "home fragrance NZ",
    "small-batch candles",
    "wholesale candles New Zealand",
    "artisan candles NZ",
    "sustainable candles NZ",
    "gift candles New Zealand",
    "Whetū Candle Co.",
  ],
  openGraph: {
    title: "Hand-Poured Soy Candles Raglan NZ | Whetū Candle Co.",
    description:
      "Discover small-batch soy candles from Raglan with earthy scent blends for homes, gifting, and wholesale stockists across New Zealand.",
    url: siteUrl,
    siteName: "Whetū Candle Co.",
    type: "website",
    locale: "en_NZ",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hand-Poured Soy Candles Raglan NZ | Whetū Candle Co.",
    description:
      "Small-batch soy candles from Raglan, crafted for calm interiors, gifting, and wholesale enquiries across New Zealand.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

function LogoMark({
  variant = "primary",
  className = "",
}: {
  variant?: "primary" | "reversed" | "mono";
  className?: string;
}) {
  const word =
    variant === "reversed" ? "#F5F0E7" : variant === "mono" ? "currentColor" : "#2E2A26";
  const support =
    variant === "reversed" ? "#C9B8A3" : variant === "mono" ? "currentColor" : "#6B5A46";
  const star = variant === "mono" ? "currentColor" : "#A78F6A";

  return (
    <svg
      width="220"
      height="64"
      viewBox="0 0 220 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Whetū Candle Co."
      className={className}
    >
      <g transform="translate(8 6)">
        <path d="M20 0L23.5 8.5L32 12L23.5 15.5L20 24L16.5 15.5L8 12L16.5 8.5L20 0Z" fill={star} />
        <path d="M6 34C10 29 16 26 20 26C24 26 30 29 34 34" stroke={support} strokeWidth="2.5" strokeLinecap="round" />
      </g>
      <text x="56" y="30" fill={word} fontFamily="var(--font-heading)" fontSize="28" fontWeight="700">
        Whetū
      </text>
      <text x="56" y="50" fill={support} fontFamily="var(--font-body)" fontSize="12" fontWeight="600" letterSpacing="2">
        CANDLE CO.
      </text>
    </svg>
  );
}

function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--muted)]/70 bg-[color:rgba(245,240,231,0.9)] backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-5 py-4 md:px-8 lg:px-12">
        <Link href="/" aria-label="Whetū Candle Co. home" className="transition duration-300 hover:brightness-110">
          <LogoMark className="h-11 w-auto" />
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          <Link className="nav-link" href="/">Home</Link>
          <Link className="nav-link" href="/about/">About</Link>
          <Link className="nav-link" href="/shop-contact/">Shop &amp; Contact</Link>
        </nav>
        <Link href="/shop-contact/#wholesale-form" className="hidden rounded-full bg-[color:var(--primary)] px-5 py-3 text-sm font-semibold text-[color:var(--background)] shadow-soft transition duration-300 hover:-translate-y-0.5 hover:shadow-medium md:inline-flex">
          Wholesale enquiries
        </Link>
        <details className="group relative md:hidden">
          <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-full border border-[color:var(--muted)] bg-white text-[color:var(--text)] shadow-soft marker:content-none">
            <Menu className="group-open:hidden" size={20} />
            <X className="hidden group-open:block" size={20} />
          </summary>
          <div className="absolute right-0 top-14 w-72 rounded-3xl border border-[color:var(--muted)] bg-[color:var(--background)] p-5 shadow-hard">
            <nav aria-label="Mobile" className="flex flex-col gap-3 text-base">
              <Link className="mobile-nav-link" href="/">Home</Link>
              <Link className="mobile-nav-link" href="/about/">About</Link>
              <Link className="mobile-nav-link" href="/shop-contact/">Shop &amp; Contact</Link>
              <Link href="/shop-contact/#wholesale-form" className="mt-2 inline-flex justify-center rounded-full bg-[color:var(--primary)] px-5 py-3 font-semibold text-[color:var(--background)] transition duration-300 hover:-translate-y-0.5">
                Wholesale enquiries
              </Link>
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="bg-[color:var(--dark)] text-[color:var(--background)]">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-5 py-16 text-center md:px-8 lg:px-12 lg:py-20">
        <LogoMark variant="reversed" className="h-14 w-auto" />
        <p className="max-w-2xl text-base leading-7 text-[color:var(--background)]/80">
          Hand-poured soy candles inspired by Aotearoa’s coast and quiet interiors.
        </p>
        <nav aria-label="Footer" className="flex flex-wrap items-center justify-center gap-6 text-sm uppercase tracking-[0.22em] text-[color:var(--background)]/80">
          <Link className="nav-link-footer" href="/">Home</Link>
          <Link className="nav-link-footer" href="/about/">About</Link>
          <Link className="nav-link-footer" href="/shop-contact/">Shop &amp; Contact</Link>
        </nav>
        <div className="grid gap-4 text-sm text-[color:var(--background)]/80 md:grid-cols-2 lg:grid-cols-4 md:gap-8">
          <a className="footer-contact" href="mailto:hello@whetucandleco.nz"><Mail size={16} />hello@whetucandleco.nz</a>
          <a className="footer-contact" href="https://instagram.com/whetucandleco" target="_blank" rel="noreferrer"><span aria-hidden="true">◎</span>@whetucandleco</a>
          <p className="footer-contact"><Sparkles size={16} />Raglan, New Zealand</p>
          <p className="footer-contact"><Clock3 size={16} />Wholesale response time: within three working days</p>
        </div>
        <div className="space-y-2 text-sm text-[color:var(--background)]/70">
          <p>Reusable vessels. Recyclable packaging. Small-batch by design.</p>
          <p>© 2026 Whetū Candle Co. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-NZ" className={`${cormorant.variable} ${manrope.variable} h-full scroll-smooth`}>
      <body className="min-h-full bg-[color:var(--background)] font-body text-[color:var(--text)] antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <SiteHeader />
        <main className="flex min-h-[calc(100vh-88px)] flex-col">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
