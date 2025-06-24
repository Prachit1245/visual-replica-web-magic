
const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8 mb-16">
          <h1 className="text-4xl font-bold text-green-500">Projects</h1>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Imagine a community where homelessness is a memory, skills bloom, and healthcare reaches all. 
            It's within reach. Explore our projects and discover how your generosity can ignite the spark of hope and empower lives.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Project list */}
          <div className="space-y-8">
            {[
              { number: '1', title: 'Build A Home for Homeless' },
              { number: '2', title: 'Build a Library for All' },
              { number: '3', title: 'Build Community Skill Centre' },
              { number: '4', title: 'Build Community Health Centre' },
              { number: '5', title: 'Build Fund for Self-Employment' }
            ].map((project) => (
              <div key={project.number} className="flex items-center space-x-6">
                <div className="text-6xl font-bold text-gray-300">{project.number}</div>
                <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
              </div>
            ))}
          </div>

          {/* Right side - Community illustration */}
          <div className="flex justify-center">
            <div className="bg-green-400 rounded-lg p-8 relative">
              {/* This represents the community illustration from the original design */}
              <div className="w-96 h-96 bg-green-500 rounded-lg flex items-center justify-center relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1559329007-40df8cd45363?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Community buildings and infrastructure" 
                  className="w-full h-full object-cover rounded-lg opacity-80"
                />
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-black text-white px-4 py-2 rounded font-bold text-sm">
                    BUILD<br/>THE WORLD
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
