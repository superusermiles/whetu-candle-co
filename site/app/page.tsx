import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Flame, Leaf, PackageCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Whetū Candle Co. | Scents of Aotearoa, poured by hand.",
  description:
    "Discover hand-poured soy candles in Raglan, New Zealand, with small-batch scents inspired by Aotearoa's coast, botanicals, and calm interiors.",
};

const featuredScents = [
  {
    name: "Dune",
    notes: "Driftwood, flax, sea salt",
    mood: "Soft, mineral, sun-warmed.",
    burnTime: "45 hours",
    image: "https://images.unsplash.com/photo-1602874801006-e26f3f93f0a7?w=800&h=900&fit=crop",
    alt: "Hand-poured soy candle in a glass vessel with dried botanicals for coastal home fragrance styling.",
  },
  {
    name: "Nikau",
    notes: "Green fig, moss, crushed leaf",
    mood: "Fresh, shaded, restorative.",
    burnTime: "45 hours",
    image: "https://images.unsplash.com/photo-1612198527270-6f0c8d7a4f2d?w=800&h=900&fit=crop",
    alt: "Small-batch soy candle styled with neutral home décor for a calm New Zealand interior.",
  },
  {
    name: "Ember",
    notes: "Cedar, amber, toasted vanilla",
    mood: "Low light, linen, slow evenings.",
    burnTime: "50 hours",
    image: "https://images.unsplash.com/photo-1608181831718-4f830ddb0c2d?w=800&h=900&fit=crop",
    alt: "Artisan soy candle with warm evening light and ceramic textures for slow living home fragrance.",
  },
];

