import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import CategoriesSection from '../components/sections/CategoriesSection';
import SmartToolsSection from '../components/sections/SmartToolsSection';
import UpcomingLaunchesSection from '../components/sections/UpcomingLaunchesSection';
import ShowroomsSection from '../components/sections/ShowroomsSection';
import SellSection from '../components/sections/SellSection';
import TrustSection from '../components/sections/TrustSection';
import Footer from '../components/sections/Footer';

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <CategoriesSection />
      <SmartToolsSection />
      <UpcomingLaunchesSection />
      <ShowroomsSection />
      <SellSection />
      <TrustSection />
      <Footer />
    </main>
  );
};

export default Index;