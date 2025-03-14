
import { useEffect } from 'react';
import Hero from '@/components/Hero';
import { ArrowRight, Film, User, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  useEffect(() => {
    document.title = "The Boy's Club | Independent Filmmaker";
  }, []);

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
                I'm a filmmaker from Hyderabad with a passion for cinematic storytelling. 
                With the help of my friends, I'm crafting stories that bridge cultures and push boundaries.
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
                    <p className="text-sm text-gray-400 mb-3">Explore my in-development short films</p>
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
        </div>
      </section>
    </div>
  );
};

export default Index;
