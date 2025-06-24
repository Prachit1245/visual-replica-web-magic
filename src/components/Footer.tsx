
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/ec78005b-66ef-48a4-9af7-ab48494526c3.png" 
                alt="Build The World Logo" 
                className="h-8 w-8 filter invert"
              />
              <span className="font-bold text-lg">BUILD THE<br/>WORLD</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Brighter futures, one dream at a time.<br/>
              We focus our efforts to provide shelter,<br/>
              skills, health, and self-reliance to<br/>
              those in need. Donate today and join us in<br/>
              building a stronger community for all.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-yellow-400 font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Projects</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Get Involved</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shop</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Members</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-yellow-400 font-semibold mb-4">Whatsapp Us</h3>
            <p className="text-gray-300">+977984188457</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
