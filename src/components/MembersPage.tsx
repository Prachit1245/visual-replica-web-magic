
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, User, Briefcase } from 'lucide-react';

const MembersPage = () => {
  const members = [
    { name: "Gulab Prasad Sinha", post: "Chairperson", contact: "9842820340" },
    { name: "Gulab Ram", post: "Vice Chairperson", contact: "981995602" },
    { name: "Kumari Anu", post: "Treasurer", contact: "9842926379" },
    { name: "Birendra Kumar Sinha", post: "Secretary", contact: "98413445128" },
    { name: "Parbin Kumar Sinha", post: "Member", contact: "9841884577" },
    { name: "Shanendra Shah", post: "Freelancer", contact: "" },
    { name: "Shira Khadka", post: "Freelancer", contact: "" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 animate-fade-in">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-green-500 to-blue-600 py-20 animate-fade-in">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl font-bold mb-4 hover-scale bounce-in">Meet Our Team</h1>
          <p className="text-xl mb-8 animate-fade-in float-animation" style={{ animationDelay: '0.2s' }}>
            Dedicated members working together to build a better world
          </p>
        </div>
      </div>

      {/* Members Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {members.map((member, index) => (
              <Card 
                key={index} 
                className="hover-scale animate-fade-in bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-l-green-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 pulse-glow">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800 hover:text-green-600 transition-colors">
                    {member.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-3">
                  <div className="flex items-center justify-center space-x-2 text-blue-600">
                    <Briefcase className="w-4 h-4" />
                    <span className="font-medium">{member.post}</span>
                  </div>
                  {member.contact && (
                    <div className="flex items-center justify-center space-x-2 text-gray-600 hover:text-green-600 transition-colors">
                      <Phone className="w-4 h-4" />
                      <a 
                        href={`tel:+977${member.contact}`} 
                        className="hover:underline font-mono"
                      >
                        +977 {member.contact}
                      </a>
                    </div>
                  )}
                  <div className="w-full h-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mt-4"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-green-100 to-blue-100 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 hover-scale animate-fade-in">
            Want to Join Our Mission?
          </h2>
          <p className="text-gray-600 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Connect with our team members and be part of building a better world.
          </p>
          <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 pulse-glow animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Get In Touch
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MembersPage;
