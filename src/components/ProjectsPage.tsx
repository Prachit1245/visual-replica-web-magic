
const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-white py-16 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8 mb-16">
          <h1 className="text-4xl font-bold text-green-500 hover-scale">Projects</h1>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Imagine a community where homelessness is a memory, skills bloom, and healthcare reaches all. 
            It's within reach. Explore our projects and discover how your generosity can ignite the spark of hope and empower lives.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left side - Project list */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            {[
              { number: '1', title: 'Build A Home for Homeless' },
              { number: '2', title: 'Build a Library for All' },
              { number: '3', title: 'Build Community Skill Centre' },
              { number: '4', title: 'Build Community Health Centre' },
              { number: '5', title: 'Build Fund for Self-Employment' }
            ].map((project, index) => (
              <div key={project.number} className="flex items-center space-x-6 hover:translate-x-4 transition-all duration-300 animate-fade-in hover-scale" style={{ animationDelay: `${0.4 + index * 0.1}s` }}>
                <div className="text-6xl font-bold text-gray-300 transition-colors duration-300 hover:text-green-500">{project.number}</div>
                <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
              </div>
            ))}
          </div>

          {/* Right side - Community illustration */}
          <div className="flex justify-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="bg-green-400 rounded-lg p-8 relative hover-scale transition-all duration-500 hover:shadow-2xl">
              {/* This represents the community illustration from the original design */}
              <div className="w-96 h-96 bg-green-500 rounded-lg flex items-center justify-center relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1559329007-40df8cd45363?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Community buildings and infrastructure" 
                  className="w-full h-full object-cover rounded-lg opacity-80 transition-all duration-500 hover:scale-110"
                />
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-black text-white px-4 py-2 rounded font-bold text-sm hover-scale">
                    BUILD<br/>THE WORLD
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Projects Image Section */}
        <div className="py-16 bg-gradient-to-br from-blue-50 to-green-50 rounded-lg">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <img 
                  src="https://images.unsplash.com/photo-1517022812141-23620dba5c23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2742&q=80" 
                  alt="Community projects and social work" 
                  className="rounded-lg shadow-xl transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <h2 className="text-3xl font-bold text-gray-900">Our Impact Projects</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Each project represents a step towards building stronger, more resilient communities. 
                  From providing shelter to creating opportunities for skill development and healthcare access, 
                  our initiatives are designed to create lasting positive change.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <p className="text-gray-700">Direct community impact</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <p className="text-gray-700">Sustainable development approach</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <p className="text-gray-700">Community-driven solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
