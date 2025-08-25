import HeroSection from "@/components/HeroSection";
import TechStack from "@/components/TechStack";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <TechStack />
      <ContactSection />
    </div>
  );
};

export default Index;
