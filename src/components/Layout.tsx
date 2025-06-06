
import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import { toast } from 'sonner';
import Navigation from './Navigation';
import AudioToggle from './AudioToggle';
import PageTransition from './PageTransition';

const Layout = () => {
  const [audioEnabled, setAudioEnabled] = useState(true); // Changed to true by default
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for cinematic effect
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);  // Reduced loading time for better mobile experience

    return () => clearTimeout(timer);
  }, []);

  const toggleAudio = () => {
    const newState = !audioEnabled;
    setAudioEnabled(newState);
    toast.info(newState ? "Ambient audio enabled" : "Ambient audio muted");
  };

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-cinematic-black z-50">
        <div className="flex flex-col items-center px-4">
          <img 
            src="/lovable-uploads/dd83d7de-2447-4b17-8740-05614e83ef0a.png" 
            alt="The Boy's Club Logo" 
            className="w-16 h-16 mb-4 animate-pulse-subtle"
          />
          <div className="h-0.5 w-24 bg-cinematic-silver overflow-hidden">
            <div className="h-full bg-cinematic-accent animate-reveal-text"></div>
          </div>
          <p className="mt-4 text-cinematic-silver font-mono text-sm tracking-wider opacity-0 animate-fade-in-delay">
            WELCOME
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Navigation />
      <AudioToggle isEnabled={audioEnabled} onToggle={toggleAudio} />
      
      <main className="relative z-10">
        <PageTransition>
          <Outlet />
        </PageTransition>
      </main>
      
      <Toaster position="top-right" />
    </div>
  );
};

export default Layout;
