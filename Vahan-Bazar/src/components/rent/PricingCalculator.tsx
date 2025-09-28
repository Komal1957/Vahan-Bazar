import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { IndianRupee, Percent, Gift } from 'lucide-react';

interface PricingCalculatorProps {
  bikeType: string;
  duration: string;
  isStudent: boolean;
  pickupLocation: string;
  showDetailed?: boolean;
}

const PricingCalculator = ({ 
  bikeType, 
  duration, 
  isStudent, 
  pickupLocation, 
  showDetailed = false 
}: PricingCalculatorProps) => {
  // Base prices per day
  const basePrices: Record<string, number> = {
    scooter: 500,
    commuter: 700,
    sports: 1200,
    ev: 600
  };

  // Duration multipliers and discounts
  const durationConfig: Record<string, { days: number; discount: number; studentDiscount: number }> = {
    daily: { days: 1, discount: 0, studentDiscount: 0.05 },
    weekly: { days: 7, discount: 0.1, studentDiscount: 0.15 },
    monthly: { days: 30, discount: 0.2, studentDiscount: 0.25 }
  };

  // Calculate pricing
  const calculatePrice = () => {
    if (!bikeType || !duration) {
      return { basePrice: 0, discount: 0, studentDiscount: 0, deliveryFee: 0, finalPrice: 0 };
    }

    const basePrice = basePrices[bikeType] || 0;
    const config = durationConfig[duration] || { days: 1, discount: 0, studentDiscount: 0 };
    
    const subtotal = basePrice * config.days;
    const durationDiscount = subtotal * config.discount;
    const studentDiscount = isStudent ? subtotal * config.studentDiscount : 0;
    const deliveryFee = pickupLocation === 'home' ? 200 : 0;
    
    const finalPrice = subtotal - durationDiscount - studentDiscount + deliveryFee;

    return {
      basePrice: subtotal,
      discount: durationDiscount,
      studentDiscount,
      deliveryFee,
      finalPrice,
      config
    };
  };

  const pricing = calculatePrice();

  if (!bikeType || !duration) {
    return (
      <Card className="border-dashed border-golden bg-black/80 text-gray-300">
        <CardContent className="p-6 text-center">
          Select bike type and duration to see pricing
        </CardContent>
      </Card>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="border-golden/40 bg-gradient-to-br from-black to-gray-900 text-gray-200 shadow-xl">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-golden">
            <IndianRupee className="w-5 h-5 text-golden" />
            {showDetailed ? 'Final Pricing Breakdown' : 'Live Pricing Calculator'}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Base Price */}
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-400">
              Base Price ({pricing.config?.days} {pricing.config?.days === 1 ? 'day' : 'days'})
            </span>
            <span className="font-semibold text-white">₹{pricing.basePrice.toLocaleString()}</span>
          </div>

          {/* Duration Discount */}
          {pricing.discount > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-between items-center text-green-400"
            >
              <span className="text-sm flex items-center gap-1">
                <Percent className="w-3 h-3" />
                Duration Discount ({(pricing.config?.discount ? pricing.config.discount * 100 : 0)}%)
              </span>
              <span className="font-semibold">-₹{pricing.discount.toLocaleString()}</span>
            </motion.div>
          )}

          {/* Student Discount */}
          {pricing.studentDiscount > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex justify-between items-center text-golden"
            >
              <span className="text-sm flex items-center gap-1">
                <Gift className="w-3 h-3" />
                Student Discount ({(pricing.config?.studentDiscount ? pricing.config.studentDiscount * 100 : 0)}%)
              </span>
              <span className="font-semibold">-₹{pricing.studentDiscount.toLocaleString()}</span>
            </motion.div>
          )}

          {/* Delivery Fee */}
          {pricing.deliveryFee > 0 && (
            <div className="flex justify-between items-center text-gray-400">
              <span className="text-sm">Home Delivery Fee</span>
              <span className="font-semibold">+₹{pricing.deliveryFee}</span>
            </div>
          )}

          {/* Total */}
          <div className="border-t border-golden/20 pt-4">
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold text-gray-200">Total Amount</span>
              <motion.span
                className="text-2xl font-bold text-golden"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 0.5 }}
              >
                ₹{pricing.finalPrice.toLocaleString()}
              </motion.span>
            </div>
          </div>

          {/* Savings Badge */}
          {(pricing.discount > 0 || pricing.studentDiscount > 0) && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <Badge variant="secondary" className="bg-golden/20 border border-golden text-golden text-sm px-3 py-1">
                🎉 You're saving ₹{(pricing.discount + pricing.studentDiscount).toLocaleString()}!
              </Badge>
            </motion.div>
          )}

          {/* Additional Info */}
          {showDetailed && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-6 p-4 bg-gray-800/60 rounded-lg border border-golden/20"
            >
              <h5 className="font-semibold text-sm mb-2 text-golden">What's Included:</h5>
              <ul className="text-xs space-y-1 text-gray-400">
                <li>✓ Bike with full fuel tank</li>
                <li>✓ Free helmet and safety gear</li>
                <li>✓ 24/7 roadside assistance</li>
                <li>✓ Insurance coverage</li>
                {isStudent && <li>✓ Campus pickup/drop-off</li>}
                {pickupLocation === 'home' && <li>✓ Home delivery service</li>}
              </ul>
            </motion.div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default PricingCalculator;