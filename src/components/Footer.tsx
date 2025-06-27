
const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-800 via-gray-800 to-slate-900 text-white animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center space-x-2 hover-scale">
              <img 
                src="/lovable-uploads/72bfd94a-3561-4a26-8982-d0d5da09e64b.png" 
                alt="Build The World Logo" 
                className="h-12 w-auto transition-transform duration-300 hover:scale-110"
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed hover-scale">
              Brighter futures, one dream at a time.<br/>
              We focus our efforts to provide shelter,<br/>
              skills, health, and self-reliance to<br/>
              those in need. Donate today and join us in<br/>
              building a stronger community for all.
            </p>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-yellow-400 font-semibold mb-4 hover-scale">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              {['Home', 'About Us', 'Projects', 'Get Involved', 'Shop', 'Members'].map((link, index) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="hover:text-white transition-all duration-300 hover:translate-x-2 inline-block hover-scale"
                    style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-yellow-400 font-semibold mb-4 hover-scale">Whatsapp Us</h3>
            <p className="text-gray-300 hover:text-white transition-colors duration-300 hover-scale pulse-glow">+977984188457</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
