
import { Button } from '@/components/ui/button';

const MembersPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-green-500 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Log In to Connect With Members</h1>
          <p className="text-xl mb-8">View and follow other members, leave comments & more.</p>
          
          <Button className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded font-medium">
            Log In
          </Button>
        </div>
      </div>

      {/* Content would go here for logged-in members */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600">Please log in to access member features and connect with our community.</p>
        </div>
      </div>
    </div>
  );
};

export default MembersPage;
