
import { useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AudioToggleProps {
  isEnabled: boolean;
  onToggle: () => void;
}

const AudioToggle = ({ isEnabled, onToggle }: AudioToggleProps) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  useEffect(() => {
    // Create audio element
    if (!audioRef.current) {
      audioRef.current = new Audio();
      audioRef.current.src = "/ambient.mp3"; // We'll create this file later
      audioRef.current.loop = true;
      audioRef.current.volume = 0.2;
    }
    
    // Play or pause based on isEnabled state
    if (isEnabled) {
      const playPromise = audioRef.current.play();
      
      // Handle autoplay restrictions
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.error("Audio autoplay failed:", error);
          // If autoplay fails, update state to reflect actual state
          onToggle();
        });
      }
    } else if (audioRef.current) {
      audioRef.current.pause();
    }
    
    // Cleanup
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [isEnabled, onToggle]);
  
  return (
    <button
      onClick={onToggle}
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
