
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
      synopsis: "A psychological thriller about a hotel room that traps its occupants in their worst nightmares, forcing them to confront their deepest fears.",
      genre: "Thriller / Horror",
      visual: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&auto=format&fit=crop"
    },
    {
      title: "In Reverse",
      status: "Script Development",
      synopsis: "A non-linear narrative that follows a character's life in reverse, revealing how seemingly inconsequential decisions lead to profound consequences.",
      genre: "Drama",
      visual: "https://images.unsplash.com/photo-1581985673473-0784a7a44e39?w=800&auto=format&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="section-spacing bg-cinematic-black">
        <div className="cinematic-container">
          <div className="max-w-3xl mx-auto mb-16">
            <div className="glass-card p-1 inline-block mb-4">
              <span className="font-mono text-xs text-cinematic-accent">PROJECTS</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 reveal-mask">
              Upcoming Productions
            </h1>
            
            <div className="h-px w-24 bg-cinematic-accent mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.5s' }}></div>
            
            <p className="text-xl text-gray-300 opacity-0 animate-fade-in" style={{ animationDelay: '0.7s' }}>
              Currently developing short films that blend technical innovation with emotional storytelling.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.title}
                className={`glass-card rounded-md overflow-hidden transform transition-all duration-500 opacity-0 animate-fade-in ${
                  activeProject === index ? 'scale-105' : ''
                }`}
                style={{ animationDelay: `${0.3 * (index + 1)}s` }}
                onClick={() => setActiveProject(index)}
              >
                <div className="relative h-48 overflow-hidden">
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
                
                <div className="p-6">
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
                          <span className="text-xs text-gray-500">Expected completion: 2023</span>
                          
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
          
          <div className="mt-24 glass-card p-8 rounded-md opacity-0 animate-fade-in" style={{ animationDelay: '1.5s' }}>
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-2/3 mb-8 md:mb-0 md:pr-8">
                <h2 className="text-2xl md:text-3xl font-heading font-medium text-white mb-4">
                  Collaborate on Future Projects
                </h2>
                
                <p className="text-gray-400 mb-6">
                  We're always looking to connect with fellow filmmakers, writers, cinematographers, 
                  and other creatives who share a passion for innovative storytelling.
                </p>
                
                <a 
                  href="/contact" 
                  className="inline-flex items-center px-6 py-3 bg-cinematic-accent text-white rounded hover:bg-cinematic-accent/80 transition-colors"
                >
                  Get in Touch
                </a>
              </div>
              
              <div className="w-full md:w-1/3">
                <div className="relative h-48 rounded-md overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cinematic-black/80 z-10" />
                  <img 
                    src="https://images.unsplash.com/photo-1524026458548-0e5531bf7034?w=800&auto=format&fit=crop" 
                    alt="Collaboration" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
