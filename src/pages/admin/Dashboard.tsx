import React from 'react';
import { useContent } from '../../hooks/useContent';
import { FileText, Image as ImageIcon, Users, TrendingUp, ArrowUpRight, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { data: pages, loading: pagesLoading } = useContent('pages');
  const { data: media, loading: mediaLoading } = useContent('media');

  const stats = [
    { 
      label: 'Total Pages', 
      value: pages?.length || 0, 
      icon: <FileText className="w-6 h-6 text-blue-600" />, 
      bg: 'bg-blue-50',
      change: '+12%',
      link: '/admin/content'
    },
    { 
      label: 'Media Items', 
      value: media?.length || 0, 
      icon: <ImageIcon className="w-6 h-6 text-purple-600" />, 
      bg: 'bg-purple-50',
      change: '+5%',
      link: '/admin/media'
    },
    { 
      label: 'Active Users', 
      value: '3', 
      icon: <Users className="w-6 h-6 text-green-600" />, 
      bg: 'bg-green-50',
      change: '+2',
      link: '/admin/settings'
    },
    { 
      label: 'Site Visits', 
      value: '1.2k', 
      icon: <Activity className="w-6 h-6 text-orange-600" />, 
      bg: 'bg-orange-50',
      change: '+18%',
      link: '#'
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-500 mt-1">Welcome back to your CMS overview.</p>
        </div>
        <div className="flex gap-3">
          <Link to="/" target="_blank" className="px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center shadow-sm">
            View Live Site <ArrowUpRight className="w-4 h-4 ml-2" />
          </Link>
          <Link to="/admin/content" className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors shadow-md shadow-primary/20">
            Edit Content
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Link to={stat.link} key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all group">
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 rounded-xl ${stat.bg} group-hover:scale-110 transition-transform`}>
                {stat.icon}
              </div>
              <span className="flex items-center text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                <TrendingUp className="w-3 h-3 mr-1" />
                {stat.change}
              </span>
            </div>
            <h3 className="text-gray-500 text-sm font-medium">{stat.label}</h3>
            <p className="text-3xl font-bold text-gray-900 mt-1">{stat.value}</p>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-gray-900 mb-6">Recent Activity</h3>
          <div className="space-y-6">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="flex items-start gap-4 pb-6 border-b border-gray-50 last:border-0 last:pb-0">
                <div className="w-2 h-2 mt-2 rounded-full bg-primary"></div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Content updated on Home Page</p>
                  <p className="text-xs text-gray-500 mt-1">2 hours ago by Admin</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-primary to-primary-dark p-8 rounded-2xl shadow-lg text-white relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-2">Need Help?</h3>
            <p className="text-white/80 mb-6 max-w-sm">Check out our documentation or contact support for assistance with your CMS.</p>
            <button className="px-6 py-2 bg-white text-primary font-bold rounded-lg hover:bg-gray-50 transition-colors">
              Contact Support
            </button>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full blur-2xl transform -translate-x-1/3 translate-y-1/3"></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
