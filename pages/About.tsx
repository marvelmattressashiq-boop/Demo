import React from 'react';
import { Calendar, Users, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Hero Header */}
      <div className="bg-marvel-50 py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-marvel-900 mb-6">About Us</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We create comfort you can feel — straight from our factory to your home.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <span className="text-accent-600 font-bold uppercase tracking-wider text-sm mb-2 block">Our Mission</span>
            <h2 className="text-3xl md:text-4xl font-bold text-marvel-900 mb-6">Comfort built by experts</h2>
            <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
              <p>
                Behind every Marvel Mattress lies precision engineering, premium materials, and years of craftsmanship.
              </p>
              <p>
                We design, produce, and deliver everything ourselves — ensuring total control over quality and cost.
              </p>
               <p>
                At Marvel Mattress & Furnitures, we handcraft every product with care — but our mattresses come with something extra special: factory-direct pricing with up to 50% OFF. No middlemen. No inflated prices. Just genuine comfort built to last.
              </p>
              <p className="font-medium text-marvel-800">
                That’s how we turn everyday comfort into a long-term investment.
              </p>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000" 
              alt="Factory Craftsmanship" 
              className="rounded-2xl shadow-2xl w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-8 rounded-xl shadow-xl border border-slate-100 max-w-xs hidden md:block">
              <p className="text-marvel-900 font-bold text-lg italic">
                "Quality is not an act, it is a habit."
              </p>
              <p className="text-slate-500 mt-2">- Marvel Team</p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-marvel-900 text-white p-8 rounded-3xl text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-white/5"></div>
            <Calendar size={48} className="mx-auto mb-6 text-accent-500" />
            <div className="text-5xl font-bold mb-2">20+</div>
            <div className="text-marvel-100 text-lg">Years of Experience</div>
          </div>
          <div className="bg-white border border-slate-100 p-8 rounded-3xl text-center shadow-lg">
            <Users size={48} className="mx-auto mb-6 text-marvel-600" />
            <div className="text-5xl font-bold text-marvel-900 mb-2">104</div>
            <div className="text-slate-600 text-lg">Shops across Kerala</div>
          </div>
          <div className="bg-accent-500 text-white p-8 rounded-3xl text-center shadow-lg shadow-accent-500/30">
            <Award size={48} className="mx-auto mb-6 text-white" />
            <div className="text-5xl font-bold mb-2">100%</div>
            <div className="text-white/90 text-lg">Factory Direct Quality</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;