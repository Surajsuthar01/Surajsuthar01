import HeroSection from "@/components/HeroSection";
import TechStack from "@/components/TechStack";
import VisitorSection from "@/components/VisitorSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <TechStack />
      <VisitorSection />
      <ContactSection />
    </div>
  );
};

export default Index;
