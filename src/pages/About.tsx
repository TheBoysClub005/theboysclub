
import { useEffect } from 'react';
import { Film, Users } from 'lucide-react';

const About = () => {
  useEffect(() => {
    document.title = "About | The Boy's Club";
  }, []);

  const teamMembers = [
    {
      name: "Nikhil Reddy Nookala",
      role: "Founder & Director",
      bio: "Passionate filmmaker with a vision to blend Western cinematic techniques with Indian storytelling traditions."
    },
    {
      name: "Abhishek",
      role: "Assistant Director",
      bio: "Works closely with Nikhil and shares the same passion for filmmaking. Key partner in the creative process."
    },
    {
      name: "Aditya Om",
      role: "Team Member",
      bio: "An essential part of The Boy's Club, bringing unique perspectives to our productions."
    },
    {
      name: "Arhanth",
      role: "Team Member",
      bio: "Contributing creative ideas and support to our filmmaking journey."
    },
    {
      name: "Mukundh",
      role: "Team Member",
      bio: "A valuable member of our filmmaking collective, helping us bring stories to life."
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="section-spacing bg-cinematic-black">
        <div className="cinematic-container">
          <div className="max-w-3xl mx-auto mb-16">
            <div className="glass-card p-1 inline-block mb-4">
              <span className="font-mono text-xs text-cinematic-accent">ABOUT</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 reveal-mask">
              The Story Behind The Lens
            </h1>
            
            <div className="h-px w-24 bg-cinematic-accent mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.5s' }}></div>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-xl text-gray-300 mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.7s' }}>
                We're just a group of friends who watch films all the time, now taking the leap to create them.
              </p>
              
              <div className="space-y-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.9s' }}>
                <p className="text-gray-400">
                  Based in Hyderabad, India, our journey into filmmaking began with a shared passion for 
                  storytelling that transcends cultural boundaries. As an emerging filmmaking collective, we're focused 
                  on developing short films that blend the technical precision of Western cinema 
                  with the rich narrative traditions of Indian storytelling.
                </p>
                
                <p className="text-gray-400">
                  While we're new to the craft of filmmaking, we bring our combined perspectives and a 
                  deep understanding of cinematic language. Our background in Hyderabad has given us a 
                  unique viewpoint that we're eager to share through our work.
                </p>
                
                <p className="text-gray-400">
                  Currently, we're developing several short film projects that explore themes of identity, 
                  perception, and time—concepts that have fascinated us throughout our journey as film enthusiasts.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-16 pt-16 border-t border-gray-800">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-white mb-12 text-center">
              Meet Our Team
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div 
                  key={member.name} 
                  className="glass-card rounded-md overflow-hidden opacity-0 animate-fade-in"
                  style={{ animationDelay: `${0.2 * (index + 1)}s` }}
                >
                  <div className="p-6">
                    <Users className="w-10 h-10 text-cinematic-accent mb-4" />
                    <h3 className="text-xl font-heading font-medium text-white mb-2">
                      {member.name}
                    </h3>
                    <div className="text-sm text-cinematic-accent mb-3">
                      {member.role}
                    </div>
                    <p className="text-sm text-gray-400">
                      {member.bio}
                    </p>
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

export default About;
