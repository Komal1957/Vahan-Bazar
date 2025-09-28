import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Bike, 
  Zap, 
  Search, 
  Filter,
  Star,
  Fuel,
  Gauge,
  IndianRupee,
  MapPin,
  Clock,
  Heart
} from 'lucide-react';

// Vehicle images
import hondaActiva from '@/assets/honda-activa-6g.png';
import royalEnfield from '@/assets/royal-enfield-classic-350.png';
import atherScooter from '@/assets/ather-450x.png';
import tvsApache from '@/assets/tvs-apache-rtr-160.png';
import bajajPulsar from '@/assets/bajaj-pulsar-220f.png';
import heroSplendor from '@/assets/hero-splendor-plus.png';

// Types
type Category = {
  id: string;
  name: string;
  icon: React.ComponentType<any>;
  count: number;
};

type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  mileage: number;
  engine: string;
  fuelType?: string;
  rating: number;
  reviews: number;
  image: string;
  dealer: string;
  location: string;
  isNew?: boolean;
  isElectric?: boolean;
  discount?: number;
  year?: number;
  kmDriven?: number;
};

const Products = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const categories: Category[] = [
    { id: 'all', name: 'All Vehicles', icon: Bike, count: 1250 },
    { id: 'bikes', name: 'Bikes', icon: Bike, count: 650 },
    { id: 'scooters', name: 'Scooters', icon: Bike, count: 380 },
    { id: 'evs', name: 'Electric', icon: Zap, count: 120 },
    { id: 'used', name: 'Used Bikes', icon: Clock, count: 100 }
  ];

  const products: Product[] = [
    {
      id: 1,
      name: 'Honda Activa 6G',
      category: 'scooters',
      price: 75000,
      mileage: 60,
      engine: '109.51 cc',
      fuelType: 'Petrol',
      rating: 4.5,
      reviews: 1250,
      image: hondaActiva,
      dealer: 'Honda Showroom Central',
      location: 'Mumbai',
      isNew: true,
      discount: 5000
    },
    {
      id: 2,
      name: 'Royal Enfield Classic 350',
      category: 'bikes',
      price: 195000,
      mileage: 40,
      engine: '349 cc',
      fuelType: 'Petrol',
      rating: 4.3,
      reviews: 890,
      image: royalEnfield,
      dealer: 'Royal Enfield Store',
      location: 'Delhi',
      isNew: true
    },
    {
      id: 3,
      name: 'Ather 450X',
      category: 'evs',
      price: 140000,
      mileage: 85,
      engine: 'Electric',
      fuelType: 'Electric',
      rating: 4.6,
      reviews: 420,
      image: atherScooter,
      dealer: 'Ather Space',
      location: 'Bangalore',
      isNew: true,
      isElectric: true
    },
    {
      id: 4,
      name: 'TVS Apache RTR 160',
      category: 'bikes',
      price: 115000,
      mileage: 45,
      engine: '159.7 cc',
      fuelType: 'Petrol',
      rating: 4.2,
      reviews: 650,
      image: tvsApache,
      dealer: 'TVS Dealership',
      location: 'Chennai',
      isNew: true
    },
    {
      id: 5,
      name: 'Bajaj Pulsar 220F',
      category: 'used',
      price: 85000,
      originalPrice: 120000,
      mileage: 35,
      engine: '220 cc',
      fuelType: 'Petrol',
      rating: 4.0,
      reviews: 340,
      image: bajajPulsar,
      dealer: 'Certified Pre-owned',
      location: 'Pune',
      year: 2021,
      kmDriven: 15000
    },
    {
      id: 6,
      name: 'Hero Splendor Plus',
      category: 'bikes',
      price: 70000,
      mileage: 65,
      engine: '97.2 cc',
      fuelType: 'Petrol',
      rating: 4.4,
      reviews: 2100,
      image: heroSplendor,
      dealer: 'Hero MotoCorp',
      location: 'Gurgaon',
      isNew: true
    }
  ];

  const filteredProducts = products.filter(product => 
    (activeCategory === 'all' || product.category === activeCategory) &&
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-3 h-3 ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-500'}`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Find Your Perfect{' '}
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Ride
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Explore our extensive collection of bikes, scooters, and electric vehicles from trusted dealers.
            </p>
          </motion.div>

          {/* Search & Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto bg-gray-800/70 backdrop-blur-md rounded-xl p-6 border border-gray-700"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search bikes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-gray-900 border-gray-700 text-white placeholder:text-gray-400"
                />
              </div>

              <Select>
                <SelectTrigger className="bg-gray-900 border-gray-700 text-white">
                  <SelectValue placeholder="Brand" />
                </SelectTrigger>
                <SelectContent className="bg-gray-900 text-white border border-gray-700">
                  <SelectItem value="honda">Honda</SelectItem>
                  <SelectItem value="bajaj">Bajaj</SelectItem>
                  <SelectItem value="tvs">TVS</SelectItem>
                  <SelectItem value="royal-enfield">Royal Enfield</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="bg-gray-900 border-gray-700 text-white">
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent className="bg-gray-900 text-white border border-gray-700">
                  <SelectItem value="0-50000">Under ₹50,000</SelectItem>
                  <SelectItem value="50000-100000">₹50,000 - ₹1,00,000</SelectItem>
                  <SelectItem value="100000-200000">₹1,00,000 - ₹2,00,000</SelectItem>
                  <SelectItem value="200000+">Above ₹2,00,000</SelectItem>
                </SelectContent>
              </Select>

              <Button className="flex items-center gap-2 bg-yellow-500 text-black hover:bg-yellow-600">
                <Filter className="w-4 h-4" />
                More Filters
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-8 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full border-2 transition-all ${
                  activeCategory === category.id
                    ? 'border-yellow-500 bg-yellow-500 text-black'
                    : 'border-gray-600 text-white hover:border-yellow-500 hover:bg-yellow-500/20'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <category.icon className="w-4 h-4" />
                <span className="font-medium">{category.name}</span>
                <Badge variant="secondary" className="ml-1 bg-gray-700 text-gray-300">
                  {category.count}
                </Badge>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-yellow-500">
              {activeCategory === 'all' ? 'All Vehicles' : categories.find(c => c.id === activeCategory)?.name}
              <span className="text-gray-400 text-lg font-normal ml-2">
                ({filteredProducts.length} results)
              </span>
            </h2>

            <Select>
              <SelectTrigger className="w-48 bg-gray-900 border-gray-700 text-white">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent className="bg-gray-900 text-white border border-gray-700">
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="newest">Newest First</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <AnimatePresence>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10, boxShadow: "0 20px 40px -10px rgba(255, 215, 0, 0.4)" }}
                  className="group"
                >
                  <Card className="h-full bg-gray-800 border border-gray-700 hover:border-yellow-500 hover:shadow-lg transition-all duration-300 overflow-hidden">
                    <div className="relative">
                      <div className="aspect-[4/3] relative overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />

                        <div className="absolute top-3 left-3 flex flex-col gap-2">
                          {product.isNew && (
                            <Badge className="bg-green-500 text-white">NEW</Badge>
                          )}
                          {product.isElectric && (
                            <Badge className="bg-yellow-500 text-black flex items-center gap-1">
                              <Zap className="w-3 h-3" /> EV
                            </Badge>
                          )}
                          {product.discount && (
                            <Badge className="bg-red-500 text-white">
                              ₹{product.discount.toLocaleString()} OFF
                            </Badge>
                          )}
                        </div>

                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute top-3 right-3 bg-gray-900/80 hover:bg-gray-800 text-gray-300 hover:text-red-500"
                        >
                          <Heart className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                      <CardContent className="p-4 space-y-4">
                        <h3 className="font-bold text-lg group-hover:text-yellow-500 transition-colors">
                          {product.name}
                        </h3>

                        <div className="flex items-center gap-2 mt-1">
                          <div className="flex items-center gap-1">
                            {renderStars(product.rating)}
                            <span className="text-sm text-gray-400 ml-1">
                              {product.rating} ({product.reviews})
                            </span>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3 text-sm">
                          <div className="flex items-center gap-2 text-gray-400">
                            <Fuel className="w-4 h-4" />
                            <span>{product.mileage} km/l</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-400">
                            <Gauge className="w-4 h-4" />
                            <span>{product.engine}</span>
                          </div>
                        </div>

                        {product.category === 'used' && (
                          <div className="flex justify-between text-sm text-gray-400">
                            <span>{product.year} Model</span>
                            <span>{product.kmDriven?.toLocaleString()} km</span>
                          </div>
                        )}

                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <MapPin className="w-3 h-3" />
                          <span>{product.dealer}, {product.location}</span>
                        </div>

                        <div className="flex justify-between items-center pt-2 border-t border-gray-700">
                          <div>
                            <div className="flex items-center gap-2">
                              <IndianRupee className="w-4 h-4 text-yellow-500" />
                              <span className="text-xl font-bold text-yellow-500">
                                {product.price.toLocaleString()}
                              </span>
                            </div>
                            {product.originalPrice && (
                              <span className="text-sm text-gray-400 line-through">
                                ₹{product.originalPrice.toLocaleString()}
                              </span>
                            )}
                          </div>

                          <div className="flex gap-2">
                            <Button variant="outline" size="sm" className="border-gray-700 text-gray-400 hover:border-yellow-500 hover:text-yellow-500">
                              View Details
                            </Button>
                            <Button size="sm" className="bg-yellow-500 text-black hover:bg-yellow-600">
                              Contact
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
              ))}
            </div>
          </AnimatePresence>

          {filteredProducts.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
              <Bike className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-yellow-500">No vehicles found</h3>
              <p className="text-gray-400">
                Try adjusting your search criteria or browse all categories
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Products;
