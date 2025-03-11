
import { useEffect } from 'react';
import { Star } from 'lucide-react';

const About = () => {
  useEffect(() => {
    document.title = "About Me | Nikhil Reddy Nookala";
  }, []);

  const influences = [
    {
      name: "Christopher Nolan",
      contribution: "Complex narratives and visual innovation",
      image: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=800&auto=format&fit=crop"
    },
    {
      name: "SS Rajamouli",
      contribution: "Grand spectacle and emotional storytelling",
      image: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=800&auto=format&fit=crop"
    },
    {
      name: "Nag Ashwin",
      contribution: "Blending tradition with futuristic vision",
      image: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=800&auto=format&fit=crop"
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
                I'm just a guy who watches films all the time, now taking the leap to create them.
              </p>
              
              <div className="space-y-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.9s' }}>
                <p className="text-gray-400">
                  Born and raised in Hyderabad, India, my journey into filmmaking began with a passion for 
                  storytelling that transcends cultural boundaries. As an emerging filmmaker, I'm focused 
                  on developing short film scripts that blend the technical precision of Western cinema 
                  with the rich narrative traditions of Indian storytelling.
                </p>
                
                <p className="text-gray-400">
                  While I'm new to the craft of filmmaking, I bring years of analytical viewing and a 
                  deep understanding of cinematic language. My background in Hyderabad has given me a 
                  unique perspective that I'm eager to share through my work.
                </p>
                
                <p className="text-gray-400">
                  Currently, I'm developing several short film scripts that explore themes of identity, 
                  perception, and time—concepts that have fascinated me throughout my journey as a film enthusiast.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-16 pt-16 border-t border-gray-800">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-white mb-12 text-center">
              Cinematic Influences
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {influences.map((influence, index) => (
                <div 
                  key={influence.name} 
                  className="glass-card rounded-md overflow-hidden opacity-0 animate-fade-in"
                  style={{ animationDelay: `${0.3 * (index + 1)}s` }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cinematic-black/80 z-10" />
                    <img 
                      src={influence.image} 
                      alt={influence.name} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-4 left-4 z-20">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-cinematic-gold mr-1" />
                        <Star className="w-4 h-4 text-cinematic-gold mr-1" />
                        <Star className="w-4 h-4 text-cinematic-gold" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-heading font-medium text-white mb-2">
                      {influence.name}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {influence.contribution}
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
