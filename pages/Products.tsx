import React, { useState } from 'react';
import { PRODUCTS } from '../constants';
import { Filter, ShoppingBag } from 'lucide-react';

const Products: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredProducts = activeCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  const categories = ['All', 'Mattress', 'Furniture', 'Accessory'];

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-marvel-900 mb-4">Our Collection</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Explore our range of factory-direct mattresses, premium furniture, and sleep accessories.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-marvel-900 text-white shadow-md transform scale-105'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-slate-100">
              <div className="relative overflow-hidden aspect-[4/3]">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                {product.discount && (
                  <div className="absolute top-4 left-4 bg-accent-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                    {product.discount}
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="text-sm text-marvel-600 font-semibold mb-1 uppercase tracking-wider">
                  {product.category}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-marvel-700 transition-colors">
                  {product.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-100">
                  <span className="text-2xl font-bold text-slate-900">{product.price}</span>
                  <button className="bg-marvel-900 text-white p-3 rounded-lg hover:bg-marvel-800 transition-colors shadow-md group-hover:shadow-lg flex items-center gap-2 text-sm font-medium">
                    <ShoppingBag size={18} />
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20 text-slate-500">
            <Filter size={48} className="mx-auto mb-4 opacity-20" />
            <p>No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;