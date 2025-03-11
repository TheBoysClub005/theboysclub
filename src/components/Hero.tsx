
import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0 bg-cinematic-deepBlue z-0">
        <div 
          className="absolute inset-0 bg-gradient-to-b from-black/70 via-cinematic-deepBlue/70 to-cinematic-black"
        />
      </div>
      
      {/* Hero Content */}
      <div className="cinematic-container relative z-10 text-center px-4">
        <div className="overflow-hidden mb-4">
          <p className={cn(
            "text-cinematic-silver font-mono text-sm tracking-[0.2em] uppercase transform transition-transform duration-1000",
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}>
            Film Making Company
          </p>
        </div>
        
        <div className="overflow-hidden my-6">
          <h1 className={cn(
            "font-heading font-bold text-4xl md:text-6xl lg:text-7xl tracking-tight text-white transform transition-transform duration-1000 delay-300",
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
          )}>
            <span className="text-cinematic-accent">The</span> Boy's Club
          </h1>
        </div>
        
        <div className="overflow-hidden mt-6 mb-12">
          <p className={cn(
            "max-w-lg mx-auto text-gray-300 transform transition-transform duration-1000 delay-500",
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}>
            A passionate filmmaking collective from Hyderabad, India, blending Western cinematic techniques 
            with Indian storytelling traditions.
          </p>
        </div>
        
        <div className={cn(
          "transform transition-all duration-1000 delay-700",
          isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        )}>
          <Link 
            to="/about" 
            className="group inline-flex items-center px-6 py-3 bg-transparent border border-cinematic-accent text-cinematic-accent rounded hover:bg-cinematic-accent/10 transition-all duration-300"
          >
            Discover Our Story
            <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
      
      {/* Cinematic Line */}
      <div className="absolute bottom-16 left-0 right-0 flex justify-center">
        <div className={cn(
          "h-px w-0 bg-cinematic-accent transition-all duration-[1.5s] delay-1000",
          isLoaded ? "w-24 md:w-48" : "w-0"
        )}></div>
      </div>
    </section>
  );
};

export default Hero;
