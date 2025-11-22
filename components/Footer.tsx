import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-marvel-900 rounded flex items-center justify-center text-white font-bold text-lg">M</div>
                <h3 className="text-xl font-bold text-marvel-900">Marvel Mattress</h3>
            </div>
            <p className="text-slate-600 leading-relaxed">
              At Marvel Mattress & Furnitures, we deliver factory-direct comfort at unbeatable prices. We bring premium mattresses and quality furniture straight from our factory to your home, trusted by thousands across homes, hotels, and resorts.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 hover:bg-marvel-900 hover:text-white transition-colors"><Facebook size={18} /></a>
              <a href="#" className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 hover:bg-marvel-900 hover:text-white transition-colors"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 hover:bg-marvel-900 hover:text-white transition-colors"><Twitter size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-slate-900 mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-600 hover:text-marvel-900 transition-colors">Home</a></li>
              <li><a href="#about" className="text-slate-600 hover:text-marvel-900 transition-colors">About Us</a></li>
              <li><a href="#products" className="text-slate-600 hover:text-marvel-900 transition-colors">Mattresses</a></li>
              <li><a href="#furniture" className="text-slate-600 hover:text-marvel-900 transition-colors">Furniture</a></li>
              <li><a href="#contact" className="text-slate-600 hover:text-marvel-900 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-slate-900 mb-6">Contact Us</h4>
            <ul className="space-y-4 text-slate-600">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="mt-1 shrink-0 text-accent-500" />
                <span>Main Factory Outlet,<br />Industrial Estate, Kochi,<br />Kerala, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-accent-500" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-accent-500" />
                <span>hello@marvelmattress.com</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours (Replaces newsletter since newsletter is now in body) */}
           <div>
            <h4 className="text-lg font-bold text-slate-900 mb-6">Opening Hours</h4>
            <ul className="space-y-3 text-slate-600">
              <li className="flex justify-between">
                <span>Monday - Saturday</span>
                <span className="font-medium text-marvel-900">9am - 8pm</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="font-medium text-marvel-900">10am - 6pm</span>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-marvel-50 rounded-lg border border-marvel-100">
               <p className="text-sm text-marvel-800 font-medium text-center">Visit one of our 104 outlets today!</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Marvel Mattress & Furnitures. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-marvel-900">Privacy Policy</a>
            <a href="#" className="hover:text-marvel-900">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;