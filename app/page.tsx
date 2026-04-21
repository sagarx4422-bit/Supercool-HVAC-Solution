"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, Clock, Shield, FileText } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { LampSection } from '@/components/LampSection';
import TestimonialsSection from '@/components/ui/testimonial-v2';
import HowItWorks from '@/components/HowItWorks';
import ExpertServicesCards from '@/components/ExpertServicesCards';

const advantages = [
  { icon: CheckCircle2, title: 'Certified Technicians', desc: 'Factory-trained experts who know every AC brand inside out. No guesswork, no unnecessary parts.' },
  { icon: Shield, title: 'Upfront Pricing', desc: 'No hidden charges. We tell you the exact cost before starting any work. Full transparency.' },
  { icon: Clock, title: 'Same-Day Service', desc: 'We respect the heat. Book AM, get cooled by PM in most cases. Faster than the rest.' },
  { icon: FileText, title: 'GST Registered', desc: 'Fully compliant and registered business (GST: 27MGEPK0468A1ZH). We provide authentic tax invoices for all our services.' }
];

const AdvantageCard = ({ f }: { f: any }) => (
  <div className="w-[280px] sm:w-[320px] lg:w-auto shrink-0 group relative bg-white border border-slate-200 rounded-2xl p-8 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 overflow-hidden text-left">
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
    <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-[#1A65FF] group-hover:scale-110 group-hover:bg-[#1A65FF] group-hover:text-white transition-all duration-300">
      <f.icon className="w-7 h-7" />
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{f.title}</h3>
    <p className="text-slate-600 text-sm leading-relaxed">{f.desc}</p>
  </div>
);

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    otherService: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const serviceType = formData.service === 'Other' ? formData.otherService : formData.service;
    const text = `*New Service Request*%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Service Type:* ${serviceType}`;
    window.open(`https://wa.me/918788923494?text=${text}`, '_blank');
  };

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <ScrollReveal direction="right" className="text-slate-900 z-10">
            <div className="inline-flex items-center gap-2 border border-[#1A65FF]/30 rounded-full px-4 py-1.5 bg-[#1A65FF]/5 mb-6">
              <span className="text-[#1A65FF] text-xs font-bold tracking-widest uppercase">Trusted AC Service in Mumbai</span>
            </div>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Expert AC<br />
              Installation Repair<br />
              <span className="text-[#1A65FF] italic">Maintenance</span>
            </h1>
            <p className="text-lg text-slate-600 mb-10 max-w-lg">
              Premium cooling solutions for homes, offices, commercial spaces.
              <span className="text-[#1A65FF] font-medium block mt-3">Certified technicians. Quick response. Quality service.</span>
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/services" className="bg-[#1A65FF] hover:bg-[#1450CC] text-white px-8 py-3.5 rounded-lg font-medium transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[#1A65FF]/20">
                Explore Services
              </Link>
            </div>
          </ScrollReveal>
          
          {/* Right Image & Form */}
          <ScrollReveal direction="left" delay={0.2} className="relative h-[600px] w-full lg:ml-auto">
            <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/quick-service-bg.jpg"
                alt="AC Technician"
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* Glassmorphism Form Card */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:-bottom-12 md:-right-24 lg:-right-32 w-[calc(100%-2rem)] md:w-[400px] bg-white/80 backdrop-blur-xl border border-white/50 p-8 rounded-2xl shadow-2xl z-20">
              <h3 className="font-serif text-2xl font-bold text-slate-900 mb-6">Quick Service Request</h3>
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">Your Name</label>
                  <input name="name" value={formData.name} onChange={handleChange} type="text" required placeholder="Enter your name" className="w-full bg-white/60 border border-white/60 rounded-lg px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">Phone Number</label>
                  <input name="phone" value={formData.phone} onChange={handleChange} type="tel" required placeholder="Enter your number" className="w-full bg-white/60 border border-white/60 rounded-lg px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">Select Service</label>
                  <select name="service" value={formData.service} onChange={handleChange} required className="w-full bg-white/60 border border-white/60 rounded-lg px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none transition-all">
                    <option value="" disabled>Select a service</option>
                    <option value="AC Repair">AC Repair</option>
                    <option value="AC Installation">AC Installation</option>
                    <option value="AC Maintenance">AC Maintenance</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                {formData.service === 'Other' && (
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">Specify Service</label>
                    <input name="otherService" value={formData.otherService} onChange={handleChange} type="text" required placeholder="What do you need help with?" className="w-full bg-white/60 border border-white/60 rounded-lg px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
                  </div>
                )}
                <button type="submit" className="w-full bg-[#1A65FF] hover:bg-[#1450CC] text-white font-medium py-3.5 rounded-lg transition-all hover:scale-105 active:scale-95 mt-2 shadow-lg shadow-[#1A65FF]/20">
                  Book Now →
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-[#0a0f1c] text-white overflow-hidden">
        <ScrollReveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 border border-blue-500/30 rounded-full px-4 py-1.5 bg-blue-500/5">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
              <span className="text-blue-400 text-xs font-bold tracking-widest uppercase">Expert Services</span>
            </div>
          </div>
          <h2 className="font-serif text-4xl md:text-6xl font-bold mb-6">
            Every AC Need,<br />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Seamlessly Handled.</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-16 text-lg">
            A refined approach to cooling solutions. From precision diagnostics to complex commercial architectural installs.
          </p>
          
          <ExpertServicesCards />
          
          <Link href="/services" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-400 hover:to-cyan-300 text-white px-8 py-3.5 rounded-full font-bold transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:shadow-[0_0_30px_rgba(56,189,248,0.5)]">
            Explore Full Services →
          </Link>
        </ScrollReveal>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <ScrollReveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#1A65FF] text-sm font-bold tracking-widest uppercase mb-4">The Supercool Advantage</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-6">Why Choose Us</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">We don&apos;t just fix ACs; we restore your comfort fast with precision and transparency.</p>
          </div>
          
          {/* Mobile/Tablet Swipeable Cards */}
          <div className="lg:hidden flex overflow-x-auto snap-x snap-mandatory w-[calc(100%+2rem)] -mx-4 px-4 py-8 gap-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:none]">
            {advantages.map((f, i) => (
              <div key={i} className="snap-center shrink-0 first:ml-4 last:mr-4">
                <AdvantageCard f={f} />
              </div>
            ))}
          </div>

          {/* Desktop Grid */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-8">
            {advantages.map((f, i) => (
              <AdvantageCard key={i} f={f} />
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* How It Works */}
      <HowItWorks />

      {/* Brands */}
      <section className="py-20 bg-[#0a0f1c] overflow-hidden">
        <ScrollReveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 border border-blue-500/30 rounded-full px-4 py-1.5 bg-blue-500/5">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
              <span className="text-blue-400 text-xs font-bold tracking-widest uppercase">Trusted By Experts</span>
            </div>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">Brands We Expertly Service</h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-12 text-sm">
            Our master technicians have years of experience diagnosing and repairing all major domestic and international AC brands, ensuring your warranty stays intact.
          </p>
          
          <div className="relative flex overflow-hidden w-full group">
            <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
              {/* First set */}
              <div className="flex gap-4 md:gap-8 px-2 md:px-4">
                {['Daikin', 'Voltas', 'LG', 'Samsung', 'Blue Star', 'Hitachi', 'Lloyd', 'Panasonic'].map((brand, i) => (
                  <div key={i} className="px-6 py-3 bg-white/5 border border-white/10 rounded-lg text-slate-300 font-medium text-sm hover:bg-white/10 transition-colors whitespace-nowrap">
                    {brand}
                  </div>
                ))}
              </div>
              {/* Second set for seamless loop */}
              <div className="flex gap-4 md:gap-8 px-2 md:px-4">
                {['Daikin', 'Voltas', 'LG', 'Samsung', 'Blue Star', 'Hitachi', 'Lloyd', 'Panasonic'].map((brand, i) => (
                  <div key={`dup-${i}`} className="px-6 py-3 bg-white/5 border border-white/10 rounded-lg text-slate-300 font-medium text-sm hover:bg-white/10 transition-colors whitespace-nowrap">
                    {brand}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Gradient masks for smooth fade in/out at edges */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-slate-950 to-transparent"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-slate-950 to-transparent"></div>
          </div>
        </ScrollReveal>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* CTA */}
      <LampSection />
    </div>
  );
}
