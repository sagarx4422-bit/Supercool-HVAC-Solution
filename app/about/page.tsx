import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Wrench } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

export default function About() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-slate-50 relative overflow-hidden">
        <ScrollReveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
            Who We Are <span className="text-[#1A65FF] font-sans font-medium">&</span><br />
            <span className="italic text-[#1A65FF]">What We Stand For</span>
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl leading-relaxed">
            We are a team of dedicated professionals committed to providing the highest quality AC services. Our mission is to ensure your comfort through reliable, efficient, and transparent solutions.
          </p>
        </ScrollReveal>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="right" className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/solar-panels.jpg"
                alt="Technician at work"
                fill
                className="object-cover"
              />
            </ScrollReveal>
            
            <ScrollReveal direction="left" delay={0.2}>
              <p className="text-[#1A65FF] text-sm font-bold tracking-widest uppercase mb-4">Our Story</p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                Premium AC Services<br />You Can Rely On
              </h2>
              
              <div className="space-y-6 text-slate-600 leading-relaxed mb-10">
                <p>
                  <strong className="text-slate-900">Supercool HVAC Solutions</strong> was built on one belief &mdash; that every home and business across Mumbai deserves reliable, honest, affordable cooling. Whether it&apos;s 40°C outside or your AC just stopped working, we&apos;re here.
                </p>
                <p>
                  Founded by <strong className="text-slate-900">Vijay Kushwaha</strong>, a certified HVAC technician, Supercool has grown from a one-man operation into a trusted team serving hundreds of homes and offices across the entire Mumbai region.
                </p>
                <p>
                  We specialise in AC installation, repair, deep cleaning, PCB repairing, compressor repair, and coil repairing — covering <strong className="text-slate-900">all major brands</strong>: Daikin, Voltas, LG, Samsung, Blue Star, and Hitachi. Our promise: upfront pricing, certified technicians, same-day service.
                </p>
              </div>
              
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#1A65FF] hover:bg-[#1450CC] text-white px-8 py-4 rounded-full font-medium transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[#1A65FF]/20">
                <Wrench className="w-5 h-5" />
                Book a Service
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Where We Serve */}
      <section className="py-24 bg-[#0a0f1c] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="right">
              <p className="text-blue-500 text-sm font-bold tracking-widest uppercase mb-4">Where We Serve</p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Rapid Response Across the Region
              </h2>
              <p className="text-slate-400 mb-8 max-w-md text-lg">
                When your AC fails in the peak of summer, every minute counts. We have dedicated, fully stocked service vehicles stationed to reach you quickly.
              </p>
              
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="text-blue-400 font-bold tracking-widest uppercase text-xs">Overall Mumbai</span>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="left" delay={0.2} className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                <h3 className="text-xl font-bold">Active Service Zones</h3>
              </div>
              
              <ul className="space-y-6">
                {[
                  'South & Central Mumbai',
                  'Western Suburbs',
                  'Eastern Suburbs',
                  'Navi Mumbai & Thane'
                ].map((zone, i) => (
                  <li key={i} className="flex items-center gap-4 pb-6 border-b border-slate-800 last:border-0 last:pb-0">
                    <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <span className="text-lg text-slate-300 font-medium">{zone}</span>
                  </li>
                ))}
              </ul>
              
              <a href="https://wa.me/918788923494?text=Hi,%20I%20would%20like%20to%20check%20service%20availability%20in%20my%20area." target="_blank" rel="noopener noreferrer" className="block text-center w-full mt-8 bg-transparent border border-slate-700 hover:bg-slate-800 text-white py-4 rounded-xl font-medium transition-all hover:scale-105 active:scale-95">
                Check Availability
              </a>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
