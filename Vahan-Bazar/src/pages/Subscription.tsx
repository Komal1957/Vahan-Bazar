import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Switch } from '../components/ui/switch';
import {
  Check,
  X,
  Crown,
  Zap,
  Shield,
  Star,
  Users,
  Headphones,
  FileText,
  IndianRupee
} from 'lucide-react';

const Subscription = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: 'Basic',
      description: 'Perfect for occasional buyers and sellers',
      icon: Users,
      monthlyPrice: 0,
      yearlyPrice: 0,
      color: 'muted',
      features: [
        { name: 'Browse unlimited listings', included: true },
        { name: 'Basic search filters', included: true },
        { name: 'Contact sellers directly', included: true },
        { name: 'Standard support', included: true },
        { name: 'Price comparison tool', included: false },
        { name: 'Advanced analytics', included: false },
        { name: 'Priority listing', included: false },
        { name: 'Verified badge', included: false }
      ],
      popular: false
    },
    {
      name: 'Premium',
      description: 'Best for active buyers and dealers',
      icon: Star,
      monthlyPrice: 299,
      yearlyPrice: 2990,
      color: 'primary',
      features: [
        { name: 'All Basic features', included: true },
        { name: 'Advanced search & filters', included: true },
        { name: 'Price comparison tool', included: true },
        { name: 'EMI calculator', included: true },
        { name: 'Priority customer support', included: true },
        { name: 'Listing analytics', included: true },
        { name: 'Verified seller badge', included: true },
        { name: 'Featured listings (5/month)', included: true }
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      description: 'For dealerships and businesses',
      icon: Crown,
      monthlyPrice: 999,
      yearlyPrice: 9990,
      color: 'accent',
      features: [
        { name: 'All Premium features', included: true },
        { name: 'Unlimited featured listings', included: true },
        { name: 'Advanced analytics dashboard', included: true },
        { name: 'Custom branding options', included: true },
        { name: 'Dedicated account manager', included: true },
        { name: 'API access for integrations', included: true },
        { name: 'Multi-location management', included: true },
        { name: '24/7 priority support', included: true }
      ],
      popular: false
    }
  ];

  const additionalFeatures = [
    {
      icon: Shield,
      title: 'Secure Transactions',
      description: 'All payments protected with bank-grade security'
    },
    {
      icon: Zap,
      title: 'Instant Updates',
      description: 'Real-time notifications for your listings and interests'
    },
    {
      icon: Headphones,
      title: 'Expert Support',
      description: 'Get help from our two-wheeler specialists'
    },
    {
      icon: FileText,
      title: 'Documentation Help',
      description: 'Assistance with RC transfer and other paperwork'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="bg-gray-900 py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Choose Your
              <span className="bg-gradient-to-r from-[#FFD700] to-[#B8860B] bg-clip-text text-transparent"> Perfect Plan</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Unlock premium features to enhance your buying and selling experience.
              Get verified badges, priority support, and advanced tools.
            </p>

            {/* Billing Toggle */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-4 bg-gray-800 rounded-full p-2"
          >
            <span className={`${!isYearly ? 'text-yellow-500' : 'text-gray-400'} px-4 py-2`}>
              Monthly
            </span>
            <Switch
              checked={isYearly}
              onCheckedChange={setIsYearly}
              className="data-[state=checked]:bg-yellow-500"
            />
            <span className={`${isYearly ? 'text-yellow-500' : 'text-gray-400'} px-4 py-2`}>
              Yearly
              <Badge className="ml-2 bg-yellow-500 text-black">Save 17%</Badge>
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>

  {/* Pricing Plans */}
  <section className="py-20 bg-black">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{
              scale: plan.popular ? 1.05 : 1.02,
              boxShadow: plan.popular
                ? "0 20px 40px -10px rgba(255, 215, 0, 0.4)" // Golden glow
                : "0 10px 20px -5px rgba(192,192,192,0.2)"  // Silver glow
            }}
            className={`relative ${plan.popular ? 'lg:-mt-4 lg:mb-4' : ''}`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-yellow-500 text-black px-4 py-1 text-sm font-semibold">
                  Most Popular
                </Badge>
              </div>
            )}

            <Card className={`h-full bg-gray-900 border border-gray-700 ${plan.popular ? 'border-yellow-500 shadow-xl' : ''}`}>
              <CardHeader className="text-center pb-8">
                <div className="flex justify-center mb-4">
                  <motion.div
                    className={`p-4 rounded-full ${plan.color === 'primary'
                      ? 'bg-yellow-500'
                      : plan.color === 'accent'
                        ? 'bg-gray-400'
                        : 'bg-gray-700'
                      }`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <plan.icon className="w-8 h-8 text-black" />
                  </motion.div>
                </div>

                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <p className="text-gray-400 mt-2">{plan.description}</p>

                <div className="mt-6">
                  <div className="flex items-center justify-center">
                    <IndianRupee className="w-6 h-6 text-gray-400" />
                    <span className="text-5xl font-bold text-yellow-500">
                      {isYearly ? Math.round(plan.yearlyPrice / 12) : plan.monthlyPrice}
                    </span>
                    <span className="text-gray-400 ml-1">/month</span>
                  </div>

                  {isYearly && plan.yearlyPrice > 0 && (
                    <div className="mt-2">
                      <span className="text-sm text-gray-500 line-through">
                        ₹{plan.monthlyPrice * 12}
                      </span>
                      <span className="text-sm text-green-500 ml-2">
                        Save ₹{(plan.monthlyPrice * 12) - plan.yearlyPrice}
                      </span>
                    </div>
                  )}
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (index * 0.1) + (i * 0.05) }}
                      className="flex items-center gap-3"
                    >
                      <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${feature.included
                        ? 'bg-yellow-500 text-black'
                        : 'bg-gray-700 text-gray-400'
                        }`}>
                        {feature.included ? (
                          <Check className="w-3 h-3" />
                        ) : (
                          <X className="w-3 h-3" />
                        )}
                      </div>
                      <span className={`text-sm ${feature.included ? 'text-white' : 'text-gray-400'
                        }`}>
                        {feature.name}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    className={`w-full ${plan.popular
                      ? 'bg-gradient-to-r from-[#FFD700] to-[#B8860B] text-black hover:opacity-90'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      }`}
                    size="lg"
                  >
                    {plan.monthlyPrice === 0 ? 'Get Started' : 'Choose Plan'}
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>

  {/* Additional Features */}
  <section className="py-20 bg-gray-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-500">
          What You Get With Every Plan
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          All our plans come with these essential features to ensure a smooth
          and secure two-wheeler marketplace experience.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {additionalFeatures.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="text-center"
          >
            <motion.div
              className="mx-auto mb-4 p-4 bg-yellow-500 rounded-full w-16 h-16 flex items-center justify-center"
              whileHover={{ scale: 1.1, rotate: 15 }}
            >
              <feature.icon className="w-8 h-8 text-black" />
            </motion.div>
            <h3 className="font-semibold mb-2 text-white">{feature.title}</h3>
            <p className="text-sm text-gray-400">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>

  {/* FAQ Section */}
  <section className="py-20 bg-black">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-500">
          Frequently Asked Questions
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-300">
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold mb-2 text-white">Can I change my plan anytime?</h4>
            <p className="text-sm text-gray-400">
              Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-white">Is there a free trial?</h4>
            <p className="text-sm text-gray-400">
              Yes, all paid plans come with a 7-day free trial. No credit card required to start.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-white">What payment methods are accepted?</h4>
            <p className="text-sm text-gray-400">
              We accept all major credit cards, debit cards, UPI, and net banking.
            </p>
          </div>
        </div>
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold mb-2 text-white">Do you offer refunds?</h4>
            <p className="text-sm text-gray-400">
              Yes, we offer a 30-day money-back guarantee if you're not satisfied with your plan.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-white">Is customer support included?</h4>
            <p className="text-sm text-gray-400">
              All plans include customer support. Premium and Enterprise get priority support.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-white">Can I cancel anytime?</h4>
            <p className="text-sm text-gray-400">
              Yes, you can cancel your subscription anytime. Your plan remains active until the billing period ends.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* CTA Section */}
  <section className="py-20 bg-gray-900 text-white">
    <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-yellow-500">
          Ready to Get Started?
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          Join thousands of satisfied users who've upgraded their two-wheeler experience with us.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button size="lg" variant="outline" className="px-8 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black">
              Start Free Trial
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button size="lg" className="px-8 bg-gradient-to-r from-[#FFD700] to-[#B8860B] text-black hover:opacity-90">
              Contact Sales
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </section>
    </div>
  );
};

export default Subscription;
