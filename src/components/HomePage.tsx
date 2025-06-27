
import { Button } from '@/components/ui/button';

const HomePage = () => {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-green-50 py-20 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold animate-fade-in">
                <span className="text-blue-900 inline-block" style={{ animationDelay: '0.2s' }}>Together</span><br/>
                <span className="text-blue-600 inline-block" style={{ animationDelay: '0.4s' }}>We Can Change</span><br/>
                <span className="text-gray-900 inline-block" style={{ animationDelay: '0.6s' }}>The World</span>
              </h1>
              <div className="space-y-2 animate-fade-in" style={{ animationDelay: '0.8s' }}>
                <p className="text-xl text-gray-700 font-medium">More than walls, build futures.</p>
                <p className="text-xl text-gray-700 font-medium">Donate to shelter, empower lives.</p>
              </div>
              <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg animate-fade-in" style={{ animationDelay: '1s' }}>
                Get Involved
              </Button>
            </div>
            <div className="relative animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <img 
                src="https://images.unsplash.com/photo-1517022812141-23620dba5c23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2742&q=80" 
                alt="Social work helping community" 
                className="rounded-lg shadow-xl transition-transform duration-500 hover:scale-105"
              />
              {/* Floating action buttons */}
              <div className="absolute top-4 right-4 space-y-2">
                <div className="bg-white rounded-full p-3 shadow-lg hover-scale animate-fade-in" style={{ animationDelay: '1.2s' }}>
                  <Button className="bg-green-500 hover:bg-green-600 text-white rounded-full px-4 py-2 transition-all duration-300 hover:scale-105">
                    Donate
                  </Button>
                </div>
                <div className="bg-white rounded-full p-3 shadow-lg hover-scale animate-fade-in" style={{ animationDelay: '1.4s' }}>
                  <Button variant="outline" className="rounded-full px-4 py-2 transition-all duration-300 hover:scale-105">
                    Get Involved
                  </Button>
                </div>
                <div className="bg-white rounded-full p-3 shadow-lg hover-scale animate-fade-in" style={{ animationDelay: '1.6s' }}>
                  <Button variant="outline" className="rounded-full px-4 py-2 transition-all duration-300 hover:scale-105">
                    Our Mission
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8 hover-scale">
            <span className="text-blue-900">BUILD</span> <span className="text-blue-500">THE WORLD</span>
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s' }}>
            At the heart of our mission lies a profound belief: <span className="text-green-500 font-semibold">everyone deserves a chance to thrive.</span>
          </p>
        </div>
      </section>

      {/* About Section with Tree Image */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <img 
                src="/lovable-uploads/2b38d410-61e6-4ada-8fbb-482f11254a6e.png" 
                alt="Heart-shaped tree representing growth and community" 
                className="w-full max-w-md mx-auto transition-transform duration-500 hover:scale-110 hover:rotate-2"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6 animate-fade-in">
              <h2 className="text-3xl font-bold">About Us: Build The World</h2>
              <div className="space-y-4 text-white/90 leading-relaxed">
                <p className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
                  We're not just an organization, we're a community weaver, stitching together hope, opportunity, and dignity for those who need it most. Our vision is ambitious, woven with threads of five distinct initiatives, each aiming to empower and uplift.
                </p>
                <p className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
                  Imagine a haven for the homeless, a warm embrace of shelter and support; a library bursting with knowledge, open to all regardless of background; a skill center where hands learn new trades, forging paths to self-sufficiency; a health center, radiating well-being through accessible, quality care; and a self-employment fund, nurturing entrepreneurial dreams and fostering independence.
                </p>
                <p className="animate-fade-in" style={{ animationDelay: '0.8s' }}>
                  This is the tapestry we're striving to create, brick by brick, book by book, skill by skill. We believe in the ripple effect of kindness, where one act of generosity can empower lives, strengthen families, and revitalize communities. Join us as we weave this web of transformation, because within every fiber lies the potential for a brighter future, not only for those we serve, but for ourselves, for all of us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 animate-fade-in">
          <h2 className="text-3xl font-bold text-gray-900 hover-scale">
            Together, let's build a world where everyone has{" "}
            <span className="text-green-500">a safe haven</span>,{" "}
            <span className="text-green-500">a voice, and a path</span> to reach their full potential.
          </h2>
        </div>
      </section>

      {/* Community Buildings & Infrastructure Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-3xl font-bold text-gray-900 hover-scale">Community Buildings & Infrastructure</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Building strong foundations for thriving communities. Our infrastructure projects create lasting change through strategic development of essential facilities that serve as pillars of community growth and empowerment.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <p className="text-gray-700">Modern healthcare facilities</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <p className="text-gray-700">Educational centers and libraries</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <p className="text-gray-700">Skill development workshops</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <p className="text-gray-700">Safe housing solutions</p>
                </div>
              </div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <img 
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=6000&q=80" 
                alt="Modern community building infrastructure" 
                className="rounded-lg shadow-xl transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pool of Promise Projects */}
      <section className="py-16 bg-green-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <h2 className="text-3xl font-bold">Pool of Promise Project</h2>
              <div className="space-y-4">
                {[
                  'Build Home for Homeless',
                  'Build a library for all',
                  'Build Community Skill Centre',
                  'Build Community Health Centre',
                  'Build Fund for self-employment'
                ].map((project, index) => (
                  <div key={index} className="border-b border-white/20 pb-2 hover:translate-x-2 transition-transform duration-300 animate-fade-in" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
                    <p className="font-medium">{project}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              {[
                { bg: 'bg-green-500', text: 'DONATE', description: 'Build The World acknowledge donation by and through bank accounts.', delay: '0.3s' },
                { bg: 'bg-blue-500', text: 'JOIN', description: 'Build The World acknowledge your participation in any form', delay: '0.5s' },
                { bg: 'bg-gray-600', text: 'MISSION', description: 'Build The World builds world through uplifting individual or family in the community.', delay: '0.7s' }
              ].map((item, index) => (
                <div key={index} className={`bg-white text-black rounded-lg p-6 space-y-4 hover-scale animate-fade-in transition-all duration-300 hover:shadow-xl`} style={{ animationDelay: item.delay }}>
                  <div className="flex items-center justify-between">
                    <div className={`${item.bg} text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-sm transition-transform duration-300 hover:rotate-12`}>
                      {item.text}
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">{item.description.split(' ').slice(0, 4).join(' ')}</p>
                      <p className="text-sm text-gray-600">{item.description.split(' ').slice(4).join(' ')}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
