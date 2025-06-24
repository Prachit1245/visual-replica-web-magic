
import { Button } from '@/components/ui/button';

const HomePage = () => {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold">
                <span className="text-blue-900">Together</span><br/>
                <span className="text-blue-600">We Can Change</span><br/>
                <span className="text-gray-900">The World</span>
              </h1>
              <div className="space-y-2">
                <p className="text-xl text-gray-700 font-medium">More than walls, build futures.</p>
                <p className="text-xl text-gray-700 font-medium">Donate to shelter, empower lives.</p>
              </div>
              <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full text-lg">
                Get Involved
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1926&q=80" 
                alt="Building homes for community" 
                className="rounded-lg shadow-xl"
              />
              {/* Floating action buttons */}
              <div className="absolute top-4 right-4 space-y-2">
                <div className="bg-white rounded-full p-3 shadow-lg">
                  <Button className="bg-green-500 hover:bg-green-600 text-white rounded-full px-4 py-2">
                    Donate
                  </Button>
                </div>
                <div className="bg-white rounded-full p-3 shadow-lg">
                  <Button variant="outline" className="rounded-full px-4 py-2">
                    Get Involved
                  </Button>
                </div>
                <div className="bg-white rounded-full p-3 shadow-lg">
                  <Button variant="outline" className="rounded-full px-4 py-2">
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            <span className="text-blue-900">BUILD</span> <span className="text-blue-500">THE WORLD</span>
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            At the heart of our mission lies a profound belief: <span className="text-green-500 font-semibold">everyone deserves a chance to thrive.</span>
          </p>
        </div>
      </section>

      {/* About Section with Tree Image */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="/lovable-uploads/2b38d410-61e6-4ada-8fbb-482f11254a6e.png" 
                alt="Heart-shaped tree representing growth and community" 
                className="w-full max-w-md mx-auto"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-3xl font-bold">About Us: Build The World</h2>
              <div className="space-y-4 text-white/90 leading-relaxed">
                <p>
                  We're not just an organization, we're a community weaver, stitching together hope, opportunity, and dignity for those who need it most. Our vision is ambitious, woven with threads of five distinct initiatives, each aiming to empower and uplift.
                </p>
                <p>
                  Imagine a haven for the homeless, a warm embrace of shelter and support; a library bursting with knowledge, open to all regardless of background; a skill center where hands learn new trades, forging paths to self-sufficiency; a health center, radiating well-being through accessible, quality care; and a self-employment fund, nurturing entrepreneurial dreams and fostering independence.
                </p>
                <p>
                  This is the tapestry we're striving to create, brick by brick, book by book, skill by skill. We believe in the ripple effect of kindness, where one act of generosity can empower lives, strengthen families, and revitalize communities. Join us as we weave this web of transformation, because within every fiber lies the potential for a brighter future, not only for those we serve, but for ourselves, for all of us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">
            Together, let's build a world where everyone has{" "}
            <span className="text-green-500">a safe haven</span>,{" "}
            <span className="text-green-500">a voice, and a path</span> to reach their full potential.
          </h2>
        </div>
      </section>

      {/* Pool of Promise Projects */}
      <section className="py-16 bg-green-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold">Pool of Promise Project</h2>
              <div className="space-y-4">
                {[
                  'Build Home for Homeless',
                  'Build a library for all',
                  'Build Community Skill Centre',
                  'Build Community Health Centre',
                  'Build Fund for self-employment'
                ].map((project, index) => (
                  <div key={index} className="border-b border-white/20 pb-2">
                    <p className="font-medium">{project}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white text-black rounded-lg p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="bg-green-500 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold">
                    DONATE
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">Build The World acknowledge</p>
                    <p className="text-sm text-gray-600">donation by and through bank</p>
                    <p className="text-sm text-gray-600">accounts.</p>
                  </div>
                </div>
              </div>
              <div className="bg-white text-black rounded-lg p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-sm">
                    JOIN
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">Build The World acknowledge</p>
                    <p className="text-sm text-gray-600">your participation in any form</p>
                  </div>
                </div>
              </div>
              <div className="bg-white text-black rounded-lg p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="bg-gray-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-xs">
                    MISSION
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">Build The World builds world</p>
                    <p className="text-sm text-gray-600">through uplifting individual or</p>
                    <p className="text-sm text-gray-600">family in the community.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
