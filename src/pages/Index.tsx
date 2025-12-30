import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { SkillsSection } from '@/components/SkillsSection';
import { LanguagesSection } from '@/components/LanguagesSection';
import { VolunteeringSection } from '@/components/VolunteeringSection';
import { EducationSection } from '@/components/EducationSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { StarBackground } from '@/components/StarBackground';

const Index = () => {
  return (
    <div className="min-h-screen animated-gradient-bg relative">
      <StarBackground />
      <Navigation />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <LanguagesSection />
        <VolunteeringSection />
        <EducationSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
