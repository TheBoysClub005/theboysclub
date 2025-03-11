
import { useEffect, useState } from 'react';

const Vision = () => {
  useEffect(() => {
    document.title = "Vision | Nikhil Reddy Nookala";
  }, []);

  const [activeTab, setActiveTab] = useState(0);

  const visionElements = [
    {
      title: "Narrative Complexity",
      description: "Drawing from Nolan's non-linear storytelling, I explore narratives that challenge perception and unfold in unexpected ways.",
      image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&auto=format&fit=crop"
    },
    {
      title: "Visual Grandeur",
      description: "Inspired by Rajamouli's epic scale, I aim to create visually stunning sequences that serve the emotional core of the story.",
      image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&auto=format&fit=crop"
    },
    {
      title: "Cultural Fusion",
      description: "Blending Western technical precision with Indian storytelling traditions to create cinema that resonates across cultural boundaries.",
      image: "https://images.unsplash.com/photo-1535016120720-40c646be5580?w=800&auto=format&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="section-spacing bg-cinematic-black">
        <div className="cinematic-container">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <div className="glass-card p-1 inline-block mb-4">
              <span className="font-mono text-xs text-cinematic-accent">VISION</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 reveal-mask">
              Cinematic Philosophy
            </h1>
            
            <div className="h-px w-24 bg-cinematic-accent mx-auto mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.5s' }}></div>
            
            <p className="text-xl text-gray-300 opacity-0 animate-fade-in" style={{ animationDelay: '0.7s' }}>
              My approach to filmmaking blends technical precision with emotional authenticity.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="w-full md:w-1/2 sticky top-24 opacity-0 animate-fade-in" style={{ animationDelay: '0.9s' }}>
              <div className="glass-card rounded-md overflow-hidden">
                <img 
                  src={visionElements[activeTab].image} 
                  alt={visionElements[activeTab].title} 
                  className="w-full h-80 object-cover"
                />
                
                <div className="p-6">
                  <h3 className="text-2xl font-heading font-medium text-white mb-4">
                    {visionElements[activeTab].title}
                  </h3>
                  <p className="text-gray-400">
                    {visionElements[activeTab].description}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-1/2 opacity-0 animate-fade-in" style={{ animationDelay: '1.1s' }}>
              <div className="space-y-8">
                <div className="glass-card p-6 rounded-md">
                  <h3 className="text-xl font-heading font-medium text-white mb-4">
                    Storyboard Process
                  </h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-cinematic-accent flex items-center justify-center text-white font-mono text-xs">
                        01
                      </div>
                      <div className="ml-4">
                        <h4 className="text-white font-medium">Concept Development</h4>
                        <p className="text-sm text-gray-400">Exploring ideas through written narratives and visual references</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-white font-mono text-xs">
                        02
                      </div>
                      <div className="ml-4">
                        <h4 className="text-white font-medium">Visual Mapping</h4>
                        <p className="text-sm text-gray-400">Translating narrative beats into key visual moments</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-white font-mono text-xs">
                        03
                      </div>
                      <div className="ml-4">
                        <h4 className="text-white font-medium">Technical Planning</h4>
                        <p className="text-sm text-gray-400">Determining camera angles, lighting, and composition</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-white font-mono text-xs">
                        04
                      </div>
                      <div className="ml-4">
                        <h4 className="text-white font-medium">Refinement</h4>
                        <p className="text-sm text-gray-400">Iterating and enhancing the visual storytelling</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="glass-card p-6 rounded-md">
                  <h3 className="text-xl font-heading font-medium text-white mb-4">
                    Key Elements
                  </h3>
                  
                  <div className="space-y-4">
                    {visionElements.map((element, index) => (
                      <button
                        key={element.title}
                        onClick={() => setActiveTab(index)}
                        className={`w-full text-left p-3 rounded transition-colors ${
                          activeTab === index 
                            ? 'bg-cinematic-accent/20 text-white' 
                            : 'bg-gray-800/30 text-gray-400 hover:bg-gray-800/50'
                        }`}
                      >
                        {element.title}
                      </button>
                    ))}
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

export default Vision;
