"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, Clock, MessageSquare } from "lucide-react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log("Form submitted:", formData);
        // You can add email service integration here
        alert("Thank you for your message! I'll get back to you soon.");
        setFormData({
            name: "",
            email: "",
            phone: "",
            service: "",
            message: ""
        });
    };

    const contactInfo = [
        {
            icon: Phone,
            title: "Phone",
            details: "+254797322205",
            description: "Call or WhatsApp anytime"
        },
        {
            icon: Mail,
            title: "Email",
            details: "namwangajoshua@gmail.com",
            description: "Send me a message"
        },
        {
            icon: MapPin,
            title: "Location",
            details: "Ongata Rongai",
            description: "Kenya"
        },
        {
            icon: Clock,
            title: "Response Time",
            details: "Within 24 hours",
            description: "Quick turnaround"
        }
    ];

    const services = [
        "Photography & Creative Work",
        "Media & Content Management",
        "Campaigns & PR Strategy",
        "Events & Volunteering",
        "Branding & Graphics Design",
        "Other"
    ];

    return (
        <main className="min-h-screen bg-primary py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                        Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">Touch</span>
                    </h1>
                    <p className="text-xl text-neutral-300 leading-relaxed">
                        Ready to bring your vision to life? Let's discuss your project and create something amazing together.
                        I'm here to help with all your creative and strategic needs.
                    </p>
                </div>

                {/* Contact Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {contactInfo.map((info, index) => (
                        <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center hover:bg-white/10 transition-all duration-300">
                            <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <info.icon className="w-6 h-6 text-secondary" />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">{info.title}</h3>
                            <p className="text-secondary font-medium mb-1">{info.details}</p>
                            <p className="text-neutral-400 text-sm">{info.description}</p>
                        </div>
                    ))}
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Form */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                        <div className="flex items-center gap-3 mb-6">
                            <MessageSquare className="w-6 h-6 text-secondary" />
                            <h2 className="text-2xl font-bold text-white">Send a Message</h2>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                                        placeholder="Your full name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                                        placeholder="your@email.com"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-neutral-300 mb-2">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                                        placeholder="+254 xxx xxx xxx"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="service" className="block text-sm font-medium text-neutral-300 mb-2">
                                        Service Needed
                                    </label>
                                    <select
                                        id="service"
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                                    >
                                        <option value="" className="bg-primary text-white">Select a service</option>
                                        {services.map((service, index) => (
                                            <option key={index} value={service} className="bg-primary text-white">
                                                {service}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-2">
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={6}
                                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all resize-none"
                                    placeholder="Tell me about your project, timeline, budget, and any specific requirements..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-secondary to-accent text-white font-bold py-4 px-6 rounded-xl hover:shadow-lg hover:shadow-secondary/25 transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                <Send className="w-5 h-5" />
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Additional Info */}
                    <div className="space-y-8">
                        {/* Why Choose Me */}
                        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                            <h3 className="text-2xl font-bold text-white mb-6">Why Choose Joshh Photography?</h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                                    <div>
                                        <h4 className="text-white font-medium mb-1">Professional Excellence</h4>
                                        <p className="text-neutral-300 text-sm">4+ years of experience delivering high-quality creative solutions</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                                    <div>
                                        <h4 className="text-white font-medium mb-1">Comprehensive Services</h4>
                                        <p className="text-neutral-300 text-sm">From photography to branding, I offer complete creative solutions</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                                    <div>
                                        <h4 className="text-white font-medium mb-1">Client-Focused Approach</h4>
                                        <p className="text-neutral-300 text-sm">Your vision is my priority, with personalized attention to every detail</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                                    <div>
                                        <h4 className="text-white font-medium mb-1">Quick Response</h4>
                                        <p className="text-neutral-300 text-sm">Fast turnaround times and responsive communication</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Process */}
                        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                            <h3 className="text-2xl font-bold text-white mb-6">How It Works</h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                                    <div>
                                        <h4 className="text-white font-medium">Initial Consultation</h4>
                                        <p className="text-neutral-300 text-sm">We discuss your project, goals, and requirements</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                                    <div>
                                        <h4 className="text-white font-medium">Proposal & Planning</h4>
                                        <p className="text-neutral-300 text-sm">I create a detailed proposal and project timeline</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                                    <div>
                                        <h4 className="text-white font-medium">Execution</h4>
                                        <p className="text-neutral-300 text-sm">Professional execution with regular updates</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                                    <div>
                                        <h4 className="text-white font-medium">Delivery</h4>
                                        <p className="text-neutral-300 text-sm">Final delivery with revisions if needed</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}