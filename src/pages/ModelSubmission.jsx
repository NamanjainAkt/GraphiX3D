import React from 'react';
import ModelUpload from '../components/ModelUpload';
import ModelGallery from '../components/ModelGallery';

const ModelSubmission = () => {
  return (
    <div className="min-h-screen bg-primary">
      <ModelUpload />
      {/* Display all models without filtering */}
      <ModelGallery />
    </div>
  );
};

export default ModelSubmission;