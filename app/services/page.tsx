import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart, Home, Wrench, Cpu, Shield, CheckCircle2, Zap, LayoutGrid, Settings, Refrigerator, WashingMachine, ShoppingBag, PlugZap } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

export default function Services() {
  return (
    <div className="flex flex-col w-full pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="right">
            <span className="inline-block px-3 py-1 bg-[#1A65FF]/10 text-[#1450CC] text-xs font-bold tracking-widest uppercase rounded-full mb-6">Our Expertise</span>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Precision<br />
              Engineering for<br />
              <span className="text-[#1A65FF] italic">Perfect<br />Temperature</span>
            </h1>
            <p className="text-slate-500 text-lg max-w-md mb-8">
              From intricate PCB diagnostics to full-scale commercial installations, we apply expert care to every thermal challenge. Experience top-tier excellence in HVAC maintenance with Supercool Solutions.
            </p>
          </ScrollReveal>
          
          <ScrollReveal direction="left" delay={0.2} className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/precision-care.jpg"
              alt="Air Conditioning Unit"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg">
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-2">24/7 Precision Care</h3>
              <p className="text-slate-600 text-sm">Our expert technicians at Supercool Solutions are ready to restore your HVAC system's performance at any hour, ensuring perfect cooling and comfort.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-24 bg-slate-100 overflow-hidden">
        <ScrollReveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="font-serif text-4xl font-bold text-slate-900 mb-4">Core Services</h2>
              <p className="text-slate-500 max-w-xl">
                Our specialized departments tackle every aspect of climate control and electrical maintenance.
              </p>
            </div>
            <a href="#all-services" className="text-blue-600 font-medium hover:text-blue-700 flex items-center gap-2">
              Scroll to explore ↓
            </a>
          </div>

          <div id="all-services" className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Sales and Services */}
            <div className="md:col-span-2 bg-white rounded-2xl p-8 shadow-sm border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-8">
                  <ShoppingCart className="w-8 h-8 text-blue-600" />
                  <span className="text-slate-300 text-sm font-mono">01</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-slate-900 mb-4 uppercase tracking-wide">Sales and Services</h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-md">
                  Premium HVAC units paired with comprehensive service contracts. We handle the procurement and lifecycle management of your cooling assets with surgical precision.
                </p>
              </div>
              <Link href="/contact" className="text-blue-600 font-medium mt-8 inline-flex items-center gap-2 hover:text-blue-700 text-sm">
                Learn More →
              </Link>
            </div>

            {/* AC Installation */}
            <div className="bg-[#1A65FF] rounded-2xl p-8 shadow-lg text-white flex flex-col justify-between">
              <div>
                <Home className="w-8 h-8 text-white mb-8" />
                <h3 className="font-serif text-2xl font-bold mb-4 uppercase tracking-wide">AC Installation</h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  Flawless setup of residential and commercial systems optimized for maximum energy efficiency.
                </p>
              </div>
              <Link href="/contact" className="text-white font-medium mt-8 inline-flex items-center gap-2 hover:text-blue-200 text-sm">
                Learn More →
              </Link>
            </div>

            {/* AC Repairing */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 flex flex-col justify-between">
              <div>
                <Wrench className="w-8 h-8 text-blue-600 mb-8" />
                <h3 className="font-serif text-xl font-bold text-slate-900 mb-4 uppercase tracking-wide">AC Repairing</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Rapid diagnostics and permanent fixes for all AC makes and models.
                </p>
              </div>
              <Link href="/contact" className="text-blue-600 font-medium mt-8 inline-flex items-center gap-2 hover:text-blue-700 text-sm">
                Learn More →
              </Link>
            </div>

            {/* PCB Repairing */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 flex flex-col justify-between">
              <div>
                <Cpu className="w-8 h-8 text-blue-600 mb-8" />
                <h3 className="font-serif text-xl font-bold text-slate-900 mb-4 uppercase tracking-wide">PCB Repairing</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Specialized micro-soldering and circuit board restoration by our expert technicians.
                </p>
              </div>
              <Link href="/contact" className="text-blue-600 font-medium mt-8 inline-flex items-center gap-2 hover:text-blue-700 text-sm">
                Learn More →
              </Link>
            </div>

            {/* Coil Repairing */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 flex flex-col justify-between">
              <div>
                <Shield className="w-8 h-8 text-blue-600 mb-8" />
                <h3 className="font-serif text-xl font-bold text-slate-900 mb-4 uppercase tracking-wide">Coil Repairing</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Expert cleaning and leak sealing to restore optimal heat exchange performance.
                </p>
              </div>
              <Link href="/contact" className="text-blue-600 font-medium mt-8 inline-flex items-center gap-2 hover:text-blue-700 text-sm">
                Learn More →
              </Link>
            </div>

            {/* AC Maintenance (Wide) */}
            <div className="md:col-span-3 relative rounded-2xl overflow-hidden shadow-lg min-h-[400px] flex flex-col justify-center p-8 md:p-12">
              <Image
                src="/ac-maintenance-bg.jpg"
                alt="AC Maintenance Technician"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
              <div className="relative z-10 max-w-2xl text-white">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-serif text-3xl font-bold mb-4 uppercase tracking-wide">AC Maintenance</h3>
                <p className="text-slate-300 text-lg mb-8">
                  Preventative care designed to extend equipment life by up to 40%. Our professional check-ups ensure your air remains pure and your energy bills low.
                </p>
                <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all hover:scale-105 active:scale-95 inline-block">
                  Schedule Check-up
                </Link>
              </div>
            </div>

            {/* Compressor Repairing */}
            <div className="md:col-span-2 bg-white rounded-2xl p-8 shadow-sm border border-slate-200 flex flex-col justify-between">
              <div>
                <Settings className="w-8 h-8 text-blue-600 mb-8" />
                <h3 className="font-serif text-xl font-bold text-slate-900 mb-4 uppercase tracking-wide">Compressor Repairing</h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-md">
                  Heart surgery for your AC. We restore compression power and system pressure with laboratory-grade tools.
                </p>
              </div>
              <Link href="/contact" className="text-blue-600 font-medium mt-8 inline-flex items-center gap-2 hover:text-blue-700 text-sm">
                Learn More →
              </Link>
            </div>

            {/* Core Cutting Services */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 flex flex-col justify-between">
              <div>
                <LayoutGrid className="w-8 h-8 text-blue-600 mb-8" />
                <h3 className="font-serif text-xl font-bold text-slate-900 mb-4 uppercase tracking-wide">Core Cutting Services</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Clean, dust-free drilling for infrastructure and ducting. Precise diameters for seamless integration.
                </p>
              </div>
              <Link href="/contact" className="text-blue-600 font-medium mt-8 inline-flex items-center gap-2 hover:text-blue-700 text-sm">
                Learn More →
              </Link>
            </div>

            {/* Electronics Sales */}
            <div className="md:col-span-2 bg-white rounded-2xl p-8 shadow-sm border border-slate-200 flex flex-col justify-between">
              <div>
                <ShoppingBag className="w-8 h-8 text-blue-600 mb-8" />
                <h3 className="font-serif text-xl font-bold text-slate-900 mb-4 uppercase tracking-wide">Electronics Sales</h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-md">
                  Premium procurement of high-performance electronic appliances for modern homes, sourced with artisan standards.
                </p>
              </div>
              <Link href="/contact" className="text-blue-600 font-medium mt-8 inline-flex items-center gap-2 hover:text-blue-700 text-sm">
                Learn More →
              </Link>
            </div>

            {/* Custom Electrical Panels */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 flex flex-col justify-between">
              <div>
                <PlugZap className="w-8 h-8 text-blue-600 mb-8" />
                <h3 className="font-serif text-xl font-bold text-slate-900 mb-4 uppercase tracking-wide">Custom Electrical Panels</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Precision engineering of safety-focused electrical panels for residential and industrial electronic systems.
                </p>
              </div>
              <Link href="/contact" className="text-blue-600 font-medium mt-8 inline-flex items-center gap-2 hover:text-blue-700 text-sm">
                Learn More →
              </Link>
            </div>

            {/* Electrical, Fridge & Washing Machine */}
            <div className="md:col-span-3 bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-slate-200 flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1">
                <div className="flex gap-4 mb-8">
                  <Zap className="w-8 h-8 text-blue-600" fill="currentColor" />
                  <div className="w-8 h-8 bg-blue-600 flex items-center justify-center rounded shadow-sm">
                    <Refrigerator className="w-5 h-5 text-white" />
                  </div>
                  <div className="w-8 h-8 bg-blue-600 flex items-center justify-center rounded shadow-sm">
                    <WashingMachine className="w-5 h-5 text-white" />
                  </div>
                </div>
                <h3 className="font-serif text-3xl font-bold text-slate-900 mb-6 uppercase tracking-wide">Electrical, Fridge <span className="font-sans">&</span> Washing Machine</h3>
                <p className="text-slate-500 text-lg leading-relaxed mb-8">
                  Extending our professional care beyond cooling. Our multi-disciplinary team handles all major household and commercial appliance repairs and electrical infrastructure upgrades.
                </p>
                <Link href="/contact" className="bg-[#1A65FF] hover:bg-[#1450CC] text-white px-6 py-3 rounded-lg font-medium transition-all hover:scale-105 active:scale-95 inline-block text-sm shadow-md shadow-[#1A65FF]/20">
                  Request Comprehensive Service
                </Link>
              </div>
              <div className="w-full md:w-1/3 h-64 relative rounded-xl overflow-hidden bg-slate-100 shadow-md">
                <Image
                  src="/washing-machine.jpg"
                  alt="Modern Washing Machine"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#0a0f1c] text-center">
        <ScrollReveal className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6 italic">
            Ready for Ultimate Comfort?
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
            Book a diagnostic visit today and experience why Supercool Solution is the trusted choice for HVAC excellence.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="bg-[#1A65FF] hover:bg-[#1450CC] text-white px-8 py-3.5 rounded-lg font-medium transition-all hover:scale-105 active:scale-95 w-full sm:w-auto">
              Schedule a Technician
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
