import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "About Whetū Candle Co. | Raglan Soy Candles",
  description:
    "Learn about Whetū Candle Co., a Raglan candle studio crafting hand-poured soy candles with thoughtful ingredients and practical sustainability.",
};

const ingredients = [
  {
    title: "Soy wax",
    body: "Plant-based soy wax for a smooth surface, clean burn, and gentle scent release.",
    image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=700&h=600&fit=crop",
    alt: "Natural botanicals and textures representing ingredients used in hand-poured soy candles.",
  },
  {
    title: "Cotton wicks",
    body: "Lead-free cotton wicks chosen for an even flame and dependable performance.",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=700&h=600&fit=crop",
    alt: "Hands handling candle-making materials in a bright studio for small-batch candle production.",
  },
  {
    title: "Fragrance blends",
    body: "Layered fragrance compositions that lean earthy, mineral, and quietly floral.",
    image: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=700&h=600&fit=crop",
    alt: "Fragrance bottles and materials arranged for artisan home fragrance blending.",
  },
];

const commitments = [
  "Recyclable packaging with minimal excess",
  "Reusable vessels designed for second life",
  "Small-run production to reduce waste",
  "Local and low-waste sourcing where practical",
];

const gallery = [
  {
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=700&h=900&fit=crop",
    alt: "Warm studio corner with wooden textures that reflect the Whetū Candle Co. maker aesthetic.",
  },
  {
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=700&h=900&fit=crop",
    alt: "Layered natural interior styled to match calm New Zealand home fragrance spaces.",
  },
  {
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?w=700&h=900&fit=crop",
    alt: "Serene home interior with a calm palette suited to boutique candle styling.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="section-shell section-space text-center">
        <p className="eyebrow">Meet the maker</p>
        <h1 className="font-heading text-5xl leading-none text-[color:var(--primary)] md:text-6xl lg:text-[4rem]">
          A candle studio shaped by coast, calm, and careful process.
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[color:var(--text)]/80">
          Whetū Candle Co. was built around the idea that scent can hold a sense of place. From a small Raglan studio, each batch is poured by hand with a focus on balance, burn quality, and understated beauty.
        </p>
        <div className="mt-12 overflow-hidden rounded-[36px] shadow-hard">
          <img src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1400&h=720&fit=crop" alt="Warm curated interior that reflects the calm, coastal feel of Whetū Candle Co. soy candles." className="h-[24rem] w-full object-cover md:h-[34rem]" />
        </div>
      </section>

      <section className="section-shell section-space grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div className="overflow-hidden rounded-[30px] shadow-medium">
          <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&h=1100&fit=crop" alt="Founder portrait representing the maker behind Whetū Candle Co. hand-poured soy candles in Raglan." className="h-[34rem] w-full object-cover" />
        </div>
        <div className="space-y-6">
          <h2 className="section-title">From evening ritual to studio craft.</h2>
          <p className="prose-copy">Founder Maia started Whetū after years of collecting home fragrance that looked beautiful but burned too strongly or left little behind beyond the first impression. She wanted candles that felt softer, more grounded, and more connected to home. What began at the kitchen bench became a dedicated studio practice: testing wax blends, refining fragrance throw, and designing vessels that suit a shelf as much as a lit table. Today, every pour still happens in small measured runs, with each scent developed to feel atmospheric rather than overpowering.</p>
          <blockquote className="rounded-[24px] border border-[color:var(--secondary)]/40 bg-[color:var(--accent)]/35 p-6 font-heading text-3xl leading-tight text-[color:var(--primary)]">
            “I wanted each candle to feel like something you’d keep close — a small object that changes the mood of a room without demanding attention.”
          </blockquote>
        </div>
      </section>

      <section className="section-shell section-space">
        <div className="mb-12 max-w-3xl">
          <h2 className="section-title">What goes into each soy candle pour</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {ingredients.map((item) => (
            <article key={item.title} className="overflow-hidden rounded-[24px] bg-white/75 shadow-soft">
              <img src={item.image} alt={item.alt} className="h-56 w-full object-cover" />
              <div className="space-y-4 p-6">
                <h3 className="font-heading text-3xl text-[color:var(--primary)]">{item.title}</h3>
                <p className="text-base leading-7 text-[color:var(--text)]/75">{item.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell section-space grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <h2 className="section-title">Sustainability, kept practical.</h2>
          <p className="prose-copy mt-6">We focus on choices that make sense over time: recyclable outer packaging, reusable jars, measured small-batch production, and local sourcing where possible. It is a commitment to doing better carefully, not claiming perfection loudly.</p>
          <ul className="mt-8 space-y-4">
            {commitments.map((commitment) => (
              <li key={commitment} className="flex items-start gap-3 rounded-[18px] bg-white/70 p-4 shadow-soft">
                <span className="mt-1 rounded-full bg-[color:var(--accent)]/55 p-2 text-[color:var(--primary)]"><Check size={16} /></span>
                <span className="text-base leading-7 text-[color:var(--text)]/80">{commitment}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="overflow-hidden rounded-[30px] shadow-medium">
          <img src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=900&h=1100&fit=crop" alt="Sunlit reusable home objects and natural materials that support sustainable candle packaging choices." className="h-[34rem] w-full object-cover" />
        </div>
      </section>

      <section className="section-shell section-space">
        <div className="mb-12 max-w-3xl text-center md:mx-auto">
          <h2 className="section-title">The world of Whetū</h2>
          <p className="prose-copy mt-5">Natural textures, warm corners, and coastal calm — the interiors and details that shape the brand.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3 md:items-start">
          {gallery.map((item, index) => (
            <div key={item.image} className={index === 1 ? "md:pt-10" : index === 2 ? "md:pt-20" : ""}>
              <div className="overflow-hidden rounded-[30px] shadow-medium">
                <img src={item.image} alt={item.alt} className="h-[26rem] w-full object-cover" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell section-space text-center">
        <h2 className="section-title">Looking to stock Whetū?</h2>
        <Link href="/shop-contact/" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[color:var(--primary)] px-6 py-4 text-sm font-semibold text-[color:var(--background)] shadow-soft transition duration-300 hover:-translate-y-0.5 hover:shadow-medium">
          Visit Shop &amp; Contact <ArrowRight size={16} />
        </Link>
      </section>
    </>
  );
}
