"use client";

import { motion } from "framer-motion";
import { Play, Maximize2, X, Leaf } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const images = Array.from({ length: 16 }, (_, i) => ({
    id: i + 1,
    type: "image" as const,
    src: `/${i + 1}.jpeg`,
    alt: `Aalpha Farm Gallery Image ${i + 1}`,
}));

const videos = [
    { id: 17, type: "video" as const, src: "/17.mp4", alt: "Farm Video 1" },
    { id: 18, type: "video" as const, src: "/18.mp4", alt: "Farm Video 2" },
    { id: 19, type: "video" as const, src: "/19.mp4", alt: "Farm Video 3" },
];

const galleryItems = [...images, ...videos];

export default function GalleryPage() {
    const [selectedItem, setSelectedItem] = useState<(typeof galleryItems)[0] | null>(null);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <>
            <section className="relative pt-32 pb-20 px-6 bg-gradient-to-br from-[#1a4332] via-[#2D6A4F] to-[#3B2314] overflow-hidden">
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `radial-gradient(circle at 20% 30%, #D4A017 1px, transparent 1px)`,
                        backgroundSize: "50px 50px",
                    }}
                />
                <div className="relative max-w-4xl mx-auto text-center px-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 bg-[#D4A017]/20 border border-[#D4A017]/40 text-[#D4A017] text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6"
                    >
                        <Leaf className="w-3.5 h-3.5" />
                        Visual Experience
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-5 leading-tight"
                    >
                        Life at Aalpha Farm
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-white/75 text-base md:text-lg max-w-2xl mx-auto"
                    >
                        Glimpses of our cows, our organic practices, and the natural harmony we nurture every day.
                    </motion.p>
                </div>
            </section>

            <section className="section-padding bg-[#F8F4E3]">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-6 space-y-3 md:space-y-6"
                    >
                        {galleryItems.map((item) => (
                            <motion.div
                                key={`${item.type}-${item.id}`}
                                variants={itemVariants}
                                className="relative group cursor-pointer break-inside-avoid rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500"
                                onClick={() => setSelectedItem(item)}
                            >
                                {item.type === "image" ? (
                                    <div className="relative">
                                        <img
                                            src={item.src}
                                            alt={item.alt}
                                            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <Maximize2 className="text-white w-8 h-8" />
                                        </div>
                                    </div>
                                ) : (
                                    <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
                                        <video
                                            src={item.src}
                                            className="w-full h-full object-cover opacity-80"
                                            muted
                                            loop
                                            playsInline
                                            onMouseOver={(e) => e.currentTarget.play()}
                                            onMouseOut={(e) => e.currentTarget.pause()}
                                        />
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                                            <div className="w-12 h-12 rounded-full bg-[#D4A017] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                                <Play className="text-[#3B2314] fill-[#3B2314] w-5 h-5 ml-1" />
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Lightbox */}
            {selectedItem && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
                    onClick={() => setSelectedItem(null)}
                >
                    <button
                        className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
                        onClick={() => setSelectedItem(null)}
                    >
                        <X size={32} />
                    </button>

                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="relative w-full max-w-5xl h-full max-h-[85vh] flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {selectedItem.type === "image" ? (
                            <img
                                src={selectedItem.src}
                                alt={selectedItem.alt}
                                className="w-full h-full object-contain rounded-lg shadow-2xl"
                            />
                        ) : (
                            <video
                                src={selectedItem.src}
                                controls
                                autoPlay
                                className="w-full h-full object-contain rounded-lg shadow-2xl"
                            />
                        )}
                        <div className="absolute -bottom-10 left-0 right-0 text-center">
                            <p className="text-white font-playfair text-lg">{selectedItem.alt}</p>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </>
    );
}
