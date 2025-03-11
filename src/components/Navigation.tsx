
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Film, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Me', path: '/about' },
    { name: 'Vision', path: '/vision' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
  }, [location]);

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 px-4 md:py-4 md:px-6',
          scrolled ? 'bg-cinematic-black/90 backdrop-blur-md' : 'bg-transparent'
        )}
      >
        <div className="max-w-screen-xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 group">
            <img 
              src="/lovable-uploads/dd83d7de-2447-4b17-8740-05614e83ef0a.png" 
              alt="The Boy's Club Logo" 
              className="w-8 h-8 md:w-10 md:h-10 transition-transform duration-500 group-hover:rotate-12" 
            />
            <span className="font-heading font-semibold text-white tracking-wider text-sm md:text-base">
              <span className="text-cinematic-accent">The</span> Boy's Club
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  'relative font-medium text-sm tracking-wider cinematic-underline transition-colors',
                  location.pathname === item.path 
                    ? 'text-white' 
                    : 'text-gray-400 hover:text-white'
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-cinematic-black/95 backdrop-blur-lg transition-transform duration-300 flex flex-col pt-20 px-6',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col space-y-6 items-center">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                'text-xl font-heading font-medium tracking-wider transition-colors',
                location.pathname === item.path
                  ? 'text-white'
                  : 'text-gray-400 hover:text-white'
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navigation;
