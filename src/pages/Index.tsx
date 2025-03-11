
import { useEffect } from 'react';
import Hero from '@/components/Hero';
import { ArrowRight, Film, User, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  useEffect(() => {
    document.title = "Nikhil Reddy Nookala | Filmmaker";
  }, []);

  const directors = [
    {
      name: "Christopher Nolan",
      image: "/lovable-uploads/9cb031ca-7c80-40b0-a42c-aa00464b63c5.png",
      posterImage: "/lovable-uploads/7d73a9e3-f4e9-4822-b9c1-af75f4f7022b.png",
      description: "Complex narratives and visual innovation"
    },
    {
      name: "SS Rajamouli",
      image: "/lovable-uploads/2f2806f7-6857-4a6e-b90a-d8e343523910.png",
      posterImage: "/lovable-uploads/7d73a9e3-f4e9-4822-b9c1-af75f4f7022b.png",
      description: "Grand spectacle and emotional storytelling"
    },
    {
      name: "Nag Ashwin",
      image: "/lovable-uploads/28223697-03a5-4a49-832b-e1a4a2a34c2a.png",
      posterImage: "/lovable-uploads/7d73a9e3-f4e9-4822-b9c1-af75f4f7022b.png",
      description: "Blending tradition with futuristic vision"
    }
  ];

  return (
    <div className="min-h-screen">
      <Hero />
      
      <section className="section-spacing bg-cinematic-black">
        <div className="cinematic-container">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <div className="relative mb-8">
                <div className="glass-card p-1 absolute -top-3 -left-3 z-10">
                  <span className="font-mono text-xs text-cinematic-accent">01</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-white reveal-mask">
                  Cinematic Vision
                </h2>
                <div className="h-px w-16 bg-cinematic-accent mt-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.5s' }}></div>
              </div>
              
              <p className="text-gray-300 mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.7s' }}>
                Inspired by the complex narratives of Christopher Nolan, the grand spectacle of 
                SS Rajamouli, and the innovative vision of Nag Ashwin, I'm crafting stories that 
                bridge cultures and push boundaries.
              </p>
              
              <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.9s' }}>
                <Link 
                  to="/vision" 
                  className="inline-flex items-center text-cinematic-accent hover:text-white transition-colors duration-300"
                >
                  Explore My Vision
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
            
            <div className="w-full md:w-1/2 opacity-0 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <div className="glass-card p-6 md:p-8 rounded-md">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col items-center text-center p-4">
                    <User className="w-10 h-10 text-cinematic-accent mb-3" />
                    <h3 className="text-lg font-heading font-medium text-white mb-2">About Me</h3>
                    <p className="text-sm text-gray-400 mb-3">Discover my journey from film enthusiast to creator</p>
                    <Link 
                      to="/about" 
                      className="text-xs uppercase tracking-wide text-cinematic-accent hover:text-white transition-colors"
                    >
                      Learn More
                    </Link>
                  </div>
                  
                  <div className="flex flex-col items-center text-center p-4">
                    <Film className="w-10 h-10 text-cinematic-accent mb-3" />
                    <h3 className="text-lg font-heading font-medium text-white mb-2">Projects</h3>
                    <p className="text-sm text-gray-400 mb-3">Explore my in-development short film scripts</p>
                    <Link 
                      to="/projects" 
                      className="text-xs uppercase tracking-wide text-cinematic-accent hover:text-white transition-colors"
                    >
                      View Projects
                    </Link>
                  </div>
                  
                  <div className="flex flex-col items-center text-center p-4 sm:col-span-2">
                    <MessageSquare className="w-10 h-10 text-cinematic-accent mb-3" />
                    <h3 className="text-lg font-heading font-medium text-white mb-2">Collaborate</h3>
                    <p className="text-sm text-gray-400 mb-3">Interested in working together? Let's connect</p>
                    <Link 
                      to="/contact" 
                      className="text-xs uppercase tracking-wide text-cinematic-accent hover:text-white transition-colors"
                    >
                      Contact Me
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Director Inspirations */}
          <div className="mt-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-white mb-4">Cinematic Influences</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">Visionary directors whose work has profoundly influenced my approach to filmmaking</p>
            </div>
            
            {/* Movie posters influence section */}
            <div className="mb-16">
              <img 
                src="/lovable-uploads/ad95f06b-b0c5-4937-ae42-b88547f7dbf9.png" 
                alt="Cinematic Influences" 
                className="w-full rounded-lg shadow-lg opacity-0 animate-fade-in" 
                style={{ animationDelay: '0.8s' }}
              />
            </div>
            
            {/* Directors grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {directors.map((director) => (
                <div key={director.name} className="glass-card rounded-md overflow-hidden opacity-0 animate-fade-in" style={{ animationDelay: '1s' }}>
                  <div className="h-64 overflow-hidden">
                    <img src={director.image} alt={director.name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-heading text-xl text-white mb-2">{director.name}</h3>
                    <p className="text-gray-400 text-sm mb-3">{director.description}</p>
                    <div className="h-40 overflow-hidden rounded-md">
                      <img 
                        src={director.posterImage} 
                        alt={`${director.name} movie posters`} 
                        className="w-full h-full object-cover"
                      />
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

export default Index;
