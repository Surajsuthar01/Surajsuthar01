import { Card } from "@/components/ui/card";
import { useState, useEffect } from "react";

const VisitorSection = () => {
  const [visitorCount, setVisitorCount] = useState(309);
  
  useEffect(() => {
    // Simulate visitor count increment
    const timer = setTimeout(() => {
      setVisitorCount(prev => prev + Math.floor(Math.random() * 3) + 1);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <Card className="inline-block p-8 gradient-card border-primary/20 glow-primary">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
              <span className="text-sm text-muted-foreground">Live visitors</span>
            </div>
            <div className="h-4 border-l border-border"></div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">👥</span>
              <span className="text-sm text-muted-foreground">Total visits</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">
                {Math.floor(Math.random() * 5) + 2}
              </div>
              <div className="text-sm text-muted-foreground">Online now</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2 animate-fade-in">
                {visitorCount.toLocaleString()}+
              </div>
              <div className="text-sm text-muted-foreground">All time</div>
            </div>
          </div>
          
          <div className="mt-6 flex items-center justify-center gap-2">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-accent border-2 border-card"></div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-accent to-primary border-2 border-card"></div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary/60 to-accent/60 border-2 border-card"></div>
            </div>
            <span className="text-xs text-muted-foreground ml-2">Recent visitors from around the world</span>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default VisitorSection;