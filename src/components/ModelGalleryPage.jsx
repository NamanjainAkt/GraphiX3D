import React, { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Dialog } from '@headlessui/react'
import { X } from 'lucide-react'
import GLTFModelViewer from '../components/GLTFModelViewer'

const models = [
    { name: 'Donut 2', file: '/models/donut2.glb', thumbnail: 'models/thumbnails/thumb2.png' },
    { name: 'Donut 2', file: '/models/donut2.glb', thumbnail: 'models/thumbnails/thumb2.png' },
    { name: 'Donut 3', file: '/models/donut3.glb', thumbnail: 'models/thumbnails/thumb3.png' },
    { name: 'Donut 3', file: '/models/donut3.glb', thumbnail: 'models/thumbnails/thumb3.png' },
    { name: 'Donut 1', file: '/models/donut1.glb', thumbnail: 'models/thumbnails/thumb1.png' },
    { name: 'Donut 1', file: '/models/donut1.glb', thumbnail: 'models/thumbnails/thumb1.png' },
    { name: 'Donut 1', file: '/models/donut1.glb', thumbnail: 'models/thumbnails/thumb1.png' },
    { name: 'Donut 2', file: '/models/donut2.glb', thumbnail: 'models/thumbnails/thumb2.png' },
  { name: 'Donut 1', file: '/models/donut1.glb', thumbnail: 'models/thumbnails/thumb1.png' },
  { name: 'Donut 2', file: '/models/donut2.glb', thumbnail: 'models/thumbnails/thumb2.png' },
  { name: 'Donut 3', file: '/models/donut3.glb', thumbnail: 'models/thumbnails/thumb3.png' },
  { name: 'Donut 1', file: '/models/donut1.glb', thumbnail: 'models/thumbnails/thumb1.png' },
  { name: 'Donut 3', file: '/models/donut3.glb', thumbnail: 'models/thumbnails/thumb3.png' },
]

const ModelGalleryPage = () => {
  const [selectedModel, setSelectedModel] = useState(null)

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6 text-center mt-[80px]">3D Donut Gallery</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {models.map((model, index) => (
          <div 
            key={index} 
            className="bg-gray-800 p-4 rounded-xl cursor-pointer hover:bg-gray-700 transition"
            onClick={() => setSelectedModel(model.file)}
          >
            <img 
              src={model.thumbnail} 
              alt={model.name} 
              className="w-full h-48 object-contain rounded"
            />
            <p className="mt-2 text-center">{model.name}</p>
          </div>
        ))}
      </div>

      {/* Modal for full-screen viewer */}
      <Dialog open={!!selectedModel} onClose={() => setSelectedModel(null)} className="fixed z-50 inset-0 flex items-center justify-center">
        <div className="fixed inset-0 bg-black bg-opacity-80" aria-hidden="true" />
        
        <Dialog.Panel className="w-full max-w-5xl h-[80vh] bg-gray-900 rounded-xl overflow-hidden relative shadow-lg">
          <button 
            onClick={() => setSelectedModel(null)} 
            className="absolute top-4 right-4 z-10 text-white bg-gray-700 hover:bg-gray-600 p-2 rounded-full"
          >
            <X />
          </button>
          <Canvas camera={{ position: [0, 1, 3], fov: 45 }} shadows>
            <ambientLight intensity={0.3} />
            <spotLight position={[10, 10, 10]} intensity={1.5} angle={0.3} penumbra={1} castShadow />
            {selectedModel && <GLTFModelViewer modelPath={selectedModel} scale={1.5} />}
          </Canvas>
        </Dialog.Panel>
      </Dialog>
    </div>
  )
}

export default ModelGalleryPage
