'use client';

import Link from 'next/link';
import Image from 'next/image';
import { PhoneCall, Menu, X, Home, Snowflake, Info, Phone } from 'lucide-react';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Services', href: '/services', icon: Snowflake },
    { name: 'About', href: '/about', icon: Info },
    { name: 'Contact', href: '/contact', icon: Phone },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-40 bg-white/90 backdrop-blur-md text-slate-900 border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-28">
            <div className="flex-shrink-0 flex items-center gap-2">
              <Image src="/logo.png" alt="Supercool Logo" width={112} height={112} className="w-28 h-28 object-contain" priority />
            </div>
            <div className="hidden md:flex space-x-2 items-center bg-slate-100/80 px-4 py-2 rounded-full border border-slate-200">
              <Link href="/" prefetch={true} className="text-sm font-medium text-slate-600 hover:text-[#1A65FF] hover:bg-white px-4 py-2 rounded-full transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 shadow-sm shadow-transparent hover:shadow-sm">Home</Link>
              <Link href="/services" prefetch={true} className="text-sm font-medium text-slate-600 hover:text-[#1A65FF] hover:bg-white px-4 py-2 rounded-full transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 shadow-sm shadow-transparent hover:shadow-sm">Services</Link>
              <Link href="/about" prefetch={true} className="text-sm font-medium text-slate-600 hover:text-[#1A65FF] hover:bg-white px-4 py-2 rounded-full transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 shadow-sm shadow-transparent hover:shadow-sm">About Us</Link>
              <Link href="/contact" prefetch={true} className="text-sm font-medium text-slate-600 hover:text-[#1A65FF] hover:bg-white px-4 py-2 rounded-full transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 shadow-sm shadow-transparent hover:shadow-sm">Contact Us</Link>
            </div>
            <div className="hidden md:flex items-center">
              <Link href="/contact" prefetch={true} className="bg-[#1A65FF] hover:bg-[#1450CC] text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 flex items-center gap-2 shadow-md hover:shadow-lg shadow-[#1A65FF]/20">
                Book Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="text-slate-600 hover:text-[#1A65FF] focus:outline-none p-2"
                aria-label="Open mobile menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-slate-900/50 z-50 backdrop-blur-sm transition-opacity"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Drawer */}
      <div className={`md:hidden fixed top-0 left-0 h-full w-[280px] bg-white z-50 transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} shadow-2xl flex flex-col`}>
        <div className="flex items-center justify-between p-6 border-b border-slate-100">
          <span className="font-bold text-lg tracking-wider text-slate-900">SUPERCOOL</span>
          <button onClick={() => setIsMobileMenuOpen(false)} className="text-slate-400 hover:text-slate-600 p-1">
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="flex flex-col p-4 space-y-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.name}
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)} 
                className={`flex items-center gap-4 px-4 py-3.5 rounded-xl font-medium transition-colors ${
                  isActive 
                    ? 'bg-[#0f1629] text-white' 
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                <link.icon className="w-5 h-5" />
                <span>{link.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
