
import { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

interface AudioToggleProps {
  isEnabled: boolean;
  onToggle: () => void;
}

const AudioToggle = ({ isEnabled, onToggle }: AudioToggleProps) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [audioLoaded, setAudioLoaded] = useState(false);
  
  useEffect(() => {
    // Create audio element if it doesn't exist
    if (!audioRef.current) {
      const audio = new Audio('/ambient.mp3');
      audio.loop = true;
      audio.volume = 0.2;
      
      // Add event listeners
      audio.addEventListener('canplaythrough', () => {
        setAudioLoaded(true);
        console.log('Audio loaded and ready to play');
      });
      
      audio.addEventListener('error', (e) => {
        console.error('Audio error:', e);
        toast.error('Could not load audio file');
      });
      
      audioRef.current = audio;
      
      // Attempt preload
      audio.load();
    }
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.removeEventListener('canplaythrough', () => setAudioLoaded(true));
        audioRef.current.removeEventListener('error', () => {});
        audioRef.current = null;
      }
    };
  }, []);
  
  useEffect(() => {
    if (!audioRef.current || !audioLoaded) return;
    
    // Play or pause based on isEnabled state
    if (isEnabled) {
      const playPromise = audioRef.current.play();
      
      // Handle autoplay restrictions
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.error("Audio autoplay failed:", error);
          toast.error("Browser blocked autoplay. Click again to enable audio.");
          // Update the UI state to match actual audio state
          onToggle();
        });
      }
    } else {
      audioRef.current.pause();
    }
  }, [isEnabled, audioLoaded, onToggle]);
  
  const handleButtonClick = () => {
    if (!audioLoaded) {
      toast.info("Audio is still loading, please try again in a moment");
      return;
    }
    onToggle();
  };
  
  return (
    <button
      onClick={handleButtonClick}
      className={cn(
        "fixed bottom-6 right-6 z-50 p-3 rounded-full transition-all duration-300 glass-card",
        isEnabled ? "bg-cinematic-accent/20" : "bg-white/5 hover:bg-white/10"
      )}
      aria-label={isEnabled ? "Mute audio" : "Enable audio"}
    >
      {isEnabled ? (
        <Volume2 className="w-5 h-5 text-white" />
      ) : (
        <VolumeX className="w-5 h-5 text-white" />
      )}
      <span className="sr-only">{isEnabled ? "Mute" : "Unmute"}</span>
    </button>
  );
};

export default AudioToggle;
