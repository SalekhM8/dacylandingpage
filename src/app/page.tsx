"use client";

import { useState, useEffect, useRef, useCallback, memo } from "react";
import { motion, useInView } from "framer-motion";
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

// Counting animation hook - smooth and performant
function useCountUp(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const hasStarted = useRef(false);

  useEffect(() => {
    if (!isInView || hasStarted.current) return;
    hasStarted.current = true;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isInView]);

  return { count, ref };
}

// Memoized Navbar Component
const Navbar = memo(function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "Integrations", href: "#integrations" },
    { label: "How It Works", href: "#how-it-works" },
  ];

  const closeMobileMenu = useCallback(() => setMobileMenuOpen(false), []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glass shadow-2xl shadow-black/20" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a href="#" className="flex items-center">
              <span className="font-display text-2xl font-bold text-white tracking-tight">
                dacy.ai
              </span>
            </a>

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

            <div className="hidden md:flex items-center gap-4">
              <a
                href="#features"
                className="text-white/70 hover:text-white font-medium text-sm transition-colors"
              >
                Watch demo
              </a>
              <a
                href="#contact"
                className="btn-3d inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-lg"
              >
                <span>Book a chat</span>
              </a>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white p-2"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - CSS transitions for performance */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMobileMenu}
      />

      <div
        className={`fixed top-24 left-4 right-4 z-50 md:hidden transition-all duration-300 ${
          mobileMenuOpen 
            ? "opacity-100 translate-y-0 pointer-events-auto" 
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="bg-[#1A2634]/95 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl shadow-black/50">
          <button
            onClick={closeMobileMenu}
            className="absolute top-4 right-4 w-10 h-10 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5 text-white/70" />
          </button>

          <div className="text-center mb-6 pt-2">
            <span className="font-display text-xl font-bold text-white">dacy.ai</span>
          </div>

          <div className="h-px bg-white/10 mb-6" />

          <div className="space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMobileMenu}
                className="flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 rounded-2xl transition-colors group"
              >
                <span className="text-white font-display font-semibold text-lg">{link.label}</span>
                <ChevronRight className="w-5 h-5 text-white/40 group-hover:text-[#3EB489] transition-colors" />
              </a>
            ))}
          </div>

          <a
            href="#contact"
            onClick={closeMobileMenu}
            className="btn-3d flex items-center justify-center gap-2 w-full font-bold py-4 px-6 rounded-xl mt-6"
          >
            <span>Book a chat</span>
          </a>
        </div>
      </div>
    </>
  );
});

// Hero Section
const HeroSection = memo(function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-20 bg-[#1A2634]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-8 lg:pt-16">
        {/* Social Proof Badge */}
        <div className="flex items-center gap-3 mb-8">
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2">
            <span className="text-[#3EB489] text-sm font-semibold">★</span>
            <span className="text-white/80 text-sm font-medium">Top AI Restaurant Platform</span>
          </div>
          <div className="hidden sm:flex items-center gap-1 bg-[#3EB489]/10 border border-[#3EB489]/30 rounded-full px-3 py-2">
            <span className="text-[#3EB489] font-bold text-sm">4.9</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-start">
          {/* Left Column - Text Content */}
          <div>
            <h1 className="font-display text-[3.5rem] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[6rem] text-[#3EB489] leading-[0.9] mb-6 tracking-[-0.05em]" style={{ fontWeight: 900 }}>
              Your restaurant&apos;s
              <br />
              unfair advantage.
            </h1>

            <p className="text-white/60 text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
              Streamline operations. Boost margins. Cut waste. The AI-powered platform that puts you in complete control of your business.
            </p>

            {/* CTA Buttons - Rectangular with 3D effect */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="btn-3d inline-flex items-center justify-center gap-2 font-bold px-8 py-4 rounded-xl text-lg"
              >
                <span>Book a chat</span>
              </a>
              <a
                href="#features"
                className="btn-3d-outline inline-flex items-center justify-center gap-2 font-semibold px-8 py-4 rounded-xl text-lg"
              >
                <Play className="w-5 h-5" />
                <span>Watch demo</span>
              </a>
            </div>
          </div>

          {/* Right Column - Product Image */}
          <div className="relative">
            {/* Main Dashboard Card */}
            <div className="relative bg-[#243447] rounded-2xl overflow-hidden shadow-2xl shadow-black/40 border border-white/5">
              {/* Restaurant Image Background */}
              <div className="relative h-[200px] lg:h-[240px]">
                <Image
                  src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800"
                  alt="Restaurant"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#243447]" />
                
                {/* Floating Badge */}
                <div className="absolute top-4 left-4 bg-[#3EB489] text-white text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  Live Dashboard
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-6 -mt-8 relative z-10">
                {/* Stock Synced Notification - Centered */}
                <div className="flex justify-center mb-4">
                  <div className="bg-[#1A2634] border border-white/10 rounded-full px-4 py-2 flex items-center gap-2 shadow-lg">
                    <div className="w-6 h-6 bg-[#3EB489]/20 rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3 text-[#3EB489]" />
                    </div>
                    <span className="text-white text-sm font-medium">Stock synced</span>
                    <span className="text-white/40 text-xs">Just now</span>
                  </div>
                </div>

                <div className="bg-[#1A2634] rounded-xl p-4 border border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-white/50 text-xs uppercase tracking-wider">Today&apos;s Revenue</p>
                      <p className="text-white font-display font-black text-3xl tracking-tight">£8,420</p>
                    </div>
                    <div className="bg-[#3EB489]/20 text-[#3EB489] text-sm font-bold px-3 py-1 rounded-lg">
                      +18%
                    </div>
                  </div>
                  
                  {/* Mini Chart */}
                  <div className="flex items-end gap-1 h-16">
                    {[35, 50, 40, 70, 55, 80, 65, 90, 75, 95, 85, 100].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-[#3EB489] rounded-sm"
                        style={{ height: `${h}%`, opacity: 0.3 + (i * 0.05) }}
                      />
                    ))}
                  </div>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-3 mt-4">
                  {[
                    { label: "Orders", value: "247" },
                    { label: "Margin", value: "72%" },
                    { label: "Waste", value: "-34%" },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-white/5 rounded-lg p-3 text-center">
                      <p className="text-white font-display font-bold text-lg">{stat.value}</p>
                      <p className="text-white/40 text-xs">{stat.label}</p>
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
});


// Problem Section
const ProblemSection = memo(function ProblemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
    <section ref={ref} className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white mb-4">
            Running a Restaurant
            <br />
            <span className="text-white/50">Shouldn&apos;t Feel Like This</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glass-light rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group relative overflow-hidden"
            >
              <div 
                className="absolute inset-0 opacity-5 rounded-2xl"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600')",
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-red-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <problem.icon className="w-7 h-7 text-red-400" />
                </div>
                <h3 className="font-display font-bold text-lg text-white mb-3 tracking-wide">
                  {problem.title}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12 text-white/50 text-lg"
        >
          Sound familiar? <span className="text-[#3EB489] font-semibold">There&apos;s a better way.</span>
        </motion.p>
      </div>
    </section>
  );
});

// Solution Section
const SolutionSection = memo(function SolutionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
    <section ref={ref} className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#3EB489]/5 to-transparent pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#3EB489] font-semibold text-sm tracking-wider uppercase mb-4">
              The Solution
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
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
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 bg-[#3EB489]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-[#3EB489]" />
                  </div>
                  <span className="text-white/80">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Visual */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-light rounded-3xl p-8 relative overflow-hidden">
              <div 
                className="absolute inset-0 opacity-10 rounded-3xl"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800')",
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              />
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-8">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="w-28 h-28 rounded-2xl overflow-hidden shadow-lg shadow-[#3EB489]/30"
                  >
                    <Image 
                      src="/images/dacylogo.jpg" 
                      alt="Dacy.ai" 
                      width={112} 
                      height={112}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </motion.div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {platforms.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
                      className="bg-white/5 rounded-xl p-4 text-center hover:bg-white/10 transition-colors"
                    >
                      <div className="w-12 h-12 bg-[#3EB489]/10 rounded-xl mx-auto mb-3 flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-[#3EB489]" />
                      </div>
                      <p className="text-white/70 text-sm font-medium">{item.name}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

// Stats Section with counting animation
const StatsSection = memo(function StatsSection() {
  const stats = [
    { value: 20, suffix: "%", label: "Reduction in Operating Costs" },
    { value: 50, suffix: "%", label: "Profit Margin Improvement" },
    { value: 100, suffix: "+", label: "Hours Saved Per Month" },
    { value: 95, suffix: "%", label: "Inventory Accuracy" },
  ];

  return (
    <section className="py-24 relative bg-[#0F171F]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const { count, ref } = useCountUp(stat.value, 2000);
            
            return (
              <div key={index} ref={ref} className="text-center">
                <div className="font-display text-5xl md:text-6xl font-extrabold mb-2">
                  <span className="gradient-text">
                    {count}{stat.suffix}
                  </span>
                </div>
                <p className="text-white/50 text-sm md:text-base">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
        
        <p className="text-center mt-8 text-white/30 text-sm">
          *Based on projected results from restaurant management best practices
        </p>
      </div>
    </section>
  );
});

// Features Section
const FeaturesSection = memo(function FeaturesSection() {
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
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#3EB489] font-semibold text-sm tracking-wider uppercase mb-4">
            Features
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white">
            Everything You Need.
            <br />
            <span className="text-white/50">Nothing You Don&apos;t.</span>
          </h2>
        </motion.div>

        <div className="space-y-24">
          {features.map((feature, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={index} className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Text Side */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={isEven ? "" : "lg:order-2"}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-[#3EB489]/10 rounded-xl flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-[#3EB489]" />
                    </div>
                    <p className="text-[#3EB489] font-semibold text-xs tracking-[0.15em]">
                      {feature.title}
                    </p>
                  </div>
                <h3 className="font-display text-3xl md:text-4xl font-extrabold text-white mb-4">
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
                </motion.div>

                {/* Visual Side */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={isEven ? "" : "lg:order-1"}
                >
                  <div className="glass-light rounded-2xl p-1 relative overflow-hidden">
                    <div 
                      className="aspect-video rounded-xl overflow-hidden relative"
                      style={{
                        backgroundImage: `url('${feature.image}')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1A2634] via-[#1A2634]/60 to-transparent" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 bg-[#1A2634]/80 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                          <feature.icon className="w-10 h-10 text-[#3EB489]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
});

