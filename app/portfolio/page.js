"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ZoomIn, Camera, Heart, Users, Briefcase } from "lucide-react";

export default function PortfolioPage() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [activeFilter, setActiveFilter] = useState("all");

    const portfolioItems = [
        {
            id: 1,
            image: "/faetured/josh1.jpg",
            title: "Creative Portrait Session",
            category: "portrait",
            description: "Professional portrait photography capturing authentic moments and expressions."
        },
        {
            id: 2,
            image: "/faetured/josh2.jpg",
            title: "Event Photography",
            category: "event",
            description: "Documenting special moments and celebrations with artistic flair."
        },
        {
            id: 3,
            image: "/faetured/jsoh3.jpg",
            title: "Commercial Shoot",
            category: "commercial",
            description: "High-impact commercial photography for brands and businesses."
        },
        {
            id: 4,
            image: "/faetured/jsoh4.jpg",
            title: "Lifestyle Photography",
            category: "lifestyle",
            description: "Capturing natural, candid moments in beautiful settings."
        },
        {
            id: 5,
            image: "/faetured/josh5.jpg",
            title: "Creative Concept",
            category: "creative",
            description: "Artistic and conceptual photography pushing creative boundaries."
        },
        {
            id: 6,
            image: "/faetured/jsoh6.jpg",
            title: "Professional Headshots",
            category: "portrait",
            description: "Corporate and professional headshot photography."
        }
    ];

    const categories = [
        { id: "all", name: "All Work", icon: Camera },
        { id: "portrait", name: "Portraits", icon: Users },
        { id: "event", name: "Events", icon: Heart },
        { id: "commercial", name: "Commercial", icon: Briefcase },
        { id: "lifestyle", name: "Lifestyle", icon: Camera },
        { id: "creative", name: "Creative", icon: Camera }
    ];

    const filteredItems = activeFilter === "all"
        ? portfolioItems
        : portfolioItems.filter(item => item.category === activeFilter);

    const openLightbox = (item) => {
        setSelectedImage(item);
    };

    const closeLightbox = () => {
        setSelectedImage(null);
    };

    return (
        <main className="min-h-screen bg-primary py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                        My <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">Portfolio</span>
                    </h1>
                    <p className="text-xl text-neutral-300 leading-relaxed">
                        A curated collection of my finest work, showcasing the diversity and quality of my photography
                        and creative services. Each image tells a unique story and represents my commitment to excellence.
                    </p>
                </div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveFilter(category.id)}
                            className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeFilter === category.id
                                    ? "bg-secondary text-white shadow-lg shadow-secondary/25"
                                    : "bg-white/10 text-neutral-300 hover:bg-white/20 hover:text-white"
                                }`}
                        >
                            <category.icon className="w-4 h-4" />
                            {category.name}
                        </button>
                    ))}
                </div>

                {/* Portfolio Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {filteredItems.map((item) => (
                        <div
                            key={item.id}
                            className="group cursor-pointer bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all duration-300"
                            onClick={() => openLightbox(item)}
                        >
                            <div className="relative aspect-[4/5] overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                                        <ZoomIn className="w-6 h-6 text-white" />
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-neutral-300 text-sm leading-relaxed">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                        <p className="text-3xl font-bold text-white mb-2">50+</p>
                        <p className="text-neutral-300 text-sm">Happy Clients</p>
                    </div>
                    <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                        <p className="text-3xl font-bold text-white mb-2">500+</p>
                        <p className="text-neutral-300 text-sm">Photos Taken</p>
                    </div>
                    <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                        <p className="text-3xl font-bold text-white mb-2">4+</p>
                        <p className="text-neutral-300 text-sm">Years Experience</p>
                    </div>
                    <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                        <p className="text-3xl font-bold text-white mb-2">100%</p>
                        <p className="text-neutral-300 text-sm">Satisfaction</p>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center bg-gradient-to-r from-secondary to-accent rounded-3xl p-12">
                    <h3 className="text-3xl font-bold text-white mb-4">Ready to Create Your Story?</h3>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Let's work together to create stunning visuals that capture your unique story and vision.
                        Contact me today to discuss your project.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/contact"
                            className="px-8 py-4 bg-white text-primary rounded-full font-bold hover:bg-neutral-100 transition-all duration-300 shadow-lg"
                        >
                            Start Your Project
                        </a>
                        <a
                            href="/services"
                            className="px-8 py-4 border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-primary transition-all duration-300"
                        >
                            View Services
                        </a>
                    </div>
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="relative max-w-4xl max-h-[90vh] w-full">
                        <button
                            onClick={closeLightbox}
                            className="absolute -top-12 right-0 text-white hover:text-neutral-300 transition-colors"
                        >
                            <X className="w-8 h-8" />
                        </button>
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20">
                            <div className="relative aspect-[4/3]">
                                <Image
                                    src={selectedImage.image}
                                    alt={selectedImage.title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 80vw"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-white mb-2">{selectedImage.title}</h3>
                                <p className="text-neutral-300 leading-relaxed">{selectedImage.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}