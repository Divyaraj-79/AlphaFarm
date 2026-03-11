"use client";

import Link from "next/link";
import { ArrowRight, Leaf, Shield, Heart, Star, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center overflow-hidden py-20 md:py-0">
        {/* Background gradient (will be replaced with image later) */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a4332] via-[#2D6A4F] to-[#3B2314]" />

        {/* Decorative circles */}
        <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-[#D4A017]/10 blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-[#52B788]/10 blur-3xl animate-pulse-slow" />

        {/* Leaf pattern overlay */}
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 35%, #D4A017 1px, transparent 1px),
              radial-gradient(circle at 75% 65%, #52B788 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#D4A017]/20 border border-[#D4A017]/40 text-[#D4A017] text-[10px] md:text-xs font-semibold tracking-widest uppercase px-3 py-1.5 md:px-4 md:py-2 rounded-full mb-6 md:mb-8">
            <Leaf className="w-3 md:w-3.5 h-3 md:h-3.5" />
            Pure · Natural · Ethical
          </div>

          <h1 className="font-playfair text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] mb-4 md:mb-6">
            Nurturing Gir Cows,{" "}
            <span className="text-[#D4A017]">Delivering</span>{" "}
            Nature&apos;s Finest
          </h1>

          <p className="text-sm md:text-xl text-white/75 max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed px-4 md:px-0">
            Alpha Farm Gaushala - a sanctuary for sacred Gir cows, rooted in
            ancient Indian tradition. We bring you pure A2 Ghee and organic
            VermiCompost, crafted with love and integrity.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
            <Link
              href="/products"
              className="group flex items-center gap-2 bg-[#D4A017] text-[#3B2314] px-6 py-3.5 md:px-8 md:py-4 rounded-full font-semibold text-sm md:text-base hover:bg-[#C97532] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto justify-center"
            >
              Explore Products
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/about"
              className="flex items-center gap-2 border border-white/40 text-white px-6 py-3.5 md:px-8 md:py-4 rounded-full font-medium text-sm md:text-base hover:bg-white/10 transition-all duration-300 w-full sm:w-auto justify-center"
            >
              Our Story
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/50 animate-bounce">
          <span className="text-xs tracking-widest">Scroll</span>
          <ChevronDown className="w-4 h-4" />
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────────────── */}
      <section className="bg-[#2D6A4F]">
        <div className="max-w-7xl mx-auto px-6 py-10 md:py-12 grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 md:gap-8">
          {[
            { number: "2022", label: "Established" },
            { number: "100%", label: "Pure A2 Products" },
            { number: "Gir", label: "Indigenous Cow Breed" },
            { number: "2", label: "Premium Products" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-playfair text-2xl md:text-4xl font-bold text-[#D4A017]">
                {stat.number}
              </p>
              <p className="text-[10px] md:text-sm text-[#FEFAE0]/75 mt-1 uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT SNIPPET ────────────────────────────────────────── */}
      <section className="section-padding bg-[#F8F4E3]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 text-[#2D6A4F] text-xs font-semibold tracking-widest uppercase mb-4">
              <span className="w-8 h-0.5 bg-[#2D6A4F]" />
              About Alpha Farm
            </div>
            <h2 className="font-playfair text-3xl md:text-5xl font-bold text-[#3B2314] leading-tight mb-6">
              A Heritage of Purity &amp; Care
            </h2>
            <p className="text-[#6B4226] leading-relaxed mb-4 text-sm md:text-base">
              Founded on 15th March 2022 by{" "}
              <strong className="text-[#2D6A4F]">
                Shri Kishor Balubhai Vataliya
              </strong>{" "}
              and{" "}
              <strong className="text-[#2D6A4F]">
                Shri Kiranbhai Balubhai Vataliya
              </strong>
              , Alpha Farm is a dedicated Gir Cow Gaushala rooted in the rich
              traditions of sustainable Indian agriculture.
            </p>
            <p className="text-[#6B4226] leading-relaxed mb-8 text-sm md:text-base">
              We believe that the health of the cow, the earth, and the human
              being are deeply interconnected. By caring for our sacred Gir cows
              naturally, we produce products that are as pure as nature intended.
            </p>
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 text-[#2D6A4F] font-semibold hover:text-[#D4A017] transition-colors"
            >
              Read Our Full Story
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Visual card */}
          <div className="relative order-1 lg:order-2">
            <div className="bg-gradient-to-br from-[#2D6A4F] to-[#40916C] rounded-3xl p-8 md:p-10 text-[#FEFAE0] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#D4A017]/20 rounded-full blur-2xl -translate-y-10 translate-x-10" />
              <Leaf className="w-12 h-12 md:w-16 md:h-16 text-[#D4A017]/60 mb-6" />
              <blockquote className="font-playfair text-xl md:text-2xl italic leading-relaxed mb-6">
                &ldquo;The cow is a poem of pity. One reads pity in the gentle
                animal.&rdquo;
              </blockquote>
              <p className="text-sm text-[#FEFAE0]/60">- Mahatma Gandhi</p>
              <div className="mt-8 pt-6 border-t border-[#FEFAE0]/20 grid grid-cols-2 gap-4">
                <div>
                  <p className="font-playfair text-xl md:text-2xl font-bold text-[#D4A017]">Gir</p>
                  <p className="text-[10px] md:text-xs text-[#FEFAE0]/60 uppercase tracking-wider">Cow Breed</p>
                </div>
                <div>
                  <p className="font-playfair text-xl md:text-2xl font-bold text-[#D4A017]">A2</p>
                  <p className="text-[10px] md:text-xs text-[#FEFAE0]/60 uppercase tracking-wider">Protein Milk</p>
                </div>
              </div>
            </div>
            {/* Floating tag */}
            <div className="absolute -bottom-4 -left-2 md:-bottom-5 md:-left-5 bg-[#D4A017] text-[#3B2314] px-4 py-2 md:px-5 md:py-3 rounded-xl md:rounded-2xl shadow-xl font-bold text-xs">
              Est. 2022 · Gujarat
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCTS TEASER ──────────────────────────────────────── */}
      <section className="section-padding bg-[#FEFAE0]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-14">
            <div className="inline-flex items-center gap-2 text-[#2D6A4F] text-xs font-semibold tracking-widest uppercase mb-4">
              <span className="w-8 h-0.5 bg-[#2D6A4F]" />
              Our Products
              <span className="w-8 h-0.5 bg-[#2D6A4F]" />
            </div>
            <h2 className="font-playfair text-3xl md:text-5xl font-bold text-[#3B2314]">
              Nature&apos;s Best, Delivered
            </h2>
            <p className="text-[#6B4226] mt-4 max-w-xl mx-auto text-sm md:text-base px-4">
              Every product from Alpha Farm is a testament to our commitment to
              purity, sustainability, and ancient wisdom.
            </p>
          </div>

          <div className="flex overflow-x-auto md:grid md:grid-cols-2 gap-6 md:gap-8 pb-6 md:pb-0 snap-x snap-mandatory hide-scrollbar px-4 -mx-4 md:px-0 md:mx-0">
            {/* Ghee Card */}
            <div className="flex-none w-[85vw] md:w-auto snap-start card-hover relative bg-gradient-to-br from-[#FEFAE0] to-[#F8F4E3] rounded-3xl overflow-hidden border border-[#D9C9A3] shadow-lg">
              {/* Color bar */}
              <div className="h-2 bg-gradient-to-r from-[#D4A017] to-[#C97532]" />
              <div className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-[#D4A017]/15 flex items-center justify-center mb-5">
                  <Star className="w-7 h-7 text-[#D4A017]" />
                </div>
                <h3 className="font-playfair text-2xl font-bold text-[#3B2314] mb-3">
                  Gir Cow A2 Ghee
                </h3>
                <p className="text-[#6B4226] leading-relaxed mb-4">
                  Hand-churned from the milk of our cherished Gir cows using the
                  traditional Bilona method. Rich in A2 beta-casein protein,
                  antioxidants, and healthy fats. A golden elixir for your
                  family&apos;s wellness.
                </p>
                <ul className="space-y-2 mb-7">
                  {["100% Pure A2 Milk", "Bilona / Traditional Method", "No Preservatives", "Rich Golden Colour"].map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-[#6B4226]">
                      <span className="w-5 h-5 rounded-full bg-[#D4A017]/20 flex items-center justify-center">
                        <Leaf className="w-3 h-3 text-[#D4A017]" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact?product=gir-cow-ghee"
                  className="inline-flex items-center gap-2 bg-[#D4A017] text-[#3B2314] px-6 py-3 rounded-full font-semibold hover:bg-[#C97532] hover:text-white transition-all duration-300"
                >
                  Inquire Now <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* VermiCompost Card */}
            <div className="flex-none w-[85vw] md:w-auto snap-start card-hover relative bg-gradient-to-br from-[#FEFAE0] to-[#F8F4E3] rounded-3xl overflow-hidden border border-[#D9C9A3] shadow-lg">
              {/* Color bar */}
              <div className="h-2 bg-gradient-to-r from-[#2D6A4F] to-[#52B788]" />
              <div className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-[#2D6A4F]/10 flex items-center justify-center mb-5">
                  <Leaf className="w-7 h-7 text-[#2D6A4F]" />
                </div>
                <h3 className="font-playfair text-2xl font-bold text-[#3B2314] mb-3">
                  Organic VermiCompost
                </h3>
                <p className="text-[#6B4226] leading-relaxed mb-4">
                  Premium quality vermicompost produced from cow dung of our
                  healthy Gir cows. A natural soil conditioner that enriches your
                  garden, farm, or terrace plants with essential nutrients.
                </p>
                <ul className="space-y-2 mb-7">
                  {["Made from Gir Cow Dung", "Rich in Micro-nutrients", "100% Organic", "Improves Soil Health"].map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-[#6B4226]">
                      <span className="w-5 h-5 rounded-full bg-[#2D6A4F]/10 flex items-center justify-center">
                        <Leaf className="w-3 h-3 text-[#2D6A4F]" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact?product=vermicompost"
                  className="inline-flex items-center gap-2 bg-[#2D6A4F] text-[#FEFAE0] px-6 py-3 rounded-full font-semibold hover:bg-[#40916C] transition-all duration-300"
                >
                  Inquire Now <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-[#2D6A4F] font-semibold hover:text-[#D4A017] transition-colors"
            >
              View All Product Details <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ────────────────────────────────────────── */}
      <section className="section-padding bg-[#F8F4E3]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-14">
            <div className="inline-flex items-center gap-2 text-[#2D6A4F] text-xs font-semibold tracking-widest uppercase mb-4">
              <span className="w-8 h-0.5 bg-[#2D6A4F]" />
              Why Alpha Farm
              <span className="w-8 h-0.5 bg-[#2D6A4F]" />
            </div>
            <h2 className="font-playfair text-3xl md:text-5xl font-bold text-[#3B2314]">
              Our Promise to You
            </h2>
          </div>

          {/* Define promises array */}
          {(() => {
            const promises = [
              {
                icon: <Leaf className="w-8 h-8 text-[#2D6A4F]" />,
                bg: "bg-[#2D6A4F]/10",
                title: "100% Natural",
                desc: "No chemicals, no preservatives, no shortcuts. Everything we produce comes directly from nature, with care.",
              },
              {
                icon: <Shield className="w-8 h-8 text-[#D4A017]" />,
                bg: "bg-[#D4A017]/10",
                title: "Ethical Farming",
                desc: "Our sacred Gir cows are treated with compassion and respect. Happy cows produce the best products.",
              },
              {
                icon: <Heart className="w-8 h-8 text-[#C97532]" />,
                bg: "bg-[#C97532]/10",
                title: "Rooted in Tradition",
                desc: "Ancient Indian practices like the Bilona method ensure our products retain their full nutritional value.",
              },
            ];

            return (
              <>
                <div className="hidden md:grid grid-cols-3 gap-8">
                  {promises.map((item) => (
                    <div
                      key={item.title}
                      className="card-hover text-center p-8 bg-white rounded-3xl border border-[#D9C9A3] shadow-sm"
                    >
                      <div className={`w-16 h-16 ${item.bg} rounded-2xl flex items-center justify-center mx-auto mb-5`}>
                        {item.icon}
                      </div>
                      <h3 className="font-playfair text-xl font-bold text-[#3B2314] mb-3">
                        {item.title}
                      </h3>
                      <p className="text-[#6B4226] text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
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
                        duration: 20,
                        ease: "linear",
                      },
                    }}
                    className="flex gap-4 px-6 w-fit"
                  >
                    {[...promises, ...promises].map((item, idx) => (
                      <div
                        key={`${item.title}-${idx}`}
                        className="w-[80vw] shrink-0 text-center p-8 bg-white rounded-3xl border border-[#D9C9A3] shadow-sm"
                      >
                        <div className={`w-16 h-16 ${item.bg} rounded-2xl flex items-center justify-center mx-auto mb-5`}>
                          {item.icon}
                        </div>
                        <h3 className="font-playfair text-xl font-bold text-[#3B2314] mb-3">
                          {item.title}
                        </h3>
                        <p className="text-[#6B4226] text-sm leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </motion.div>
                </div>
              </>
            );
          })()}
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────────────── */}
      <section className="relative py-24 px-6 overflow-hidden bg-[#F8F4E3] border-t-4 border-[#D4A017]">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, #3B2314 2px, transparent 2px)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative max-w-3xl mx-auto text-center">
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-[#3B2314] mb-4 text-balance">
            Ready to Experience Pure Goodness?
          </h2>
          <p className="text-[#6B4226] mb-10 text-lg md:text-xl">
            Reach out today for product inquiries, bulk orders, or just to know
            more about our Gaushala.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#2D6A4F] text-[#FEFAE0] px-10 py-4 rounded-full font-bold text-base hover:bg-[#3B2314] transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Contact Us Now <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
