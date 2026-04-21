"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Phone, Mail, MapPin, Settings, CheckCircle, Clock, FileText, Instagram } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    serviceType: '',
    otherService: '',
    date: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const service = formData.serviceType === 'other' ? formData.otherService : formData.serviceType;
    
    const text = `*New Service Request*%0A
*Name:* ${formData.name}%0A
*Phone:* ${formData.phone}%0A
*Service Type:* ${service}%0A
*Date:* ${formData.date}%0A
*Message:* ${formData.message}`;

    const whatsappUrl = `https://wa.me/918788923494?text=${text}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="pt-40 pb-20 relative overflow-hidden">
        <ScrollReveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
            Schedule Your<br />
            <span className="text-[#1A65FF]">Expert Maintenance</span>
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl leading-relaxed">
            Experience appliance engineering at the highest level. Request a diagnostic
            appointment or a same-day emergency repair from our master technicians.
          </p>
        </ScrollReveal>
      </section>

      {/* Main Content */}
      <section className="pb-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Column: Form */}
            <ScrollReveal direction="right" className="lg:col-span-7 bg-slate-100 rounded-3xl p-8 md:p-12 relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="font-serif text-3xl font-bold text-slate-900 mb-8">Request a Quote</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-white border-none rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#004494] transition-colors" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full bg-white border-none rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#004494] transition-colors" 
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Service Type</label>
                      <select 
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                        required
                        className="w-full bg-white border-none rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#1A65FF] transition-colors appearance-none"
                      >
                        <option value="" disabled>Select a service</option>
                        <option value="AC Repair">AC Repair</option>
                        <option value="AC Installation">AC Installation</option>
                        <option value="AC Maintenance">AC Maintenance</option>
                        <option value="Gas Refilling">Gas Refilling</option>
                        <option value="PCB Repair">PCB Repair</option>
                        <option value="Compressor Replacement">Compressor Replacement</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Preferred Date</label>
                      <input 
                        type="date" 
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        className="w-full bg-white border-none rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#004494] transition-colors" 
                      />
                    </div>
                  </div>

                  {formData.serviceType === 'other' && (
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Specify Service</label>
                      <input 
                        type="text" 
                        name="otherService"
                        value={formData.otherService}
                        onChange={handleChange}
                        required
                        placeholder="Please specify the service you need"
                        className="w-full bg-white border-none rounded-lg px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1A65FF] transition-colors" 
                      />
                    </div>
                  )}
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Message / Issue Details</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe the symptoms or maintenance required..." 
                      rows={4} 
                      className="w-full bg-white border-none rounded-lg px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#004494] transition-colors resize-none"
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="bg-[#004494] hover:bg-[#003377] text-white font-medium px-8 py-3 rounded-lg transition-all shadow-md">
                    Send Request
                  </button>
                </form>
              </div>
              
              {/* Decorative Gear */}
              <div className="absolute -bottom-16 -right-16 text-slate-200 opacity-50 z-0 pointer-events-none">
                <Settings className="w-64 h-64" />
              </div>
            </ScrollReveal>

            {/* Right Column: Info & Map */}
            <div className="lg:col-span-5 space-y-8">
              <ScrollReveal direction="left" delay={0.2} className="bg-slate-100 rounded-3xl p-8 md:p-10">
                <h2 className="font-serif text-2xl font-bold text-slate-900 mb-8">Direct Channels</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-slate-200 text-[#004494] rounded-full flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Call For Support</p>
                      <p className="text-lg font-bold text-slate-900">8788923494</p>
                      <p className="text-lg font-bold text-slate-900">9552005017</p>
                      <p className="text-sm text-slate-500">Available 24/7 for emergencies</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-slate-200 text-[#004494] rounded-full flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Service Inquiries</p>
                      <a href="mailto:supercoolhvacsolutions24@gmail.com" className="text-lg font-bold text-slate-900 hover:text-[#1A65FF] transition-colors">
                        supercoolhvacsolutions<br className="sm:hidden" />24@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-slate-200 text-[#004494] rounded-full flex items-center justify-center shrink-0">
                      <Instagram className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Social Media</p>
                      <a 
                        href="https://www.instagram.com/supercool_hvac_solutions" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-lg font-bold text-slate-900 hover:text-[#1A65FF] transition-colors"
                      >
                        @supercool_hvac_solutions
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-slate-200 text-[#004494] rounded-full flex items-center justify-center shrink-0">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">GST Registration No</p>
                      <p className="text-lg font-bold text-slate-900">27MGEPK0468A1ZH</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-slate-200 text-[#004494] rounded-full flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Address</p>
                      <p className="text-lg font-bold text-slate-900">Shankar master chawl, Old bhendi pada,</p>
                      <p className="text-sm text-slate-500 font-bold mb-2">Ambernath West, Thane,<br />Maharashtra 421501</p>
                      <a 
                        href="https://maps.google.com/?q=SUPERCOOL+HVAC+SOLUTIONS,+Ambernath" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm text-[#1A65FF] hover:text-[#1450CC] font-medium inline-flex items-center gap-1"
                      >
                        View on Google Maps →
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="left" delay={0.3} className="w-full h-64 bg-slate-200 rounded-3xl overflow-hidden relative shadow-lg group">
                <a 
                  href="https://maps.google.com/?q=SUPERCOOL+HVAC+SOLUTIONS,+Ambernath"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-10"
                  aria-label="View on Google Maps"
                >
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                    <span className="bg-white text-slate-900 px-4 py-2 rounded-full font-medium shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      Open in Google Maps
                    </span>
                  </div>
                </a>
                <iframe
                  src="https://maps.google.com/maps?q=SUPERCOOL%20HVAC%20SOLUTIONS,%20Ambernath&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                ></iframe>
              </ScrollReveal>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}
