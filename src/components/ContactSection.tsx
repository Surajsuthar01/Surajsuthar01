import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const ContactSection = () => {
  const socialLinks = [
    {
      name: "Gmail",
      icon: "📧",
      color: "bg-red-500",
      href: "mailto:your.email@gmail.com",
      description: "Drop me a line"
    },
    {
      name: "LinkedIn", 
      icon: "💼",
      color: "bg-blue-600",
      href: "https://linkedin.com/in/yourprofile",
      description: "Let's connect professionally"
    },
    {
      name: "Portfolio",
      icon: "🌐", 
      color: "bg-orange-500",
      href: "https://devsuraj.online",
      description: "Check out my work"
    },
    {
      name: "GitHub",
      icon: "🐱",
      color: "bg-gray-700",
      href: "https://github.com/yourusername",
      description: "Explore my code"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Let's Connect! 🤝
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Ready to collaborate or just want to say hi?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {socialLinks.map((link, index) => (
            <Card 
              key={link.name}
              className="group p-6 gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 hover:scale-105 cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => window.open(link.href, '_blank')}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                  {link.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {link.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {link.description}
                  </p>
                </div>
                <div className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  →
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card className="inline-block p-8 gradient-card border-primary/20 glow-primary">
            <h3 className="text-2xl font-bold mb-4">Currently Available for Work!</h3>
            <p className="text-muted-foreground mb-6">
              I'm open to discussing new opportunities and exciting projects
            </p>
            <Button size="lg" className="gradient-primary glow-primary hover:scale-105 transition-all duration-300">
              Let's Talk Business 💼
            </Button>
          </Card>
        </div>

        {/* Visitors counter */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur-sm rounded-full border border-primary/20">
            <span className="text-sm text-muted-foreground">Visitors:</span>
            <span className="text-sm font-bold text-primary">309+</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;