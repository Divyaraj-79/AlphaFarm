import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#2D6A4F] text-[#FEFAE0]">
            {/* Top section */}
            <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                {/* Brand */}
                <div className="lg:col-span-1">
                    <Link href="/" className="flex items-center gap-3 mb-6">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#D4A017] shadow-lg">
                            <Image
                                src="/alphalogo.jpeg"
                                alt="Alpha Farm Logo"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="flex flex-col leading-tight">
                            <span className="font-playfair font-bold text-xl text-[#FEFAE0]">
                                Alpha Farm
                            </span>
                            <span className="text-[10px] text-[#D4A017] font-bold tracking-[0.2em] uppercase">
                                Gir Cow Gaushala
                            </span>
                        </div>
                    </Link>
                    <p className="text-sm text-[#FEFAE0]/75 leading-relaxed mt-3">
                        Nurturing sacred Gir cows with love and care since 2022. Pure
                        products, ethical farming, timeless tradition.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="font-playfair text-lg font-semibold text-[#D4A017] mb-5">
                        Quick Links
                    </h4>
                    <ul className="space-y-3">
                        {[
                            { href: "/", label: "Home" },
                            { href: "/about", label: "About Us" },
                            { href: "/products", label: "Our Products" },
                            { href: "/contact", label: "Contact Us" },
                        ].map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className="text-sm text-[#FEFAE0]/75 hover:text-[#D4A017] transition-colors duration-200 flex items-center gap-1.5"
                                >
                                    <span className="w-1 h-1 rounded-full bg-[#D4A017] inline-block" />
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Products */}
                <div>
                    <h4 className="font-playfair text-lg font-semibold text-[#D4A017] mb-5">
                        Our Products
                    </h4>
                    <ul className="space-y-3">
                        {["Gir Cow A2 Ghee", "Organic VermiCompost"].map((product) => (
                            <li key={product}>
                                <Link
                                    href="/products"
                                    className="text-sm text-[#FEFAE0]/75 hover:text-[#D4A017] transition-colors duration-200 flex items-center gap-1.5"
                                >
                                    <span className="w-1 h-1 rounded-full bg-[#D4A017] inline-block" />
                                    {product}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="font-playfair text-lg font-semibold text-[#D4A017] mb-5">
                        Get In Touch
                    </h4>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <MapPin className="w-4 h-4 text-[#D4A017] mt-0.5 shrink-0" />
                            <span className="text-sm text-[#FEFAE0]/75 leading-relaxed">
                                Aalpha Farm, Nr Karnavati Eyes Hospital, Oganj- Lapakaman Road, Ta. Ghatlodiya, Ognaj, Ahmedabad, Gujarat 380060
                            </span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone className="w-4 h-4 text-[#D4A017] shrink-0" />
                            <a
                                href="tel:+910000000000"
                                className="text-sm text-[#FEFAE0]/75 hover:text-[#D4A017] transition-colors"
                            >
                                +91 75678 49349
                            </a>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail className="w-4 h-4 text-[#D4A017] shrink-0" />
                            <a
                                href="mailto:info@alphafarm.in"
                                className="text-sm text-[#FEFAE0]/75 hover:text-[#D4A017] transition-colors"
                            >
                                info@alphafarm.in
                            </a>
                        </li>
                    </ul>
                    {/* Social Links */}
                    <div className="flex gap-3 mt-5">
                        <a
                            href="#"
                            className="w-9 h-9 rounded-full bg-[#FEFAE0]/10 hover:bg-[#D4A017] flex items-center justify-center transition-all duration-300"
                            aria-label="Facebook"
                        >
                            <Facebook className="w-4 h-4" />
                        </a>
                        <a
                            href="#"
                            className="w-9 h-9 rounded-full bg-[#FEFAE0]/10 hover:bg-[#D4A017] flex items-center justify-center transition-all duration-300"
                            aria-label="Instagram"
                        >
                            <Instagram className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-[#FEFAE0]/10" />

            {/* Bottom bar */}
            <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#FEFAE0]/50">
                <p>
                    © {new Date().getFullYear()} Alpha Farm — Shri Kishor Balubhai
                    Vataliya &amp; Shri Kiranbhai Balubhai Vataliya. All rights reserved.
                </p>
                <p>
                    Est. 15 March 2022 &middot; Pure &middot; Natural &middot; Ethical
                </p>
            </div>
        </footer>
    );
}
