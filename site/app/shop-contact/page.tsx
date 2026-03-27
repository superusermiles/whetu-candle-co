import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wholesale Soy Candles in Raglan | Whetū Candle Co.",
  description:
    "Explore Whetū Candle Co.'s soy candles in Raglan and contact us for wholesale candle enquiries, stockist requests, styling projects, and hospitality spaces.",
};

const products = [
  {
    name: "Dune",
    notes: "Driftwood, flax, sea salt",
    finish: "Matte sand vessel",
    burnTime: "45 hours",
    price: "NZ$42",
    image: "https://images.unsplash.com/photo-1602874801006-e26f3f93f0a7?w=800&h=900&fit=crop",
    alt: "Dune soy candle in a glass vessel with dried botanicals for coastal-inspired home fragrance.",
  },
  {
    name: "Nikau",
    notes: "Green fig, moss, crushed leaf",
    finish: "Stone vessel",
    burnTime: "45 hours",
    price: "NZ$42",
    image: "https://images.unsplash.com/photo-1608181831718-4f830ddb0c2d?w=800&h=900&fit=crop",
    alt: "Nikau small-batch soy candle with ceramic textures and warm ambient styling.",
  },
  {
    name: "Ember",
    notes: "Cedar, amber, toasted vanilla",
    finish: "Smoked clay vessel",
    burnTime: "50 hours",
    price: "NZ$44",
    image: "https://images.unsplash.com/photo-1634746715098-6cafbc6a7a00?w=800&h=900&fit=crop",
    alt: "Ember artisan soy candle with earthy shadows for premium home fragrance in New Zealand.",
  },
  {
    name: "Tide",
    notes: "Citrus peel, sage, white wood",
    finish: "Soft oat vessel",
    burnTime: "45 hours",
    price: "NZ$42",
    image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=800&h=900&fit=crop",
    alt: "Tide hand-poured soy candle styled on a warm neutral surface with soft natural light.",
  },
  {
    name: "Harbour",
    notes: "Black tea, rain, birch",
    finish: "Warm grey vessel",
    burnTime: "50 hours",
    price: "NZ$44",
    image: "https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800&h=900&fit=crop",
    alt: "Harbour soy candle arranged with vessels and natural textures for boutique shelf styling.",
  },
  {
    name: "Bloom",
    notes: "Mānuka honey, jasmine, dry hay",
    finish: "Brushed shell vessel",
    burnTime: "45 hours",
    price: "NZ$42",
    image: "https://images.unsplash.com/photo-1616627561950-9f746e330187?w=800&h=900&fit=crop",
    alt: "Bloom soy candle in a warm neutral interior for gifting and wholesale candle collections.",
  },
];

const stats = ["Hand-poured in Raglan", "Soy wax blend", "Reusable vessels"];
const enquiryTypes = [
  "Wholesale stockist",
  "Interior styling project",
  "Hospitality / accommodation",
  "Press / collaboration",
];

