
import { Button } from '@/components/ui/button';
import { Heart, Users, Share2 } from 'lucide-react';

const GetInvolvedPage = () => {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-8 mb-16">
          <h1 className="text-4xl font-bold text-green-500">Be the Change</h1>
          <p className="text-xl text-gray-700">Ways to Get Involved with 'Build The World'</p>
        </div>

        {/* Earth Image and Quote */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Every dream starts with a spark, and every positive change needs a helping hand.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Every action, big or small, has the power to change the world, creating a wave of positive change.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-64 h-64 rounded-full bg-gradient-to-br from-blue-900 to-black flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Earth from space" 
                className="w-56 h-56 rounded-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="text-center mb-16">
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
            At Build The World, we believe that together, we can build a brighter future for our community, 
            brick by brick, book by book, skill by skill. We believe that together, we can build a brighter future 
            for our individuals, families, and our entire community.
          </p>
        </div>

        {/* Call to Action */}
        <div className="text-center mb-16">
          <p className="text-xl font-semibold text-gray-900 mb-8">
            We invite you to join us in this mission through a variety of ways:
          </p>
        </div>

        {/* Three Ways to Help */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Donate */}
          <div className="text-center space-y-6">
            <div className="mx-auto w-32 h-32 bg-blue-100 rounded-lg flex items-center justify-center">
              <Heart className="w-16 h-16 text-red-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Donate</h3>
            <p className="text-gray-600 leading-relaxed">
              Your financial support is the cornerstone of our work. Even a small contribution can make a significant difference.
            </p>
            <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full">
              Donate →
            </Button>
          </div>

          {/* Volunteer */}
          <div className="text-center space-y-6">
            <div className="mx-auto w-32 h-32 bg-blue-100 rounded-lg flex items-center justify-center">
              <Users className="w-16 h-16 text-blue-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Volunteer</h3>
            <p className="text-gray-600 leading-relaxed">
              We rely on the dedication and passion of our volunteers to keep our initiatives running smoothly.
            </p>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full">
              Get Involved →
            </Button>
          </div>

          {/* Spread the Word */}
          <div className="text-center space-y-6">
            <div className="mx-auto w-32 h-32 bg-blue-100 rounded-lg flex items-center justify-center">
              <Share2 className="w-16 h-16 text-green-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Spread the Word</h3>
            <p className="text-gray-600 leading-relaxed">
              Raise awareness about the work we do by talking to your friends, family, and colleagues.
            </p>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded">
              Share
            </Button>
          </div>
        </div>

        {/* Final Message */}
        <div className="text-center space-y-6">
          <p className="text-lg font-semibold text-gray-900">
            No matter how you choose to get involved,
          </p>
          <p className="text-lg text-gray-700">
            your contribution will be invaluable in helping us achieve our mission
          </p>
          <p className="text-lg text-gray-700">
            and make a positive impact on the lives of those in need.
          </p>
          <h2 className="text-3xl font-bold text-green-500 mt-8">
            We look forward to welcoming you to the Build The World family!
          </h2>
        </div>
      </div>
    </div>
  );
};

export default GetInvolvedPage;
