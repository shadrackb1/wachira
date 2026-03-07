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
      tagline: "Premier Legal Counsel",
      title: "Trusted Legal Representation",
      subtitle: "Wachira Wekhomba Aim & Associates Advocates provides reliable legal representation, advisory services, and dispute resolution for individuals and businesses across Kenya.",
      backgroundImage: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
    },
    about: {
      title: "Wachira Wekhomba Aim & Associates Advocates",
      description1: "Wachira Wekhomba Aim & Associates Advocates is a professional law firm committed to delivering reliable and strategic legal solutions. The firm provides high-quality legal representation and advisory services to individuals, businesses, and institutions.",
      description2: "Our advocates combine legal expertise with practical insight to provide solutions tailored to each client's unique circumstances. We pride ourselves on our integrity, responsiveness, and unwavering dedication to our clients' success.",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
    },
    cta: {
      title: "Need Professional Legal Advice?",
      description: "We are ready to listen to your case and provide the strategic legal guidance you need. Contact us today to schedule a consultation with our expert team."
    }
  };

  const content = pageData || defaultContent;

  return (
    <PageTransition>
      <div className="overflow-hidden">
        <Helmet>
          <title>Wachira Wekhomba Aim & Associates Advocates | Law Firm Kenya</title>
          <meta name="description" content="Professional law firm providing legal representation, advisory services, and dispute resolution in Nairobi and Nakuru, Kenya." />
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