const values = [
  {
    icon: Leaf,
    title: "Pure soy wax",
    body: "Clean-burning soy for a steady, even glow.",
  },
  {
    icon: PackageCheck,
    title: "Reusable vessels",
    body: "Designed to live on as keepsakes, planters, or storage.",
  },
  {
    icon: Flame,
    title: "Small-batch pours",
    body: "Mixed and poured by hand for consistency and character.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="section-shell section-space grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
        <div className="max-w-2xl space-y-8 lg:pb-12">
          <div>
            <p className="eyebrow">Hand-poured in Raglan, New Zealand</p>
            <h1 className="font-heading text-5xl leading-none text-[color:var(--primary)] md:text-6xl lg:text-[4rem]">
              Scents of Aotearoa, poured by hand.
            </h1>
          </div>
          <p className="max-w-xl text-lg leading-8 text-[color:var(--text)]/80">
            Small-batch soy candles inspired by west coast light, native botanicals, and the quiet rituals of home. Designed to warm a room without overpowering it.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link href="/shop-contact/" className="inline-flex items-center justify-center rounded-full bg-[color:var(--primary)] px-6 py-4 text-sm font-semibold text-[color:var(--background)] shadow-soft transition duration-300 hover:-translate-y-0.5 hover:shadow-medium sm:min-w-[220px]">
              Browse the collection
            </Link>
            <Link href="/about/" className="inline-flex items-center justify-center rounded-full border border-[color:var(--muted)] px-6 py-4 text-sm font-semibold text-[color:var(--primary)] transition duration-300 hover:border-[color:var(--secondary)] hover:bg-white sm:min-w-[180px]">
              Our story
            </Link>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-2xl lg:min-h-[44rem]">
          <div className="overflow-hidden rounded-[36px] shadow-hard lg:ml-16">
            <img src="https://images.unsplash.com/photo-1603006905003-be475563bc59?w=900&h=1200&fit=crop" alt="Hand-poured soy candle from Whetū Candle Co. styled on a warm neutral surface in Raglan-inspired light." className="h-[28rem] w-full object-cover md:h-[36rem]" />
          </div>
          <div className="mt-6 overflow-hidden rounded-[30px] shadow-medium lg:absolute lg:-bottom-10 lg:left-0 lg:mt-0 lg:w-[52%]">
            <img src="https://images.unsplash.com/photo-1634746715098-6cafbc6a7a00?w=700&h=820&fit=crop" alt="Minimal soy candle and vessel styling with earthy shadows for artisan home fragrance in New Zealand." className="h-72 w-full object-cover md:h-80" />
          </div>
        </div>
      </section>

      <section className="section-shell section-space">
        <div className="mb-12 max-w-3xl">
          <p className="eyebrow">Signature pours</p>
          <h2 className="section-title">Six scents shaped by coast, clay, and evening light.</h2>
          <p className="prose-copy mt-5">A curated collection of grounded, layered fragrances made for slow mornings, dinner-party glow, and gifting with taste.</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {featuredScents.map((scent) => (
            <article key={scent.name} className="group overflow-hidden rounded-[24px] border border-[color:var(--muted)] bg-[color:var(--accent)]/45 shadow-soft transition duration-300 hover:scale-[1.01] hover:shadow-medium">
              <div className="overflow-hidden">
                <img src={scent.image} alt={scent.alt} className="h-80 w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="space-y-4 p-6">
                <div className="flex items-center justify-between gap-4 border-b border-[color:var(--secondary)]/40 pb-4">
                  <h3 className="font-heading text-3xl text-[color:var(--primary)]">{scent.name}</h3>
                  <span className="rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--secondary)]">{scent.burnTime}</span>
                </div>
                <p className="text-sm uppercase tracking-[0.24em] text-[color:var(--secondary)]">{scent.notes}</p>
                <p className="text-base leading-7 text-[color:var(--text)]/75">{scent.mood}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell section-space grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="overflow-hidden rounded-[30px] shadow-medium">
          <img src="https://images.unsplash.com/photo-1517705008128-361805f42e86?w=900&h=1100&fit=crop" alt="Studio arrangement of soy candles, vessels, and natural textures from a New Zealand candle maker." className="h-[32rem] w-full object-cover" />
        </div>
        <div className="rounded-[36px] bg-white/65 p-8 shadow-soft md:p-12">
          <p className="eyebrow">Our studio</p>
          <h2 className="section-title">Crafted in small runs, with materials chosen to be used and reused.</h2>
          <p className="prose-copy mt-6">Whetū began as a quiet studio practice in Raglan — pouring candles that feel grounded in place, generous in scent, and beautiful enough to leave out long after the flame is gone.</p>
          <Link href="/about/" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--primary)] transition hover:text-[color:var(--secondary)]">
            Read the maker story <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <section className="section-shell section-space">
        <div className="mb-10 max-w-2xl text-center md:mx-auto">
          <h2 className="section-title">Made with intention</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {values.map(({ icon: Icon, title, body }) => (
            <article key={title} className="rounded-[24px] bg-white/70 p-8 text-center shadow-soft">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[color:var(--accent)]/55 text-[color:var(--primary)]">
                <Icon size={28} />
              </div>
              <h3 className="font-heading text-3xl text-[color:var(--primary)]">{title}</h3>
              <p className="mt-4 text-base leading-7 text-[color:var(--text)]/75">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-[color:var(--dark)] py-16 md:py-24">
        <div className="absolute inset-y-0 right-0 hidden w-2/5 lg:block">
          <img src="https://images.unsplash.com/photo-1616627561950-9f746e330187?w=1000&h=700&fit=crop" alt="Warm neutral interior scene with candlelit ambience for wholesale candle styling inspiration." className="h-full w-full object-cover opacity-30" />
        </div>
        <div className="section-shell relative z-10 text-center lg:max-w-4xl">
          <h2 className="font-heading text-4xl leading-none text-[color:var(--background)] md:text-5xl">Stock Whetū in your space.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[color:var(--background)]/78">We partner with boutiques, interior stylists, hospitality spaces, and thoughtful gift stores across Aotearoa.</p>
          <Link href="/shop-contact/#wholesale-form" className="mt-8 inline-flex items-center justify-center rounded-full bg-[color:var(--secondary)] px-6 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-[color:var(--dark)] shadow-soft transition duration-300 hover:-translate-y-0.5 hover:brightness-95">
            Start a wholesale enquiry
          </Link>
        </div>
      </section>
    </>
  );
}
