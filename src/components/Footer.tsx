import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#1A120B] text-[#FEFAE0] border-t-2 border-[#D4A017]">

            {/* ── MAIN CONTENT ──────────────────────────────────────────── */}
            <div className="w-full px-6 md:px-12 lg:px-16 py-8 md:py-10">

                {/* ── DESKTOP: 4-column grid ────────────────────────────── */}
                <div className="hidden lg:grid grid-cols-4 gap-8 xl:gap-12">
                    {/* Col 1 · Brand */}
                    <div className="flex flex-col items-start">
                        <Link href="/" className="flex items-center gap-3 mb-4">
                            <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-[#D4A017] shrink-0">
                                <Image src="/aalphalogo.jpeg" alt="Aalpha Farm Logo" fill className="object-cover" />
                            </div>
                            <div className="flex flex-col leading-tight">
                                <span className="font-playfair font-bold text-xl text-[#FEFAE0]">Aalpha Farm</span>
                                <span className="text-[9px] text-[#D4A017] font-bold tracking-[0.18em] uppercase">Gir Cow Gaushala</span>
                            </div>
                        </Link>
                        <p className="text-sm text-[#FEFAE0]/70 leading-relaxed max-w-[240px]">
                            Nurturing sacred Gir cows with love and care since 2022. Pure products, ethical farming, timeless tradition.
                        </p>
                    </div>

                    {/* Col 2 · Quick Links */}
                    <div>
                        <h4 className="font-playfair font-bold text-base text-[#D4A017] mb-4 tracking-wide">Quick Links</h4>
                        <ul className="space-y-2.5">
                            {[
                                { href: "/", label: "Home" },
                                { href: "/about", label: "About Us" },
                                { href: "/products", label: "Our Products" },
                                { href: "/contact", label: "Contact Us" },
                            ].map((l) => (
                                <li key={l.href}>
                                    <Link href={l.href} className="text-sm text-[#FEFAE0]/70 hover:text-[#D4A017] transition-colors flex items-center gap-2 group">
                                        <span className="w-1 h-1 rounded-full bg-[#D4A017]/50 group-hover:bg-[#D4A017] transition-colors shrink-0" />
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 3 · Our Products */}
                    <div>
                        <h4 className="font-playfair font-bold text-base text-[#D4A017] mb-4 tracking-wide">Our Products</h4>
                        <ul className="space-y-2.5">
                            {["Gir Cow A2 Ghee", "Organic VermiCompost", "A2 Milk", "Organic Fertilizer"].map((p) => (
                                <li key={p}>
                                    <Link href="/products" className="text-sm text-[#FEFAE0]/70 hover:text-[#D4A017] transition-colors flex items-center gap-2 group">
                                        <span className="w-1 h-1 rounded-full bg-[#D4A017]/50 group-hover:bg-[#D4A017] transition-colors shrink-0" />
                                        {p}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 4 · Get In Touch */}
                    <div>
                        <h4 className="font-playfair font-bold text-base text-[#D4A017] mb-4 tracking-wide">Get In Touch</h4>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-2.5">
                                <MapPin className="w-4 h-4 text-[#D4A017] shrink-0 mt-0.5" />
                                <span className="text-sm text-[#FEFAE0]/70 leading-relaxed">
                                    SN 1469, AALPHA FARM, OGANAJ, OGANAJ LAPAKAMAN ROAD, AHMEDABAD, GUJARAT - 380060
                                </span>
                            </li>
                            <li className="flex items-center gap-2.5">
                                <Phone className="w-4 h-4 text-[#D4A017] shrink-0" />
                                <a href="tel:+917567849349" className="text-sm text-[#FEFAE0]/70 hover:text-[#D4A017] transition-colors">+91 75678 49349</a>
                            </li>
                            <li className="flex items-center gap-2.5">
                                <Mail className="w-4 h-4 text-[#D4A017] shrink-0" />
                                <a href="mailto:aalphafarm22@gmail.com" className="text-sm text-[#FEFAE0]/70 hover:text-[#D4A017] transition-colors">aalphafarm22@gmail.com</a>
                            </li>
                        </ul>
                        <div className="flex gap-3 mt-5">
                            {[
                                { icon: <Facebook className="w-4 h-4" />, label: "Facebook" },
                                { icon: <Instagram className="w-4 h-4" />, label: "Instagram" },
                            ].map((s) => (
                                <a key={s.label} href="#" aria-label={s.label}
                                    className="w-9 h-9 rounded-full bg-[#FEFAE0]/5 border border-[#FEFAE0]/10 hover:border-[#D4A017] hover:bg-[#D4A017] hover:text-[#3B2314] flex items-center justify-center transition-all duration-300">
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ── MOBILE LAYOUT ─────────────────────────────────────── */}
                <div className="lg:hidden flex flex-col items-center gap-8">

                    {/* Brand */}
                    <div className="flex flex-col items-center text-center">
                        <Link href="/" className="flex items-center gap-3 mb-3">
                            <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-[#D4A017]">
                                <Image src="/aalphalogo.jpeg" alt="Aalpha Farm Logo" fill className="object-cover" />
                            </div>
                            <div className="flex flex-col leading-tight">
                                <span className="font-playfair font-bold text-xl text-[#FEFAE0]">Aalpha Farm</span>
                                <span className="text-[9px] text-[#D4A017] font-bold tracking-[0.18em] uppercase">Gir Cow Gaushala</span>
                            </div>
                        </Link>
                        <p className="text-sm text-[#FEFAE0]/70 leading-relaxed max-w-[280px]">
                            Nurturing sacred Gir cows with love and care since 2022. Pure products, ethical farming, timeless tradition.
                        </p>
                    </div>

                    {/* 3-column links grid (matches reference) */}
                    <div className="w-full grid grid-cols-3 gap-4 border-t border-b border-[#FEFAE0]/10 py-6">
                        {/* Quick Links */}
                        <div className="flex flex-col items-center text-center">
                            <h4 className="font-playfair font-bold text-sm text-[#D4A017] mb-3">Solutions</h4>
                            <ul className="space-y-2">
                                {[
                                    { href: "/", label: "Home" },
                                    { href: "/about", label: "About Us" },
                                    { href: "/products", label: "Our Products" },
                                    { href: "/contact", label: "Contact Us" },
                                ].map((l) => (
                                    <li key={l.href}>
                                        <Link href={l.href} className="text-xs text-[#FEFAE0]/70 hover:text-[#D4A017] transition-colors">{l.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Products */}
                        <div className="flex flex-col items-center text-center">
                            <h4 className="font-playfair font-bold text-sm text-[#D4A017] mb-3">Products</h4>
                            <ul className="space-y-2">
                                {["Gir Cow A2 Ghee", "VermiCompost", "A2 Milk", "Fertilizer"].map((p) => (
                                    <li key={p}>
                                        <Link href="/products" className="text-xs text-[#FEFAE0]/70 hover:text-[#D4A017] transition-colors">{p}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact */}
                        <div className="flex flex-col items-center text-center">
                            <h4 className="font-playfair font-bold text-sm text-[#D4A017] mb-3">Contact</h4>
                            <ul className="space-y-2">
                                <li>
                                    <a href="tel:+917567849349" className="text-xs text-[#FEFAE0]/70 hover:text-[#D4A017] transition-colors">+91 75678 49349</a>
                                </li>
                                <li>
                                    <a href="mailto:aalphafarm22@gmail.com" className="text-xs text-[#FEFAE0]/70 hover:text-[#D4A017] transition-colors">aalphafarm22@gmail.com</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Social icons */}
                    <div className="flex gap-4">
                        {[
                            { icon: <Facebook className="w-4 h-4" />, label: "Facebook" },
                            { icon: <Instagram className="w-4 h-4" />, label: "Instagram" },
                        ].map((s) => (
                            <a key={s.label} href="#" aria-label={s.label}
                                className="w-9 h-9 rounded-full bg-[#FEFAE0]/5 border border-[#FEFAE0]/10 hover:border-[#D4A017] hover:bg-[#D4A017] hover:text-[#3B2314] flex items-center justify-center transition-all duration-300">
                                {s.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── BOTTOM BAR ────────────────────────────────────────────── */}
            <div className="border-t border-[#FEFAE0]/10">
                <div className="w-full px-6 md:px-12 lg:px-16 py-4 flex flex-col md:flex-row items-center justify-between gap-1.5 text-center">
                    <p className="text-xs text-[#FEFAE0]/50">
                        © {new Date().getFullYear()} Aalpha Farm - Shri Kishor Balubhai Vataliya &amp; Shri Kiranbhai Balubhai Vataliya. All rights reserved.
                    </p>
                    <div className="flex items-center gap-3 text-[10px] text-[#FEFAE0]/40 uppercase tracking-widest font-bold">
                        <span>Est. 15 March 2022</span>
                        <span>·</span>
                        <span>Pure</span>
                        <span>·</span>
                        <span>Natural</span>
                        <span>·</span>
                        <span>Ethical</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
