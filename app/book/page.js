"use client";

import { useState } from "react";
import { Calendar, Clock, Camera, Users, MapPin, CheckCircle, ArrowRight } from "lucide-react";

export default function BookPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        date: "",
        time: "",
        location: "",
        duration: "",
        guests: "",
        budget: "",
        description: "",
        urgency: "standard"
    });

    const [currentStep, setCurrentStep] = useState(1);
    const totalSteps = 3;

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log("Booking submitted:", formData);
        alert("Thank you for your booking request! I'll get back to you within 24 hours with a detailed proposal.");
        // Reset form
        setFormData({
            name: "",
            email: "",
            phone: "",
            service: "",
            date: "",
            time: "",
            location: "",
            duration: "",
            guests: "",
            budget: "",
            description: "",
            urgency: "standard"
        });
        setCurrentStep(1);
    };

    const nextStep = () => {
        if (currentStep < totalSteps) {
            setCurrentStep(currentStep + 1);
        }
    };

    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    const services = [
        {
            id: "portrait",
            name: "Portrait Photography",
            description: "Professional headshots, family portraits, personal branding",
            icon: Users,
            price: "From KES 15,000"
        },
        {
            id: "event",
            name: "Event Photography",
            description: "Weddings, parties, corporate events, celebrations",
            icon: Camera,
            price: "From KES 25,000"
        },
        {
            id: "commercial",
            name: "Commercial Photography",
            description: "Product shots, business photography, marketing content",
            icon: Camera,
            price: "From KES 20,000"
        },
        {
            id: "branding",
            name: "Branding & Design",
            description: "Logo design, brand identity, marketing materials",
            icon: Camera,
            price: "From KES 30,000"
        },
        {
            id: "content",
            name: "Content Management",
            description: "Social media content, campaign strategy, PR",
            icon: Camera,
            price: "From KES 25,000"
        },
        {
            id: "custom",
            name: "Custom Project",
            description: "Tell us about your unique requirements",
            icon: Camera,
            price: "Custom Quote"
        }
    ];

    const timeSlots = [
        "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
        "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
    ];

    const durations = [
        "1 hour", "2 hours", "3 hours", "4 hours",
        "Half day (4-6 hours)", "Full day (8+ hours)", "Multiple days"
    ];

    const budgetRanges = [
        "Under KES 20,000", "KES 20,000 - 50,000", "KES 50,000 - 100,000",
        "KES 100,000 - 200,000", "Over KES 200,000", "Let's discuss"
    ];

    return (
        <main className="min-h-screen bg-primary py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                        Book Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">Session</span>
                    </h1>
                    <p className="text-xl text-neutral-300 leading-relaxed max-w-3xl mx-auto">
                        Ready to bring your vision to life? Let's create something amazing together.
                        Fill out the form below and I'll get back to you with a personalized proposal within 24 hours.
                    </p>
                </div>

                {/* Progress Bar */}
                <div className="mb-12">
                    <div className="flex items-center justify-center mb-4">
                        {[1, 2, 3].map((step) => (
                            <div key={step} className="flex items-center">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step <= currentStep
                                        ? 'bg-secondary text-white'
                                        : 'bg-white/10 text-neutral-400'
                                    }`}>
                                    {step < currentStep ? <CheckCircle className="w-5 h-5" /> : step}
                                </div>
                                {step < 3 && (
                                    <div className={`w-16 h-1 mx-2 ${step < currentStep ? 'bg-secondary' : 'bg-white/10'
                                        }`} />
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="text-center">
                        <p className="text-neutral-300">
                            Step {currentStep} of {totalSteps}: {
                                currentStep === 1 ? "Service & Contact" :
                                    currentStep === 2 ? "Event Details" : "Final Details"
                            }
                        </p>
                    </div>
                </div>

                {/* Booking Form */}
                <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                    <form onSubmit={handleSubmit}>

                        {/* Step 1: Service Selection & Contact */}
                        {currentStep === 1 && (
                            <div className="space-y-8">
                                <div>
                                    <h2 className="text-2xl font-bold text-white mb-6">Choose Your Service</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {services.map((service) => (
                                            <label key={service.id} className="cursor-pointer">
                                                <input
                                                    type="radio"
                                                    name="service"
                                                    value={service.id}
                                                    checked={formData.service === service.id}
                                                    onChange={handleChange}
                                                    className="sr-only"
                                                />
                                                <div className={`p-6 rounded-2xl border-2 transition-all ${formData.service === service.id
                                                        ? 'border-secondary bg-secondary/10'
                                                        : 'border-white/20 bg-white/5 hover:border-white/40'
                                                    }`}>
                                                    <div className="flex items-start gap-4">
                                                        <service.icon className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                                                        <div>
                                                            <h3 className="text-white font-bold mb-2">{service.name}</h3>
                                                            <p className="text-neutral-300 text-sm mb-2">{service.description}</p>
                                                            <p className="text-secondary font-medium text-sm">{service.price}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-neutral-300 mb-2">
                                                Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                                                placeholder="Your full name"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-neutral-300 mb-2">
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                                                placeholder="your@email.com"
                                            />
                                        </div>
                                        <div className="md:col-span-2">
                                            <label className="block text-sm font-medium text-neutral-300 mb-2">
                                                Phone Number *
                                            </label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                                                placeholder="+254 xxx xxx xxx"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Step 2: Event Details */}
                        {currentStep === 2 && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-bold text-white mb-6">Event Details</h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-neutral-300 mb-2">
                                            <Calendar className="w-4 h-4 inline mr-2" />
                                            Preferred Date *
                                        </label>
                                        <input
                                            type="date"
                                            name="date"
                                            value={formData.date}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-neutral-300 mb-2">
                                            <Clock className="w-4 h-4 inline mr-2" />
                                            Preferred Time
                                        </label>
                                        <select
                                            name="time"
                                            value={formData.time}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                                        >
                                            <option value="" className="bg-primary">Select time</option>
                                            {timeSlots.map((time) => (
                                                <option key={time} value={time} className="bg-primary">{time}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-neutral-300 mb-2">
                                        <MapPin className="w-4 h-4 inline mr-2" />
                                        Location *
                                    </label>
                                    <input
                                        type="text"
                                        name="location"
                                        value={formData.location}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                                        placeholder="Event location or address"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-neutral-300 mb-2">
                                            Duration
                                        </label>
                                        <select
                                            name="duration"
                                            value={formData.duration}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                                        >
                                            <option value="" className="bg-primary">Select duration</option>
                                            {durations.map((duration) => (
                                                <option key={duration} value={duration} className="bg-primary">{duration}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-neutral-300 mb-2">
                                            <Users className="w-4 h-4 inline mr-2" />
                                            Number of People
                                        </label>
                                        <input
                                            type="number"
                                            name="guests"
                                            value={formData.guests}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                                            placeholder="Approximate number"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Step 3: Final Details */}
                        {currentStep === 3 && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-bold text-white mb-6">Final Details</h2>

                                <div>
                                    <label className="block text-sm font-medium text-neutral-300 mb-2">
                                        Budget Range
                                    </label>
                                    <select
                                        name="budget"
                                        value={formData.budget}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                                    >
                                        <option value="" className="bg-primary">Select budget range</option>
                                        {budgetRanges.map((range) => (
                                            <option key={range} value={range} className="bg-primary">{range}</option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-neutral-300 mb-2">
                                        Project Urgency
                                    </label>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        {[
                                            { value: "standard", label: "Standard", desc: "2-4 weeks delivery" },
                                            { value: "priority", label: "Priority", desc: "1-2 weeks delivery" },
                                            { value: "rush", label: "Rush", desc: "Within 1 week" }
                                        ].map((option) => (
                                            <label key={option.value} className="cursor-pointer">
                                                <input
                                                    type="radio"
                                                    name="urgency"
                                                    value={option.value}
                                                    checked={formData.urgency === option.value}
                                                    onChange={handleChange}
                                                    className="sr-only"
                                                />
                                                <div className={`p-4 rounded-xl border-2 text-center transition-all ${formData.urgency === option.value
                                                        ? 'border-secondary bg-secondary/10'
                                                        : 'border-white/20 bg-white/5 hover:border-white/40'
                                                    }`}>
                                                    <h4 className="text-white font-bold mb-1">{option.label}</h4>
                                                    <p className="text-neutral-300 text-sm">{option.desc}</p>
                                                </div>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-neutral-300 mb-2">
                                        Project Description *
                                    </label>
                                    <textarea
                                        name="description"
                                        value={formData.description}
                                        onChange={handleChange}
                                        required
                                        rows={6}
                                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent resize-none"
                                        placeholder="Tell me about your vision, specific requirements, style preferences, and any other important details..."
                                    />
                                </div>
                            </div>
                        )}

                        {/* Navigation Buttons */}
                        <div className="flex justify-between mt-8">
                            <button
                                type="button"
                                onClick={prevStep}
                                className={`px-6 py-3 rounded-xl font-medium transition-all ${currentStep === 1
                                        ? 'bg-white/5 text-neutral-500 cursor-not-allowed'
                                        : 'bg-white/10 text-white hover:bg-white/20'
                                    }`}
                                disabled={currentStep === 1}
                            >
                                Previous
                            </button>

                            {currentStep < totalSteps ? (
                                <button
                                    type="button"
                                    onClick={nextStep}
                                    className="px-6 py-3 bg-secondary text-white rounded-xl font-medium hover:bg-secondary/90 transition-all flex items-center gap-2"
                                >
                                    Next Step
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            ) : (
                                <button
                                    type="submit"
                                    className="px-8 py-3 bg-gradient-to-r from-secondary to-accent text-white rounded-xl font-bold hover:shadow-lg hover:shadow-secondary/25 transition-all"
                                >
                                    Submit Booking Request
                                </button>
                            )}
                        </div>
                    </form>
                </div>

                {/* What Happens Next */}
                <div className="mt-16 bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                    <h3 className="text-2xl font-bold text-white mb-6 text-center">What Happens Next?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="text-center">
                            <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <CheckCircle className="w-6 h-6 text-secondary" />
                            </div>
                            <h4 className="text-white font-bold mb-2">1. Review & Response</h4>
                            <p className="text-neutral-300 text-sm">I'll review your request and respond within 24 hours with questions or clarifications.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <Calendar className="w-6 h-6 text-secondary" />
                            </div>
                            <h4 className="text-white font-bold mb-2">2. Proposal & Contract</h4>
                            <p className="text-neutral-300 text-sm">You'll receive a detailed proposal with pricing, timeline, and contract for your approval.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <Camera className="w-6 h-6 text-secondary" />
                            </div>
                            <h4 className="text-white font-bold mb-2">3. Let's Create!</h4>
                            <p className="text-neutral-300 text-sm">After contract signing and deposit, we'll bring your vision to life with professional excellence.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}