import { useEffect } from 'react';
import { Film, Users, Shield } from 'lucide-react';

const About = () => {
  useEffect(() => {
    document.title = "About | The Boy's Club";
  }, []);

  const friends = [
    {
      name: "Abhishek",
      role: "Friend & Assistant",
      bio: "Works closely with me and shares the same passion for filmmaking. Helps me in the creative process."
    },
    {
      name: "Aditya Om",
      role: "Friend & Helper",
      bio: "Brings unique perspectives to my productions and supports my filmmaking journey."
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
                I'm a film enthusiast who watches films all the time, now taking the leap to create them.
              </p>
              
              <div className="space-y-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.9s' }}>
                <p className="text-gray-400">
                  Based in Hyderabad, India, my journey into filmmaking began with a passion for 
                  storytelling that transcends cultural boundaries. As an emerging filmmaker, I'm focused 
                  on developing short films that blend the technical precision of Western cinema 
                  with the rich narrative traditions of Indian storytelling.
                </p>
                
                <p className="text-gray-400">
                  While I'm new to the craft of filmmaking, I bring my perspective and a 
                  deep understanding of cinematic language. My background in Hyderabad has given me a 
                  unique viewpoint that I'm eager to share through my work.
                </p>
                
                <p className="text-gray-400">
                  Currently, I'm developing several short film projects that explore themes of identity, 
                  perception, and time—concepts that have fascinated me throughout my journey as a film enthusiast.
                </p>
              </div>
            </div>
          </div>
          
          {/* New Section: The Backbone of The Boy's Club */}
          <div className="mt-16 pt-16 border-t border-gray-800">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-white mb-12 text-center">
              The Backbone of The Boy's Club
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="glass-card rounded-md overflow-hidden opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <Shield className="w-12 h-12 text-cinematic-accent mr-4" />
                    <div>
                      <h3 className="text-2xl font-heading font-medium text-white">
                        Sharath Reddy Nookala
                      </h3>
                      <div className="text-cinematic-accent font-medium">
                        Co-Founder & Guardian of Dreams
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed">
                    Every visionary needs a sentinel. For The Boy's Club, that sentinel is Sharath Reddy Nookala. 
                    His unwavering faith is the bedrock upon which these stories rise; his resolve, the silent thunder 
                    behind every risk we dare to take. Sharath isn't just a brother — he's a strategist, protector, 
                    and the first to believe when the world hesitates. With his keen eye for detail and an unshakeable 
                    moral compass, Sharath ensures that every frame we capture not only stirs hearts but also stands 
                    for something greater. He is the quiet architect of our ambition, the reason our stories don't 
                    just entertain — they endure.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 pt-16 border-t border-gray-800">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-white mb-12 text-center">
              Friends Who Help Me
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {friends.map((friend, index) => (
                <div 
                  key={friend.name} 
                  className="glass-card rounded-md overflow-hidden opacity-0 animate-fade-in"
                  style={{ animationDelay: `${0.2 * (index + 1)}s` }}
                >
                  <div className="p-6">
                    <Users className="w-10 h-10 text-cinematic-accent mb-4" />
                    <h3 className="text-xl font-heading font-medium text-white mb-2">
                      {friend.name}
                    </h3>
                    <div className="text-sm text-cinematic-accent mb-3">
                      {friend.role}
                    </div>
                    <p className="text-sm text-gray-400">
                      {friend.bio}
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