// Integrations Section
const IntegrationsSection = memo(function IntegrationsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const integrations = [
    "Square", "Toast", "Clover", "Lightspeed", "Epos Now", "Syrve",
    "UberEats", "Deliveroo", "JustEat",
  ];

  return (
    <section id="integrations" ref={ref} className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#3EB489] font-semibold text-sm tracking-wider uppercase mb-4">
            Integrations
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white mb-4">
            Connects With Everything
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            We integrate with all major POS systems and delivery platforms. 
            Set up once, sync forever.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {integrations.map((name, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="glass-light rounded-xl px-8 py-6 hover:bg-white/10 transition-colors"
            >
              <span className="font-display font-semibold text-white/60 text-lg whitespace-nowrap">
                {name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

// How It Works Section
const HowItWorksSection = memo(function HowItWorksSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
    <section id="how-it-works" ref={ref} className="py-24 relative bg-[#0F171F]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#3EB489] font-semibold text-sm tracking-wider uppercase mb-4">
            How It Works
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white">
            Get Started in 3 Steps
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              {index < 2 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-[2px] bg-gradient-to-r from-[#3EB489]/50 to-transparent z-0" />
              )}
              
              <div className="glass-light rounded-2xl p-8 relative z-10 h-full overflow-hidden">
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
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="btn-3d inline-flex items-center gap-2 font-bold px-8 py-4 rounded-xl text-lg"
          >
            <span>Book a chat</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
});

// Contact Form Section
const ContactSection = memo(function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" ref={ref} className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#3EB489]/5 to-[#3EB489]/10 pointer-events-none" />
      
      <div className="relative max-w-xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-[#3EB489] font-semibold text-sm tracking-wider uppercase mb-4">
            Get Started
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white mb-4">
            Are You Interested?
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Fill out the form below and we&apos;ll get back to you within 24 hours
            to discuss how Dacy can transform your operations.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-2xl shadow-black/20 overflow-hidden"
        >
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
            loading="lazy"
          />
        </motion.div>

      </div>
    </section>
  );
});

// Footer
const Footer = memo(function Footer() {
  return (
    <footer className="py-16 bg-[#0F171F] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
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
});

// Main Page Component
export default function Home() {
  useEffect(() => {
    // Disable browser's scroll restoration (important for mobile)
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    
    // Force scroll to top immediately
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // Also scroll after a tiny delay (catches mobile browsers)
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
    
    // Clear any hash from URL
    if (window.location.hash) {
      history.replaceState(null, '', window.location.pathname);
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
