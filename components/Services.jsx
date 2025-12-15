"use client";

import { MessageSquare, Camera, Megaphone, Calendar, Palette } from "lucide-react";

const services = [
  {
    icon: MessageSquare,
    title: "Media, Communication & Content Management",
    description: "Strategic content creation, social media management, and comprehensive communication solutions for your brand.",
    color: "bg-blue-50",
    iconColor: "text-blue-500",
  },
  {
    icon: Camera,
    title: "Photography & Creative Work",
    description: "Professional photography services including portraits, events, commercial shoots, and creative visual storytelling.",
    color: "bg-purple-50",
    iconColor: "text-purple-500",
  },
  {
    icon: Megaphone,
    title: "Campaigns, Strategy & PR",
    description: "Comprehensive campaign development, strategic planning, and public relations services to elevate your brand presence.",
    color: "bg-emerald-50",
    iconColor: "text-emerald-500",
  },
  {
    icon: Calendar,
    title: "Events and Volunteering",
    description: "Full-service event planning, coordination, and volunteer management for corporate and community initiatives.",
    color: "bg-amber-50",
    iconColor: "text-amber-500",
  },
  {
    icon: Palette,
    title: "Branding & Graphics Design Concepts",
    description: "Complete brand identity development, logo design, and creative graphic solutions that make your brand stand out.",
    color: "bg-rose-50",
    iconColor: "text-rose-500",
  },
];

const Services = () => {
  return (
    <section className="py-24 bg-primary min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">Services</span>
          </h1>
          <p className="text-xl text-neutral-300 leading-relaxed">
            Comprehensive creative and strategic solutions designed to elevate your brand,
            capture your moments, and bring your vision to life through expert craftsmanship and innovation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-sm hover:shadow-xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className={`w-8 h-8 ${service.iconColor}`} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 leading-tight">{service.title}</h3>
              <p className="text-neutral-300 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-secondary to-accent rounded-3xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create something amazing together.
            Contact us today for a personalized consultation.
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
              View Our Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
