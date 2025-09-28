
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Send,
  Headphones,
  Shield,
  Users,
  FileText
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    category: '',
    message: ''
  });

  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our support team',
      contact: '+91 98765-43210',
      hours: 'Mon-Fri: 9 AM - 7 PM',
      color: 'gold'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us your queries via email',
      contact: 'support@vahanbazar.com',
      hours: '24/7 Response within 2 hours',
      color: 'silver'
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Get instant help through live chat',
      contact: 'Available on website',
      hours: 'Mon-Fri: 9 AM - 9 PM',
      color: 'gold'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      description: 'Come to our office for in-person support',
      contact: 'Cyber City, Gurgaon, Haryana',
      hours: 'Mon-Fri: 10 AM - 6 PM',
      color: 'silver'
    }
  ];

  const supportCategories = [
    { icon: Users, title: 'Account & Registration', description: 'Help with account setup, login issues, profile management' },
    { icon: FileText, title: 'Buying & Selling', description: 'Assistance with listings, transactions, documentation' },
    { icon: Shield, title: 'Safety & Security', description: 'Report fraud, security concerns, verification issues' },
    { icon: Headphones, title: 'Technical Support', description: 'Website issues, app problems, feature requests' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
  <div className="min-h-screen bg-black text-white flex flex-col justify-between">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-black via-zinc-900 to-black py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
              Get in
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent"> Touch</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
              Have questions? Need help? Our friendly support team is here to assist you 
              with anything related to buying, selling, or renting two-wheelers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" className="flex items-center bg-gold text-white hover:bg-yellow-500 items-centergap-2 ">
                <Phone className="w-5 h-5 text-white" />
                Call Now: +91 98765-43210
              </Button>
              <Button variant="outline" size="lg" className="bg-gold text-white hover:bg-yellow-500 flex items-center gap-2">
                <MessageSquare className="w-5 h-5" />
                Book Appointment
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-gold">Multiple Ways to Reach Us</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Choose your preferred method of communication. We're available through 
              multiple channels to provide you with the best support experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <motion.div key={method.title} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
                <Card className="h-full text-center bg-zinc-900 border border-silver hover:shadow-lg hover:shadow-gold/30 transition-all duration-300">
                  <CardHeader>
                    <div className={`mx-auto mb-4 p-4 rounded-full w-16 h-16 flex items-center justify-center 
                      ${method.color === 'gold' ? 'bg-gold text-white' : 'bg-silver text-white'}`}>
                      <method.icon className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-lg text-gold">{method.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-gray-400">{method.description}</p>
                    <p className="font-semibold text-silver">{method.contact}</p>
                    <p className="text-xs text-gray-500 flex items-center justify-center gap-1">
                      <Clock className="w-3 h-3 text-gold" />
                      {method.hours}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form + Categories */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-black border border-gold">
              <CardHeader>
                <CardTitle className="text-2xl font-heading flex items-center gap-2 text-gold">
                  <Send className="w-6 h-6 text-gold" />
                  Send us a Message
                </CardTitle>
                <p className="text-gray-400">Fill out the form below and we'll get back to you within 2 hours.</p>
              </CardHeader>
              <CardContent className="bg-black text-white">
  <form onSubmit={handleSubmit} className="space-y-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-gold">Full Name *</Label>
        <Input
          id="name"
          value={formData.name}
          onChange={(e) => handleInputChange('name', e.target.value)}
          placeholder="Enter your full name"
          required
          className="bg-gray-900 text-white border border-silver placeholder-silver focus:border-gold focus:ring-gold"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="phone" className="text-gold">Phone Number</Label>
        <Input
          id="phone"
          type="tel"
          value={formData.phone}
          onChange={(e) => handleInputChange('phone', e.target.value)}
          placeholder="Enter your phone"
          className="bg-gray-900 text-white border border-silver placeholder-silver focus:border-gold focus:ring-gold"
        />
      </div>
      
    </div>

    <div className="space-y-2">
      <Label htmlFor="email" className="text-gold">Email Address *</Label>
      <Input
        id="email"
        type="email"
        value={formData.email}
        onChange={(e) => handleInputChange('email', e.target.value)}
        placeholder="Enter your email"
        required
        className="bg-gray-900 text-white border border-silver placeholder-silver focus:border-gold focus:ring-gold"
      />
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="space-y-2">
        <Label htmlFor="category" className="text-gold">Category</Label>
        <select
          id="category"
          value={formData.category}
          onChange={(e) => handleInputChange('category', e.target.value)}
          className="bg-gray-900 text-white border border-silver placeholder-silver focus:border-gold focus:ring-gold w-full rounded px-3 py-2"
          required
        >
          <option value="" disabled>Select category</option>
          <option value="account">Account & Registration</option>
          <option value="buying">Buying & Selling</option>
          <option value="safety">Safety & Security</option>
          <option value="technical">Technical Support</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject" className="text-gold">Subject *</Label>
        <Input
          id="subject"
          value={formData.subject}
          onChange={(e) => handleInputChange('subject', e.target.value)}
          placeholder="Brief subject line"
          required
          className="bg-gray-900 text-white border border-silver placeholder-silver focus:border-gold focus:ring-gold"
        />
      </div>
    </div>

    <div className="space-y-2">
      <Label htmlFor="message" className="text-gold">Message *</Label>
      <Textarea
        id="message"
        value={formData.message}
        onChange={(e) => handleInputChange('message', e.target.value)}
        placeholder="Describe your query or issue in detail..."
        rows={6}
        required
        className="bg-gray-900 text-white border border-silver placeholder-silver focus:border-gold focus:ring-gold"
      />
    </div>

    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button type="submit" variant="outline" size="lg" className="w-full bg-gold text-white hover:bg-yellow-500 border border-gold">
        <Send className="w-4 h-4 mr-2" />
        Send Message
      </Button>
    </motion.div>

    <p className="text-xs text-silver text-center">
      By sending this message, you agree to our Terms of Service and Privacy Policy.
    </p>
  </form>
</CardContent>

            </Card>

            {/* Support Categories */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-silver">What can we help you with?</h3>
              <div className="space-y-4">
                {supportCategories.map((category, index) => (
                  <Card key={index} className="bg-zinc-900 border-l-4 border-l-gold hover:shadow-md hover:shadow-gold/30 transition-all duration-300">
                    <CardContent className="p-4 flex gap-4 items-start">
                      <div className="p-2 bg-gold/20 rounded-lg">
                        <category.icon className="w-5 h-5 text-gold" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gold">{category.title}</h4>
                        <p className="text-sm text-gray-400">{category.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              {/* Stats Section */}
              <div className="flex flex-col sm:flex-row gap-6 mt-8">
                <div className="flex-1 bg-white rounded-xl shadow border border-gray-200 flex flex-col items-center justify-center py-8">
                  <span className="text-3xl font-bold text-black">&lt;2hr</span>
                  <span className="text-gray-600 mt-2">Avg Response Time</span>
                </div>
                <div className="flex-1 bg-white rounded-xl shadow border border-gray-200 flex flex-col items-center justify-center py-8">
                  <span className="text-3xl font-bold text-black">98%</span>
                  <span className="text-gray-600 mt-2">Satisfaction Rate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
