
import { useEffect, useState } from 'react';
import { MessageSquare, Send, Link } from 'lucide-react';
import { toast } from '@/components/ui/sonner';

const Contact = () => {
  useEffect(() => {
    document.title = "Contact | Nikhil Reddy Nookala";
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      toast.success("Message sent successfully!", {
        description: "Thank you for reaching out. I'll get back to you soon."
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-20">
      <section className="section-spacing bg-cinematic-black">
        <div className="cinematic-container">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="w-full md:w-1/2">
                <div className="glass-card p-1 inline-block mb-4">
                  <span className="font-mono text-xs text-cinematic-accent">CONTACT</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 reveal-mask">
                  Let's Connect
                </h1>
                
                <div className="h-px w-24 bg-cinematic-accent mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.5s' }}></div>
                
                <p className="text-xl text-gray-300 mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.7s' }}>
                  Whether you're interested in collaboration or just want to discuss cinema, 
                  I'd love to hear from you.
                </p>
                
                <div className="space-y-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.9s' }}>
                  <div className="glass-card p-6 rounded-md">
                    <div className="flex items-start">
                      <div className="mt-1">
                        <MessageSquare className="w-5 h-5 text-cinematic-accent" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-white font-medium mb-1">Collaboration Opportunities</h3>
                        <p className="text-sm text-gray-400">
                          Looking for emerging filmmakers in Hyderabad to collaborate on short film projects.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="glass-card p-6 rounded-md">
                    <div className="flex items-start">
                      <div className="mt-1">
                        <Link className="w-5 h-5 text-cinematic-accent" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-white font-medium mb-1">Connect Online</h3>
                        <div className="flex space-x-4 mt-2">
                          <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            Instagram
                          </a>
                          <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            Twitter
                          </a>
                          <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            LinkedIn
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="w-full md:w-1/2 opacity-0 animate-fade-in" style={{ animationDelay: '1.1s' }}>
                <div className="glass-card p-8 rounded-md">
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full bg-cinematic-deepBlue/50 border border-gray-700 rounded-md px-4 py-2 text-white focus:ring-1 focus:ring-cinematic-accent focus:border-cinematic-accent"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full bg-cinematic-deepBlue/50 border border-gray-700 rounded-md px-4 py-2 text-white focus:ring-1 focus:ring-cinematic-accent focus:border-cinematic-accent"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                          Subject
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full bg-cinematic-deepBlue/50 border border-gray-700 rounded-md px-4 py-2 text-white focus:ring-1 focus:ring-cinematic-accent focus:border-cinematic-accent"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={5}
                          required
                          className="w-full bg-cinematic-deepBlue/50 border border-gray-700 rounded-md px-4 py-2 text-white focus:ring-1 focus:ring-cinematic-accent focus:border-cinematic-accent"
                        />
                      </div>
                      
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full flex items-center justify-center px-6 py-3 bg-cinematic-accent text-white rounded-md hover:bg-cinematic-accent/80 transition-colors disabled:opacity-70"
                      >
                        {loading ? (
                          "Sending..."
                        ) : (
                          <>
                            Send Message
                            <Send className="ml-2 w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
