import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const HeroSection = () => {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "A passionate software developer from India";
  
  useEffect(() => {
    const timer = setTimeout(() => {
      let i = 0;
      const typeWriter = setInterval(() => {
        if (i < fullText.length) {
          setDisplayedText(fullText.slice(0, i + 1));
          i++;
        } else {
          clearInterval(typeWriter);
        }
      }, 50);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4">
      {/* Background gradient orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <Badge variant="outline" className="mb-6 px-4 py-2 text-sm bg-card/50 backdrop-blur-sm border-primary/20">
          👋 Welcome to my profile
        </Badge>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          I'm Suraj Suthar
        </h1>
        
        <div className="h-16 mb-8">
          <p className="text-xl md:text-2xl text-muted-foreground">
            {displayedText}
            <span className="animate-pulse">|</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 max-w-4xl mx-auto">
          <div className="group p-4 rounded-xl bg-card/30 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-2xl group-hover:animate-pulse">
                🚀
              </div>
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Currently working on</p>
                <p className="text-lg font-semibold text-primary">CI/CD pipelines</p>
              </div>
            </div>
          </div>
          
          <div className="group p-4 rounded-xl bg-card/30 backdrop-blur-sm border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-2xl group-hover:animate-pulse">
                🌱
              </div>
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Currently learning</p>
                <p className="text-lg font-semibold text-accent">Kubernetes</p>
              </div>
            </div>
          </div>
          
          <div className="group p-4 rounded-xl bg-card/30 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-2xl group-hover:animate-pulse">
                💬
              </div>
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Ask me about</p>
                <p className="text-lg font-semibold text-primary">Ansible, Docker... anything!</p>
              </div>
            </div>
          </div>
          
          <div className="group p-4 rounded-xl bg-card/30 backdrop-blur-sm border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-2xl group-hover:animate-pulse">
                ⚡
              </div>
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Fun fact</p>
                <p className="text-lg font-semibold text-accent">Listening to 🎵 music</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="gradient-primary glow-primary hover:scale-105 transition-all duration-300">
            View My Work
          </Button>
          <Button variant="outline" size="lg" className="hover:bg-card hover:scale-105 transition-all duration-300">
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;