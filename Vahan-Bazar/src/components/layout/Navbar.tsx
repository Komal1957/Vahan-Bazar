import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, User, Search, Bell, ChevronDown } from 'lucide-react';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import LoginDialog from '../auth/LoginDialog';
import RentDialog from '../rent/RentDialog';

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRent, setShowRent] = useState(false);
  const location = useLocation();

  const navigation = [
    {
      name: 'Features',
      href: '/features',
      dropdown: [
        { name: 'Smart Tools', href: '/features#smart-tools' },
        { name: 'Compare Models', href: '/features#compare' },
        { name: 'EMI Calculator', href: '/features#calculator' }
      ]
    },
    {
      name: 'Products',
      href: '/products',
      dropdown: [
        { name: 'Bikes', href: '/products/bikes' },
        { name: 'Scooters', href: '/products/scooters' },
        { name: 'EVs', href: '/products/evs' },
        { name: 'Used Bikes', href: '/products/used' }
      ]
    },
    { name: 'Subscription', href: '/subscription' },
    { name: 'Contact', href: '/contact' },
    { name: 'About', href: '/about' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="sticky top-0 z-50 bg-[#0A0A0C]/95 backdrop-blur-md border-b border-[#FFD700]/30"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.div whileHover={{ scale: 1.05 }} className="flex-shrink-0">
              <Link
                to="/"
                className="text-2xl font-bold font-heading bg-gradient-to-r from-[#FFD700] to-[#B8860B] bg-clip-text text-transparent drop-shadow-[0_0_8px_#FFD700] hover:drop-shadow-[0_0_15px_#FFD700] transition duration-300"
              >
                Vahan Bazar
              </Link>
            </motion.div>


            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-6">
                {navigation.map((item) => (
                  <div key={item.name} className="relative group">
                    <Link
                      to={item.href}
                      className={`px-3 py-2 text-sm font-medium transition-colors relative ${isActive(item.href)
                          ? 'text-[#FFD700]'
                          : 'text-[#B0B3C6] hover:text-[#FFD700]'
                        }`}
                    >
                      <span className="flex items-center gap-1">
                        {item.name}
                        {item.dropdown && <ChevronDown className="w-3 h-3" />}
                      </span>
                      {isActive(item.href) && (
                        <motion.div
                          layoutId="navbar-indicator"
                          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#FFD700] to-[#B8860B]"
                        />
                      )}
                    </Link>

                    {/* Dropdown */}
                    {item.dropdown && (
                      <AnimatePresence>
                        <motion.div
                          className="absolute left-0 mt-2 w-48 bg-[#1A1D23] border border-[#FFD700]/20 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                        >
                          <div className="py-2">
                            {item.dropdown.map((dropItem) => (
                              <Link
                                key={dropItem.name}
                                to={dropItem.href}
                                className="block px-4 py-2 text-sm text-[#B0B3C6] hover:text-[#FFD700] hover:bg-[#0A0A0C] transition-colors"
                              >
                                {dropItem.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Actions */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Search */}
              <motion.button className="p-2 text-[#B0B3C6] hover:text-[#FFD700] transition-colors">
                <Search className="w-5 h-5" />
              </motion.button>

              {/* Notifications */}
              <motion.button className="p-2 text-[#B0B3C6] hover:text-[#FFD700] transition-colors relative">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#FFD700] rounded-full"></span>
              </motion.button>

              {/* Rent Button */}
              <Button
                variant="hero"
                onClick={() => setShowRent(true)}
                className="w-48 relative overflow-visible group bg-gradient-to-r from-[#FFD700] to-[#B8860B] text-black font-semibold hover:opacity-90 pr-20"
              >
                Rent Now
                <span className="absolute -top-3 -right-3 bg-black text-[#FFD700] text-xs px-3 py-1 flex items-center rounded-full whitespace-nowrap">
                  Student 20% OFF
                </span>
              </Button>


              {/* Login */}
              <Button
                variant="outline"
                onClick={() => setShowLogin(true)}
                className="border-[#FFD700] text-[#B0B3C6] hover:bg-[#1A1D23] hover:text-[#FFD700]"
              >
                <User className="w-4 h-4 mr-2" />
                Login
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>


      <LoginDialog open={showLogin} onOpenChange={setShowLogin} />
      <RentDialog open={showRent} onOpenChange={setShowRent} />
    </>
  );
};

export default Navbar;
