
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { useState } from 'react';

const ShopPage = () => {
  const [priceRange, setPriceRange] = useState([10000, 20000]);

  const products = [
    {
      id: 1,
      name: 'Handicraft',
      price: 20000,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 2,
      name: 'Handicraft',
      price: 10000,
      image: 'https://images.unsplash.com/photo-1610736019575-aa4cf6c7bc8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    }
  ];

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <span>Home</span>
          <span>/</span>
          <span>All Products</span>
        </div>

        {/* Hero Image */}
        <div className="mb-12">
          <img 
            src="https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
            alt="All Products" 
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>

        {/* Page Title */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">All Products</h1>
          <p className="text-gray-600 leading-relaxed max-w-2xl">
            This is your category description. It's a great place to tell customers what this category is 
            about, connect with your audience and draw attention to your products.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className="space-y-8">
            {/* Browse By */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Browse by</h3>
              <Button variant="link" className="text-yellow-500 p-0 h-auto font-normal">
                All Products
              </Button>
            </div>

            {/* Filter By */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Filter by</h3>
              
              {/* Price Range */}
              <div className="space-y-4">
                <h4 className="font-medium text-gray-700">Price</h4>
                <div className="space-y-4">
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    min={10000}
                    max={20000}
                    step={1000}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>₹{priceRange[0].toLocaleString()}</span>
                    <span>₹{priceRange[1].toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            {/* Products Header */}
            <div className="flex justify-between items-center mb-8">
              <p className="text-gray-600">{products.length} products</p>
              <select className="border border-gray-300 rounded px-3 py-2 text-sm">
                <option>Sort by: Recommended</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>

            {/* Products */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {products.map((product) => (
                <div key={product.id} className="group cursor-pointer">
                  <div className="aspect-square overflow-hidden rounded-lg mb-4">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-medium text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-lg font-semibold text-gray-900">₹{product.price.toLocaleString()}.00</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
