import React from 'react';
import { ArrowRight, Star, ShieldCheck } from 'lucide-react';
import { FEATURES, STATS, TESTIMONIALS } from '../constants';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative bg-marvel-900 h-[600px] md:h-[700px] overflow-hidden flex items-center">
        <div className="absolute inset-0">
           <img 
            src="https://drive.google.com/uc?export=view&id=1iRo_AF3QI0SdaY6p57CcV6yHqohgZJoH" 
            alt="Marvel Mattress Collection" 
            className="w-full h-full object-cover opacity-40"
          />
           <div className="absolute inset-0 bg-gradient-to-r from-marvel-900 via-marvel-900/80 to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-2xl fade-in-up">
            <span className="inline-flex items-center gap-2 bg-accent-500/20 border border-accent-500/30 text-accent-400 px-4 py-1.5 rounded-full text-sm font-bold tracking-wide mb-6 backdrop-blur-sm">
              <Star size={14} fill="currentColor" /> FACTORY DIRECT SALE
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Factory-direct comfort at <span className="text-accent-500">unbeatable prices</span>
            </h1>
            <p className="text-lg md:text-xl text-marvel-100 mb-10 leading-relaxed max-w-xl">
              Get up to <strong className="text-white">50% OFF</strong> when you buy directly from our outlets. No middlemen. No inflated prices. Just genuine comfort built to last.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/products" className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 text-center flex items-center justify-center gap-2 shadow-xl shadow-accent-500/20">
                Shop Collection <ArrowRight size={20} />
              </Link>
              <Link to="/about" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-full font-bold text-lg transition-all text-center hover:border-white/40">
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-accent-600 font-bold uppercase tracking-wider text-sm mb-2 block">Our Promise</span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
              We create comfort you can feel
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Straight from our factory to your home. At Marvel Mattress & Furnitures, we handcraft every product with care.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {FEATURES.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-slate-50 p-10 rounded-3xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group border border-slate-100">
                  <div className="w-16 h-16 bg-white text-marvel-600 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-marvel-600 group-hover:text-white transition-colors duration-300">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About / Stats Split Section */}
      <section className="py-24 bg-marvel-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative group">
                <div className="absolute -top-4 -left-4 w-full h-full bg-marvel-200 rounded-2xl transform -rotate-2 transition-transform group-hover:-rotate-3"></div>
                <div className="absolute -bottom-4 -right-4 w-full h-full bg-accent-200 rounded-2xl transform rotate-2 transition-transform group-hover:rotate-3"></div>
                <img 
                  src="https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80&w=1000" 
                  alt="Comfort built by experts" 
                  className="rounded-2xl shadow-2xl relative z-10 w-full aspect-[4/3] object-cover"
                />
                <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur p-6 rounded-xl shadow-lg z-20">
                  <div className="flex justify-between items-center">
                    <div>
                       <p className="font-bold text-slate-900 text-lg">Premium Quality</p>
                       <p className="text-slate-600">Certified ISO Standard</p>
                    </div>
                    <ShieldCheck className="text-accent-500 w-10 h-10" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <span className="text-marvel-600 font-bold uppercase tracking-wider text-sm mb-2 block">About Us</span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
                Comfort built by experts
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Behind every Marvel Mattress lies precision engineering, premium materials, and years of craftsmanship.
              </p>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                We design, produce, and deliver everything ourselves — ensuring total control over quality and cost. That’s how we turn everyday comfort into a long-term investment.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mb-10">
                {STATS.map((stat, idx) => (
                  <div key={idx}>
                    <div className="text-4xl font-bold text-marvel-900 mb-1">{stat.value}</div>
                    <div className="text-slate-600 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>

              <Link to="/about" className="text-marvel-600 font-bold text-lg flex items-center gap-2 hover:gap-4 transition-all">
                Read Our Story <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
              Trusted by thousands
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              From cozy bedrooms to premium resorts, Marvel Mattress & Furnitures is trusted by people who care about quality sleep.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial) => (
              <div key={testimonial.id} className="bg-slate-50 p-8 rounded-3xl relative">
                 <div className="absolute -top-6 left-8">
                   <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-14 h-14 rounded-full object-cover ring-4 ring-white shadow-md"
                  />
                 </div>
                <div className="flex text-accent-500 mb-4 mt-6">
                  {[1, 2, 3, 4, 5].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-slate-700 italic mb-6 text-lg leading-relaxed">"{testimonial.text}"</p>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">{testimonial.name}</h4>
                  <p className="text-slate-500">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-marvel-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
            <img src="https://images.unsplash.com/photo-1631049552057-403cdb8f0658?auto=format&fit=crop&q=80&w=1920" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Subscribe for offers, tips & updates</h2>
          <p className="text-marvel-100 text-xl mb-10 max-w-2xl mx-auto">
            Get exclusive factory deals, new product launches, and sleep-care tips — straight to your inbox.
          </p>
          
          <form className="max-w-lg mx-auto mb-6" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-grow px-6 py-4 rounded-full text-slate-900 focus:outline-none focus:ring-2 focus:ring-accent-500 text-lg"
              />
              <button className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors shadow-lg shadow-accent-500/30">
                Subscribe Now
              </button>
            </div>
          </form>
          <p className="text-marvel-300 text-sm">Don’t miss our future updates! Get Subscribed Today!</p>
        </div>
      </section>
    </div>
  );
};

export default Home;