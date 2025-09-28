import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Bike, Zap, Car, RotateCcw } from 'lucide-react';

const CategoriesSection = () => {
  const categories = [
    {
      icon: Bike,
      title: "Bikes",
      description: "Sports, cruiser & adventure bikes",
      color: "primary"
    },
    {
      icon: Car,
      title: "Scooters",
      description: "Perfect for city commuting",
      color: "accent"
    },
    {
      icon: Zap,
      title: "EVs",
      description: "Electric & eco-friendly rides",
      color: "futuristic"
    },
    {
      icon: RotateCcw,
      title: "Used Bikes",
      description: "Quality pre-owned vehicles",
      color: "secondary"
    }
  ];

  return (
    <section className="py-20 bg-background bg-gradient-to-b from-black via-gray-900 to-yellow-500 ...">
      <div className="container px-4 md:px-6 ">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            <span className="bg-yellow-500 bg-clip-text text-transparent">
              Explore{" "}
            </span>

            <span className="bg-yellow-400 bg-clip-text text-transparent">
              Categories
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            <span className="bg-yellow-400 bg-clip-text text-transparent">
              Find your perfect ride from our diverse collection of two-wheelers
            </span>

          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={index}
                className="group cursor-pointer hover-glow border-0 overflow-hidden relative"
              >
                {/* Background Glow Layer */}
                <div
                  className={`absolute inset-0 bg-gradient-${category.color} opacity-5 group-hover:opacity-10 transition-opacity`}
                ></div>

                {/* Card Content */}
                <CardContent className="p-8 text-center relative z-10">
                  <div
                    className={`inline-flex p-4 rounded-2xl bg-gradient-${category.color} mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-heading font-semibold mb-3">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {category.description}
                  </p>

                  {/* Progress Bar */}
                  <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-${category.color} transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500`}
                    ></div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
