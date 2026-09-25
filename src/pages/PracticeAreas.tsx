import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Gavel, MapPin, Users, Scale, Shield, FileSignature, Handshake, UserCheck, ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import PageTransition from '../components/ui/PageTransition';
import TiltCard from '../components/ui/TiltCard';

const PracticeAreas = () => {
  const services = [
    {
      title: "Corporate Law",
      icon: <Briefcase className="h-10 w-10" />,
      description: "Company incorporation, governance, compliance, mergers and acquisitions, and restructuring. We work with startups through to established companies and deal with the regulators that sit behind those steps."
    },
    {
      title: "Civil Litigation",
      icon: <Gavel className="h-10 w-10" />,
      description: "Court work for debt recovery, tort claims, and employment disputes. Where negotiation or mediation gets a better result than a hearing, we say so early."
    },
    {
      title: "Property & Land Law",
      icon: <MapPin className="h-10 w-10" />,
      description: "Purchases, sales, leases, and transfers. Also disputes over title, land use, and conveyancing. Due diligence runs before money changes hands."
    },
    {
      title: "Family Law",
      icon: <Users className="h-10 w-10" />,
      description: "Divorce, custody and child support, adoption, matrimonial property, wills, and probate. These matters are handled with discretion."
    },
    {
      title: "Commercial Law",
      icon: <Scale className="h-10 w-10" />,
      description: "Drafting and reviewing commercial contracts, trade regulation, intellectual property, and consumer protection. Agreements are written to hold up when something goes wrong."
    },
    {
      title: "Contract Law",
      icon: <FileSignature className="h-10 w-10" />,
      description: "Drafting, review, and negotiation. Employment contracts, service agreements, and commercial terms. The aim is clear obligations and enforceable rights."
    },
    {
      title: "Legal Advisory Services",
      icon: <Shield className="h-10 w-10" />,
      description: "Written legal opinions and ongoing advisory work for individuals and companies. You get a clear statement of position, options, and risk."
    },
    {
      title: "Dispute Resolution",
      icon: <Handshake className="h-10 w-10" />,
      description: "Mediation and arbitration where court is the wrong tool. Cost and relationship are weighed alongside the merits."
    },
    {
      title: "Employment & Labour Law",
      icon: <UserCheck className="h-10 w-10" />,
      description: "Advice for employers and employees under the Employment Act. Contracts, terminations, workplace policies, and representation in labour disputes."
    },
  ];

  return (
    <PageTransition>
      <div className="bg-gray-50">
        <Helmet>
          <title>Practice areas · Wachira Wekhomba Aim & Associates</title>
          <meta name="description" content="Corporate, litigation, property, family, commercial, contracts, advisory, dispute resolution, and employment law." />
        </Helmet>

        {/* Header */}
        <div className="bg-primary text-white py-32 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-serif text-5xl md:text-6xl font-bold mb-6"
            >
              Practice areas
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light"
            >
              What we do, in plain terms. Pick the area that matches your problem.
            </motion.p>
          </div>
        </div>

        {/* Services Grid */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <TiltCard className="bg-white rounded-sm shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group h-full border-t-4 border-transparent hover:border-accent">
                    <div className="p-10">
                      <div className="bg-primary/5 w-20 h-20 rounded-full flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-300 transform group-hover:scale-110">
                        {service.icon}
                      </div>
                      <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {service.description}
                      </p>
                      <Link to="/consultation" className="inline-flex items-center text-primary font-bold text-sm uppercase tracking-wide group-hover:translate-x-2 transition-transform">
                        Discuss this area <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-white py-24 border-t border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-6">Not sure which service you need?</h2>
            <p className="text-gray-600 mb-10 text-xl font-light">
              Call or send a short note about the problem. We'll point you to the right area or tell you if you need someone else.
            </p>
            <Link 
              to="/consultation" 
              className="inline-block bg-primary text-white font-bold py-4 px-10 rounded-sm hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Contact the firm
            </Link>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default PracticeAreas;
