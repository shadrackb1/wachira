import React from 'react';
import HeroSection from './sections/HeroSection';
import StatsSection from './sections/StatsSection';
import AboutSection from './sections/AboutSection';
import PracticeAreasSection from './sections/PracticeAreasSection';
import CTASection from './sections/CTASection';

interface SectionRendererProps {
  section: any;
}

const SectionRenderer: React.FC<SectionRendererProps> = ({ section }) => {
  switch (section.type) {
    case 'hero':
      return <HeroSection data={section.data} />;
    case 'stats':
      return <StatsSection data={section.data} />;
    case 'about':
      return <AboutSection data={section.data} />;
    case 'practice-areas':
      return <PracticeAreasSection data={section.data} />;
    case 'cta':
      return <CTASection data={section.data} />;
    default:
      return null;
  }
};

export default SectionRenderer;
