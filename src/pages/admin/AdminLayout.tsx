import React, { useState } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { 
  LayoutDashboard, 
  FileEdit, 
  Image as ImageIcon, 
  Settings, 
  LogOut, 
  Menu, 
  ChevronRight,
  ChevronLeft
} from 'lucide-react';
import { motion } from 'motion/react';
import { auth } from '../../lib/firebase';

const AdminLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/admin/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const navItems = [
    { path: '/admin', icon: <LayoutDashboard size={20} />, label: 'Dashboard' },
    { path: '/admin/content', icon: <FileEdit size={20} />, label: 'Page Editor' },
    { path: '/admin/media', icon: <ImageIcon size={20} />, label: 'Media Library' },
    { path: '/admin/settings', icon: <Settings size={20} />, label: 'Settings' },
  ];

  // If we are in the Content Editor, we want full width
  const isEditor = location.pathname === '/admin/content';

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden font-sans">
      {/* Sidebar */}
      <motion.aside 
        initial={{ width: 280 }}
        animate={{ width: isSidebarOpen ? 280 : 80 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="bg-white border-r border-gray-200 flex flex-col z-30 shadow-xl relative"
      >
        <div className="h-20 flex items-center justify-between px-6 border-b border-gray-100">
          {isSidebarOpen ? (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="font-serif text-xl font-bold text-gray-900 tracking-tight"
            >
              Wachira<span className="text-primary">CMS</span>
            </motion.div>
          ) : (
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-serif font-bold text-xl mx-auto">W</div>
          )}
        </div>
        
        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="absolute -right-3 top-24 bg-white border border-gray-200 rounded-full p-1 shadow-md text-gray-500 hover:text-primary z-50"
        >
          {isSidebarOpen ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
        </button>

        <nav className="flex-1 py-6 px-3 space-y-2 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  flex items-center px-3 py-3 rounded-xl transition-all duration-200 group relative overflow-hidden
                  ${isActive 
                    ? 'bg-primary text-white shadow-md shadow-primary/20' 
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }
                `}
              >
                <div className={`flex items-center justify-center min-w-[24px] ${isSidebarOpen ? 'mr-3' : 'mx-auto'}`}>
                  {item.icon}
                </div>
                {isSidebarOpen && (
                  <motion.span 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="font-medium whitespace-nowrap"
                  >
                    {item.label}
                  </motion.span>
                )}
                {!isSidebarOpen && (
                  <div className="absolute left-full ml-4 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-50 shadow-lg">
                    {item.label}
                  </div>
                )}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-gray-100">
          <button
            onClick={handleLogout}
            className={`
              flex items-center w-full px-3 py-3 rounded-xl text-red-600 hover:bg-red-50 transition-all duration-200
              ${!isSidebarOpen && 'justify-center'}
            `}
          >
            <LogOut size={20} className={isSidebarOpen ? 'mr-3' : ''} />
            {isSidebarOpen && <span className="font-medium">Sign Out</span>}
          </button>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden relative bg-gray-50">
        <div className="flex-1 overflow-auto">
           {isEditor ? (
             <Outlet />
           ) : (
             <div className="p-8 max-w-7xl mx-auto w-full">
               <Outlet />
             </div>
           )}
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
