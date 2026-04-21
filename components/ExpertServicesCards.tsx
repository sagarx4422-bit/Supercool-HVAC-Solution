"use client";

import { motion } from 'motion/react';
import { Wrench, Layers, Snowflake } from 'lucide-react';

const services = [
  { icon: Wrench, title: 'AC Repair', desc: 'Fast, precision diagnostics and lasting fixes.' },
  { icon: Layers, title: 'Installation', desc: 'Flawless, architectural-grade setup & piping.' },
  { icon: Snowflake, title: 'Maintenance', desc: 'Intensive chemical wash restoring pristine airflow.' }
];

const ServiceCard = ({ s }: { s: any }) => (
  <motion.div 
    whileHover={{ 
      scale: 1.05, 
      y: -10,
      boxShadow: "0 20px 40px -10px rgba(56, 189, 248, 0.15)",
      borderColor: "rgba(56, 189, 248, 0.3)"
    }}
    whileTap={{ scale: 0.98 }}
    className="w-[280px] sm:w-[320px] lg:w-auto bg-[#0f1629] border border-white/5 rounded-3xl p-10 transition-colors cursor-pointer flex flex-col items-center text-center group shrink-0"
  >
    <div className="w-14 h-14 bg-[#1a233a] rounded-full flex items-center justify-center mb-8 group-hover:bg-blue-500/20 transition-colors duration-300">
      <s.icon className="w-6 h-6 text-blue-400" />
    </div>
    <h3 className="text-xl font-bold mb-4 text-white">{s.title}</h3>
    <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
  </motion.div>
);

export default function ExpertServicesCards() {
  return (
    <div className="mb-16">
      {/* Mobile/Tablet Marquee */}
      <div className="lg:hidden relative flex overflow-hidden w-full group -mx-4 px-4 w-[calc(100%+2rem)] py-6">
        <div className="flex w-max animate-marquee active:[animation-play-state:paused] gap-6">
          <div className="flex gap-6">
            {services.map((s, i) => (
              <ServiceCard key={i} s={s} />
            ))}
          </div>
          <div className="flex gap-6">
            {services.map((s, i) => (
              <ServiceCard key={`dup-${i}`} s={s} />
            ))}
          </div>
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[#0a0f1c] to-transparent"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[#0a0f1c] to-transparent"></div>
      </div>

      {/* Desktop Grid */}
      <div className="hidden lg:grid lg:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <ServiceCard key={i} s={s} />
        ))}
      </div>
    </div>
  );
}
