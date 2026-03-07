import React from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Calendar, User, ArrowRight, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/ui/PageTransition';
import TiltCard from '../components/ui/TiltCard';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "Understanding Property Law in Kenya: A Guide for Buyers",
      excerpt: "Navigating the complexities of land acquisition, due diligence, and title transfer in the current Kenyan real estate market.",
      date: "March 5, 2025",
      author: "Patrick Oduor",
      category: "Property Law",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Employee Rights: Recent Changes in Labour Laws",
      excerpt: "An analysis of recent court rulings affecting employment contracts, termination procedures, and employee benefits.",
      date: "February 28, 2025",
      author: "Legal Team",
      category: "Employment Law",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "The Importance of Corporate Governance for SMEs",
      excerpt: "Why small and medium enterprises need to establish robust governance structures early to ensure long-term sustainability.",
      date: "February 15, 2025",
      author: "Patrick Oduor",
      category: "Corporate Law",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "Dispute Resolution: Arbitration vs. Litigation",
      excerpt: "Comparing the pros and cons of alternative dispute resolution mechanisms versus traditional court processes in commercial disputes.",
      date: "January 30, 2025",
      author: "Legal Team",
      category: "Dispute Resolution",
      image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <PageTransition>
      <div className="bg-gray-50 min-h-screen">
        <Helmet>
          <title>Legal Insights & Updates | Wachira Wekhomba Aim & Associates</title>
          <meta name="description" content="Stay informed with the latest legal insights, updates, and articles from our expert advocates." />
        </Helmet>

        {/* Header */}
        <div className="bg-gray-900 text-white py-32 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-serif text-5xl md:text-6xl font-bold mb-6"
            >
              Legal Insights & Updates
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light"
            >
              Expert analysis on current legal matters in Kenya.
            </motion.p>
          </div>
        </div>

        {/* Blog Grid */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {posts.map((post, index) => (
                <motion.div 
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <TiltCard className="bg-white rounded-sm shadow-lg hover:shadow-2xl transition-all overflow-hidden flex flex-col h-full border-b-4 border-transparent hover:border-primary group">
                    <div className="h-64 overflow-hidden relative">
                      <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10"></div>
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4 z-20">
                        <span className="bg-white/90 backdrop-blur-sm text-primary text-xs font-bold px-3 py-1 uppercase tracking-wider shadow-sm">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-8 flex flex-col flex-grow">
                      <div className="flex items-center text-xs text-gray-500 mb-4 space-x-4">
                        <span className="flex items-center"><Calendar size={12} className="mr-1 text-accent" /> {post.date}</span>
                        <span className="flex items-center"><User size={12} className="mr-1 text-accent" /> {post.author}</span>
                      </div>
                      
                      <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors cursor-pointer leading-tight">
                        {post.title}
                      </h2>
                      <p className="text-gray-600 text-base leading-relaxed mb-6 flex-grow">
                        {post.excerpt}
                      </p>
                      
                      <div className="pt-6 border-t border-gray-100 mt-auto">
                        <button className="text-primary text-sm font-bold flex items-center hover:text-secondary transition-colors group/btn">
                          Read Full Article <ArrowRight size={16} className="ml-2 transform group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </div>

            {/* Newsletter Signup */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-24 bg-primary text-white p-12 md:p-16 rounded-sm text-center relative overflow-hidden shadow-2xl"
            >
               <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
               <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-accent/20 rounded-full blur-3xl"></div>
               <div className="absolute -left-20 -top-20 w-64 h-64 bg-secondary/40 rounded-full blur-3xl"></div>
               
              <div className="relative z-10 max-w-3xl mx-auto">
                <BookOpen className="h-12 w-12 text-accent mx-auto mb-6" />
                <h3 className="font-serif text-3xl md:text-4xl font-bold mb-6">Subscribe to Our Newsletter</h3>
                <p className="text-gray-200 mb-10 text-lg font-light">Get the latest legal updates, firm news, and expert insights delivered directly to your inbox.</p>
                <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="flex-grow px-6 py-4 rounded-sm text-gray-900 outline-none focus:ring-2 focus:ring-accent shadow-lg"
                  />
                  <button className="bg-accent text-primary font-bold px-10 py-4 rounded-sm hover:bg-accent-light transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                    Subscribe
                  </button>
                </form>
                <p className="text-xs text-gray-400 mt-6">We respect your privacy. Unsubscribe at any time.</p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Blog;
