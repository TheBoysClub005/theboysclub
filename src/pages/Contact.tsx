
import { useEffect } from 'react';
import { Instagram, Twitter, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  useEffect(() => {
    document.title = "Contact | Nikhil Reddy Nookala";
  }, []);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText('theboysclub005@gmail.com');
    toast.success("Email copied to clipboard!");
  };

  const socialLinks = [
    {
      name: "Instagram",
      url: "https://instagram.com/theboysclub",
      icon: <Instagram className="w-6 h-6" />
    },
    {
      name: "Twitter",
      url: "https://twitter.com/theboysclub",
      icon: <Twitter className="w-6 h-6" />
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/theboysclub",
      icon: <Linkedin className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="section-spacing bg-cinematic-black">
        <div className="cinematic-container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="glass-card p-1 inline-block mb-4">
              <span className="font-mono text-xs text-cinematic-accent">CONTACT</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 reveal-mask">
              Let's Connect
            </h1>
            
            <div className="h-px w-24 bg-cinematic-accent mx-auto mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.5s' }}></div>
            
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: '0.7s' }}>
              Whether you're interested in collaboration or just want to discuss cinema, 
              I'd love to hear from you through any of these platforms.
            </p>
            
            {/* Email Card */}
            <div className="glass-card p-8 rounded-lg mb-12 opacity-0 animate-fade-in" style={{ animationDelay: '0.9s' }}>
              <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <Mail className="w-10 h-10 text-cinematic-accent" />
                <div className="text-center md:text-left">
                  <h3 className="text-white font-medium mb-1">Email Me Directly</h3>
                  <p className="text-gray-400 mb-2">theboysclub005@gmail.com</p>
                </div>
                <button 
                  onClick={copyEmailToClipboard} 
                  className="px-4 py-2 bg-cinematic-deepBlue/50 hover:bg-cinematic-deepBlue/80 border border-cinematic-accent/30 rounded-md text-white transition-colors"
                >
                  Copy Email
                </button>
              </div>
            </div>
            
            {/* Social Media Links */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: '1.1s' }}>
              {socialLinks.map((link, index) => (
                <a 
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-8 rounded-lg hover:bg-cinematic-deepBlue/30 transition-all group"
                >
                  <div className="flex flex-col items-center">
                    <div className="text-cinematic-accent mb-4 transform group-hover:scale-110 transition-transform">
                      {link.icon}
                    </div>
                    <h3 className="text-white font-medium mb-1">{link.name}</h3>
                    <div className="flex items-center text-gray-400 text-sm">
                      <span>Visit Profile</span>
                      <ExternalLink className="ml-1 w-3 h-3" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
            
            <div className="mt-16 opacity-0 animate-fade-in" style={{ animationDelay: '1.3s' }}>
              <p className="text-gray-400">
                Looking for emerging filmmakers in Hyderabad to collaborate on short film projects.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
