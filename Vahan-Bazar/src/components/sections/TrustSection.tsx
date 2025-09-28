import { Card, CardContent } from '../ui/card';
import { Shield, CreditCard, TrendingUp, Clock, Users, Award } from 'lucide-react';

const TrustSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Verified Dealers",
      description: "All dealers are background-checked and certified"
    },
    {
      icon: CreditCard,
      title: "Secure Payments",
      description: "Bank-grade security for all transactions"
    },
    {
      icon: TrendingUp,
      title: "Easy Financing",
      description: "Instant loan approval with competitive rates"
    },
    {
      icon: Clock,
      title: "Real-Time Updates",
      description: "Live inventory and price updates"
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "24/7 customer service and guidance"
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Thorough inspection of all vehicles"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Why Choose <span className="text-4xl font-extrabold bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-700 bg-clip-text text-transparent">Vahan Bazar</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of satisfied customers who trust us for their two-wheeler needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="group hover-glow border-0 text-center">
                <CardContent className="p-8">
                  <div className="inline-flex p-4 rounded-2xl bg-gradient-primary mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50K+</div>
            <div className="text-muted-foreground">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">200+</div>
            <div className="text-muted-foreground">Verified Dealers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">15K+</div>
            <div className="text-muted-foreground">Bikes Sold</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">25+</div>
            <div className="text-muted-foreground">Cities Covered</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;