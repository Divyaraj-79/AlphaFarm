"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/products", label: "Products" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? "glass shadow-lg shadow-green-900/10"
                : "bg-transparent"
                }`}
        >
            <nav className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#D4A017] shadow-md group-hover:scale-105 transition-transform duration-300">
                        <Image
                            src="/alphalogo.jpeg"
                            alt="Alpha Farm Logo"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="flex flex-col leading-tight">
                        <span
                            className={`font-playfair font-bold text-xl tracking-wide transition-colors duration-300 ${scrolled ? "text-[#2D6A4F]" : "text-white"
                                }`}
                        >
                            Alpha Farm
                        </span>
                        <span
                            className={`text-[10px] font-bold tracking-[0.2em] uppercase transition-colors duration-300 ${scrolled ? "text-[#6B4226]" : "text-[#D4A017]"
                                }`}
                        >
                            Gir Cow Gaushala
                        </span>
                    </div>
                </Link>

                {/* Desktop links */}
                <ul className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className={`relative text-xs font-bold uppercase tracking-wider transition-colors duration-300 group ${scrolled ? "text-[#3B2314]" : "text-white"
                                    } hover:text-[#D4A017]`}
                            >
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D4A017] group-hover:w-full transition-all duration-300" />
                            </Link>
                        </li>
                    ))}
                    <li>
                        <Link
                            href="/contact"
                            className="bg-[#D4A017] text-[#3B2314] px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#C97532] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
                        >
                            Inquire
                        </Link>
                    </li>
                </ul>

                {/* Mobile menu toggle */}
                <button
                    className={`md:hidden ${scrolled ? "text-[#2D6A4F]" : "text-white"}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <X size={26} /> : <Menu size={26} />}
                </button>
            </nav>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden glass border-t border-[#D9C9A3]/40 px-6 py-6 flex flex-col gap-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className="text-[#3B2314] text-base font-medium hover:text-[#2D6A4F] transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        onClick={() => setMenuOpen(false)}
                        className="mt-2 w-full text-center bg-[#D4A017] text-[#3B2314] px-5 py-2.5 rounded-full font-semibold hover:bg-[#C97532] hover:text-white transition-all"
                    >
                        Inquire Now
                    </Link>
                </div>
            )}
        </header>
    );
}
