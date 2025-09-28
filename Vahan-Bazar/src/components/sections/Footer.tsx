import React from 'react';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: "Buy Bikes", href: "#" },
    { name: "Sell Bikes", href: "#" },
    { name: "Compare Models", href: "#" },
    { name: "EMI Calculator", href: "#" },
    { name: "Find Dealers", href: "#" },
    { name: "Test Ride", href: "#" }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-heading font-bold mb-4 text-gold text-yellow-400 transition-colors duration-300">Vahan Bazar</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              India's premier two-wheeler marketplace. Your trusted partner for buying, selling, and exploring the future of mobility.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Button key={index} variant="ghost" size="icon" className="text-gray-400 hover:text-gold hover:bg-gold/10" aria-label={social.label}>
                    <Icon className="w-5 h-5" />
                  </Button>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="text-2xl font-heading font-bold mb-4 text-gold text-yellow-400 transition-colors duration-300">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.slice(0, 3).map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-gold">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-2xl font-heading font-bold mb-4 text-gold text-yellow-400 transition-colors duration-300">Tools & Services</h4>
            <ul className="space-y-3">
              {quickLinks.slice(3).map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-gold">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700/50" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-gray-400">
          <div className="flex items-center gap-3"><Mail className="w-5 h-5 text-gold" /> contact@vahanbazar.com</div>
          <div className="flex items-center gap-3"><Phone className="w-5 h-5 text-gold" /> 1800-123-VAHAN</div>
          <div className="flex items-center gap-3"><MapPin className="w-5 h-5 text-gold" /> Mumbai, Delhi, Bangalore</div>
        </div>

        <Separator className="my-8 bg-gray-700/50" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-gray-400 text-sm">
          <p>© 2024 Vahan Bazar. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gold">Privacy Policy</a>
            <a href="#" className="hover:text-gold">Terms of Service</a>
            <a href="#" className="hover:text-gold">Cookie Policy</a>
          </div>
        </div>

        <div className="text-center mt-8 text-gray-400 italic font-heading text-gold text-yellow-400 transition-colors duration-300">
          Powered by Vahan Bazar – Buy & Sell Bikes in Seconds
        </div>
      </div>
    </footer>
  );
};

export default Footer;
