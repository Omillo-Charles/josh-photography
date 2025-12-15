"use client";

import Image from "next/image";
import { Camera, Heart, Award, Users, Star, CheckCircle } from "lucide-react";

const stats = [
    { number: "50+", label: "Happy Clients" },
    { number: "4+", label: "Years Experience" },
    { number: "100%", label: "Satisfaction Rate" },
    { number: "500+", label: "Projects Completed" },
];

const values = [
    {
        icon: Heart,
        title: "Passion-Driven",
        description: "Every shot is taken with genuine passion and dedication to capturing the perfect moment.",
    },
    {
        icon: Award,
        title: "Excellence",
        description: "We strive for excellence in every project, delivering results that exceed expectations.",
    },
    {
        icon: Users,
        title: "Client-Focused",
        description: "Your vision is our priority. We work closely with you to bring your ideas to life.",
    },
    {
        icon: Star,
        title: "Creative Vision",
        description: "Combining technical expertise with artistic vision to create truly unique visual stories.",
    },
];

const skills = [
    "Portrait Photography",
    "Event Photography",
    "Commercial Photography",
    "Brand Strategy",
    "Content Creation",
    "Social Media Management",
    "Graphic Design",
    "Campaign Development",
];

const About = () => {
    return (
        <section className="py-24 bg-primary min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">Joshh</span>
                    </h1>
                    <p className="text-xl text-neutral-300 leading-relaxed">
                        Passionate photographer and creative professional dedicated to capturing life's most precious moments
                        and helping brands tell their unique stories through powerful visual content.
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
                    {/* Image Section */}
                    <div className="relative">
                        <div className="relative w-full h-[600px] rounded-3xl overflow-hidden">
                            <Image
                                src="/faetured/jsoh4.jpg"
                                alt="Joshh Photography"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
                        </div>
                        {/* Floating Stats Card */}
                        <div className="absolute -bottom-10 -right-10 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                            <div className="flex items-center gap-3">
                                <Camera className="w-8 h-8 text-secondary" />
                                <div>
                                    <p className="text-2xl font-bold text-white">4+</p>
                                    <p className="text-sm text-neutral-300">Years Creating</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-6">My Story</h2>
                            <div className="space-y-4 text-neutral-300 leading-relaxed">
                                <p>
                                    Welcome to Joshh Photography, where every frame tells a story and every moment becomes a lasting memory.
                                    I'm Joshua, a passionate photographer and creative professional based in Ongata Rongai, Kenya.
                                </p>
                                <p>
                                    My journey into photography began with a simple fascination for capturing the beauty in everyday moments.
                                    Over the years, this passion has evolved into a comprehensive creative practice that encompasses not just
                                    photography, but also brand strategy, content creation, and visual storytelling.
                                </p>
                                <p>
                                    What sets me apart is my commitment to understanding each client's unique vision and translating it into
                                    powerful visual content that resonates with their audience. Whether it's a personal portrait session,
                                    a corporate event, or a complete brand campaign, I approach every project with the same level of
                                    dedication and creative energy.
                                </p>
                            </div>
                        </div>

                        {/* Skills Grid */}
                        <div>
                            <h3 className="text-xl font-bold text-white mb-4">Skills & Expertise</h3>
                            <div className="grid grid-cols-2 gap-3">
                                {skills.map((skill, index) => (
                                    <div key={index} className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                                        <span className="text-neutral-300 text-sm">{skill}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                                <p className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</p>
                                <p className="text-neutral-300 text-sm">{stat.label}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Values Section */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My Values</h2>
                        <p className="text-neutral-300 max-w-2xl mx-auto">
                            These core values guide every project I undertake and every relationship I build with my clients.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <div key={index} className="text-center">
                                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                                    <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                                        <value.icon className="w-6 h-6 text-secondary" />
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-3">{value.title}</h3>
                                    <p className="text-neutral-300 text-sm leading-relaxed">{value.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center bg-gradient-to-r from-secondary to-accent rounded-3xl p-12">
                    <h3 className="text-3xl font-bold text-white mb-4">Let's Create Something Amazing Together</h3>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Ready to bring your vision to life? I'd love to hear about your project and discuss how we can work together.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/contact"
                            className="px-8 py-4 bg-white text-primary rounded-full font-bold hover:bg-neutral-100 transition-all duration-300 shadow-lg"
                        >
                            Get In Touch
                        </a>
                        <a
                            href="/portfolio"
                            className="px-8 py-4 border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-primary transition-all duration-300"
                        >
                            View My Work
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;