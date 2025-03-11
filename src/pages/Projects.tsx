
import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Projects = () => {
  useEffect(() => {
    document.title = "Projects | The Boy's Club";
  }, []);

  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      title: "Room 404",
      status: "In Development",
      synopsis: "A psychological thriller about four college students who become trapped in a strange dormitory room that seems to exist outside normal reality. As they try to escape, the room begins to manifest their deepest digital secrets and online personas.",
      genre: "Sci-fi thriller",
      visual: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&auto=format&fit=crop"
    },
    {
      title: "In Reverse",
      status: "Script Development",
      synopsis: "A nonlinear narrative told predominantly backward, revealing how four friends ended up in a moment of crisis. Each reverse sequence reveals new context that changes our understanding of their relationships and choices.",
      genre: "Drama",
      visual: "https://images.unsplash.com/photo-1581985673473-0784a7a44e39?w=800&auto=format&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen pt-16 md:pt-20">
      <section className="py-12 md:py-24 bg-cinematic-black">
        <div className="px-4 md:px-8 max-w-screen-xl mx-auto">
          <div className="max-w-3xl mx-auto mb-10 md:mb-16">
            <div className="glass-card p-1 inline-block mb-4">
              <span className="font-mono text-xs text-cinematic-accent">PROJECTS</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6 reveal-mask">
              Upcoming Productions
            </h1>
            
            <div className="h-px w-24 bg-cinematic-accent mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.5s' }}></div>
            
            <p className="text-lg md:text-xl text-gray-300 opacity-0 animate-fade-in" style={{ animationDelay: '0.7s' }}>
              Currently developing short films that blend technical innovation with emotional storytelling.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.title}
                className={`glass-card rounded-md overflow-hidden transform transition-all duration-500 opacity-0 animate-fade-in ${
                  activeProject === index ? 'scale-105' : ''
                }`}
                style={{ animationDelay: `${0.3 * (index + 1)}s` }}
                onClick={() => setActiveProject(index)}
              >
                <div className="relative h-40 md:h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cinematic-black/80 z-10" />
                  <img 
                    src={project.visual} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 z-20">
                    <div className="glass-card py-1 px-2">
                      <span className="text-xs text-cinematic-accent">{project.status}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 md:p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h2 className="text-xl md:text-2xl font-heading font-medium text-white">
                      {project.title}
                    </h2>
                    
                    <span className="text-xs text-gray-400 font-mono">
                      {project.genre}
                    </span>
                  </div>
                  
                  <p className="text-gray-400 text-sm mb-4">
                    {project.synopsis}
                  </p>
                  
                  {activeProject === index && (
                    <div className="animate-fade-in">
                      <div className="mt-6 pt-4 border-t border-gray-700">
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-500">Expected completion: 2025</span>
                          
                          <button className="group flex items-center text-cinematic-accent hover:text-white transition-colors">
                            <span className="text-sm">More details</span>
                            <ArrowRight className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
