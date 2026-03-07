import React, { useState, useEffect } from 'react';
import ImagePicker from './ImagePicker';
import { X, Save, Plus, Trash2 } from 'lucide-react';

interface PropertyEditorProps {
  section: any;
  onChange: (newData: any) => void;
  onClose: () => void;
}

const PropertyEditor = ({ section, onChange, onClose }: PropertyEditorProps) => {
  const [data, setData] = useState(section.data || {});

  useEffect(() => {
    setData(section.data || {});
  }, [section]);

  const handleChange = (key: string, value: any) => {
    const newData = { ...data, [key]: value };
    setData(newData);
    onChange(newData);
  };

  const renderField = (key: string, value: any, type: string = 'text', label?: string) => {
    switch (type) {
      case 'textarea':
        return (
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1 capitalize">{label || key}</label>
            <textarea
              value={value || ''}
              onChange={(e) => handleChange(key, e.target.value)}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
            />
          </div>
        );
      case 'image':
        return (
          <div className="mb-4">
            <ImagePicker
              label={label || key}
              value={value || ''}
              onChange={(url) => handleChange(key, url)}
            />
          </div>
        );
      case 'number':
        return (
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1 capitalize">{label || key}</label>
            <input
              type="number"
              value={value || ''}
              onChange={(e) => handleChange(key, parseInt(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
            />
          </div>
        );
      default:
        return (
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1 capitalize">{label || key}</label>
            <input
              type="text"
              value={value || ''}
              onChange={(e) => handleChange(key, e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
            />
          </div>
        );
    }
  };

  const renderFields = () => {
    switch (section.type) {
      case 'hero':
        return (
          <>
            {renderField('tagline', data.tagline)}
            {renderField('title', data.title)}
            {renderField('subtitle', data.subtitle, 'textarea')}
            {renderField('backgroundImage', data.backgroundImage, 'image', 'Background Image')}
          </>
        );
      case 'stats':
        return (
          <div className="p-4 bg-gray-50 rounded-lg text-center text-gray-500">
            Stats are currently managed via code configuration.
            {/* Future: Add dynamic stats array editor */}
          </div>
        );
      case 'about':
        return (
          <>
            {renderField('title', data.title)}
            {renderField('description1', data.description1, 'textarea', 'Paragraph 1')}
            {renderField('description2', data.description2, 'textarea', 'Paragraph 2')}
            {renderField('image', data.image, 'image', 'Section Image')}
          </>
        );
      case 'practice-areas':
        return (
          <div className="p-4 bg-gray-50 rounded-lg text-center text-gray-500">
            Practice Areas are currently managed via code configuration.
            {/* Future: Add dynamic practice areas array editor */}
          </div>
        );
      case 'cta':
        return (
          <>
            {renderField('title', data.title)}
            {renderField('description', data.description, 'textarea')}
          </>
        );
      default:
        return (
          <div className="p-4 bg-yellow-50 text-yellow-800 rounded-lg">
            Unknown section type: {section.type}
          </div>
        );
    }
  };

  return (
    <div className="h-full flex flex-col bg-white border-l border-gray-200 shadow-xl w-80 fixed right-0 top-0 bottom-0 z-40 transform transition-transform duration-300 ease-in-out translate-x-0">
      <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gray-50">
        <h3 className="font-bold text-gray-900 capitalize">{section.type.replace('-', ' ')} Settings</h3>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-200 transition-colors">
          <X className="w-5 h-5" />
        </button>
      </div>
      
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {renderFields()}
      </div>

      <div className="p-4 border-t border-gray-200 bg-gray-50 flex justify-end">
        <button 
          onClick={onClose}
          className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors flex items-center shadow-sm"
        >
          <Save className="w-4 h-4 mr-2" />
          Done
        </button>
      </div>
    </div>
  );
};

export default PropertyEditor;
