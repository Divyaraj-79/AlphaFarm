"use client";

import { useState, useEffect, Suspense } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import {
    MapPin,
    Phone,
    Mail,
    Send,
    CheckCircle2,
    AlertCircle,
    Loader2,
} from "lucide-react";

const schema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    phone: z
        .string()
        .min(10, "Phone number must be at least 10 digits")
        .regex(/^[0-9+\-\s]+$/, "Invalid phone number"),
    product: z.string().min(1, "Please select a product interest"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

function ContactForm() {
    const searchParams = useSearchParams();
    const productFromQuery = searchParams.get("product") || "";

    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { errors, isSubmitting },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
        defaultValues: { product: productFromQuery },
    });

    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

    useEffect(() => {
        if (productFromQuery) {
            setValue("product", productFromQuery);
        }
    }, [productFromQuery, setValue]);

    const onSubmit = async (data: FormData) => {
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            if (res.ok) {
                setStatus("success");
                reset();
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                {/* Name */}
                <div>
                    <label className="block text-sm font-medium text-[#3B2314] mb-1 md:mb-1.5">
                        Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                        {...register("name")}
                        placeholder="Your Name"
                        className="w-full px-3 py-2.5 md:px-4 md:py-3 bg-white border border-[#D9C9A3] rounded-xl text-[#3B2314] placeholder-[#6B4226]/40 focus:outline-none focus:ring-2 focus:ring-[#2D6A4F]/40 focus:border-[#2D6A4F] transition-all"
                    />
                    {errors.name && (
                        <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
                    )}
                </div>

                {/* Email */}
                <div>
                    <label className="block text-sm font-medium text-[#3B2314] mb-1 md:mb-1.5">
                        Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                        {...register("email")}
                        type="email"
                        placeholder="you@example.com"
                        className="w-full px-3 py-2.5 md:px-4 md:py-3 bg-white border border-[#D9C9A3] rounded-xl text-[#3B2314] placeholder-[#6B4226]/40 focus:outline-none focus:ring-2 focus:ring-[#2D6A4F]/40 focus:border-[#2D6A4F] transition-all"
                    />
                    {errors.email && (
                        <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
                    )}
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                {/* Phone */}
                <div>
                    <label className="block text-sm font-medium text-[#3B2314] mb-1 md:mb-1.5">
                        Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                        {...register("phone")}
                        placeholder="+91 98000 00000"
                        className="w-full px-3 py-2.5 md:px-4 md:py-3 bg-white border border-[#D9C9A3] rounded-xl text-[#3B2314] placeholder-[#6B4226]/40 focus:outline-none focus:ring-2 focus:ring-[#2D6A4F]/40 focus:border-[#2D6A4F] transition-all"
                    />
                    {errors.phone && (
                        <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>
                    )}
                </div>

                {/* Product Interest */}
                <div>
                    <label className="block text-sm font-medium text-[#3B2314] mb-1 md:mb-1.5">
                        Product Interest <span className="text-red-500">*</span>
                    </label>
                    <select
                        {...register("product")}
                        className="w-full px-3 py-2.5 md:px-4 md:py-3 bg-white border border-[#D9C9A3] rounded-xl text-[#3B2314] focus:outline-none focus:ring-2 focus:ring-[#2D6A4F]/40 focus:border-[#2D6A4F] transition-all appearance-none cursor-pointer"
                    >
                        <option value="">Select a product...</option>
                        <option value="gir-cow-ghee">Gir Cow A2 Ghee</option>
                        <option value="vermicompost">Organic VermiCompost</option>
                        <option value="both">Both Products</option>
                        <option value="general">General Inquiry</option>
                    </select>
                    {errors.product && (
                        <p className="mt-1 text-xs text-red-500">{errors.product.message}</p>
                    )}
                </div>
            </div>

            {/* Message */}
            <div>
                <label className="block text-sm font-medium text-[#3B2314] mb-1 md:mb-1.5">
                    Your Message <span className="text-red-500">*</span>
                </label>
                <textarea
                    {...register("message")}
                    rows={4}
                    placeholder="Tell us about your requirements, quantity needed, or any questions..."
                    className="w-full px-3 py-2.5 md:px-4 md:py-3 bg-white border border-[#D9C9A3] rounded-xl text-[#3B2314] placeholder-[#6B4226]/40 focus:outline-none focus:ring-2 focus:ring-[#2D6A4F]/40 focus:border-[#2D6A4F] transition-all resize-none"
                />
                {errors.message && (
                    <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>
                )}
            </div>

            {/* Status messages */}
            {status === "success" && (
                <div className="flex items-center gap-3 bg-green-50 border border-green-200 text-green-700 px-4 py-3 md:px-5 md:py-4 rounded-xl">
                    <CheckCircle2 className="w-5 h-5 shrink-0" />
                    <div>
                        <p className="font-semibold text-sm md:text-base">Inquiry Sent Successfully!</p>
                        <p className="text-xs md:text-sm">We'll get back to you within 24 hours.</p>
                    </div>
                </div>
            )}

            {status === "error" && (
                <div className="flex items-center gap-3 bg-red-50 border border-red-200 text-red-700 px-4 py-3 md:px-5 md:py-4 rounded-xl">
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <div>
                        <p className="font-semibold text-sm md:text-base">Something went wrong!</p>
                        <p className="text-xs md:text-sm">Please try again or call us directly.</p>
                    </div>
                </div>
            )}

            {/* Submit */}
            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 bg-[#2D6A4F] text-[#FEFAE0] py-3.5 md:py-4 rounded-xl font-semibold text-sm md:text-base hover:bg-[#40916C] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 shadow-md hover:shadow-lg"
            >
                {isSubmitting ? (
                    <>
                        <Loader2 className="w-4 h-4 md:w-5 md:h-5 animate-spin" /> Sending...
                    </>
                ) : (
                    <>
                        <Send className="w-4 h-4 md:w-5 md:h-5" /> Send Inquiry
                    </>
                )}
            </button>
        </form>
    );
}

export default function ContactPage() {
    return (
        <>
            {/* ── PAGE HERO ────────────────────────────────────────────── */}
            <section className="relative pt-32 pb-20 px-6 bg-gradient-to-br from-[#1a4332] via-[#2D6A4F] to-[#3B2314] overflow-hidden">
                <div className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `radial-gradient(circle at 60% 60%, #D4A017 1px, transparent 1px)`,
                        backgroundSize: "50px 50px",
                    }}
                />
                <div className="relative max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 bg-[#D4A017]/20 border border-[#D4A017]/40 text-[#D4A017] text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6"
                    >
                        <Mail className="w-3.5 h-3.5" />
                        Get In Touch
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-5 leading-tight"
                    >
                        Contact Aalpha Gir Gay Gaushala
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-white/75 text-base md:text-lg max-w-2xl mx-auto px-4 text-balance"
                    >
                        Have a question, want to place an order, or simply want to learn more?
                        We&apos;re happy to hear from you.
                    </motion.p>
                </div>
            </section>

            {/* ── MAIN CONTENT ─────────────────────────────────────────── */}
            <section className="section-padding bg-[#F8F4E3]">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12 items-start px-4 sm:px-6">
                    {/* Contact Info — 2/5 */}
                    <div className="lg:col-span-2 space-y-5 md:space-y-8">
                        <div>
                            <h2 className="font-playfair text-3xl font-bold text-[#3B2314] mb-3">
                                We&apos;d Love to Hear<br />From You
                            </h2>
                            <p className="text-[#6B4226] text-sm md:text-base leading-relaxed">
                                Whether you&apos;re interested in our Gir Cow Ghee, VermiCompost, or
                                want to know more about Aalpha Gir Gay Gaushala - reach out and we&apos;ll respond
                                promptly.
                            </p>
                        </div>

                        {/* Info cards */}
                        {[
                            {
                                Icon: MapPin,
                                title: "Our Farm Location",
                                line1: "SN 1469, AALPHA FARM, OGANAJ, OGANAJ LAPAKAMAN ROAD, AHMEDABAD, GUJARAT - 380060",
                            },
                            {
                                Icon: Phone,
                                title: "Call Us",
                                line1: "+91 75678 49349",
                            },
                            {
                                Icon: Mail,
                                title: "Email Us",
                                line1: (
                                    <a
                                        href="mailto:aalphafarm22@gmail.com"
                                        className="text-[#6B4226] hover:text-[#2D6A4F] transition-colors"
                                    >
                                        aalphafarm22@gmail.com
                                    </a>
                                ),
                            },
                        ].map((item) => (
                            <div
                                key={item.title}
                                className="flex gap-4 bg-white rounded-xl md:rounded-2xl p-4 md:p-5 border border-[#D9C9A3] shadow-sm"
                            >
                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-[#2D6A4F]/10 flex items-center justify-center shrink-0">
                                    <item.Icon className="w-4 h-4 md:w-5 md:h-5 text-[#2D6A4F]" />
                                </div>
                                <div className="flex-1">
                                    <p className="font-semibold text-[#3B2314] text-sm md:text-base">{item.title}</p>
                                    <p className="text-[#6B4226] text-[13px] md:text-sm mt-0.5 md:mt-1 leading-relaxed">{item.line1}</p>
                                </div>
                            </div>
                        ))}

                        {/* Partnership note */}
                        <div className="bg-[#E9F0EC] border-2 border-[#2D6A4F]/20 rounded-2xl md:rounded-3xl p-6 md:p-8 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-[#2D6A4F]/5 rounded-full -translate-y-12 translate-x-12" />
                            <p className="font-playfair text-lg md:text-xl font-bold text-[#2D6A4F] mb-3">
                                Aalpha Gir Gay Gaushala Partnership
                            </p>
                            <p className="text-[13px] md:text-sm text-[#475C53] leading-relaxed">
                                Managed by <strong className="text-[#2D6A4F]">Shri Kishor Balubhai Vataliya</strong>{" "}
                                and <strong className="text-[#2D6A4F]">Shri Kiranbhai Balubhai Vataliya</strong>.
                            </p>
                            <div className="mt-4 pt-4 border-t border-[#2D6A4F]/10 flex items-center justify-between text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#2D6A4F]/60">
                                <span>Est. 15 March 2022</span>
                            </div>
                        </div>
                    </div>

                    {/* Form — 3/5 */}
                    <div className="lg:col-span-3 bg-white rounded-2xl md:rounded-3xl p-5 md:p-8 border border-[#D9C9A3] shadow-lg">
                        <h3 className="font-playfair text-xl md:text-2xl font-bold text-[#3B2314] mb-5 md:mb-6">
                            Send Your Inquiry
                        </h3>
                        <Suspense fallback={<div className="text-[#6B4226]">Loading form...</div>}>
                            <ContactForm />
                        </Suspense>
                    </div>
                </div>
            </section>
        </>
    );
}
