import React from 'react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Camera, FileText, DollarSign, Clock } from 'lucide-react';

const SellSection = () => {
  const steps = [
    {
      icon: Camera,
      title: "Upload Photos",
      description: "Take clear photos of your bike from all angles"
    },
    {
      icon: FileText,
      title: "Add Details",
      description: "Provide bike specifications and condition"
    },
    {
      icon: DollarSign,
      title: "Get Instant Quote",
      description: "Receive competitive offers from verified buyers"
    }
  ];

  return (
    <section className="py-20 bg-background text-foreground relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,215,0,0.05),transparent)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(184,134,11,0.05),transparent)] pointer-events-none"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-700 bg-clip-text text-transparent">
            Sell Your <span className="text-primary text-4xl font-extrabold bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-700 bg-clip-text text-transparent">Bike</span>
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Get the best price for your bike in just 3 simple steps
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card
                key={index}
                className="bg-background border border-muted text-foreground group hover:border-accent transition-all rounded-2xl"
              >
                <CardContent className="p-8 text-center">
                  {/* Keep icon glow style */}
                  <div className="inline-flex p-4 rounded-2xl bg-gradient-primary mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-accent flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="text-center">
            <Clock className="w-8 h-8 mx-auto mb-3 text-primary-glow" />
            <h4 className="font-semibold mb-2">Instant Valuation</h4>
            <p className="text-muted text-sm">Get price quotes in minutes</p>
          </div>
          <div className="text-center">
            <FileText className="w-8 h-8 mx-auto mb-3 text-accent-glow" />
            <h4 className="font-semibold mb-2">Verified Buyers</h4>
            <p className="text-muted text-sm">Connect with trusted buyers only</p>
          </div>
          <div className="text-center">
            <DollarSign className="w-8 h-8 mx-auto mb-3 text-primary-glow" />
            <h4 className="font-semibold mb-2">Best Prices</h4>
            <p className="text-muted text-sm">Get competitive market rates</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-accent text-background text-lg px-12 py-4 h-auto rounded-xl text-accent-glow"
          >
            Sell in Seconds
          </Button>
          <p className="text-muted mt-4 text-sm">
            Free valuation • No hidden charges • Instant payment
          </p>
        </div>
      </div>
    </section>
  );
};

export default SellSection;