export default function ShopContactPage() {
  return (
    <>
      <section className="section-shell section-space">
        <div className="max-w-3xl">
          <p className="eyebrow">Collection + enquiries</p>
          <h1 className="font-heading text-5xl leading-none text-[color:var(--primary)] md:text-6xl lg:text-[4rem]">
            Signature candles for shelves, gifting, and slow-lit rooms.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[color:var(--text)]/80">
            Explore the core Whetū range below. For wholesale orders, collaborations, or styling enquiries, use the form and we’ll be in touch within three working days.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {stats.map((stat) => (
              <span key={stat} className="rounded-full border border-[color:var(--muted)] bg-white/75 px-4 py-2 text-sm font-semibold text-[color:var(--primary)] shadow-soft">
                {stat}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell pb-16 md:pb-24 lg:pb-32">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <article key={product.name} className="group overflow-hidden rounded-[24px] bg-white/75 shadow-soft transition duration-300 hover:scale-[1.01] hover:shadow-medium">
              <div className="overflow-hidden">
                <img src={product.image} alt={product.alt} className="h-80 w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="space-y-4 p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="font-heading text-3xl text-[color:var(--primary)]">{product.name}</h2>
                    <p className="mt-2 text-sm uppercase tracking-[0.22em] text-[color:var(--secondary)]">{product.notes}</p>
                  </div>
                  <span className="text-lg font-semibold text-[color:var(--primary)]">{product.price}</span>
                </div>
                <div className="space-y-2 text-sm text-[color:var(--text)]/75">
                  <p><span className="font-semibold text-[color:var(--primary)]">Vessel:</span> {product.finish}</p>
                  <p><span className="font-semibold text-[color:var(--primary)]">Burn time:</span> {product.burnTime}</p>
                </div>
                <a href="#wholesale-form" className="inline-flex rounded-full border border-[color:var(--muted)] px-5 py-3 text-sm font-semibold text-[color:var(--primary)] transition duration-300 hover:border-[color:var(--secondary)] hover:bg-[color:var(--accent)]/25">
                  Enquire about this scent
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell pb-16 md:pb-24 lg:pb-32">
        <div className="overflow-hidden rounded-[36px] bg-[color:var(--accent)]/45 lg:grid lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="p-8 md:p-12 lg:p-16">
            <h2 className="section-title">Fragrance for homes that favour texture, calm, and character.</h2>
            <p className="prose-copy mt-6">Each candle is designed to sit easily among linen, timber, ceramics, and the everyday rituals that make a home feel lived in.</p>
          </div>
          <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?w=900&h=700&fit=crop" alt="Soft linen and natural décor details paired with artisan candle styling for calm interiors." className="h-72 w-full object-cover lg:h-full" />
        </div>
      </section>

      <section id="wholesale-form" className="section-shell pb-16 md:pb-24 lg:pb-32">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="rounded-[30px] bg-white/80 p-8 shadow-soft md:p-10">
            <p className="eyebrow">Wholesale enquiries</p>
            <h2 className="section-title">Wholesale enquiries</h2>
            <p className="prose-copy mt-5">Tell us about your store, project, or hospitality space and we’ll send current scent notes, pricing, and lead times.</p>
            <form action="https://formsubmit.co/hello@whetucandleco.nz" method="POST" className="mt-8 space-y-5">
              <input type="hidden" name="_subject" value="Whetū Candle Co. wholesale enquiry" />
              <input type="hidden" name="_captcha" value="false" />
              <div className="grid gap-5 md:grid-cols-2">
                <label className="space-y-2 text-sm font-medium text-[color:var(--primary)]">Full name<input type="text" name="full-name" required /></label>
                <label className="space-y-2 text-sm font-medium text-[color:var(--primary)]">Business name<input type="text" name="business-name" required /></label>
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                <label className="space-y-2 text-sm font-medium text-[color:var(--primary)]">Email address<input type="email" name="email" required /></label>
                <label className="space-y-2 text-sm font-medium text-[color:var(--primary)]">Phone number<input type="tel" name="phone" /></label>
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                <label className="space-y-2 text-sm font-medium text-[color:var(--primary)]">Store location<input type="text" name="location" required /></label>
                <label className="space-y-2 text-sm font-medium text-[color:var(--primary)]">Enquiry type<select name="enquiry-type" required defaultValue=""><option value="" disabled>Select one</option>{enquiryTypes.map((type) => <option key={type} value={type}>{type}</option>)}</select></label>
              </div>
              <label className="space-y-2 text-sm font-medium text-[color:var(--primary)]">Message<textarea name="message" required rows={6} /></label>
              <button type="submit" className="inline-flex rounded-full bg-[color:var(--primary)] px-6 py-4 text-sm font-semibold text-[color:var(--background)] shadow-soft transition duration-300 hover:-translate-y-0.5 hover:shadow-medium">
                Send enquiry
              </button>
            </form>
          </div>
          <div className="space-y-6 rounded-[30px] bg-[color:var(--accent)]/35 p-6 shadow-soft md:p-8">
            <div className="overflow-hidden rounded-[24px]">
              <img src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=900&h=1100&fit=crop" alt="Styled wholesale workspace image supporting candle stockist and hospitality enquiries." className="h-[24rem] w-full object-cover md:h-[28rem]" />
            </div>
            <div>
              <h3 className="font-heading text-3xl text-[color:var(--primary)]">Prefer a direct introduction?</h3>
              <p className="mt-4 text-base leading-7 text-[color:var(--text)]/80">Email hello@whetucandleco.nz or message @whetucandleco on Instagram. We reply to wholesale enquiries within three working days.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell pb-16 md:pb-24 lg:pb-32">
        <div className="grid gap-4 rounded-[30px] border border-[color:var(--muted)] bg-white/75 p-6 text-sm text-[color:var(--text)]/80 shadow-soft md:grid-cols-4 md:p-8">
          <a href="mailto:hello@whetucandleco.nz" className="rounded-[18px] bg-[color:var(--background)] px-4 py-4 transition hover:bg-white">hello@whetucandleco.nz</a>
          <a href="https://instagram.com/whetucandleco" target="_blank" rel="noreferrer" className="rounded-[18px] bg-[color:var(--background)] px-4 py-4 transition hover:bg-white">@whetucandleco</a>
          <p className="rounded-[18px] bg-[color:var(--background)] px-4 py-4">Raglan, New Zealand</p>
          <p className="rounded-[18px] bg-[color:var(--background)] px-4 py-4">Wholesale response time: within three working days</p>
        </div>
      </section>
    </>
  );
}
