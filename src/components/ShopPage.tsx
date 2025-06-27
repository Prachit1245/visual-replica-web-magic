
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useState } from 'react';
import { Plus, Upload, Tag, DollarSign } from 'lucide-react';

const ShopPage = () => {
  const [priceRange, setPriceRange] = useState([10000, 20000]);
  const [showAddProduct, setShowAddProduct] = useState(false);

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
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-8 animate-fade-in">
          <span>Home</span>
          <span>/</span>
          <span>All Products</span>
        </div>

        {/* Hero Image */}
        <div className="mb-12 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <img 
            src="https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
            alt="All Products" 
            className="w-full h-64 object-cover rounded-lg hover-scale"
          />
        </div>

        {/* Page Title and Add Product Button */}
        <div className="mb-12 flex justify-between items-start animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4 hover-scale">All Products</h1>
            <p className="text-gray-600 leading-relaxed max-w-2xl">
              This is your category description. It's a great place to tell customers what this category is 
              about, connect with your audience and draw attention to your products.
            </p>
          </div>
          <Button 
            onClick={() => setShowAddProduct(!showAddProduct)}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 pulse-glow"
          >
            <Plus className="w-5 h-5 mr-2" />
            Add Your Product
          </Button>
        </div>

        {/* Add Product Form */}
        {showAddProduct && (
          <Card className="mb-12 animate-fade-in border-2 border-green-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-green-700 flex items-center">
                <Upload className="w-6 h-6 mr-2" />
                Submit Your Product
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Tag className="w-4 h-4 inline mr-1" />
                      Product Name
                    </label>
                    <input 
                      type="text" 
                      placeholder="Enter product name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <DollarSign className="w-4 h-4 inline mr-1" />
                      Price (₹)
                    </label>
                    <input 
                      type="number" 
                      placeholder="Enter price"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                    <textarea 
                      placeholder="Describe your product"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Product Image</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-green-400 transition-colors">
                      <Upload className="w-12 h-12 mx-auto text-gray-400 mb-4" />
                      <p className="text-gray-600">Click to upload or drag and drop</p>
                      <p className="text-sm text-gray-500">PNG, JPG up to 10MB</p>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Contact Information</label>
                    <input 
                      type="text" 
                      placeholder="Your phone number or email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-6 flex justify-end space-x-4">
                <Button variant="outline" onClick={() => setShowAddProduct(false)}>
                  Cancel
                </Button>
                <Button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 transition-all duration-300 hover:scale-105">
                  Submit Product
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            {/* Browse By */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 hover-scale">Browse by</h3>
              <Button variant="link" className="text-yellow-500 p-0 h-auto font-normal hover-scale">
                All Products
              </Button>
            </div>

            {/* Filter By */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 hover-scale">Filter by</h3>
              
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
          <div className="lg:col-span-3 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            {/* Products Header */}
            <div className="flex justify-between items-center mb-8">
              <p className="text-gray-600">{products.length} products</p>
              <select className="border border-gray-300 rounded px-3 py-2 text-sm hover:border-green-400 transition-colors">
                <option>Sort by: Recommended</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>

            {/* Products */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {products.map((product, index) => (
                <div 
                  key={product.id} 
                  className="group cursor-pointer hover-scale animate-fade-in"
                  style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                >
                  <div className="aspect-square overflow-hidden rounded-lg mb-4 shadow-lg hover:shadow-xl transition-all duration-300">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-medium text-gray-900 mb-2 hover:text-green-600 transition-colors">{product.name}</h3>
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
