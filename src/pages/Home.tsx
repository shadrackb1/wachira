import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageTransition from '../components/ui/PageTransition';
import { useContent } from '../hooks/useContent';
import SectionRenderer from '../components/SectionRenderer';
import HeroSection from '../components/sections/HeroSection';
import StatsSection from '../components/sections/StatsSection';
import AboutSection from '../components/sections/AboutSection';
import PracticeAreasSection from '../components/sections/PracticeAreasSection';
import CTASection from '../components/sections/CTASection';

const Home = () => {
  // Fetch dynamic content
  const { data: pageData, loading } = useContent('pages', 'home');

  // Default content fallback
  const defaultContent = {
    hero: {
      tagline: "Advocates · Nairobi & Nakuru",
      title: "Legal work for people and businesses across Kenya",
      subtitle: "We handle representation, advisory matters, and dispute resolution from offices in Nairobi and Nakuru.",
      backgroundImage: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
    },
    about: {
      title: "Wachira Wekhomba Aim & Associates Advocates",
      description1: "The firm acts for individuals, businesses, and institutions. Work covers representation in court, advisory opinions, and negotiated settlements.",
      description2: "Every matter gets a clear view of the options, the likely cost, and the next step. We keep clients informed and we don't overclaim about outcomes.",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
    },
    cta: {
      title: "Need a lawyer to look at this?",
      description: "Tell us what happened. We'll say whether we can help and what a consultation covers."
    }
  };

  const content = pageData || defaultContent;

  return (
    <PageTransition>
      <div className="overflow-hidden">
        <Helmet>
          <title>Wachira Wekhomba Aim & Associates Advocates · Advocates, Kenya</title>
          <meta name="description" content="Advocates in Nairobi and Nakuru. Representation, advisory work, and dispute resolution for individuals and businesses across Kenya." />
        </Helmet>

        {content.sections ? (
          // Render dynamic sections if available
          content.sections.map((section: any, index: number) => (
            <SectionRenderer key={index} section={section} />
          ))
        ) : (
          // Fallback to static layout if no sections array
          <>
            <HeroSection data={content.hero || defaultContent.hero} />
            <StatsSection data={{}} />
            <AboutSection data={content.about || defaultContent.about} />
            <PracticeAreasSection data={{}} />
            <CTASection data={content.cta || defaultContent.cta} />
          </>
        )}
      </div>
    </PageTransition>
  );
};

export default Home;
