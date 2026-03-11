import type { Metadata } from "next";
import Link from "next/link";
import { Leaf, Star, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
    title: "Products | Alpha Farm — Gir Cow Ghee & VermiCompost",
    description:
        "Explore Alpha Farm's premium products: Pure A2 Gir Cow Ghee made using the Bilona method, and organic VermiCompost made from Gir cow dung. Inquire today.",
};

const gheeFeatures = [
    { title: "Breed", value: "Purebred Gir Cow" },
    { title: "Method", value: "Traditional Bilona" },
    { title: "Protein Type", value: "A2 Beta-Casein" },
    { title: "Additives", value: "None — 100% Pure" },
    { title: "Colour", value: "Rich Golden Yellow" },
    { title: "Aroma", value: "Nutty, Authentic" },
];

const compostFeatures = [
    { title: "Source", value: "Gir Cow Dung" },
    { title: "Type", value: "VermiCompost" },
    { title: "Nutrients", value: "NPK + Micro-nutrients" },
    { title: "Additives", value: "None — 100% Organic" },
    { title: "Form", value: "Granular / Powder" },
    { title: "Best For", value: "All Soil Types" },
];

const gheeUses = [
    "Daily cooking & tempering",
    "Ayurvedic remedies",
    "Baby food preparation",
    "Skin & hair care",
    "Boosting immunity",
    "Festival rituals & Havan",
];

const compostUses = [
    "Home kitchen gardens",
    "Terrace & balcony plants",
    "Agricultural fields",
    "Flower & ornamental plants",
    "Organic farming",
    "Soil restoration",
];

