import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Mail, Lock, User, Phone, Eye, EyeOff, ArrowLeft, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface LoginDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

type AuthStep = 'auth' | 'otp';

const LoginDialog = ({ open, onOpenChange }: LoginDialogProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [currentStep, setCurrentStep] = useState<AuthStep>('auth');
  const [activeTab, setActiveTab] = useState('login');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [generatedOtp, setGeneratedOtp] = useState('');
  const [countdown, setCountdown] = useState(0);
  const [userEmail, setUserEmail] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const { toast } = useToast();

  // Generate OTP
  const generateOTP = () => {
    const newOtp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(newOtp);
    return newOtp;
  };

  // Start countdown timer
  const startCountdown = () => {
    setCountdown(60);
  };

  // Countdown effect
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  // Handle OTP input
  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  // Handle OTP backspace
  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      prevInput?.focus();
    }
  };

  // Send OTP
  const sendOTP = (email: string, phone?: string) => {
    const newOtp = generateOTP();
    setUserEmail(email);
    if (phone) setUserPhone(phone);

    // Simulate sending OTP (API call here in real app)
    toast({
      title: "OTP Sent!",
      description: `Verification code sent to ${email}${phone ? ` and ${phone}` : ''}. Code: ${newOtp}`,
    });

    setCurrentStep('otp');
    startCountdown();
  };

  // Verify OTP
  const verifyOTP = () => {
    const enteredOtp = otp.join('');
    if (enteredOtp === generatedOtp) {
      toast({
        title: "Success!",
        description: "OTP verified successfully. Welcome to Vahan Bazar!",
      });
      onOpenChange(false);

      // Reset states
      setCurrentStep('auth');
      setOtp(['', '', '', '', '', '']);
      setGeneratedOtp('');
      setCountdown(0);
    } else {
      toast({
        title: "Invalid OTP",
        description: "Please check the code and try again.",
        variant: "destructive",
      });
    }
  };

  // Resend OTP
  const resendOTP = () => {
    if (countdown === 0) {
      const newOtp = generateOTP();
      toast({
        title: "OTP Resent!",
        description: `New verification code: ${newOtp}`,
      });
      startCountdown();
    }
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;

    if (activeTab === 'register') {
      sendOTP(email, phone);
    } else {
      sendOTP(email);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-[#0A0A0C] border border-[#FFD700]/30 rounded-xl shadow-2xl">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold bg-gradient-to-r from-[#FFD700] to-[#B8860B] bg-clip-text text-transparent">
            {currentStep === 'auth' ? 'Welcome to Vahan Bazar' : 'Verify Your Account'}
          </DialogTitle>
        </DialogHeader>

        {currentStep === 'auth' ? (
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full mt-4">
            <TabsList className="grid w-full grid-cols-2 bg-[#1A1D23] border border-[#FFD700]/20 rounded-lg">
              <TabsTrigger
                value="login"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#FFD700] data-[state=active]:to-[#B8860B] data-[state=active]:text-black text-[#B0B3C6]"
              >
                Login
              </TabsTrigger>
              <TabsTrigger
                value="register"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#FFD700] data-[state=active]:to-[#B8860B] data-[state=active]:text-black text-[#B0B3C6]"
              >
                Register
              </TabsTrigger>
            </TabsList>

            {/* Login Tab */}
            <TabsContent value="login" className="space-y-4 pt-4">
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
                onSubmit={handleSubmit}
              >
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-[#FFD700]">
                    Email
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-[#B0B3C6]" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      required
                      className="pl-10 bg-[#1A1D23] border border-[#FFD700]/30 text-white placeholder:text-[#6C6F82] focus:ring-1 focus:ring-[#FFD700]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-[#FFD700]">
                    Password
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-[#B0B3C6]" />
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Enter your password"
                      required
                      className="pl-10 pr-10 bg-[#1A1D23] border border-[#FFD700]/30 text-white placeholder:text-[#6C6F82] focus:ring-1 focus:ring-[#FFD700]"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-3 h-4 w-4 text-[#B0B3C6] hover:text-[#FFD700] transition-colors"
                    >
                      {showPassword ? <EyeOff /> : <Eye />}
                    </button>
                  </div>
                </div>

                <Button type="submit" className="w-full bg-gradient-to-r from-[#FFD700] to-[#B8860B] text-black font-semibold hover:opacity-90">
                  Login
                </Button>
              </motion.form>
            </TabsContent>

            {/* Register Tab */}
            <TabsContent value="register" className="space-y-4 pt-4">
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
                onSubmit={handleSubmit}
              >
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-[#FFD700]">
                    Full Name
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-[#B0B3C6]" />
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter your full name"
                      required
                      className="pl-10 bg-[#1A1D23] border border-[#FFD700]/30 text-white placeholder:text-[#6C6F82] focus:ring-1 focus:ring-[#FFD700]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-[#FFD700]">
                    Phone Number
                  </Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-4 w-4 text-[#B0B3C6]" />
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      required
                      className="pl-10 bg-[#1A1D23] border border-[#FFD700]/30 text-white placeholder:text-[#6C6F82] focus:ring-1 focus:ring-[#FFD700]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="register-email" className="text-[#FFD700]">
                    Email
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-[#B0B3C6]" />
                    <Input
                      id="register-email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      required
                      className="pl-10 bg-[#1A1D23] border border-[#FFD700]/30 text-white placeholder:text-[#6C6F82] focus:ring-1 focus:ring-[#FFD700]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="register-password" className="text-[#FFD700]">
                    Password
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-[#B0B3C6]" />
                    <Input
                      id="register-password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Create a password"
                      required
                      className="pl-10 pr-10 bg-[#1A1D23] border border-[#FFD700]/30 text-white placeholder:text-[#6C6F82] focus:ring-1 focus:ring-[#FFD700]"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-3 h-4 w-4 text-[#B0B3C6] hover:text-[#FFD700] transition-colors"
                    >
                      {showPassword ? <EyeOff /> : <Eye />}
                    </button>
                  </div>
                </div>

                <Button type="submit" className="w-full bg-gradient-to-r from-[#FFD700] to-[#B8860B] text-black font-semibold hover:opacity-90">
                  Create Account
                </Button>
              </motion.form>
            </TabsContent>
          </Tabs>
        ) : (
          // OTP Verification
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6 pt-4">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-gradient-to-r from-[#FFD700] to-[#B8860B] rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-6 w-6 text-black" />
              </div>
              <p className="text-[#B0B3C6] text-sm">We've sent a verification code to</p>
              <p className="text-white font-medium">{userEmail}</p>
              {userPhone && <p className="text-white font-medium">{userPhone}</p>}
            </div>

            <div className="space-y-4">
              <div className="flex justify-center space-x-2">
                {otp.map((digit, index) => (
                  <Input
                    key={index}
                    id={`otp-${index}`}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    onKeyDown={(e) => handleOtpKeyDown(index, e)}
                    className="w-12 h-12 text-center text-lg font-bold bg-[#1A1D23] border border-[#FFD700]/30 text-white focus:ring-1 focus:ring-[#FFD700]"
                  />
                ))}
              </div>

              <Button
                onClick={verifyOTP}
                disabled={otp.some((digit) => !digit)}
                className="w-full bg-gradient-to-r from-[#FFD700] to-[#B8860B] text-black font-semibold hover:opacity-90 disabled:opacity-50"
              >
                Verify OTP
              </Button>
            </div>

            <div className="text-center space-y-2">
              <p className="text-[#B0B3C6] text-sm">Didn't receive the code?</p>
              <button
                onClick={resendOTP}
                disabled={countdown > 0}
                className="text-[#FFD700] hover:underline disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium"
              >
                {countdown > 0 ? (
                  <span className="flex items-center justify-center gap-1">
                    <Clock className="h-4 w-4" />
                    Resend in {countdown}s
                  </span>
                ) : (
                  'Resend Code'
                )}
              </button>
            </div>

            <button
              onClick={() => setCurrentStep('auth')}
              className="flex items-center justify-center w-full text-[#B0B3C6] hover:text-[#FFD700] transition-colors text-sm"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Login
            </button>
          </motion.div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;
