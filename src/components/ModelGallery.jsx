import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ModelGallery = ({ eventFilter }) => {
  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchModels = async () => {
      try {
        // Build URL with query parameter if eventFilter is provided
        let url = 'http://localhost:3000/api/models';
        if (eventFilter) {
          url += `?event=${eventFilter}`;
        }
        
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error('Failed to fetch models');
        }
        
        const data = await response.json();
        
        // If the backend doesn't support filtering, filter on the client side
        const filteredModels = eventFilter
          ? data.filter(model => {
              // Check if model has tags and if any tag matches the event filter
              return model.tags && model.tags.includes(eventFilter);
            })
          : data;
          
        setModels(filteredModels);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchModels();
  }, [eventFilter]);

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center bg-primary">
        <div className="text-white text-xl">Loading models...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-screen flex justify-center items-center bg-primary">
        <div className="text-red-400 text-xl">Error: {error}</div>
      </div>
    );
  }

  return (
    <section className="py-16 bg-primary min-h-screen">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-white mb-12 text-center"
        >
          {eventFilter ? `${eventFilter.replace('_', ' ').toUpperCase()} Models` : '3D Model Gallery'}
        </motion.h2>
        
        {models.length === 0 ? (
          <div className="text-center text-gray-400 text-xl">
            No models found. Be the first to upload!
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {models.map((model) => (
              <motion.div
                key={model._id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-primary/50 backdrop-blur-sm rounded-lg overflow-hidden border-2 border-accent/20 hover:border-accent/40 transition-all"
              >
                <div className="h-48 bg-gray-800 relative">
                  {model.thumbnailUrl ? (
                    <img 
                      src={model.thumbnailUrl} 
                      alt={model.title} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-500">
                      No thumbnail
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{model.title}</h3>
                  <p className="text-gray-300 mb-4 line-clamp-2">{model.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {model.tags && model.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="text-xs bg-accent/20 text-accent px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center text-sm text-gray-400">
                    <div>By: {model.user?.name || 'Unknown'}</div>
                    <div className="flex items-center gap-3">
                      <span>❤️ {model.likes}</span>
                      <span>⬇️ {model.downloads}</span>
                    </div>
                  </div>
                  
                  <a 
                    href={model.modelUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-4 inline-block w-full text-center bg-accent hover:bg-accent/80 text-white font-medium py-2 px-4 rounded transition-colors"
                  >
                    View Model
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ModelGallery;