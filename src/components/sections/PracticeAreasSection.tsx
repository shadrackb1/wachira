import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase, Gavel, MapPin, Users, Scale, Shield } from 'lucide-react';
import TiltCard from '../ui/TiltCard';

const PracticeAreasSection = ({ data }: { data: any }) => {
  const areas = data.areas || [
    { 
      title: "Corporate Law", 
      icon: <Briefcase className="h-8 w-8" />, 
      desc: "Incorporation, governance, compliance, and restructuring for companies of different sizes." 
    },
    { 
      title: "Civil Litigation", 
      icon: <Gavel className="h-8 w-8" />, 
      desc: "Court representation for debt recovery, tort claims, and employment disputes." 
    },
    { 
      title: "Property & Land Law", 
      icon: <MapPin className="h-8 w-8" />, 
      desc: "Sales, leases, transfers, conveyancing, and disputes over title or land use." 
    },
    { 
      title: "Family Law", 
      icon: <Users className="h-8 w-8" />, 
      desc: "Divorce, custody, succession, wills, and related family matters, handled with discretion." 
    },
    { 
      title: "Commercial Law", 
      icon: <Scale className="h-8 w-8" />, 
      desc: "Commercial contracts, trade regulation, intellectual property, and consumer protection." 
    },
    { 
      title: "Legal Advisory", 
      icon: <Shield className="h-8 w-8" />, 
      desc: "Written opinions and ongoing advisory so clients know their position and risk." 
    },
  ];

  return (
    <section className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h4 className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4">What we do</h4>
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-gray-900 mb-8">Practice areas</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-xl font-light">
            Nine practice areas, listed below. If yours isn't there, call and ask.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map((area: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <TiltCard className="h-full bg-white p-10 rounded-sm shadow-lg hover:shadow-2xl border-t-4 border-transparent hover:border-accent group">
                <div className="bg-primary/5 w-16 h-16 rounded-full flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-300 transform group-hover:scale-110">
                  {area.icon}
                </div>
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">{area.title}</h3>
                <p className="text-gray-600 mb-8 text-sm leading-relaxed">{area.desc}</p>
                <Link to="/consultation" className="text-primary text-sm font-bold hover:text-secondary inline-flex items-center uppercase tracking-wide group-hover:translate-x-2 transition-transform">
                  Discuss this area <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </TiltCard>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-20">
          <Link 
            to="/practice-areas" 
            className="inline-block border-2 border-primary text-primary font-bold py-4 px-12 rounded-sm hover:bg-primary hover:text-white transition-all duration-300 uppercase tracking-wider text-sm hover:shadow-lg"
          >
            See all practice areas
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PracticeAreasSection;
