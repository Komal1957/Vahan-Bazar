import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { GraduationCap } from 'lucide-react';
import RentForm from './RentForm';
import StudentBenefits from './StudentBenefits';

interface RentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const RentDialog = ({ open, onOpenChange }: RentDialogProps) => {
  const [currentStep, setCurrentStep] = useState<'benefits' | 'form'>('benefits');

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-black to-gray-900 text-gray-200 border border-golden/30 shadow-xl">
        <DialogHeader>
          <DialogTitle className="text-center text-3xl font-heading bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
            Rent Your Perfect Ride
          </DialogTitle>

          {/* Student Badge */}
          <div className="text-center mt-2">
            <Badge
              variant="secondary"
              className="bg-golden/20 border border-golden/40 text-golden font-semibold px-3 py-1"
            >
              <GraduationCap className="w-4 h-4 mr-1 text-golden" />
              Special Student Benefits Available
            </Badge>
          </div>
        </DialogHeader>

        {/* Animated step switcher */}
        <AnimatePresence mode="wait">
          {currentStep === 'benefits' ? (
            <motion.div
              key="benefits"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Benefits List */}
              <StudentBenefits />

              {/* Actions */}
              <div className="mt-8 flex gap-4 justify-center">
                {/* Secondary button */}
                <Button
                  variant="outline"
                  onClick={() => onOpenChange(false)}
<<<<<<< HEAD
                  className="px-8 bg-yellow-500 text-black border border-yellow-600 hover:bg-yellow-600 hover:text-white"
=======
                  className="px-8 bg-golden text-white hover:bg-yellow-500 "
>>>>>>> origin/features/pages
                >
                  Maybe Later
                </Button>

<<<<<<< HEAD

                <Button
                  onClick={() => setCurrentStep('form')}
                  className="px-8 bg-yellow-500 text-black border font-semibold hover:bg-yellow-600"
                >
                  Start Booking
                </Button>

           
=======
                {/* Golden CTA */}
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                  variant='outline'
                    onClick={() => setCurrentStep('form')}
                    className="px-8 bg-golden text-white hover:bg-yellow-500 hover:text-black"
                  >
                    Start Booking
                  </Button>
                </motion.div>
>>>>>>> origin/features/pages
              </div>
      </motion.div>
      ) : (
      <motion.div
        key="form"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
      >
        <RentForm onBack={() => setCurrentStep('benefits')} />
      </motion.div>
          )}
    </AnimatePresence>
      </DialogContent >
    </Dialog >
  );
};

export default RentDialog;