import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { 
  GraduationCap, 
  Percent, 
  Clock, 
  Shield, 
  MapPin, 
  Headphones, 
  Calendar,
  CreditCard,
  Users
} from 'lucide-react';

const StudentBenefits = () => {
  const benefits = [
    {
      icon: Percent,
      title: '20% Monthly Discount',
      description: 'Save big on monthly rentals with valid student ID',
      highlight: '₹2,000 savings/month'
    },
    {
      icon: Calendar,
      title: '15% Weekly Discount',
      description: 'Short-term rentals for campus events and trips',
      highlight: '₹500 savings/week'
    },
    {
      icon: Shield,
      title: 'Free Safety Gear',
      description: 'Complimentary helmet and safety equipment included',
      highlight: 'Worth ₹1,500'
    },
    {
      icon: MapPin,
      title: 'Campus Pickup/Drop',
      description: 'Convenient pickup and drop-off at your college',
      highlight: 'Free service'
    },
    {
      icon: Clock,
      title: 'Flexible Returns',
      description: 'Extended return window for exam periods',
      highlight: '48-hour grace'
    },
    {
      icon: Headphones,
      title: '24/7 Student Support',
      description: 'Dedicated helpline for student emergencies',
      highlight: 'Always available'
    }
  ];

  const eligibleInstitutions = [
    'IIT/NIT/IIIT', 'State Universities', 'Private Colleges', 
    'Technical Institutes', 'Diploma Colleges', 'Research Centers'
  ];

  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4 p-6 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-xl"
      >
        <div className="flex justify-center">
          <motion.div
            animate={{ rotate: [0, -10, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            className="p-3 bg-primary rounded-full"
          >
            <GraduationCap className="w-8 h-8 text-white" />
          </motion.div>
        </div>
        
        <h3 className="text-2xl font-bold font-heading">
          Exclusive Student Benefits
        </h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          We understand student life! Get special discounts, flexible terms, and dedicated support 
          to make your campus commute affordable and convenient.
        </p>
      </motion.div>

      {/* Benefits Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {benefits.map((benefit, index) => (
          <motion.div
            key={benefit.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ 
              scale: 1.05, 
              rotateY: 5,
              boxShadow: "0 20px 40px -10px rgba(0, 123, 255, 0.3)"
            }}
            className="group"
          >
            <Card className="h-full hover:shadow-electric transition-all duration-300 border-2 hover:border-primary/20">
              <CardContent className="p-4 space-y-3">
                <div className="flex items-start gap-3">
                  <motion.div
                    className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-white transition-colors"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <benefit.icon className="w-5 h-5" />
                  </motion.div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm">{benefit.title}</h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      {benefit.description}
                    </p>
                  </div>
                </div>
                <Badge variant="secondary" className="bg-accent/10 text-accent text-xs">
                  {benefit.highlight}
                </Badge>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Eligibility Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="bg-card rounded-xl p-6 border"
      >
        <div className="flex items-center gap-3 mb-4">
          <Users className="w-6 h-6 text-primary" />
          <h4 className="text-lg font-semibold">Who's Eligible?</h4>
        </div>
        
        {/* White text with Yellow hover buttons */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {eligibleInstitutions.map((institution, index) => {
            const isLastTwo = index >= eligibleInstitutions.length - 2;
            return (
              <motion.button
                key={institution}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.08 }}
                className={`px-6 py-2 rounded-full border transition-all duration-300
                  ${isLastTwo 
                    ? "border-white text-white hover:text-yellow-400 hover:border-yellow-400" 
                    : "border-white text-white hover:text-yellow-400 hover:border-yellow-400"
                  }`}
              >
                {institution}
              </motion.button>
            );
          })}
        </div>
        
        <div className="mt-4 p-3 bg-accent/5 rounded-lg">
          <p className="text-sm text-muted-foreground flex items-start gap-2">
            <CreditCard className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
            <span>
              <strong>Required Documents:</strong> Valid Student ID, College Admission Letter, 
              and Government Photo ID. Additional verification may be required.
            </span>
          </p>
        </div>
      </motion.div>

      {/* Quick Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="grid grid-cols-3 gap-4 text-center"
      >
        <div className="space-y-1">
          <motion.div 
            className="text-2xl font-bold text-primary"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 4 }}
          >
            5,000+
          </motion.div>
          <div className="text-sm text-muted-foreground">Students Served</div>
        </div>
        <div className="space-y-1">
          <motion.div 
            className="text-2xl font-bold text-accent"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 4, delay: 0.5 }}
          >
            ₹15,000
          </motion.div>
          <div className="text-sm text-muted-foreground">Avg. Savings/Year</div>
        </div>
        <div className="space-y-1">
          <motion.div 
            className="text-2xl font-bold text-secondary"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 4, delay: 1 }}
          >
            98%
          </motion.div>
          <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
        </div>
      </motion.div>
    </div>
  );
};

export default StudentBenefits;