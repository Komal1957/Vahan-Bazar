import React, { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Search, Filter, ChevronLeft, ChevronRight } from 'lucide-react';
import heroBike1 from '@/assets/hero-bike-1.jpg';
import heroScooter from '@/assets/hero-scooter.jpg';
import heroSportsBike from '@/assets/hero-sports-bike.jpg';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    { image: heroBike1, title: "Electric Dreams", subtitle: "Experience the future of mobility" },
    { image: heroScooter, title: "Urban Revolution", subtitle: "Perfect for city commuting" },
    { image: heroSportsBike, title: "Racing Spirit", subtitle: "Unleash your inner racer" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 via-secondary/50 to-transparent"></div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all z-10"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all z-10"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl animate-slide-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 leading-tight" >
              Your Ride, Your <span className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-700 bg-clip-text text-transparent">Marketplace</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-body">
              Discover the future of two-wheelers. Buy, sell, and explore bikes, scooters, and EVs with ease.
            </p>

            {/* Search & Filter Bar */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl mb-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="md:col-span-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      placeholder="Search bikes, scooters, EVs..."
                      className="pl-10 h-12 border-0 bg-muted/50 focus:bg-white transition-colors"
                    />
                  </div>
                </div>
                <Select>
                  <SelectTrigger className="h-12 border-0 bg-muted/50 focus:bg-white">
                    <SelectValue placeholder="Brand" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="honda">Honda</SelectItem>
                    <SelectItem value="yamaha">Yamaha</SelectItem>
                    <SelectItem value="bajaj">Bajaj</SelectItem>
                    <SelectItem value="tvs">TVS</SelectItem>
                    <SelectItem value="hero">Hero</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="h-12 border-0 bg-muted/50 focus:bg-white">
                    <SelectValue placeholder="Fuel Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="petrol">Petrol</SelectItem>
                    <SelectItem value="electric">Electric</SelectItem>
                    <SelectItem value="hybrid">Hybrid</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8">
                Browse Bikes
              </Button>
              <Button variant="outline-white" size="lg" className="text-lg px-8">
                Sell Your Bike
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;