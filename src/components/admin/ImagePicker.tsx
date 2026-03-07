import React, { useState } from 'react';
import { Image as ImageIcon, X } from 'lucide-react';
import MediaLibrary from './MediaLibrary';

interface ImagePickerProps {
  value: string;
  onChange: (url: string) => void;
  label?: string;
}

const ImagePicker = ({ value, onChange, label }: ImagePickerProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="space-y-2">
      {label && <label className="block text-sm font-medium text-gray-700">{label}</label>}
      
      <div className="flex items-start gap-4">
        {value && (
          <div className="relative w-24 h-24 rounded-lg overflow-hidden border border-gray-200 group">
            <img src={value} alt="Preview" className="w-full h-full object-cover" />
            <button
              onClick={() => onChange('')}
              className="absolute top-1 right-1 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        )}
        
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
        >
          <ImageIcon className="w-4 h-4 mr-2" />
          {value ? 'Change Image' : 'Select Image'}
        </button>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col">
            <div className="flex justify-between items-center p-6 border-b">
              <h3 className="text-xl font-bold text-gray-900">Select Image</h3>
              <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-700">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6 overflow-y-auto flex-1">
              <MediaLibrary 
                selectable 
                onSelect={(url) => {
                  onChange(url);
                  setIsOpen(false);
                }} 
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImagePicker;