export default function ProductsPage() {
    return (
        <>
            {/* ── PAGE HERO ────────────────────────────────────────────── */}
            <section className="relative pt-32 pb-20 px-6 bg-gradient-to-br from-[#1a4332] via-[#2D6A4F] to-[#3B2314] overflow-hidden">
                <div className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `radial-gradient(circle at 70% 30%, #D4A017 1px, transparent 1px)`,
                        backgroundSize: "50px 50px",
                    }}
                />
                <div className="relative max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-[#D4A017]/20 border border-[#D4A017]/40 text-[#D4A017] text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
                        <Leaf className="w-3.5 h-3.5" />
                        Pure Gir Cow Products
                    </div>
                    <h1 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-5">
                        Nature&apos;s Best,<br />
                        <span className="text-[#D4A017]">Carefully Crafted</span>
                    </h1>
                    <p className="text-white/75 text-lg max-w-2xl mx-auto">
                        Two exceptional products born from the heart of our Gaushala —
                        each one a promise of purity, health, and sustainability.
                    </p>
                </div>
            </section>

            {/* ── PRODUCT 1: GIR COW GHEE ──────────────────────────── */}
            <section className="section-padding bg-[#FEFAE0]">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        {/* Info */}
                        <div>
                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 bg-[#D4A017]/15 text-[#D4A017] text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5 border border-[#D4A017]/30">
                                <Star className="w-3.5 h-3.5" /> Premium Product
                            </div>
                            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#3B2314] mb-5">
                                Gir Cow A2 Ghee
                            </h2>
                            <p className="text-[#6B4226] leading-relaxed mb-4">
                                Our Gir Cow Ghee is produced using the ancient{" "}
                                <strong className="text-[#2D6A4F]">Bilona tradition</strong> —
                                the milk is first cultured into curd, then churned into butter,
                                and finally simmered into pure, golden ghee. This method
                                preserves A2 beta-casein proteins which are inherently different
                                from the A1 proteins found in Western cow breeds.
                            </p>
                            <p className="text-[#6B4226] leading-relaxed mb-8">
                                Rich in fat-soluble vitamins (A, D, E, K), CLA (conjugated
                                linoleic acid), and butyric acid — our ghee supports digestion,
                                boosts immunity, and nourishes from within. Sourced exclusively
                                from our own cows, every batch is small and carefully made.
                            </p>

                            {/* Feature grid */}
                            <div className="grid grid-cols-2 gap-3 mb-8">
                                {gheeFeatures.map((f) => (
                                    <div key={f.title} className="bg-[#F8F4E3] rounded-xl p-3.5 border border-[#D9C9A3]">
                                        <p className="text-xs text-[#6B4226]/70 uppercase tracking-wide">{f.title}</p>
                                        <p className="text-sm font-semibold text-[#3B2314] mt-0.5">{f.value}</p>
                                    </div>
                                ))}
                            </div>

                            <Link
                                href="/contact?product=gir-cow-ghee"
                                className="inline-flex items-center gap-2 bg-[#D4A017] text-[#3B2314] px-8 py-4 rounded-full font-semibold hover:bg-[#C97532] hover:text-white transition-all duration-300 shadow-md hover:shadow-xl"
                            >
                                Inquire About Ghee <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>

                        {/* Uses */}
                        <div>
                            <div className="bg-gradient-to-br from-[#D4A017]/10 to-[#C97532]/10 border border-[#D4A017]/30 rounded-3xl p-8">
                                <Star className="w-10 h-10 text-[#D4A017] mb-4" />
                                <h3 className="font-playfair text-2xl font-bold text-[#3B2314] mb-5">
                                    How to Use Gir Cow Ghee
                                </h3>
                                <ul className="space-y-3">
                                    {gheeUses.map((use) => (
                                        <li key={use} className="flex items-center gap-3 text-[#6B4226]">
                                            <CheckCircle2 className="w-5 h-5 text-[#D4A017] shrink-0" />
                                            <span>{use}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mt-5 bg-[#3B2314] rounded-3xl p-8 text-[#FEFAE0]">
                                <h4 className="font-playfair text-xl font-bold text-[#D4A017] mb-3">
                                    The Bilona Difference
                                </h4>
                                <p className="text-[#FEFAE0]/75 text-sm leading-relaxed">
                                    Most commercial ghee is made by directly processing cream,
                                    skipping fermentation. The Bilona method begins with culturing
                                    the whole milk, then hand-churning the curd. This preserves
                                    live cultures, nutrients, and the authentic flavour that modern
                                    industrial ghee can never replicate.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Divider */}
            <div className="h-1 bg-gradient-to-r from-transparent via-[#D9C9A3] to-transparent" />

            {/* ── PRODUCT 2: VERMICOMPOST ───────────────────────────── */}
            <section className="section-padding bg-[#F8F4E3]">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        {/* Uses — left on this section */}
                        <div className="order-2 lg:order-1">
                            <div className="bg-gradient-to-br from-[#2D6A4F]/10 to-[#52B788]/10 border border-[#2D6A4F]/20 rounded-3xl p-8">
                                <Leaf className="w-10 h-10 text-[#2D6A4F] mb-4" />
                                <h3 className="font-playfair text-2xl font-bold text-[#3B2314] mb-5">
                                    Ideal Uses
                                </h3>
                                <ul className="space-y-3">
                                    {compostUses.map((use) => (
                                        <li key={use} className="flex items-center gap-3 text-[#6B4226]">
                                            <CheckCircle2 className="w-5 h-5 text-[#2D6A4F] shrink-0" />
                                            <span>{use}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mt-5 bg-[#2D6A4F] rounded-3xl p-8 text-[#FEFAE0]">
                                <h4 className="font-playfair text-xl font-bold text-[#D4A017] mb-3">
                                    Why Gir Cow Dung?
                                </h4>
                                <p className="text-[#FEFAE0]/75 text-sm leading-relaxed">
                                    Gir cow dung is scientifically recognized as richer in
                                    beneficial microbes and minerals compared to other cattle.
                                    When vermicomposted, it creates a living, aerated organic
                                    amendment that restores soil biodiversity and supports healthy
                                    plant growth without chemical dependency.
                                </p>
                            </div>
                        </div>

                        {/* Info — right on this section */}
                        <div className="order-1 lg:order-2">
                            <div className="inline-flex items-center gap-2 bg-[#2D6A4F]/10 text-[#2D6A4F] text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5 border border-[#2D6A4F]/20">
                                <Leaf className="w-3.5 h-3.5" /> Organic Product
                            </div>
                            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#3B2314] mb-5">
                                Organic VermiCompost
                            </h2>
                            <p className="text-[#6B4226] leading-relaxed mb-4">
                                Produced through scientific vermicomposting of cow dung from
                                our healthy Gir cows, our VermiCompost is a premium
                                bio-fertilizer that enriches soil naturally. Earthworms
                                process the organic matter, creating a nutrient-dense product
                                packed with NPK and beneficial microorganisms.
                            </p>
                            <p className="text-[#6B4226] leading-relaxed mb-8">
                                It improves soil structure, water retention, and aeration —
                                making it ideal for all types of farming, from kitchen gardens
                                to large agricultural fields. It is a perfect chemical-free
                                alternative that supports sustainable, long-term soil health.
                            </p>

                            {/* Feature grid */}
                            <div className="grid grid-cols-2 gap-3 mb-8">
                                {compostFeatures.map((f) => (
                                    <div key={f.title} className="bg-white rounded-xl p-3.5 border border-[#D9C9A3]">
                                        <p className="text-xs text-[#6B4226]/70 uppercase tracking-wide">{f.title}</p>
                                        <p className="text-sm font-semibold text-[#3B2314] mt-0.5">{f.value}</p>
                                    </div>
                                ))}
                            </div>

                            <Link
                                href="/contact?product=vermicompost"
                                className="inline-flex items-center gap-2 bg-[#2D6A4F] text-[#FEFAE0] px-8 py-4 rounded-full font-semibold hover:bg-[#40916C] transition-all duration-300 shadow-md hover:shadow-xl"
                            >
                                Inquire About VermiCompost <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── BOTTOM CTA ───────────────────────────────────────────── */}
            <section className="py-16 px-6 bg-gradient-to-r from-[#2D6A4F] to-[#40916C]">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#FEFAE0] mb-4">
                        Interested in Our Products?
                    </h2>
                    <p className="text-[#FEFAE0]/75 mb-8">
                        We welcome wholesale and retail inquiries. Use our contact form to
                        reach out and we&apos;ll get back to you promptly.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-[#D4A017] text-[#3B2314] px-10 py-4 rounded-full font-bold hover:bg-white hover:text-[#2D6A4F] transition-all duration-300 shadow-xl"
                    >
                        Send an Inquiry <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>
        </>
    );
}
