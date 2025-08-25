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
          I'm Suraj
        </h1>
        
        <div className="h-16 mb-8">
          <p className="text-xl md:text-2xl text-muted-foreground">
            {displayedText}
            <span className="animate-pulse">|</span>
          </p>
        </div>

        <div className="space-y-4 mb-8">
          <div className="flex items-center justify-center gap-2 text-lg">
            <span className="text-2xl">🚀</span>
            <span>I'm currently working on <span className="text-primary font-semibold">CI/CD pipelines</span></span>
          </div>
          
          <div className="flex items-center justify-center gap-2 text-lg">
            <span className="text-2xl">🌱</span>
            <span>I'm currently learning <span className="text-accent font-semibold">Kubernetes</span></span>
          </div>
          
          <div className="flex items-center justify-center gap-2 text-lg">
            <span className="text-2xl">💬</span>
            <span>Ask me about <span className="text-primary font-semibold">Ansible, Docker</span>... or anything!</span>
          </div>
          
          <div className="flex items-center justify-center gap-2 text-lg">
            <span className="text-2xl">⚡</span>
            <span>Fun fact: I'm listening to <span className="text-accent font-semibold">🎵 music</span></span>
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