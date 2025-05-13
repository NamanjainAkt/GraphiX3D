import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ModelUpload = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    name: '',
    email: '',
    tags: '',
    event: 'none', // Default to 'none'
  });
  const [modelFile, setModelFile] = useState(null);
  const [thumbnailFile, setThumbnailFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleModelFileChange = (e) => {
    setModelFile(e.target.files[0]);
  };

  const handleThumbnailFileChange = (e) => {
    setThumbnailFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsUploading(true);
    setMessage({ text: '', type: '' });

    try {
      const uploadData = new FormData();
      
      // Add form fields
      Object.keys(formData).forEach(key => {
        // If this is an event submission, add the event to tags
        if (key === 'tags' && formData.event !== 'none') {
          const tagsWithEvent = formData.tags ? `${formData.tags},${formData.event}` : formData.event;
          uploadData.append('tags', tagsWithEvent);
        } else {
          uploadData.append(key, formData[key]);
        }
      });
      
      // Add files
      if (modelFile) {
        uploadData.append('model', modelFile);
      } else {
        throw new Error('Please select a 3D model file');
      }
      
      if (thumbnailFile) {
        uploadData.append('thumbnail', thumbnailFile);
      }

      // Send to backend API
      const response = await fetch('http://localhost:3000/api/models', {
        method: 'POST',
        body: uploadData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to upload model');
      }

      const result = await response.json();
      
      // Reset form
      setFormData({
        title: '',
        description: '',
        name: '',
        email: '',
        tags: '',
        event: 'none',
      });
      setModelFile(null);
      setThumbnailFile(null);
      
      // Show success message
      setMessage({
        text: 'Model uploaded successfully!',
        type: 'success',
      });
    } catch (error) {
      setMessage({
        text: error.message,
        type: 'error',
      });
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto bg-primary/50 backdrop-blur-sm p-8 rounded-lg border-2 border-accent/20"
        >
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Upload Your 3D Model</h2>
          
          {message.text && (
            <div className={`p-4 mb-6 rounded ${message.type === 'success' ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'}`}>
              {message.text}
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="title" className="block text-white mb-2">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                required
                className="w-full bg-primary/30 border border-accent/30 rounded p-3 text-white focus:border-accent focus:outline-none"
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="description" className="block text-white mb-2">Description</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
                rows="4"
                className="w-full bg-primary/30 border border-accent/30 rounded p-3 text-white focus:border-accent focus:outline-none"
              ></textarea>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="name" className="block text-white mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-primary/30 border border-accent/30 rounded p-3 text-white focus:border-accent focus:outline-none"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-white mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-primary/30 border border-accent/30 rounded p-3 text-white focus:border-accent focus:outline-none"
                />
              </div>
            </div>
            
            <div className="mb-4">
              <label htmlFor="tags" className="block text-white mb-2">Tags (comma separated)</label>
              <input
                type="text"
                id="tags"
                name="tags"
                value={formData.tags}
                onChange={handleInputChange}
                placeholder="e.g. architecture, character, game"
                className="w-full bg-primary/30 border border-accent/30 rounded p-3 text-white focus:border-accent focus:outline-none"
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="event" className="block text-white mb-2">Submit for Event</label>
              <select
                id="event"
                name="event"
                value={formData.event}
                onChange={handleInputChange}
                className="w-full bg-primary/30 border border-accent/30 rounded p-3 text-white focus:border-accent focus:outline-none"
              >
                <option value="none">None (General Submission)</option>
                <option value="default_donut">Default Donut Challenge</option>
                {/* Add more events here as needed */}
              </select>
            </div>
            
            <div className="mb-4">
              <label htmlFor="model" className="block text-white mb-2">3D Model File (glb, gltf, obj, fbx, stl)</label>
              <input
                type="file"
                id="model"
                onChange={handleModelFileChange}
                required
                accept=".glb,.gltf,.obj,.fbx,.stl"
                className="w-full bg-primary/30 border border-accent/30 rounded p-3 text-white focus:border-accent focus:outline-none"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="thumbnail" className="block text-white mb-2">Thumbnail Image (optional)</label>
              <input
                type="file"
                id="thumbnail"
                onChange={handleThumbnailFileChange}
                accept=".png,.jpg,.jpeg"
                className="w-full bg-primary/30 border border-accent/30 rounded p-3 text-white focus:border-accent focus:outline-none"
              />
            </div>
            
            <button
              type="submit"
              disabled={isUploading}
              className="w-full bg-accent hover:bg-accent/80 text-white font-bold py-3 px-4 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isUploading ? 'Uploading...' : 'Upload Model'}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ModelUpload;