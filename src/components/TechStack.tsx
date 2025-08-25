import { Card } from "@/components/ui/card";

const TechStack = () => {
  const technologies = [
    { name: "Git", icon: "🔧", category: "Version Control" },
    { name: "Kubernetes", icon: "☸️", category: "Orchestration" },
    { name: "Docker", icon: "🐳", category: "Containerization" },
    { name: "Packer", icon: "📦", category: "Infrastructure" },
    { name: "Terraform", icon: "🏗️", category: "IaC" },
    { name: "AWS", icon: "☁️", category: "Cloud" },
    { name: "MongoDB", icon: "🍃", category: "Database" },
    { name: "Node.js", icon: "🟢", category: "Backend" },
    { name: "React", icon: "⚛️", category: "Frontend" },
    { name: "Python", icon: "🐍", category: "Programming" },
    { name: "JavaScript", icon: "💛", category: "Programming" },
    { name: "GitHub", icon: "🐱", category: "Platform" },
  ];

  const categories = [...new Set(technologies.map(tech => tech.category))];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              🛠️ Technologies & Tools
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Languages, frameworks, and tools I work with
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Card key={category} className="p-6 gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 hover:scale-105">
              <h3 className="text-lg font-semibold mb-4 text-primary">{category}</h3>
              <div className="grid grid-cols-2 gap-3">
                {technologies
                  .filter(tech => tech.category === category)
                  .map((tech, index) => (
                    <div
                      key={tech.name}
                      className="flex items-center gap-2 p-2 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors duration-200"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <span className="text-2xl">{tech.icon}</span>
                      <span className="text-sm font-medium">{tech.name}</span>
                    </div>
                  ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;