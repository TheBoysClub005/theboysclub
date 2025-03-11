
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    document.title = "404 | The_Boys_Club_Lovable.app";
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-cinematic-black p-4">
      <div className="glass-card p-12 max-w-xl rounded-md text-center">
        <h1 className="text-6xl font-heading font-bold text-white mb-6">404</h1>
        <div className="h-px w-16 bg-cinematic-accent mx-auto mb-8"></div>
        <p className="text-xl text-gray-300 mb-8">
          The scene you're looking for doesn't exist in this timeline.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center px-6 py-3 bg-transparent border border-cinematic-accent text-cinematic-accent rounded hover:bg-cinematic-accent/10 transition-all duration-300"
        >
          <ArrowLeft className="mr-2 w-4 h-4" />
          Return to Main Scene
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
