import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Lock, FileText, MessageSquare, Upload, Download, LogOut, User, Shield, AlertTriangle } from 'lucide-react';
import PageTransition from '../components/ui/PageTransition';

const Portal = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');

  // Login Form State
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate auth delay
    setTimeout(() => {
      setLoading(false);
      setIsLoggedIn(true);
    }, 1500);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail('');
    setPassword('');
  };

  // --- LOGIN VIEW ---
  if (!isLoggedIn) {
    return (
      <PageTransition>
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
          <Helmet>
            <title>Client Portal Login | Wachira Wekhomba Aim & Associates</title>
          </Helmet>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-10 md:p-12 rounded-sm shadow-2xl max-w-md w-full border-t-4 border-primary relative z-10"
          >
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6 text-primary animate-pulse">
                <Lock size={36} />
              </div>
              <h1 className="font-serif text-3xl font-bold text-gray-900">Secure Client Portal</h1>
              <p className="text-gray-500 text-sm mt-3">Access your case files and secure messages.</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div className="group">
                <label className="block text-sm font-bold text-gray-700 mb-2 group-focus-within:text-primary transition-colors">Email Address</label>
                <input 
                  type="email" 
                  required 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 border-b-2 border-gray-200 focus:border-primary outline-none transition-all text-gray-900 placeholder-gray-400"
                  placeholder="client@example.com"
                />
              </div>
              <div className="group">
                <label className="block text-sm font-bold text-gray-700 mb-2 group-focus-within:text-primary transition-colors">Password</label>
                <input 
                  type="password" 
                  required 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 border-b-2 border-gray-200 focus:border-primary outline-none transition-all text-gray-900 placeholder-gray-400"
                  placeholder="••••••••"
                />
              </div>
              
              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-primary text-white font-bold py-4 px-4 rounded-sm hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                ) : (
                  <>
                    <Lock size={18} className="mr-2" /> Secure Login
                  </>
                )}
              </button>
            </form>
            
            <div className="mt-8 text-center">
              <a href="#" className="text-sm text-primary hover:underline font-medium">Forgot Password?</a>
              <div className="mt-6 flex items-center justify-center text-xs text-gray-400 bg-gray-50 py-2 rounded-sm">
                <Shield size={12} className="mr-1 text-green-500" />
                256-bit SSL Encrypted Connection
              </div>
            </div>
          </motion.div>
        </div>
      </PageTransition>
    );
  }

  // --- DASHBOARD VIEW ---
  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-50 pb-20">
        <Helmet>
          <title>Client Dashboard | Wachira Wekhomba Aim & Associates</title>
        </Helmet>

        {/* Portal Header */}
        <header className="bg-white shadow-md border-b border-gray-200 sticky top-0 z-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <div className="flex items-center">
              <span className="font-serif text-xl font-bold text-primary mr-4">Client Portal</span>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium flex items-center border border-green-200">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-1 animate-pulse"></span> Active
              </span>
            </div>
            <div className="flex items-center space-x-6">
              <div className="hidden md:flex items-center text-sm text-gray-600 font-medium">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-2 text-primary">
                  <User size={16} />
                </div>
                Welcome, Client
              </div>
              <button 
                onClick={handleLogout}
                className="text-gray-500 hover:text-red-600 transition-colors p-2 hover:bg-red-50 rounded-full"
                title="Logout"
              >
                <LogOut size={20} />
              </button>
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {/* Sidebar Nav */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-sm shadow-sm overflow-hidden sticky top-24">
                <nav className="flex flex-col">
                  <button 
                    onClick={() => setActiveTab('dashboard')}
                    className={`px-6 py-4 text-left font-medium text-sm flex items-center border-l-4 transition-all ${activeTab === 'dashboard' ? 'border-primary text-primary bg-primary/5' : 'border-transparent text-gray-600 hover:bg-gray-50 hover:pl-7'}`}
                  >
                    <Shield size={18} className="mr-3" /> Case Overview
                  </button>
                  <button 
                    onClick={() => setActiveTab('documents')}
                    className={`px-6 py-4 text-left font-medium text-sm flex items-center border-l-4 transition-all ${activeTab === 'documents' ? 'border-primary text-primary bg-primary/5' : 'border-transparent text-gray-600 hover:bg-gray-50 hover:pl-7'}`}
                  >
                    <FileText size={18} className="mr-3" /> Documents
                  </button>
                  <button 
                    onClick={() => setActiveTab('messages')}
                    className={`px-6 py-4 text-left font-medium text-sm flex items-center border-l-4 transition-all ${activeTab === 'messages' ? 'border-primary text-primary bg-primary/5' : 'border-transparent text-gray-600 hover:bg-gray-50 hover:pl-7'}`}
                  >
                    <MessageSquare size={18} className="mr-3" /> Secure Messages
                  </button>
                </nav>
                
                <div className="mt-6 mx-4 mb-4 bg-primary text-white p-6 rounded-sm shadow-lg relative overflow-hidden">
                  <div className="absolute -right-4 -top-4 bg-white/10 w-20 h-20 rounded-full blur-xl"></div>
                  <h4 className="font-bold mb-2 flex items-center relative z-10"><AlertTriangle size={16} className="mr-2 text-accent" /> Action Required</h4>
                  <p className="text-xs text-gray-200 relative z-10 leading-relaxed">Please upload the requested identification documents by Friday to avoid delays.</p>
                </div>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="lg:col-span-3">
              
              {/* DASHBOARD TAB */}
              {activeTab === 'dashboard' && (
                <motion.div 
                  initial={{ opacity: 0, x: 20 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  <div className="bg-white p-8 rounded-sm shadow-sm border-t-4 border-accent relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-5">
                      <Shield size={100} />
                    </div>
                    <h2 className="font-serif text-2xl font-bold text-gray-900 mb-2">Case Status: In Progress</h2>
                    <p className="text-gray-500 mb-6 font-mono text-xs tracking-wider">REF: WWA/CIV/2025/042</p>
                    
                    <div className="relative pt-1">
                      <div className="flex mb-2 items-center justify-between">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-primary bg-primary/10">
                            Discovery Phase
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="text-xs font-semibold inline-block text-primary">
                            45%
                          </span>
                        </div>
                      </div>
                      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-primary/10">
                        <div style={{ width: "45%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary transition-all duration-1000 ease-out"></div>
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-600 mt-4 leading-relaxed">Your case is currently in the discovery phase. We are reviewing the documents provided and preparing the initial legal strategy.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-sm shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="font-bold text-gray-900 mb-6 border-b border-gray-100 pb-2">Recent Activity</h3>
                      <ul className="space-y-4">
                        <li className="flex items-start text-sm group">
                          <div className="w-2 h-2 bg-accent rounded-full mt-1.5 mr-3 shrink-0 group-hover:scale-125 transition-transform"></div>
                          <span className="text-gray-600">Document "Affidavit.pdf" uploaded by Admin. <span className="text-gray-400 text-xs block mt-1">2 hours ago</span></span>
                        </li>
                        <li className="flex items-start text-sm group">
                          <div className="w-2 h-2 bg-gray-300 rounded-full mt-1.5 mr-3 shrink-0 group-hover:scale-125 transition-transform"></div>
                          <span className="text-gray-600">Meeting scheduled for March 15th. <span className="text-gray-400 text-xs block mt-1">Yesterday</span></span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-white p-6 rounded-sm shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="font-bold text-gray-900 mb-6 border-b border-gray-100 pb-2">Assigned Advocate</h3>
                      <div className="flex items-center">
                        <div className="w-16 h-16 bg-gray-200 rounded-full mr-4 overflow-hidden ring-2 ring-offset-2 ring-primary/20">
                           <img src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" alt="Advocate" className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <p className="font-bold text-primary text-lg">Patrick Oduor</p>
                          <p className="text-xs text-gray-500 uppercase tracking-wider font-medium">Senior Advocate</p>
                          <a href="mailto:info@wachirawekombaimadvocates.com" className="text-xs text-accent hover:text-primary transition-colors mt-2 inline-flex items-center font-bold">
                            Contact Advocate <MessageSquare size={10} className="ml-1" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* DOCUMENTS TAB */}
              {activeTab === 'documents' && (
                <motion.div 
                  initial={{ opacity: 0, x: 20 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  transition={{ duration: 0.4 }}
                  className="bg-white p-8 rounded-sm shadow-sm"
                >
                  <div className="flex justify-between items-center mb-8">
                    <h2 className="font-serif text-2xl font-bold text-gray-900">Case Documents</h2>
                    <button className="bg-primary text-white px-5 py-2.5 rounded-sm text-sm font-bold hover:bg-primary/90 flex items-center shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5">
                      <Upload size={16} className="mr-2" /> Upload New
                    </button>
                  </div>

                  <div className="border-2 border-dashed border-gray-200 rounded-sm p-10 text-center mb-10 bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer group">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:scale-110 transition-transform">
                      <Upload className="h-8 w-8 text-primary" />
                    </div>
                    <p className="text-gray-900 font-bold text-lg">Drag & Drop files here</p>
                    <p className="text-sm text-gray-500 mt-2">or click to browse from your computer</p>
                    <p className="text-xs text-gray-400 mt-4">Supported: PDF, DOCX, JPG, PNG (Max 10MB)</p>
                  </div>

                  <h3 className="font-bold text-gray-900 mb-4 text-xs uppercase tracking-widest border-b border-gray-100 pb-2">Available Files</h3>
                  <div className="space-y-3">
                    {[
                      { name: 'Case_Summary_Brief.pdf', date: 'Mar 10, 2025', size: '2.4 MB' },
                      { name: 'Court_Summons_Copy.jpg', date: 'Mar 08, 2025', size: '1.1 MB' },
                      { name: 'Legal_Representation_Agreement.docx', date: 'Mar 01, 2025', size: '0.8 MB' }
                    ].map((file, idx) => (
                      <div key={idx} className="flex items-center justify-between p-4 border border-gray-100 hover:bg-gray-50 rounded-sm transition-colors group">
                        <div className="flex items-center">
                          <div className="bg-gray-100 p-3 rounded-sm mr-4 group-hover:bg-white group-hover:shadow-sm transition-all">
                            <FileText className="h-6 w-6 text-secondary" />
                          </div>
                          <div>
                            <p className="font-bold text-gray-800 text-sm group-hover:text-primary transition-colors">{file.name}</p>
                            <p className="text-xs text-gray-500 mt-1">{file.date} • {file.size}</p>
                          </div>
                        </div>
                        <button className="text-gray-400 hover:text-primary p-2 hover:bg-primary/5 rounded-full transition-colors">
                          <Download size={20} />
                        </button>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* MESSAGES TAB */}
              {activeTab === 'messages' && (
                <motion.div 
                  initial={{ opacity: 0, x: 20 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-sm shadow-sm h-[600px] flex flex-col border border-gray-100"
                >
                  <div className="p-6 border-b border-gray-100 bg-gray-50/50">
                    <h2 className="font-serif text-2xl font-bold text-gray-900">Secure Messages</h2>
                    <p className="text-sm text-gray-500 mt-1">Direct, encrypted communication with your legal team.</p>
                  </div>
                  
                  <div className="flex-grow p-6 overflow-y-auto space-y-6 bg-white">
                    <div className="flex justify-end">
                      <div className="bg-primary text-white p-4 rounded-2xl rounded-tr-none max-w-[80%] shadow-md">
                        <p className="text-sm leading-relaxed">Hello, I have uploaded the requested documents. Please confirm receipt.</p>
                        <span className="text-[10px] text-white/70 block mt-2 text-right font-medium">10:30 AM</span>
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <div className="bg-gray-100 text-gray-800 p-4 rounded-2xl rounded-tl-none max-w-[80%] shadow-sm">
                        <p className="text-sm leading-relaxed">Thank you. We have received the files and are currently reviewing them. We will update you shortly regarding the next steps.</p>
                        <span className="text-[10px] text-gray-500 block mt-2 font-medium">10:45 AM</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border-t border-gray-200 bg-gray-50">
                    <form className="flex gap-4">
                      <input 
                        type="text" 
                        placeholder="Type a secure message..." 
                        className="flex-grow px-4 py-3 border border-gray-300 rounded-sm focus:ring-1 focus:ring-primary outline-none bg-white shadow-sm"
                      />
                      <button className="bg-secondary text-white px-6 py-2 rounded-sm font-bold hover:bg-secondary/90 shadow-md transition-all transform hover:-translate-y-0.5">
                        Send
                      </button>
                    </form>
                  </div>
                </motion.div>
              )}

            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Portal;
