
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingBag, Menu, X } from 'lucide-react';
import QRCodeModal from './QRCodeModal';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Header = ({ currentPage, onNavigate }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showQRModal, setShowQRModal] = useState(false);

  const navItems = [
    { name: 'Home', key: 'home' },
    { name: 'About Us', key: 'about' },
    { name: 'Projects', key: 'projects' },
    { name: 'Get Involved', key: 'get-involved' },
    { name: 'Shop', key: 'shop' },
    { name: 'Members', key: 'members' },
  ];

  const handleDonateClick = () => {
    setShowQRModal(true);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 hover-scale">
            <img 
              src="/lovable-uploads/72bfd94a-3561-4a26-8982-d0d5da09e64b.png" 
              alt="Build The World Logo" 
              className="h-10 w-auto transition-transform duration-300 hover:scale-110"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <button
                key={item.key}
                onClick={() => onNavigate(item.key)}
                className={`text-sm font-medium transition-all duration-300 hover:text-green-500 hover:scale-105 ${
                  currentPage === item.key ? 'text-green-500 scale-105' : 'text-gray-700'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1 hover-scale">
              <ShoppingBag className="h-5 w-5 text-green-500 transition-transform duration-300 hover:rotate-12" />
              <span className="text-sm font-medium">0</span>
            </div>
            <Button 
              onClick={handleDonateClick}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Donate →
            </Button>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 transition-transform duration-300 hover:scale-110"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item, index) => (
                <button
                  key={item.key}
                  onClick={() => {
                    onNavigate(item.key);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`text-left py-2 px-4 text-sm font-medium transition-all duration-300 hover:text-green-500 hover:translate-x-2 ${
                    currentPage === item.key ? 'text-green-500' : 'text-gray-700'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>

      <QRCodeModal 
        isOpen={showQRModal}
        onClose={() => setShowQRModal(false)}
        title="Make a Donation"
      />
    </header>
  );
};

export default Header;
