"use client";

import Link from "next/link";
import { Leaf, Calendar, MapPin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutPage() {
    const domains = [
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
    ];

    return (
        <div className="min-h-screen bg-[#FDFBF7]">
            {/* ── PAGE HERO ────────────────────────────────────────────── */}
            <section className="relative pt-40 pb-32 px-6 bg-gradient-to-br from-[#1B3B2B] via-[#244C38] to-[#142A1F] overflow-hidden">
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `radial-gradient(circle at center, #D4A017 1px, transparent 1px)`,
                        backgroundSize: "40px 40px",
                    }}
                />
                <div className="relative max-w-4xl mx-auto text-center z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 border border-[#D4A017]/60 text-[#D4A017] text-[10px] md:text-xs font-bold tracking-widest uppercase px-5 py-2 rounded-full mb-8 hover:bg-[#D4A017]/10 transition-colors cursor-default"
                    >
                        <Leaf className="w-3.5 h-3.5" />
                        Our Story
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 100 }}
                        className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight"
                    >
                        About Alpha Farm
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 200 }}
                        className="text-white/80 text-base md:text-lg max-w-2xl mx-auto px-4 font-light leading-relaxed"
                    >
                        A story of dedication, tradition, and the love for sacred Gir cows — woven into
                        every product we offer.
                    </motion.p>
                </div>
            </section>

            {/* ── CONTENT SECTION (Matching Reference) ─────────────────── */}
            <section className="py-20 md:py-32 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">

                    {/* LEFT COLUMN: Founders + Info Cards */}
                    <div className="lg:col-span-5 flex flex-col gap-6">
                        {/* Green Founders Card */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-[#2D6A4F] to-[#1B3B2B] rounded-[2rem] p-8 md:p-10 shadow-xl"
                        >
                            <div className="mb-8">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#D4A017] mb-6">
                                    <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M8.5 11C10.7091 11 12.5 9.20914 12.5 7C12.5 4.79086 10.7091 3 8.5 3C6.29086 3 4.5 4.79086 4.5 7C4.5 9.20914 6.29086 11 8.5 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.533C21.6184 15.8131 20.8532 15.2687 20 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <h3 className="font-playfair text-2xl md:text-3xl font-bold text-white">Our Founders</h3>
                            </div>

                            <div className="space-y-4">
                                <div className="bg-white/10 rounded-2xl p-5 backdrop-blur-sm border border-white/5">
                                    <div className="text-[#D4A017] font-semibold text-lg mb-1">Shri Kishor Balubhai Vataliya</div>
                                    <div className="text-white/70 text-sm">Working Partner & Co-Founder</div>
                                </div>
                                <div className="bg-white/10 rounded-2xl p-5 backdrop-blur-sm border border-white/5">
                                    <div className="text-[#D4A017] font-semibold text-lg mb-1">Shri Kiranbhai Balubhai Vataliya</div>
                                    <div className="text-white/70 text-sm">Working Partner & Co-Founder</div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Bottom Stats Grid */}
                        <div className="grid grid-cols-2 gap-6">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="bg-white rounded-[2rem] p-6 lg:p-8 flex flex-col items-center justify-center text-center shadow-sm border border-[#D9C9A3]/40"
                            >
                                <Calendar className="w-8 h-8 text-[#2D6A4F] mb-4" />
                                <div className="font-playfair font-bold text-[#3B2314] text-lg lg:text-xl mb-1">15 March 2022</div>
                                <div className="text-[10px] md:text-xs text-[#6B4226]/60 uppercase tracking-wider font-semibold">Commencement Date</div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="bg-white rounded-[2rem] p-6 lg:p-8 flex flex-col items-center justify-center text-center shadow-sm border border-[#D9C9A3]/40"
                            >
                                <MapPin className="w-8 h-8 text-[#D4A017] mb-4" />
                                <div className="font-playfair font-bold text-[#3B2314] text-lg lg:text-xl mb-1">Gujarat, India</div>
                                <div className="text-[10px] md:text-xs text-[#6B4226]/60 uppercase tracking-wider font-semibold">Based In</div>
                            </motion.div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Typography & Story */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-7 flex flex-col justify-center pt-8 lg:pt-0 lg:pl-10"
                    >
                        <div className="inline-flex items-center gap-3 text-[#2D6A4F] text-xs font-bold tracking-[0.2em] uppercase mb-6">
                            <span className="w-12 h-[2px] bg-[#2D6A4F]" />
                            The Beginning
                        </div>

                        <h2 className="font-playfair text-4xl md:text-5xl lg:text-[56px] leading-[1.1] font-bold text-[#3B2314] mb-10">
                            Born from a Passion for Purity
                        </h2>

                        <div className="space-y-6 text-[#5C4532] text-[15px] md:text-base leading-[1.8] font-light">
                            <p>
                                Alpha Farm was founded on the belief that the ancient bond between humans
                                and the cow holds tremendous value — not just spiritually, but also in terms of
                                nutrition, agriculture, and ecology. The Vataliya brothers, guided by this vision,
                                established Alpha Farm Gaushala on 15th March 2022.
                            </p>
                            <p>
                                The Gir cow, an indigenous Indian breed from the Gir forests of Gujarat, is at the
                                heart of everything we do. Known for producing A2-type milk enriched with
                                beneficial proteins and nutrients, Gir cows are regarded as one of the finest
                                dairy breeds in the world.
                            </p>
                            <p>
                                Our Gaushala is not just a farm — it is a sanctuary. Every cow is fed on natural
                                fodder, given ample space to roam, and treated with the care and reverence she
                                deserves. This ethical approach directly reflects in the quality and purity of our
                                products.
                            </p>
                        </div>

                        <div className="mt-12">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 text-[#2D6A4F] font-semibold text-[15px] hover:text-[#D4A017] transition-colors group"
                            >
                                Connect with Us
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── BUSINESS DOMAINS ──────────────────────────────────────── */}
            <section className="py-20 bg-[#FEFAE0]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-3 text-[#2D6A4F] text-xs font-bold tracking-[0.2em] uppercase mb-6">
                            <span className="w-8 h-[2px] bg-[#2D6A4F]" />
                            What We Do
                            <span className="w-8 h-[2px] bg-[#2D6A4F]" />
                        </div>
                        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#3B2314]">
                            Our Business Domains
                        </h2>
                    </div>

                    {/* Desktop Static Grid */}
                    <div className="hidden md:grid grid-cols-3 gap-8">
                        {domains.map((domain) => (
                            <motion.div
                                key={domain.title}
                                whileHover={{
                                    y: -10,
                                    boxShadow: "0 25px 50px -12px rgba(45, 106, 79, 0.25), 0 0 20px rgba(212, 160, 23, 0.3)",
                                    borderColor: "#D4A017",
                                }}
                                className="rounded-[2rem] overflow-hidden border border-[#D9C9A3]/40 shadow-sm bg-white transition-all duration-300"
                            >
                                <div className={`${domain.color} p-8`}>
                                    <Leaf className="w-8 h-8 text-white/60 mb-4" />
                                    <h3 className="font-playfair text-2xl font-bold text-white">
                                        {domain.title}
                                    </h3>
                                </div>
                                <div className="p-8">
                                    <ul className="space-y-4">
                                        {domain.points.map((p) => (
                                            <li key={p} className="flex items-start gap-3 text-[15px] text-[#6B4226]">
                                                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#2D6A4F] shrink-0" />
                                                {p}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Mobile Auto-Scroller */}
                    <div className="md:hidden overflow-hidden relative -mx-6">
                        <motion.div
                            animate={{
                                x: ["0%", "-100%"],
                            }}
                            transition={{
                                x: {
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    duration: 25,
                                    ease: "linear",
                                },
                            }}
                            className="flex gap-4 px-6 w-fit"
                        >
                            {[...domains, ...domains].map((domain, idx) => (
                                <motion.div
                                    key={`${domain.title}-${idx}`}
                                    whileTap={{ scale: 0.98 }}
                                    whileHover={{
                                        boxShadow: "0 0 25px rgba(212, 160, 23, 0.5)",
                                    }}
                                    className="w-[85vw] shrink-0 rounded-3xl overflow-hidden border border-[#D9C9A3]/40 shadow-sm bg-white transition-all duration-300"
                                >
                                    <div className={`${domain.color} p-6`}>
                                        <Leaf className="w-8 h-8 text-white/60 mb-3" />
                                        <h3 className="font-playfair text-xl font-bold text-white">
                                            {domain.title}
                                        </h3>
                                    </div>
                                    <div className="p-6">
                                        <ul className="space-y-3">
                                            {domain.points.map((p) => (
                                                <li key={p} className="flex items-start gap-3 text-sm text-[#6B4226]">
                                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#2D6A4F] shrink-0" />
                                                    {p}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── VALUES ───────────────────────────────────────────────── */}
            <section className="py-20 bg-[#F8F4E3]">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <div className="inline-flex items-center gap-3 text-[#2D6A4F] text-xs font-bold tracking-[0.2em] uppercase mb-6">
                        <span className="w-8 h-[2px] bg-[#2D6A4F]" />
                        What We Stand For
                        <span className="w-8 h-[2px] bg-[#2D6A4F]" />
                    </div>
                    <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#3B2314] mb-12">
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
                                className="px-6 py-3 border border-[#D9C9A3] bg-white text-[#2D6A4F] rounded-2xl text-sm font-bold shadow-sm hover:border-[#2D6A4F] hover:shadow-md transition-all duration-300"
                            >
                                {val}
                            </span>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
