"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    id: 1,
    image: "/faetured/josh1.jpg",
  },
  {
    id: 2,
    image: "/faetured/josh2.jpg",
  },
  {
    id: 3,
    image: "/faetured/jsoh3.jpg",
  },
  {
    id: 4,
    image: "/faetured/jsoh4.jpg",
  },
  {
    id: 5,
    image: "/faetured/josh5.jpg",
  },
  {
    id: 6,
    image: "/faetured/jsoh6.jpg",
  },
];

const FeaturedWork = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === projects.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? projects.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === projects.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-secondary font-medium tracking-wider uppercase mb-3">Portfolio</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-primary tracking-tight mb-4">
              Selected Works
            </h3>
            <p className="text-lg text-neutral-500 max-w-xl">
              A collection of our favorite moments captured through the lens.
              Each image tells a unique story of love, life, and beauty.
            </p>
          </div>
          <Link
            href="/portfolio"
            className="group flex items-center gap-2 text-lg font-bold text-primary hover:text-secondary transition-colors"
          >
            View All Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Desktop: Natural Gallery */}
        <div className="hidden md:flex flex-wrap gap-6 justify-center">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group cursor-pointer flex-shrink-0"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
                <Image
                  src={project.image}
                  alt={`Gallery image ${project.id}`}
                  width={350}
                  height={500}
                  className="h-auto transition-transform duration-700 group-hover:scale-105"
                  sizes="350px"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: New Carousel */}
        <div className="md:hidden relative">
          {/* Carousel Container */}
          <div className="relative overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="w-full flex-shrink-0"
                >
                  <div className="relative w-full h-[60vh]">
                    <Image
                      src={project.image}
                      alt={`Gallery image ${project.id}`}
                      fill
                      className="object-cover"
                      sizes="100vw"
                      priority={project.id <= 2}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-all"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-all"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${index === currentIndex
                  ? 'bg-secondary scale-110'
                  : 'bg-neutral-300 hover:bg-neutral-400'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
