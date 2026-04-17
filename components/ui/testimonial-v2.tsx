"use client";
import React from 'react';
import { motion } from "motion/react";

// --- Types ---
interface Testimonial {
  text: string;
  name: string;
}

// --- Helpers ---
const getInitials = (name: string) => {
  const parts = name.split(' ');
  if (parts.length >= 2) {
    return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
  }
  return name.substring(0, 2).toUpperCase();
};

// --- Data ---
const testimonials: Testimonial[] = [
  {
    text: "Supercool HVAC arrived exactly on time and fixed my leaking AC perfectly. Their transparent pricing was a breath of fresh air compared to others in town.",
    name: "Priya Deshmukh",
  },
  {
    text: "We thought our inverter AC's PCB was dead and would cost a fortune. Their master tech repaired the board component itself and saved us thousands.",
    name: "Amit Sharma",
  },
  {
    text: "Supercool handles the AMC for all 10 ACs in our office. They are proactive, reliable, and ensure we never face downtime during working hours.",
    name: "Farhan Shaikh",
  },
  {
    text: "The new Daikin AC installation was flawless. The technicians were polite, cleaned up their mess, and didn't leave a single scratch on the wall.",
    name: "Rahul Verma",
  },
  {
    text: "If you need an honest AC guy in town, call Vijay from Supercool. Extremely knowledgeable and never tries to upsell you unnecessary gas charges.",
    name: "Neha Patil",
  },
  {
    text: "Excellent behavior and premium service. They truly treat your house with respect, using drop cloths and leaving the space spotless. Highly recommended.",
    name: "Sana Sayed",
  },
  {
    text: "Fast, efficient, and very professional. My AC is cooling better than ever! The team was very polite and explained the issue clearly.",
    name: "Vikram Singh",
  },
  {
    text: "Their deep cleaning service is a game changer. The air feels so much fresher now, and the cooling efficiency has noticeably improved.",
    name: "Anjali Desai",
  },
  {
    text: "I called them for an emergency repair on a Sunday, and they were here within an hour. Lifesavers during the peak summer heat!",
    name: "Rohan Mehta",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

// --- Sub-Components ---
const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.ul
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-transparent transition-colors duration-300 list-none m-0 p-0"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, name }, i) => (
                <motion.li 
                  key={`${index}-${i}`}
                  aria-hidden={index === 1 ? "true" : "false"}
                  tabIndex={index === 1 ? -1 : 0}
                  whileHover={{ 
                    scale: 1.03,
                    y: -8,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(0, 0, 0, 0.05)",
                    transition: { type: "spring", stiffness: 400, damping: 17 }
                  }}
                  whileFocus={{ 
                    scale: 1.03,
                    y: -8,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(0, 0, 0, 0.05)",
                    transition: { type: "spring", stiffness: 400, damping: 17 }
                  }}
                  className="p-8 rounded-2xl border border-slate-200 shadow-sm max-w-xs w-full bg-white transition-all duration-300 cursor-default select-none group focus:outline-none focus:ring-2 focus:ring-blue-500/30" 
                >
                  <blockquote className="m-0 p-0">
                    <p className="text-slate-600 leading-relaxed font-normal m-0 transition-colors duration-300 text-sm">
                      &quot;{text}&quot;
                    </p>
                    <footer className="flex items-center gap-3 mt-6">
                      <div className="h-10 w-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm shrink-0 ring-2 ring-slate-100 group-hover:ring-blue-500/30 transition-all duration-300 ease-in-out">
                        {getInitials(name)}
                      </div>
                      <div className="flex flex-col text-left">
                        <cite className="font-bold not-italic tracking-tight leading-5 text-slate-900 transition-colors duration-300 text-sm">
                          {name}
                        </cite>
                      </div>
                    </footer>
                  </blockquote>
                </motion.li>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.ul>
    </div>
  );
};

export default function TestimonialsSection() {
  return (
    <section 
      aria-labelledby="testimonials-heading"
      className="bg-slate-50 py-24 relative overflow-hidden"
    >
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ 
          duration: 0.8, 
          ease: "easeOut"
        }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10"
      >
        <div className="flex flex-col items-center justify-center max-w-2xl mx-auto mb-16 text-center">
          <p className="text-blue-600 text-sm font-bold tracking-widest uppercase mb-4 bg-blue-100 inline-block px-3 py-1 rounded-full">Reviews</p>
          <h2 id="testimonials-heading" className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-4 transition-colors">
            What our clients say
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed max-w-sm transition-colors">
            Discover how thousands of families stay cool with our premium AC services.
          </p>
        </div>

        <div 
          className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] max-h-[740px] overflow-hidden"
          role="region"
          aria-label="Scrolling Testimonials"
        >
          <TestimonialsColumn testimonials={firstColumn} duration={25} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={35} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={30} />
        </div>
      </motion.div>
    </section>
  );
}
