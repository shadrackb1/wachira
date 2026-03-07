import React from 'react';
import MediaLibrary from '../../components/admin/MediaLibrary';

const MediaManager = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-900">Media Manager</h1>
      <MediaLibrary />
    </div>
  );
};

export default MediaManager;
