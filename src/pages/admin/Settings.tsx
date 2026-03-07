import React, { useState, useEffect } from 'react';
import { useContent } from '../../hooks/useContent';
import { updateDocument, setDocument } from '../../services/firestore';
import { Save, Loader2, Database, Globe, Mail, Phone, MapPin, Palette, Image as ImageIcon } from 'lucide-react';
import ImagePicker from '../../components/admin/ImagePicker';

const Settings = () => {
  const { data: settings, loading } = useContent('settings');
  const [formData, setFormData] = useState<any>({});
  const [saving, setSaving] = useState(false);
  const [seeding, setSeeding] = useState(false);

  useEffect(() => {
    if (settings && settings[0]) {
      setFormData(settings[0]);
    }
  }, [settings]);

  const handleSave = async () => {
    setSaving(true);
    try {
      await updateDocument('settings', formData.id || 'general', formData);
      alert('Settings saved successfully!');
    } catch (error) {
      console.error('Error saving settings:', error);
      alert('Failed to save settings.');
    } finally {
      setSaving(false);
    }
  };

  const handleSeed = async () => {
    if (!confirm('This will overwrite existing content for the Home page. Continue?')) return;
    setSeeding(true);
    try {
      const homeContent = {
        title: "Home Page",
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
        },
        sections: [
          {
            id: "hero-1",
            type: "hero",
            data: {
              tagline: "Premier Legal Counsel",
              title: "Trusted Legal Representation",
              subtitle: "Wachira Wekhomba Aim & Associates Advocates provides reliable legal representation, advisory services, and dispute resolution for individuals and businesses across Kenya.",
              backgroundImage: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            }
          },
          {
            id: "stats-1",
            type: "stats",
            data: {}
          },
          {
            id: "about-1",
            type: "about",
            data: {
              title: "Wachira Wekhomba Aim & Associates Advocates",
              description1: "Wachira Wekhomba Aim & Associates Advocates is a professional law firm committed to delivering reliable and strategic legal solutions. The firm provides high-quality legal representation and advisory services to individuals, businesses, and institutions.",
              description2: "Our advocates combine legal expertise with practical insight to provide solutions tailored to each client's unique circumstances. We pride ourselves on our integrity, responsiveness, and unwavering dedication to our clients' success.",
              image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
            }
          },
          {
            id: "practice-areas-1",
            type: "practice-areas",
            data: {}
          },
          {
            id: "cta-1",
            type: "cta",
            data: {
              title: "Need Professional Legal Advice?",
              description: "We are ready to listen to your case and provide the strategic legal guidance you need. Contact us today to schedule a consultation with our expert team."
            }
          }
        ]
      };

      await setDocument('pages', 'home', homeContent);
      alert('Content seeded successfully!');
    } catch (error) {
      console.error('Error seeding content:', error);
      alert('Failed to seed content.');
    } finally {
      setSeeding(false);
    }
  };

  const handleChange = (key: string, value: any) => {
    setFormData((prev: any) => ({ ...prev, [key]: value }));
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Site Settings</h1>
          <p className="text-gray-500 mt-1">Manage your global website configuration.</p>
        </div>
        <div className="flex gap-4">
          <button
            onClick={handleSeed}
            disabled={seeding}
            className="flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors disabled:opacity-50 text-sm"
          >
            {seeding ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Database className="w-4 h-4 mr-2" />}
            Seed Content
          </button>
          <button
            onClick={handleSave}
            disabled={saving}
            className="flex items-center px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50 shadow-md shadow-primary/20"
          >
            {saving ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Save className="w-4 h-4 mr-2" />}
            Save Changes
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* General Information */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-6 flex items-center">
              <Globe className="w-5 h-5 mr-2 text-primary" />
              General Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Site Title</label>
                <input
                  type="text"
                  value={formData.siteTitle || ''}
                  onChange={(e) => handleChange('siteTitle', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="e.g. Wachira Wekhomba Advocates"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Footer Text</label>
                <textarea
                  value={formData.footerText || ''}
                  onChange={(e) => handleChange('footerText', e.target.value)}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="e.g. © 2024 All Rights Reserved."
                />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-6 flex items-center">
              <Mail className="w-5 h-5 mr-2 text-primary" />
              Contact Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Contact Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="email"
                    value={formData.contactEmail || ''}
                    onChange={(e) => handleChange('contactEmail', e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="tel"
                    value={formData.phoneNumber || ''}
                    onChange={(e) => handleChange('phoneNumber', e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    value={formData.address || ''}
                    onChange={(e) => handleChange('address', e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Branding & Appearance */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-6 flex items-center">
              <ImageIcon className="w-5 h-5 mr-2 text-primary" />
              Branding
            </h2>
            <div className="space-y-6">
              <div>
                <ImagePicker 
                  label="Site Logo" 
                  value={formData.logo || ''} 
                  onChange={(url) => handleChange('logo', url)} 
                />
              </div>
              <div>
                <ImagePicker 
                  label="Favicon" 
                  value={formData.favicon || ''} 
                  onChange={(url) => handleChange('favicon', url)} 
                />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-6 flex items-center">
              <Palette className="w-5 h-5 mr-2 text-primary" />
              Appearance
            </h2>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Primary Color</label>
              <div className="flex items-center gap-3">
                <input
                  type="color"
                  value={formData.primaryColor || '#1a365d'}
                  onChange={(e) => handleChange('primaryColor', e.target.value)}
                  className="h-10 w-10 rounded-lg border border-gray-300 cursor-pointer"
                />
                <input
                  type="text"
                  value={formData.primaryColor || '#1a365d'}
                  onChange={(e) => handleChange('primaryColor', e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none uppercase"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
