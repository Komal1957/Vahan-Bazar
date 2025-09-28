import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Checkbox } from '../ui/checkbox';
import { Calendar } from "../ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { format } from 'date-fns';
import {
  ArrowLeft,
  ArrowRight,
  User,
  GraduationCap,
  Calendar as CalendarIcon,
  CheckCircle,
  Bike
} from 'lucide-react';
import PricingCalculator from './PricingCalculator';

interface RentFormProps {
  onBack: () => void;
}

const RentForm = ({ onBack }: RentFormProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isStudent, setIsStudent] = useState(false);
  const [formData, setFormData] = useState({
    // Personal Info
    name: '',
    email: '',
    phone: '',
    address: '',
    emergencyContact: '',
    licenseNumber: '',
    aadhaarNumber: '',
    hasLicense: false,

    // Student Info
    studentId: '',
    institution: '',
    course: '',
    graduationYear: '',

    // Rental Details
    bikeType: '',
    duration: '',
    pickupDate: undefined as Date | undefined,
    pickupLocation: '',
  });

  const steps = [
    { number: 1, title: 'Personal Info', icon: User },
    { number: 2, title: 'Student Details', icon: GraduationCap },
    { number: 3, title: 'Rental Details', icon: Bike },
    { number: 4, title: 'Review & Pay', icon: CheckCircle }
  ];

  const bikeOptions = [
    { value: 'scooter', label: 'Scooter (₹500/day)', price: 500 },
    { value: 'commuter', label: 'Commuter Bike (₹700/day)', price: 700 },
    { value: 'sports', label: 'Sports Bike (₹1200/day)', price: 1200 },
    { value: 'ev', label: 'Electric Scooter (₹600/day)', price: 600 }
  ];

  const nextStep = () => {
    if (!isStudent && currentStep === 1) {
      setCurrentStep(3);
    } else if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (!isStudent && currentStep === 3) {
      setCurrentStep(1);
    } else if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const stepVariants = {
    enter: { opacity: 0, x: 50 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 }
  };

  return (
    <div className="space-y-6">
      {/* Progress Bar */}
      <div className="flex justify-between items-center">
        <Button variant="ghost" onClick={onBack} className="flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" />
          Back to Benefits
        </Button>

        <div className="flex items-center gap-2">
          {steps.map((step) => {
            const isActive = step.number === currentStep;
            const isCompleted = step.number < currentStep;
            const isSkipped = !isStudent && step.number === 2;

            return (
              <motion.div
                key={step.number}
                className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm ${isActive
                    ? 'bg-primary text-white'
                    : isCompleted
                      ? 'bg-primary/20 text-primary'
                      : isSkipped
                        ? 'bg-muted text-muted-foreground opacity-50'
                        : 'bg-muted text-muted-foreground'
                  }`}
                whileHover={{ scale: 1.05 }}
              >
                <step.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{step.title}</span>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Form Steps */}
      <div className="min-h-[500px]">
        <AnimatePresence mode="wait">
          {/* Step 1: Personal Information */}
          {currentStep === 1 && (
            <motion.div
              key="step1"
              variants={stepVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              <Card className="bg-black border border-golden text-white shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 bg-gradient-to-r from-golden to-yellow-500 bg-clip-text text-yellow-500">
                    <User className="w-5 h-5 text-yellow-500" />
                    Personal Information
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-golden">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Enter your full name"
                        className="bg-black border border-golden/50 text-white placeholder-gray-400 focus:border-golden focus:ring-1 focus:ring-golden"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-golden">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Enter your email"
                        className="bg-black border border-golden/50 text-white placeholder-gray-400 focus:border-golden focus:ring-1 focus:ring-golden"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-golden">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Enter your phone number"
                        className="bg-black border border-golden/50 text-white placeholder-gray-400 focus:border-golden focus:ring-1 focus:ring-golden"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="emergency" className="text-golden">Emergency Contact</Label>
                      <Input
                        id="emergency"
                        value={formData.emergencyContact}
                        onChange={(e) => setFormData({ ...formData, emergencyContact: e.target.value })}
                        placeholder="Emergency contact number"
                        className="bg-black border border-golden/50 text-white placeholder-gray-400 focus:border-golden focus:ring-1 focus:ring-golden"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="licenseNumber" className="text-golden">License Number *</Label>
                      <Input
                        id="licenseNumber"
                        value={formData.licenseNumber}
                        onChange={(e) => setFormData({ ...formData, licenseNumber: e.target.value })}
                        placeholder="Enter your license number"
                        className="bg-black border border-golden/50 text-white placeholder-gray-400 focus:border-golden focus:ring-1 focus:ring-golden"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="aadhaarNumber" className="text-golden">Aadhaar Number *</Label>
                      <Input
                        id="aadhaarNumber"
                        value={formData.aadhaarNumber}
                        onChange={(e) => setFormData({ ...formData, aadhaarNumber: e.target.value })}
                        placeholder="Enter your Aadhaar number"
                        className="bg-black border border-golden/50 text-white placeholder-gray-400 focus:border-golden focus:ring-1 focus:ring-golden"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address" className="text-golden">Address *</Label>
                    <Input
                      id="address"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      placeholder="Enter your full address"
                      className="bg-black border border-golden/50 text-white placeholder-gray-400 focus:border-golden focus:ring-1 focus:ring-golden"
                    />
                  </div>
                  {/* Student Status */}
                  <motion.div
                    className="p-4 border rounded-lg bg-accent/5"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="student"
                        checked={isStudent}
                        onCheckedChange={(checked) => setIsStudent(!!checked)}
                      />
                      <Label htmlFor="student" className="flex items-center gap-2 cursor-pointer">
                        <GraduationCap className="w-4 h-4 text-accent" />
                        I am a student (Get 15-20% discount!)
                      </Label>
                    </div>
                    {isStudent && (
                      <Badge variant="secondary" className="mt-2 bg-accent/10 text-accent">
                        🎉 Student benefits will be applied!
                      </Badge>
                    )}
                  </motion.div>

                </CardContent>
              </Card>
            </motion.div>
          )}
   {/* Step 2: Student Details (only if student) */}
{currentStep === 2 && isStudent && (
  <motion.div
    key="step2"
    variants={stepVariants}
    initial="enter"
    animate="center"
    exit="exit"
    transition={{ duration: 0.3 }}
  >
    <Card className="bg-black border border-golden text-white shadow-lg">
      <CardHeader>
        {/* Heading with golden solid color (instead of gradient text) */}
        <CardTitle className="flex items-center gap-2 text-yellow-500 font-bold text-xl">
          <GraduationCap className="w-5 h-5 text-yellow-500" />
          Student Verification
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Inputs same as before */}
          <div className="space-y-2">
            <Label htmlFor="studentId" className="text-golden">Student ID *</Label>
            <Input
              id="studentId"
              value={formData.studentId}
              onChange={(e) => setFormData({ ...formData, studentId: e.target.value })}
              placeholder="Enter your student ID"
              className="bg-black border border-golden/60 text-white placeholder-gray-400 focus:border-golden focus:ring-1 focus:ring-golden"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="institution" className="text-golden">Institution *</Label>
            <Input
              id="institution"
              value={formData.institution}
              onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
              placeholder="College/University name"
              className="bg-black border border-golden/60 text-white placeholder-gray-400 focus:border-golden focus:ring-1 focus:ring-golden"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="course" className="text-golden">Course/Degree *</Label>
            <Input
              id="course"
              value={formData.course}
              onChange={(e) => setFormData({ ...formData, course: e.target.value })}
              placeholder="e.g., B.Tech Computer Science"
              className="bg-black border border-golden/60 text-white placeholder-gray-400 focus:border-golden focus:ring-1 focus:ring-golden"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="graduation" className="text-golden">Expected Graduation *</Label>
            <Select
              value={formData.graduationYear}
              onValueChange={(value) => setFormData({ ...formData, graduationYear: value })}
            >
<<<<<<< HEAD
              <SelectTrigger className="bg-black border border-golden/60 text-white focus:border-golden focus:ring-1 focus:ring-golden">
                <SelectValue placeholder="Select year" />
              </SelectTrigger>
              <SelectContent className="bg-black border border-golden text-white">
                <SelectItem value="2024" className="hover:bg-golden hover:text-black">2024</SelectItem>
                <SelectItem value="2025" className="hover:bg-golden hover:text-black">2025</SelectItem>
                <SelectItem value="2026" className="hover:bg-golden hover:text-black">2026</SelectItem>
                <SelectItem value="2027" className="hover:bg-golden hover:text-black">2027</SelectItem>
                <SelectItem value="2028" className="hover:bg-golden hover:text-black">2028</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Student Benefits Section */}
        <motion.div
          className="p-4 border border-golden/60 rounded-lg bg-black/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {/* Heading in golden solid */}
          <h4 className="font-semibold text-yellow-500 mb-3 flex items-center gap-2 text-lg">
            <CheckCircle className="w-4 h-4 text-golden" />
            Your Student Benefits
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-300">
            {/* Gold Badges with black text for strong contrast */}
            <div className="flex items-center gap-2">
              <Badge className="bg-yellow-500 text-black font-bold px-2 py-1">20% OFF</Badge>
              <span>Monthly rentals</span>
            </div>
            <div className="flex items-center gap-2">
              <Badge className="bg-yellow-500 text-black font-bold px-2 py-1">15% OFF</Badge>
              <span>Weekly rentals</span>
            </div>
            <div className="flex items-center gap-2">
              <Badge className="bg-yellow-500 text-black font-bold px-2 py-1">FREE</Badge>
              <span>Safety gear</span>
            </div>
            <div className="flex items-center gap-2">
              <Badge className="bg-yellow-500 text-black font-bold px-2 py-1">FREE</Badge>
              <span>Campus pickup</span>
            </div>
          </div>
        </motion.div>
      </CardContent>
    </Card>
  </motion.div>
)}


=======
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="w-5 h-5" />
                    Student Verification
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="studentId">Student ID *</Label>
                      <Input
                        id="studentId"
                        value={formData.studentId}
                        onChange={(e) => setFormData({...formData, studentId: e.target.value})}
                        placeholder="Enter your student ID" 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="institution">Institution *</Label>
                      <Input
                        id="institution"
                        value={formData.institution}
                        onChange={(e) => setFormData({...formData, institution: e.target.value})}
                        placeholder="College/University name"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="course">Course/Degree *</Label>
                      <Input
                        id="course"
                        value={formData.course}
                        onChange={(e) => setFormData({...formData, course: e.target.value})}
                        placeholder="e.g., B.Tech Computer Science"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="graduation">Expected Graduation *</Label>
                      <Select
                        value={formData.graduationYear}
                        onValueChange={(value) => setFormData({...formData, graduationYear: value})}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select year" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="2024">2024</SelectItem>
                          <SelectItem value="2025">2025</SelectItem>
                          <SelectItem value="2026">2026</SelectItem>
                          <SelectItem value="2027">2027</SelectItem>
                          <SelectItem value="2028">2028</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
>>>>>>> origin/features/pages


          {/* Step 3: Rental Details */}
          {currentStep === 3 && (
            <motion.div
              key="step3"
              variants={stepVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              <Card className="bg-black text-white border border-yellow-600/40">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                    <Bike className="w-5 h-5 text-yellow-500" />
                    Rental Details
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Bike Type */}
                    <div className="space-y-2">
                      <Label className="text-white">Select Bike Type *</Label>
                      <Select
                        value={formData.bikeType}
                        onValueChange={(value) => setFormData({ ...formData, bikeType: value })}
                      >
                        <SelectTrigger className="bg-black text-white border border-yellow-600/50 focus:ring-2 focus:ring-yellow-500">
                          <SelectValue placeholder="Choose your bike" />
                        </SelectTrigger>
                        <SelectContent className="bg-black text-white border border-yellow-600/40">
                          {bikeOptions.map((option) => (
                            <SelectItem
                              key={option.value}
                              value={option.value}
                              className="hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-600 hover:text-black"
                            >
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Rental Duration */}
                    <div className="space-y-2">
                      <Label className="text-white">Rental Duration *</Label>
                      <Select
                        value={formData.duration}
                        onValueChange={(value) => setFormData({ ...formData, duration: value })}
                      >
                        <SelectTrigger className="bg-black text-white border border-yellow-600/50 focus:ring-2 focus:ring-yellow-500">
                          <SelectValue placeholder="Select duration" />
                        </SelectTrigger>
                        <SelectContent className="bg-black text-white border border-yellow-600/40">
                          <SelectItem value="daily" className="hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-600 hover:text-black">
                            Daily (1-6 days)
                          </SelectItem>
                          <SelectItem value="weekly" className="hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-600 hover:text-black">
                            Weekly (1-3 weeks)
                          </SelectItem>
                          <SelectItem value="monthly" className="hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-600 hover:text-black">
                            Monthly (1+ months)
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Pickup Date */}
                    <div className="space-y-2">
                      <Label className="text-white">Pickup Date *</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start text-left font-normal bg-black text-white border border-yellow-600/50 hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-600 hover:text-black"
                          >
                            <CalendarIcon className="mr-2 h-4 w-4 text-yellow-500" />
                            {formData.pickupDate
                              ? format(formData.pickupDate, "PPP")
                              : "Pick a date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 bg-black text-white border border-yellow-600/40">
                          <Calendar
                            mode="single"
                            selected={formData.pickupDate}
                            onSelect={(date) => setFormData({ ...formData, pickupDate: date })}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    {/* Pickup Location */}
                    <div className="space-y-2">
                      <Label className="text-white">Pickup Location *</Label>
                      <Select
                        value={formData.pickupLocation}
                        onValueChange={(value) => setFormData({ ...formData, pickupLocation: value })}
                      >
                        <SelectTrigger className="bg-black text-white border border-yellow-600/50 focus:ring-2 focus:ring-yellow-500">
                          <SelectValue placeholder="Choose pickup location" />
                        </SelectTrigger>
                        <SelectContent className="bg-black text-white border border-yellow-600/40">
                          <SelectItem value="campus" className="hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-600 hover:text-black">
                            Campus Pickup (Free)
                          </SelectItem>
                          <SelectItem value="showroom-central" className="hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-600 hover:text-black">
                            Central Showroom
                          </SelectItem>
                          <SelectItem value="showroom-north" className="hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-600 hover:text-black">
                            North Showroom
                          </SelectItem>
                          <SelectItem value="showroom-south" className="hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-600 hover:text-black">
                            South Showroom
                          </SelectItem>
                          <SelectItem value="home" className="hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-600 hover:text-black">
                            Home Delivery (+₹200)
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Live Pricing Calculator */}
                  <PricingCalculator
                    bikeType={formData.bikeType}
                    duration={formData.duration}
                    isStudent={isStudent}
                    pickupLocation={formData.pickupLocation}
                  />
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Step 4: Review & Payment */}
          {currentStep === 4 && (
            <motion.div
              key="step4"
              variants={stepVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-yellow-500">
                    <CheckCircle className="w-5 h-5 text-yellow-500" />
                    Review & Confirm Booking
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold">Booking Summary</h4>

                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                          <span>Name:</span>
                          <span className="font-medium">{formData.name}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Email:</span>
                          <span className="font-medium">{formData.email}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Phone:</span>
                          <span className="font-medium">{formData.phone}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Emergency Contact:</span>
                          <span className="font-medium">{formData.emergencyContact}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>License Number:</span>
                          <span className="font-medium">{formData.licenseNumber}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Aadhaar Number:</span>
                          <span className="font-medium">{formData.aadhaarNumber}</span>
                        </div>
                        {isStudent && (
                          <div className="flex justify-between">
                            <span>Student ID:</span>
                            <span className="font-medium">{formData.studentId}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Pricing Calculator */}
                    <div className="space-y-4">
                      <PricingCalculator
                        bikeType={formData.bikeType}
                        duration={formData.duration}
                        isStudent={isStudent}
                        pickupLocation={formData.pickupLocation}
                        showDetailed={true}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="flex justify-between">
<<<<<<< HEAD
        <Button variant="outline" onClick={prevStep} disabled={currentStep === 1} className="flex items-center gap-2 px-8 bg-yellow-500 text-black border font-semibold hover:bg-yellow-600">
=======
        <Button
          variant="hero"
          onClick={prevStep}
          disabled={currentStep === 1}
          className="flex items-center gap-2"
        >
>>>>>>> origin/features/pages
          <ArrowLeft className="w-4 h-4" />
          Previous
        </Button>

        <Button variant="hero" onClick={nextStep} disabled={currentStep === 4} className="flex items-center gap-2 px-8 bg-yellow-500 text-black border font-semibold hover:bg-yellow-600">
          Next
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default RentForm;
