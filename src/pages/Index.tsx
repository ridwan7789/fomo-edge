import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { AppShowcaseSection } from '@/components/AppShowcaseSection';
import { PsychologySection } from '@/components/PsychologySection';
import { BrandSection } from '@/components/BrandSection';
import { RoadmapSection } from '@/components/RoadmapSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <AppShowcaseSection />
        <PsychologySection />
        <BrandSection />
        <RoadmapSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
