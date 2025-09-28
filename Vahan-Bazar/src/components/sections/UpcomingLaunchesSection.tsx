import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { ChevronLeft, ChevronRight, Bell, Zap, Calendar } from 'lucide-react';
import upcomingEv from "../../assets/upcoming-ev.jpg";

const UpcomingLaunchesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const launches = [
    {
      image: upcomingEv,
      name: "ElectroMax Pro",
      brand: "FutureTech",
      launchDate: "March 2024",
      price: "₹2.5L - ₹3.2L",
      features: ["400km Range", "Fast Charging", "Smart Display"]
    },
    {
      image: upcomingEv,
      name: "Thunder Bolt EV",
      brand: "SpeedCorp",
      launchDate: "April 2024", 
      price: "₹1.8L - ₹2.4L",
      features: ["300km Range", "Quick Charge", "IoT Connected"]
    },
    {
      image: upcomingEv,
      name: "Urban Glide E",
      brand: "CityRide",
      launchDate: "May 2024",
      price: "₹95K - ₹1.3L",
      features: ["150km Range", "Removable Battery", "App Control"]
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % launches.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + launches.length) % launches.length);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Upcoming <span className="text-4xl md:text-5xl font-heading font-bold mb-4 font-extrabold bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-700 bg-clip-text text-transparent">Launches</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Be the first to know about the latest releases
            </p>
          </div>
          <div className="hidden md:flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {launches.map((launch, index) => (
              <div key={index} className="w-full flex-shrink-0 px-2">
                <Card className="group hover-glow border-0 overflow-hidden">
                  <div className="relative">
                    <img
                      src={launch.image}
                      alt={launch.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-gradient-accent text-white border-0">
                        <Calendar className="w-3 h-3 mr-1" />
                        {launch.launchDate}
                      </Badge>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-heading font-semibold mb-1">
                          {launch.name}
                        </h3>
                        <p className="text-muted-foreground">{launch.brand}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">Expected Price</p>
                        <p className="text-lg font-semibold text-primary">
                          {launch.price}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {launch.features.map((feature, featureIndex) => (
                        <Badge
                          key={featureIndex}
                          variant="secondary"
                          className="text-xs"
                        >
                          <Zap className="w-3 h-3 mr-1" />
                          {feature}
                        </Badge>
                      ))}
                    </div>

                    <Button className="w-full bg-gradient-primary hover:shadow-electric">
                      <Bell className="w-4 h-4 mr-2" />
                      Notify Me
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex justify-center gap-2 mt-8 md:hidden">
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="rounded-full"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="rounded-full"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default UpcomingLaunchesSection;