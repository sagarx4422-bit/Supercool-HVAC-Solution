import Link from 'next/link';
import Image from 'next/image';
import { MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0a0f1c] text-slate-300 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Image src="/logo.png" alt="Supercool Logo" width={128} height={128} className="w-32 h-32 object-contain" />
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Ice-Cold Comfort. Lightning-Fast Service.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-6">Services</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="/services" prefetch={true} className="hover:text-blue-400 transition-colors">AC Installation</Link></li>
              <li><Link href="/services" prefetch={true} className="hover:text-blue-400 transition-colors">AC Repairing</Link></li>
              <li><Link href="/services" prefetch={true} className="hover:text-blue-400 transition-colors">Deep Cleaning</Link></li>
              <li><Link href="/services" prefetch={true} className="hover:text-blue-400 transition-colors">PCB Repairing</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Company</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="/" prefetch={true} className="hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link href="/about" prefetch={true} className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link href="/contact" prefetch={true} className="hover:text-blue-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Visit Us</h3>
            <address className="not-italic text-sm space-y-4 text-slate-400">
              <p>
                <a 
                  href="https://maps.google.com/?q=SUPERCOOL+HVAC+SOLUTIONS,+Ambernath" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors block"
                >
                  Shankar master chawl, Old bhendi pada,<br />
                  <strong className="font-bold">Ambernath West, Thane,<br />
                  Maharashtra 421501</strong>
                </a>
              </p>
              <p>
                Call: <a href="tel:8788923494" className="text-blue-400 hover:text-blue-300">8788923494</a>, <a href="tel:9552005017" className="text-blue-400 hover:text-blue-300">9552005017</a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            © 2025 Supercool HVAC Solutions. All rights reserved.
          </p>
        </div>
      </div>
      
      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/918788923494" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110 active:scale-95 z-50 flex items-center justify-center"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </footer>
  );
}
