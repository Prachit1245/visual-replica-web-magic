
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingBag, Menu, X } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Header = ({ currentPage, onNavigate }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', key: 'home' },
    { name: 'About Us', key: 'about' },
    { name: 'Projects', key: 'projects' },
    { name: 'Get Involved', key: 'get-involved' },
    { name: 'Shop', key: 'shop' },
    { name: 'Members', key: 'members' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/ec78005b-66ef-48a4-9af7-ab48494526c3.png" 
              alt="Build The World Logo" 
              className="h-8 w-8"
            />
            <span className="font-bold text-lg text-gray-900">BUILD THE<br/>WORLD</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => onNavigate(item.key)}
                className={`text-sm font-medium transition-colors hover:text-green-500 ${
                  currentPage === item.key ? 'text-green-500' : 'text-gray-700'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <ShoppingBag className="h-5 w-5 text-green-500" />
              <span className="text-sm font-medium">0</span>
            </div>
            <Button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full">
              Donate →
            </Button>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => {
                    onNavigate(item.key);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`text-left py-2 px-4 text-sm font-medium transition-colors hover:text-green-500 ${
                    currentPage === item.key ? 'text-green-500' : 'text-gray-700'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
