"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { PhoneCall, Clock, FileText, CheckCircle } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { cn } from '@/lib/utils';

const steps = [
  {
    id: 1,
    icon: PhoneCall,
    title: 'Book Your Service',
    desc: 'Call or WhatsApp us anytime. We confirm your slot within minutes — same-day bookings available morning to evening.',
    activeBorderClass: 'border-blue-500',
    hoverBorderClass: 'group-hover:border-blue-500',
    inactiveBorderClass: 'border-slate-800',
    glowClass: 'shadow-[0_0_30px_rgba(59,130,246,0.6)]',
    hoverGlowClass: 'group-hover:shadow-[0_0_30px_rgba(59,130,246,0.6)]',
    textColorClass: 'text-blue-400',
    bgClass: 'bg-blue-600',
    num: '01'
  },
  {
    id: 2,
    icon: Clock,
    title: 'Technician Arrives',
    desc: 'Our certified expert arrives on time at your doorstep.',
    activeBorderClass: 'border-cyan-500',
    hoverBorderClass: 'group-hover:border-cyan-500',
    inactiveBorderClass: 'border-slate-800',
    glowClass: 'shadow-[0_0_30px_rgba(6,182,212,0.6)]',
    hoverGlowClass: 'group-hover:shadow-[0_0_30px_rgba(6,182,212,0.6)]',
    textColorClass: 'text-cyan-400',
    bgClass: 'bg-cyan-500',
    num: '02'
  },
  {
    id: 3,
    icon: FileText,
    title: 'Diagnosis & Quote',
    desc: 'We diagnose the issue, explain it clearly, and give you an upfront quote. No work starts without your approval.',
    activeBorderClass: 'border-purple-500',
    hoverBorderClass: 'group-hover:border-purple-500',
    inactiveBorderClass: 'border-slate-800',
    glowClass: 'shadow-[0_0_30px_rgba(168,85,247,0.6)]',
    hoverGlowClass: 'group-hover:shadow-[0_0_30px_rgba(168,85,247,0.6)]',
    textColorClass: 'text-purple-400',
    bgClass: 'bg-purple-500',
    num: '03'
  },
  {
    id: 4,
    icon: CheckCircle,
    title: 'Fixed & Verified',
    desc: 'We fix the AC, run a full cooling test, and ask you to verify everything is perfect — before we leave.',
    activeBorderClass: 'border-emerald-500',
    hoverBorderClass: 'group-hover:border-emerald-500',
    inactiveBorderClass: 'border-slate-800',
    glowClass: 'shadow-[0_0_30px_rgba(16,185,129,0.6)]',
    hoverGlowClass: 'group-hover:shadow-[0_0_30px_rgba(16,185,129,0.6)]',
    textColorClass: 'text-emerald-400',
    bgClass: 'bg-emerald-500',
    num: '04'
  }
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section className="py-24 bg-[#0a0f1c] text-white overflow-hidden">
      <ScrollReveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 border border-blue-500/30 rounded-full px-4 py-1.5 bg-blue-500/5">
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
            <span className="text-blue-400 text-xs font-bold tracking-widest uppercase">Our Process</span>
          </div>
        </div>
        
        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
          How It <span className="text-cyan-400">Works</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto mb-20">
          Four simple steps to get your AC running perfectly — fast, transparent, and stress-free.
        </p>
        
        {/* Mobile/Tablet Marquee */}
        <div className="md:hidden relative flex overflow-hidden w-full group -mx-4 px-4 w-[calc(100%+2rem)] py-4">
          <div className="absolute top-12 left-0 right-0 h-[1px] bg-slate-800 z-0"></div>
          <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] active:[animation-play-state:paused] gap-6">
            <div className="flex gap-6">
              {steps.map((step) => (
                <div 
                  key={step.id} 
                  onClick={() => setActiveStep(step.id === activeStep ? null : step.id)}
                  className="w-[260px] sm:w-[300px] shrink-0 relative z-10 flex flex-col items-center cursor-pointer group"
                >
                  <div className={cn(
                    "relative w-16 h-16 rounded-full flex items-center justify-center mb-6 border-2 transition-all duration-500 bg-[#0a0f1c]",
                    activeStep === step.id 
                      ? `${step.activeBorderClass} ${step.glowClass}` 
                      : `${step.inactiveBorderClass} ${step.hoverBorderClass} ${step.hoverGlowClass}`,
                    step.textColorClass
                  )}>
                    <step.icon className="w-6 h-6" />
                    <div className={cn(
                      "absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white transition-all duration-500",
                      step.bgClass,
                      activeStep === step.id 
                        ? "scale-110 shadow-lg" 
                        : "scale-100 group-hover:scale-110 group-hover:shadow-lg"
                    )}>
                      {step.num}
                    </div>
                  </div>
                  <h3 className={cn(
                    "text-lg font-bold mb-3 transition-colors duration-300",
                    activeStep === step.id ? "text-white" : "text-slate-400 group-hover:text-white"
                  )}>{step.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed max-w-[250px] group-hover:text-slate-400 transition-colors">{step.desc}</p>
                </div>
              ))}
            </div>
            <div className="flex gap-6">
              {steps.map((step) => (
                <div 
                  key={`dup-${step.id}`} 
                  onClick={() => setActiveStep(step.id === activeStep ? null : step.id)}
                  className="w-[260px] sm:w-[300px] shrink-0 relative z-10 flex flex-col items-center cursor-pointer group"
                >
                  <div className={cn(
                    "relative w-16 h-16 rounded-full flex items-center justify-center mb-6 border-2 transition-all duration-500 bg-[#0a0f1c]",
                    activeStep === step.id 
                      ? `${step.activeBorderClass} ${step.glowClass}` 
                      : `${step.inactiveBorderClass} ${step.hoverBorderClass} ${step.hoverGlowClass}`,
                    step.textColorClass
                  )}>
                    <step.icon className="w-6 h-6" />
                    <div className={cn(
                      "absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white transition-all duration-500",
                      step.bgClass,
                      activeStep === step.id 
                        ? "scale-110 shadow-lg" 
                        : "scale-100 group-hover:scale-110 group-hover:shadow-lg"
                    )}>
                      {step.num}
                    </div>
                  </div>
                  <h3 className={cn(
                    "text-lg font-bold mb-3 transition-colors duration-300",
                    activeStep === step.id ? "text-white" : "text-slate-400 group-hover:text-white"
                  )}>{step.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed max-w-[250px] group-hover:text-slate-400 transition-colors">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[#0a0f1c] to-transparent z-20"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[#0a0f1c] to-transparent z-20"></div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-4 gap-8 relative">
          <div className="absolute top-8 left-[12%] right-[12%] h-[1px] bg-slate-800 z-0"></div>
          
          {steps.map((step) => (
            <div 
              key={step.id} 
              onClick={() => setActiveStep(step.id === activeStep ? null : step.id)}
              className="relative z-10 flex flex-col items-center cursor-pointer group"
            >
              <div className={cn(
                "relative w-16 h-16 rounded-full flex items-center justify-center mb-6 border-2 transition-all duration-500 bg-[#0a0f1c]",
                activeStep === step.id 
                  ? `${step.activeBorderClass} ${step.glowClass}` 
                  : `${step.inactiveBorderClass} ${step.hoverBorderClass} ${step.hoverGlowClass}`,
                step.textColorClass
              )}>
                <step.icon className="w-6 h-6" />
                <div className={cn(
                  "absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white transition-all duration-500",
                  step.bgClass,
                  activeStep === step.id 
                    ? "scale-110 shadow-lg" 
                    : "scale-100 group-hover:scale-110 group-hover:shadow-lg"
                )}>
                  {step.num}
                </div>
              </div>
              <h3 className={cn(
                "text-lg font-bold mb-3 transition-colors duration-300",
                activeStep === step.id ? "text-white" : "text-slate-400 group-hover:text-white"
              )}>{step.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed max-w-[250px] group-hover:text-slate-400 transition-colors">{step.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 flex flex-col sm:flex-row items-center justify-center gap-6">
          <span className="text-slate-500">Ready to get started?</span>
          <Link href="/contact" className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-8 py-3.5 rounded-full font-medium transition-all hover:scale-105 active:scale-95 text-sm hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] focus:shadow-[0_0_30px_rgba(37,99,235,0.6)]">
            <PhoneCall className="w-4 h-4" />
            Book Now — 8788923494
          </Link>
        </div>
      </ScrollReveal>
    </section>
  );
}
