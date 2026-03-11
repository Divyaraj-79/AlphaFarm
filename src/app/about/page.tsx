import type { Metadata } from "next";
import Link from "next/link";
import { Leaf, ArrowRight, Users, Calendar, Target } from "lucide-react";

export const metadata: Metadata = {
    title: "About Us | Alpha Farm — Gir Cow Gaushala",
    description:
        "Learn about Alpha Farm Gaushala, our founders Shri Kishor Balubhai Vataliya and Shri Kiranbhai Balubhai Vataliya, and our commitment to pure Gir Cow products.",
};

export default function AboutPage() {
    return (
        <>
            {/* ── PAGE HERO ────────────────────────────────────────────── */}
            <section className="relative pt-32 pb-20 px-6 bg-gradient-to-br from-[#1a4332] via-[#2D6A4F] to-[#3B2314] overflow-hidden">
                <div className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `radial-gradient(circle at 30% 40%, #D4A017 1px, transparent 1px)`,
                        backgroundSize: "50px 50px",
                    }}
                />
                <div className="relative max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-[#D4A017]/20 border border-[#D4A017]/40 text-[#D4A017] text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
                        <Leaf className="w-3.5 h-3.5" />
                        Our Story
                    </div>
                    <h1 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-5">
                        About Alpha Farm
                    </h1>
                    <p className="text-white/75 text-lg max-w-2xl mx-auto">
                        A story of dedication, tradition, and the love for sacred Gir cows
                        — woven into every product we offer.
                    </p>
                </div>
            </section>

            {/* ── FOUNDER STORY ────────────────────────────────────────── */}
            <section className="section-padding bg-[#F8F4E3]">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Visual */}
                    <div className="order-2 lg:order-1 space-y-4">
                        <div className="bg-gradient-to-br from-[#2D6A4F] to-[#40916C] rounded-3xl p-10 text-[#FEFAE0] relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4A017]/20 rounded-full blur-2xl" />
                            <Users className="w-12 h-12 text-[#D4A017] mb-5" />
                            <h3 className="font-playfair text-2xl font-bold mb-2">Our Founders</h3>
                            <div className="space-y-4 mt-4">
                                <div className="bg-[#FEFAE0]/10 rounded-xl p-4">
                                    <p className="font-semibold text-[#D4A017]">Shri Kishor Balubhai Vataliya</p>
                                    <p className="text-sm text-[#FEFAE0]/70 mt-1">Working Partner & Co-Founder</p>
                                </div>
                                <div className="bg-[#FEFAE0]/10 rounded-xl p-4">
                                    <p className="font-semibold text-[#D4A017]">Shri Kiranbhai Balubhai Vataliya</p>
                                    <p className="text-sm text-[#FEFAE0]/70 mt-1">Working Partner & Co-Founder</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white rounded-2xl p-5 border border-[#D9C9A3] text-center shadow-sm">
                                <Calendar className="w-7 h-7 text-[#2D6A4F] mx-auto mb-2" />
                                <p className="font-playfair text-lg font-bold text-[#3B2314]">15 March 2022</p>
                                <p className="text-xs text-[#6B4226]">Commencement Date</p>
                            </div>
                            <div className="bg-white rounded-2xl p-5 border border-[#D9C9A3] text-center shadow-sm">
                                <Target className="w-7 h-7 text-[#D4A017] mx-auto mb-2" />
                                <p className="font-playfair text-lg font-bold text-[#3B2314]">Gujarat, India</p>
                                <p className="text-xs text-[#6B4226]">Based in</p>
                            </div>
                        </div>
                    </div>

                    {/* Story */}
                    <div className="order-1 lg:order-2">
                        <div className="inline-flex items-center gap-2 text-[#2D6A4F] text-xs font-semibold tracking-widest uppercase mb-4">
                            <span className="w-8 h-0.5 bg-[#2D6A4F]" />
                            The Beginning
                        </div>
                        <h2 className="font-playfair text-4xl font-bold text-[#3B2314] mb-5">
                            Born from a Passion for Purity
                        </h2>
                        <p className="text-[#6B4226] leading-relaxed mb-4">
                            Alpha Farm was founded on the belief that the ancient bond between
                            humans and the cow holds tremendous value — not just spiritually,
                            but also in terms of nutrition, agriculture, and ecology. The
                            Vataliya brothers, guided by this vision, established Alpha Farm
                            Gaushala on 15th March 2022.
                        </p>
                        <p className="text-[#6B4226] leading-relaxed mb-4">
                            The Gir cow, an indigenous Indian breed from the Gir forests of
                            Gujarat, is at the heart of everything we do. Known for producing
                            A2-type milk enriched with beneficial proteins and nutrients, Gir
                            cows are regarded as one of the finest dairy breeds in the world.
                        </p>
                        <p className="text-[#6B4226] leading-relaxed mb-8">
                            Our Gaushala is not just a farm — it is a sanctuary. Every cow is
                            fed on natural fodder, given ample space to roam, and treated with
                            the care and reverence she deserves. This ethical approach directly
                            reflects in the quality and purity of our products.
                        </p>
                        <Link
                            href="/contact"
                            className="group inline-flex items-center gap-2 text-[#2D6A4F] font-semibold hover:text-[#D4A017] transition-colors"
                        >
                            Connect with Us <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── NATURE OF BUSINESS ───────────────────────────────────── */}
            <section className="section-padding bg-[#FEFAE0]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 text-[#2D6A4F] text-xs font-semibold tracking-widest uppercase mb-4">
                            <span className="w-8 h-0.5 bg-[#2D6A4F]" />
                            What We Do
                            <span className="w-8 h-0.5 bg-[#2D6A4F]" />
                        </div>
                        <h2 className="font-playfair text-4xl font-bold text-[#3B2314]">
                            Our Business Domains
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                color: "bg-[#2D6A4F]",
                                accent: "bg-[#40916C]",
                                title: "Agriculture & Dairy",
                                points: [
                                    "Gir Cow Gaushala management",
                                    "A2 milk production",
                                    "Ghee manufacturing (Bilona method)",
                                    "Animal husbandry & livestock care",
                                    "Natural fodder cultivation",
                                ],
                            },
                            {
                                color: "bg-[#D4A017]",
                                accent: "bg-[#C97532]",
                                title: "Organic Farming",
                                points: [
                                    "VermiCompost production",
                                    "Bio-fertilizer manufacturing",
                                    "Sustainable soil management",
                                    "Cow dung-based products",
                                    "Natural pest control research",
                                ],
                            },
                            {
                                color: "bg-[#3B2314]",
                                accent: "bg-[#6B4226]",
                                title: "Rural Development",
                                points: [
                                    "Integrated rural development",
                                    "Forest & plantation management",
                                    "Agroforestry practices",
                                    "Wildlife & ecology preservation",
                                    "Community farming education",
                                ],
                            },
                        ].map((domain) => (
                            <div key={domain.title} className="rounded-3xl overflow-hidden border border-[#D9C9A3] shadow-sm bg-white">
                                <div className={`${domain.color} p-6`}>
                                    <Leaf className="w-8 h-8 text-white/60 mb-2" />
                                    <h3 className="font-playfair text-xl font-bold text-white">
                                        {domain.title}
                                    </h3>
                                </div>
                                <div className="p-6">
                                    <ul className="space-y-2.5">
                                        {domain.points.map((p) => (
                                            <li key={p} className="flex items-start gap-2 text-sm text-[#6B4226]">
                                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#2D6A4F] shrink-0" />
                                                {p}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── VALUES ───────────────────────────────────────────────── */}
            <section className="py-16 px-6 bg-gradient-to-r from-[#2D6A4F] to-[#40916C]">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#FEFAE0] mb-10">
                        Our Core Values
                    </h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {[
                            "Purity", "Compassion", "Sustainability",
                            "Tradition", "Integrity", "Natural Living",
                            "Cow Welfare", "Community", "Transparency",
                        ].map((val) => (
                            <span
                                key={val}
                                className="px-5 py-2 border border-[#FEFAE0]/30 text-[#FEFAE0] rounded-full text-sm font-medium hover:bg-[#FEFAE0]/10 transition-all"
                            >
                                {val}
                            </span>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
