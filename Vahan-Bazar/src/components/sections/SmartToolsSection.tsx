import React from 'react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { BarChart3, Calculator, Fuel } from 'lucide-react';

const SmartToolsSection = () => {
  const tools = [
    {
      icon: BarChart3,
      title: "Compare Models",
      description: "Side-by-side comparison of specs & prices",
      action: "Start Comparing"
    },
    {
      icon: Calculator,
      title: "EMI Calculator",
      description: "Calculate monthly payments instantly",
      action: "Calculate EMI"
    },
    {
      icon: Fuel,
      title: "Fuel Cost Estimator",
      description: "Estimate running costs & savings",
      action: "Estimate Costs"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
             <span className="text-4xl font-bold bg-gradient-to-r from-black via-gray-800 to-yellow-500 bg-clip-text text-transparent">Smart Tools</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Make informed decisions with our advanced tools
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tools.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <Card key={index} className="group hover-electric border-0 overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-gradient-primary group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-heading font-semibold mb-2">
                        {tool.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {tool.description}
                      </p>
                      <Button variant="ghost" className="text-primary hover:text-primary-foreground hover:bg-primary p-0 h-auto font-medium">
                        {tool.action} →
                      </Button>
                    </div>
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

export default SmartToolsSection;