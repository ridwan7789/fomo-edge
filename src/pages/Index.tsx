import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { PsychologySection } from '@/components/PsychologySection';
import { RoadmapSection } from '@/components/RoadmapSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <PsychologySection />
        <RoadmapSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
