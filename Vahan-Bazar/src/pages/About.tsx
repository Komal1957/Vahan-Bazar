"use client";

import { motion } from "framer-motion";
import { 
  Users, Target, Award, Clock, Shield, Heart, 
  TrendingUp, Star, Trophy 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const gold = "text-[#FFD700]";
const silver = "text-[#C0C0C0]";
const bgGold = "bg-[#FFD700]";
const bgSilver = "bg-[#C0C0C0]";

const stats = [
  { icon: Users, value: "500K+", label: "Happy Customers", color: "gold" },
  { icon: TrendingUp, value: "1M+", label: "Monthly Visits", color: "silver" },
  { icon: Shield, value: "100%", label: "Secure Transactions", color: "gold" },
  { icon: Award, value: "50+", label: "Dealer Partners", color: "silver" },
];

const values = [
  { icon: Shield, title: "Trust & Safety", description: "Verified sellers, secure payments, and a commitment to your peace of mind." },
  { icon: Target, title: "Transparency", description: "Clear listings, honest reviews, and no hidden charges." },
  { icon: Heart, title: "Customer First", description: "Every decision we make starts with our users’ needs in mind." },
  { icon: Star, title: "Innovation", description: "Constantly evolving with technology to make buying and selling seamless." },
];

const timeline = [
  { year: "2020", event: "Founded with a vision to simplify two-wheeler trade." },
  { year: "2021", event: "Launched secure payments & dealer partnerships." },
  { year: "2022", event: "Crossed 100K users & expanded to 10 major cities." },
  { year: "2023", event: "Introduced EV marketplace & AI-powered recommendations." },
];

const team = [
  { name: "Aarav Sharma", role: "Founder & CEO", image: "/team/aarav.jpg",background: "Ex-Flipkart, IIT Delhi", description: "'Passionate about transforming transportation in India'" },
  { name: "Neha Kapoor", role: "CTO", image: "/team/neha.jpg",background: "Ex-Amazon, IIT Bombay", description: "'Scaling operations across 100+ cities'" },
  { name: "Rohan Mehta", role: "Head of Design", image: "/team/rohan.jpg",background: "Ex-Ola, XLRI", description: "'Building brand and user engagement strategies'"},
  { name: "Simran Kaur", role: "Marketing Lead", image: "/team/simran.jpg",background: "Ex-Zomato, ISB Hyderabad", description: "'Leading our technology and product innovation'" },
];

export default function About() {
  return (
    <div className="bg-black text-white">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-black via-gray-900 to-black py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Badge className={`mb-4 text-lg px-4 py-2 ${bgGold} text-black`}>
            <Clock className="w-4 h-4 mr-2 text-black" />
            Since 2020
          </Badge>

          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
            Revolutionizing
            <span className={gold}> Two-Wheeler</span>
            <br /> Marketplace
          </h1>

          <p className={`text-xl ${silver} max-w-3xl mx-auto mb-8`}>
            We started with a simple belief: buying and selling two-wheelers should be 
            transparent, secure, and hassle-free. Today, we're India's most trusted 
            platform for bikes, scooters, and electric vehicles.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="px-8 border border-[#C0C0C0] text-black hover:bg-[#C0C0C0]/20">
              Our Story
            </Button>
            <Button size="lg" className={`${bgGold} text-black hover:bg-yellow-400 px-8`}>
              Join Our Team
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-black">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx} 
              className="text-center bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-[#FFD700]/30 transition-shadow"
              whileHover={{ y: -5 }}
            >
              <div className={`mx-auto mb-4 p-4 rounded-full w-16 h-16 flex items-center justify-center 
                ${stat.color === "gold" ? bgGold + " text-black" : bgSilver + " text-black"}`}>
                <stat.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold">{stat.value}</h3>
              <p className={silver}>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our <span className={gold}>Core Values</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, idx) => (
              <motion.div 
                key={idx} 
                className="bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-[#FFD700]/40 transition-shadow"
                whileHover={{ y: -8 }}
              >
                <div className={`${bgGold} w-14 h-14 flex items-center justify-center rounded-full mb-6`}>
                  <value.icon className="w-7 h-7 text-black" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className={silver}>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our <span className={gold}>Journey</span>
          </h2>
          <div className="relative">
            {/* Silver vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-[#C0C0C0] h-full"></div>
            <div className="space-y-12">
              {timeline.map((item, idx) => (
                <motion.div 
                  key={idx} 
                  className={`relative w-1/2 ${idx % 2 === 0 ? "ml-auto pl-8 text-left" : "pr-8 text-right"}`}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="bg-gray-900 p-6 rounded-xl shadow-lg border border-[#C0C0C0]/40">
                    <span className={`inline-block mb-2 px-3 py-1 rounded-full ${bgGold} text-black text-sm font-medium`}>
                      {item.year}
                    </span>
                    <p>{item.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Meet Our <span className={gold}>Team</span>
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <motion.div 
                key={idx} 
                className="bg-gray-900 p-6 rounded-2xl shadow-md hover:shadow-[#FFD700]/40 transition-shadow"
                whileHover={{ y: -5 }}
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#FFD700] to-[#C0C0C0] flex items-center justify-center">
                  <Users className="w-10 h-10 text-black" />
                </div>
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className={silver}>{member.role}</p>
                <p className={silver}>{member.background}</p>
                <p className={silver}>{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Our <span className={gold}>Achievements</span>
          </h2>
          <div className="grid sm:grid-cols-2 gap-8 mb-12">
            <motion.div className="bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-[#FFD700]/30 transition-shadow">
              <Trophy className={`${gold} w-10 h-10 mx-auto mb-4`} />
              <h3 className="font-semibold">Best Startup Award 2022</h3>
              <p className={silver}>Recognized as one of the top startups in India.</p>
            </motion.div>
            <motion.div className="bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-[#FFD700]/30 transition-shadow">
              <Award className={`${gold} w-10 h-10 mx-auto mb-4`} />
              <h3 className="font-semibold">Excellence in Innovation</h3>
              <p className={silver}>Awarded for introducing AI-driven vehicle recommendations.</p>
            </motion.div>
          </div>
          <Button size="lg" className={`${bgGold} text-black hover:bg-yellow-400`}>
            Explore Opportunities
          </Button>
        </div>
      </section>

    </div>
  );
}
