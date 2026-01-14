"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Menu,
  X,
  ChevronRight,
  ClipboardList,
  TrendingDown,
  Layers,
  BarChart3,
  Utensils,
  Trash2,
  Link2,
  Check,
  Mail,
  ArrowRight,
  Play,
  Sparkles,
  Monitor,
  Truck,
  Package,
  ChefHat,
  PieChart,
  Users,
} from "lucide-react";

// Simple animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// Navbar Component
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "Integrations", href: "#integrations" },
    { label: "How It Works", href: "#how-it-works" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass shadow-2xl shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="flex items-center">
              <span className="font-display text-2xl font-bold text-white tracking-tight">
                dacy.ai
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-white/70 hover:text-white font-medium text-sm tracking-wide transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#3EB489] hover:bg-[#2D8A69] text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#3EB489]/30"
              >
                <span>Are You Interested?</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white p-2"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: mobileMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden ${
          mobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Menu Card */}
      <motion.div
        initial={{ opacity: 0, y: -20, scale: 0.95 }}
        animate={{ 
          opacity: mobileMenuOpen ? 1 : 0, 
          y: mobileMenuOpen ? 0 : -20,
          scale: mobileMenuOpen ? 1 : 0.95
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={`fixed top-24 left-4 right-4 z-50 md:hidden ${
          mobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div className="bg-[#1A2634]/90 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl shadow-black/50">
          {/* Close button */}
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-4 right-4 w-10 h-10 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5 text-white/70" />
          </button>

          {/* Logo */}
          <div className="text-center mb-6 pt-2">
            <span className="font-display text-xl font-bold text-white">dacy.ai</span>
          </div>

          {/* Divider */}
          <div className="h-px bg-white/10 mb-6" />

          {/* Nav Links */}
          <div className="space-y-2">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: mobileMenuOpen ? 1 : 0, x: mobileMenuOpen ? 0 : -20 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                className="flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 rounded-2xl transition-colors group"
              >
                <span className="text-white font-display font-semibold text-lg">{link.label}</span>
                <ChevronRight className="w-5 h-5 text-white/40 group-hover:text-[#3EB489] transition-colors" />
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <motion.a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: mobileMenuOpen ? 1 : 0, y: mobileMenuOpen ? 0 : 10 }}
            transition={{ delay: 0.3, duration: 0.3 }}
            className="flex items-center justify-center gap-2 w-full bg-[#3EB489] hover:bg-[#2D8A69] text-white font-bold py-4 px-6 rounded-2xl mt-6 transition-all"
          >
            <span>Are You Interested?</span>
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </div>
      </motion.div>
    </>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#3EB489]/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#3EB489]/10 rounded-full blur-[100px]" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px"
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
            className="text-center lg:text-left"
          >
            {/* Pre-headline */}
            <motion.p
              variants={fadeIn}
              transition={{ duration: 0.5 }}
              className="text-[#3EB489] font-semibold text-sm tracking-[0.2em] uppercase mb-6"
            >
              AI-POWERED RESTAURANT MANAGEMENT
            </motion.p>

            {/* Main Headline */}
            <motion.h1
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] mb-6 tracking-tight"
            >
              ONE PLATFORM.
              <br />
              <span className="gradient-text">TOTAL CONTROL.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-white/70 text-lg md:text-xl leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0"
            >
              Automatically track inventory, manage waste, and connect every POS 
              and delivery platform — all in one intelligent dashboard.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-[#3EB489] hover:bg-[#2D8A69] text-white font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#3EB489]/30"
              >
                <span>Get Started</span>
                <ChevronRight className="w-5 h-5" />
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/20 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:border-white/40"
              >
                <Play className="w-5 h-5" />
                <span>See How It Works</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main Dashboard Card with background image */}
              <div className="glass-light rounded-2xl p-6 shadow-2xl shadow-black/30 relative overflow-hidden">
                {/* Background image overlay */}
                <div 
                  className="absolute inset-0 opacity-10 rounded-2xl"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800')",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                  }}
                />
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <p className="text-white/50 text-xs uppercase tracking-wider">Dashboard</p>
                      <p className="text-white font-display font-bold text-xl">Today&apos;s Overview</p>
                    </div>
                    <div className="w-10 h-10 bg-[#3EB489]/20 rounded-full flex items-center justify-center">
                      <BarChart3 className="w-5 h-5 text-[#3EB489]" />
                    </div>
                  </div>
                  
                  {/* Mock Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {[
                      { label: "Revenue", value: "£4,280", change: "+12%" },
                      { label: "Orders", value: "156", change: "+8%" },
                      { label: "Margin", value: "68%", change: "+5%" },
                    ].map((stat) => (
                      <div key={stat.label} className="bg-white/5 rounded-xl p-3">
                        <p className="text-white/50 text-xs">{stat.label}</p>
                        <p className="text-white font-display font-bold text-lg">{stat.value}</p>
                        <p className="text-[#3EB489] text-xs font-semibold">{stat.change}</p>
                      </div>
                    ))}
                  </div>

                  {/* Mock Chart */}
                  <div className="bg-white/5 rounded-xl p-4 h-32 flex items-end gap-2">
                    {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-gradient-to-t from-[#3EB489] to-[#3EB489]/50 rounded-t"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -bottom-8 -left-8 glass-light rounded-xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#3EB489]/20 rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-[#3EB489]" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Inventory Updated</p>
                    <p className="text-white/50 text-xs">Auto-synced just now</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 glass-light rounded-xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#F59E0B]/20 rounded-full flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-[#F59E0B]" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">AI Insight</p>
                    <p className="text-white/50 text-xs">Reduce chicken order by 15%</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Trust Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-20 text-center"
        >
          <p className="text-white/40 text-sm uppercase tracking-wider mb-6">
            Integrates with all major POS and delivery platforms
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
            {["Square", "Toast", "Clover", "UberEats", "Deliveroo", "JustEat"].map((name) => (
              <span key={name} className="text-white/60 font-display font-semibold text-lg">
                {name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Problem Section
function ProblemSection() {
  const problems = [
    {
      icon: ClipboardList,
      title: "MANUAL INVENTORY HELL",
      description: "Endless spreadsheets, stock counts at midnight, and still running out of key ingredients.",
    },
    {
      icon: TrendingDown,
      title: "INVISIBLE WASTE",
      description: "Food goes bad, plates come back, and you have no idea where your margins are leaking.",
    },
    {
      icon: Layers,
      title: "TECH STACK CHAOS",
      description: "POS here, delivery there, accounting somewhere else — nothing talks to anything.",
    },
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Running a Restaurant
            <br />
            <span className="text-white/50">Shouldn&apos;t Feel Like This</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="glass-light rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Background image overlay */}
              <div 
                className="absolute inset-0 opacity-5 rounded-2xl"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600')",
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-red-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <problem.icon className="w-7 h-7 text-red-400" />
                </div>
                <h3 className="font-display font-bold text-lg text-white mb-3 tracking-wide">
                  {problem.title}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center mt-12 text-white/50 text-lg">
          Sound familiar? <span className="text-[#3EB489] font-semibold">There&apos;s a better way.</span>
        </p>
      </div>
    </section>
  );
}

// Solution Section
function SolutionSection() {
  const features = [
    "Auto-depletes inventory with every sale",
    "Tracks waste by reason with one tap",
    "Shows real-time margins across all channels",
    "AI recommendations to cut costs and boost profits",
    "Works with all major POS and delivery platforms",
  ];

  const platforms = [
    { name: "POS Systems", icon: Monitor },
    { name: "Delivery Apps", icon: Truck },
    { name: "Inventory", icon: Package },
    { name: "Recipes", icon: ChefHat },
    { name: "Analytics", icon: PieChart },
    { name: "Staff", icon: Users },
  ];

  return (
    <section className="py-24 relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#3EB489]/5 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <p className="text-[#3EB489] font-semibold text-sm tracking-[0.2em] uppercase mb-4">
              THE SOLUTION
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">
              Meet Dacy:
              <br />
              Your AI-Powered
              <br />
              Operations Hub
            </h2>
            <p className="text-white/60 text-lg mb-8 leading-relaxed">
              Connect your POS. Connect your delivery platforms. Let Dacy handle the rest.
              Automatic inventory, intelligent insights, and total visibility — finally.
            </p>

            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 bg-[#3EB489]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-[#3EB489]" />
                  </div>
                  <span className="text-white/80">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="glass-light rounded-3xl p-8 relative overflow-hidden">
              {/* Background image overlay */}
              <div 
                className="absolute inset-0 opacity-10 rounded-3xl"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800')",
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              />
              <div className="relative z-10">
                {/* Central Hub - Logo */}
                <div className="flex items-center justify-center mb-8">
                  <div className="w-28 h-28 rounded-2xl overflow-hidden shadow-lg shadow-[#3EB489]/30">
                    <Image 
                      src="/images/dacylogo.jpg" 
                      alt="Dacy.ai" 
                      width={112} 
                      height={112}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Connected Platforms */}
                <div className="grid grid-cols-3 gap-4">
                  {platforms.map((item, i) => (
                    <div
                      key={i}
                      className="bg-white/5 rounded-xl p-4 text-center hover:bg-white/10 transition-colors"
                    >
                      <div className="w-12 h-12 bg-[#3EB489]/10 rounded-xl mx-auto mb-3 flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-[#3EB489]" />
                      </div>
                      <p className="text-white/70 text-sm font-medium">{item.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Stats Section
function StatsSection() {
  const stats = [
    { value: "20%", label: "Reduction in Operating Costs" },
    { value: "50%", label: "Profit Margin Improvement" },
    { value: "100+", label: "Hours Saved Per Month" },
    { value: "95%", label: "Inventory Accuracy" },
  ];

  return (
    <section className="py-24 relative bg-[#0F171F]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-display text-5xl md:text-6xl font-extrabold mb-2">
                <span className="gradient-text">{stat.value}</span>
              </div>
              <p className="text-white/50 text-sm md:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
        
        <p className="text-center mt-8 text-white/30 text-sm">
          *Based on projected results from restaurant management best practices
        </p>
      </div>
    </section>
  );
}

// Features Section
function FeaturesSection() {
  const features = [
    {
      icon: BarChart3,
      title: "AUTOMATIC INVENTORY TRACKING",
      headline: "Inventory That Updates Itself",
      description: "Connect your POS once, and Dacy automatically tracks every sale against your recipes. Know exactly what you have, what you've used, and what you need to order.",
      points: ["Real-time stock levels", "Low-stock alerts", "Automatic reorder suggestions", "Complete audit trail"],
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800",
    },
    {
      icon: Utensils,
      title: "RECIPE & MENU MANAGEMENT",
      headline: "Recipes That Calculate Themselves",
      description: "Build your recipes once, and Dacy handles the math forever. See the true cost of every dish and understand your margins instantly.",
      points: ["Drag-and-drop recipe builder", "Real-time food cost calculation", "Menu profitability analysis", "Automatic ingredient linking"],
      image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=800",
    },
    {
      icon: Trash2,
      title: "WASTE TRACKING",
      headline: "See Where Margins Disappear",
      description: "One-tap waste logging for your team. Track spoilage, prep waste, and returns — all connected to your inventory.",
      points: ["Quick-log with reason categories", "Automatic inventory adjustment", "Waste cost trending", "Identify problem areas"],
      image: "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=800",
    },
    {
      icon: Link2,
      title: "UNIVERSAL INTEGRATION",
      headline: "Connect Every Sales Channel",
      description: "We integrate with all major POS systems and delivery platforms. One integration to connect everything you use.",
      points: ["Direct API connections", "Delivery platform support", "Automatic order syncing", "No manual data entry"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800",
    },
  ];

  return (
    <section id="features" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[#3EB489] font-semibold text-sm tracking-[0.2em] uppercase mb-4">
            FEATURES
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Everything You Need.
            <br />
            <span className="text-white/50">Nothing You Don&apos;t.</span>
          </h2>
        </div>

        <div className="space-y-24">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Text Side */}
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#3EB489]/10 rounded-xl flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-[#3EB489]" />
                  </div>
                  <p className="text-[#3EB489] font-semibold text-xs tracking-[0.15em]">
                    {feature.title}
                  </p>
                </div>
                <h3 className="font-display text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
                  {feature.headline}
                </h3>
                <p className="text-white/60 text-lg mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <ul className="grid grid-cols-2 gap-3">
                  {feature.points.map((point, i) => (
                    <li key={i} className="flex items-center gap-2 text-white/70 text-sm">
                      <Check className="w-4 h-4 text-[#3EB489] flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual Side */}
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div className="glass-light rounded-2xl p-1 relative overflow-hidden">
                  {/* Background image */}
                  <div 
                    className="aspect-video rounded-xl overflow-hidden relative"
                    style={{
                      backgroundImage: `url('${feature.image}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center"
                    }}
                  >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A2634] via-[#1A2634]/60 to-transparent" />
                    
                    {/* Icon centered */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 bg-[#1A2634]/80 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                        <feature.icon className="w-10 h-10 text-[#3EB489]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Integrations Section
function IntegrationsSection() {
  const integrations = [
    "Square", "Toast", "Clover", "Lightspeed", "Epos Now", "Syrve",
    "UberEats", "Deliveroo", "JustEat",
  ];

  return (
    <section id="integrations" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[#3EB489] font-semibold text-sm tracking-[0.2em] uppercase mb-4">
            INTEGRATIONS
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Connects With Everything
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            We integrate with all major POS systems and delivery platforms. 
            Set up once, sync forever.
          </p>
        </div>

        {/* Logo Grid */}
        <div className="flex flex-wrap justify-center gap-4">
          {integrations.map((name, index) => (
            <div
              key={index}
              className="glass-light rounded-xl px-8 py-6 hover:bg-white/10 transition-colors"
            >
              <span className="font-display font-semibold text-white/60 text-lg whitespace-nowrap">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// How It Works Section
function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Connect Your POS",
      description: "Link your Square, Toast, Clover, or other POS in minutes. We handle the technical stuff.",
    },
    {
      number: "02",
      title: "Set Up Your Recipes",
      description: "Add your menu items and recipes. Dacy calculates costs and links everything to inventory.",
    },
    {
      number: "03",
      title: "Watch Dacy Work",
      description: "Dacy automatically tracks every sale, updates inventory, and surfaces actionable insights.",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 relative bg-[#0F171F]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[#3EB489] font-semibold text-sm tracking-[0.2em] uppercase mb-4">
            HOW IT WORKS
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Get Started in 3 Steps
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < 2 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-[2px] bg-gradient-to-r from-[#3EB489]/50 to-transparent z-0" />
              )}
              
              <div className="glass-light rounded-2xl p-8 relative z-10 h-full overflow-hidden">
                {/* Background image overlay */}
                <div 
                  className="absolute inset-0 opacity-5 rounded-2xl"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600')",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                  }}
                />
                <div className="relative z-10">
                  <div className="font-display text-6xl font-extrabold text-[#3EB489]/20 mb-4">
                    {step.number}
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#3EB489] hover:bg-[#2D8A69] text-white font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#3EB489]/30"
          >
            <span>Get Started Now</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

// Contact Form Section
function ContactSection() {
  return (
    <section id="contact" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#3EB489]/5 to-[#3EB489]/10" />
      
      <div className="relative max-w-xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[#3EB489] font-semibold text-sm tracking-[0.2em] uppercase mb-4">
            GET STARTED
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Are You Interested?
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Fill out the form below and we&apos;ll get back to you within 24 hours
            to discuss how Dacy can transform your operations.
          </p>
        </div>

        {/* Form Container with shadow and better styling */}
        <div className="bg-white rounded-2xl shadow-2xl shadow-black/20 overflow-hidden">
          {/* Go High Level Form Embed */}
          <iframe
            src="https://link.surimarketing.co.uk/widget/form/qrjQIA2rB7ZvFVY1ERBj"
            style={{ width: '100%', height: '550px', border: 'none' }}
            id="inline-qrjQIA2rB7ZvFVY1ERBj"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-activation-type="alwaysActivated"
            data-deactivation-type="neverDeactivate"
            data-form-name="Dacy Contact Form"
            data-form-id="qrjQIA2rB7ZvFVY1ERBj"
            title="Contact Form"
          />
        </div>

        <div className="mt-8 text-center">
          <p className="text-white/40 text-sm flex items-center justify-center gap-2">
            <span>🔒</span>
            <span>Your information is secure and will never be shared.</span>
          </p>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="py-16 bg-[#0F171F] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Image
              src="/images/dacylogo.jpg" 
              alt="Dacy.ai" 
              width={120} 
              height={40}
              className="h-10 w-auto rounded mb-4"
            />
            <p className="text-white/50 mt-4 max-w-sm">
              The AI-powered restaurant management platform that handles everything. 
              One platform. Total control.
            </p>
            <div className="mt-6">
              <a
                href="mailto:dacy@dacyai.com"
                className="inline-flex items-center gap-2 text-[#3EB489] hover:text-[#5DD3A8] transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>dacy@dacyai.com</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4 text-sm tracking-[0.15em] uppercase">
              PRODUCT
            </h4>
            <ul className="space-y-3">
              {["Features", "Integrations", "How It Works"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-white/50 hover:text-white transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4 text-sm tracking-[0.15em] uppercase">
              GET IN TOUCH
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#contact"
                  className="text-white/50 hover:text-white transition-colors text-sm"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="mailto:dacy@dacyai.com"
                  className="text-white/50 hover:text-white transition-colors text-sm"
                >
                  Email Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} Dacy.ai. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/30 hover:text-white/60 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/30 hover:text-white/60 text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main Page Component
export default function Home() {
  // Scroll to top only on actual page refresh (not anchor navigation)
  useEffect(() => {
    // Check if this is a fresh page load (not anchor click)
    const isRefresh = performance.navigation?.type === 1 || 
      (performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming)?.type === 'reload';
    
    if (isRefresh || !window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <main className="min-h-screen bg-[#1A2634]">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <StatsSection />
      <FeaturesSection />
      <IntegrationsSection />
      <HowItWorksSection />
      <ContactSection />
      <Footer />
      </main>
  );
}
