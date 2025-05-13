import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cloudinary from 'cloudinary';
import multer from 'multer';
import path from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url';
import asyncHandler from 'express-async-handler';
import fs from 'fs';
import { dirname } from 'path';

// Load environment variables
dotenv.config();

// Configure Cloudinary
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Initialize Express app
const app = express();
const port = process.env.PORT || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define User Schema and Model
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

// Define Model Schema
const modelSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  modelUrl: { type: String, required: true },
  thumbnailUrl: { type: String },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  tags: [String],
  likes: { type: Number, default: 0 },
  downloads: { type: Number, default: 0 },
}, { timestamps: true });

const Model = mongoose.model('Model', modelSchema);

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, 'uploads'));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ 
  storage: storage,
  limits: { fileSize: 50 * 1024 * 1024 }, // 50MB limit
  fileFilter: function (req, file, cb) {
    // Accept 3D model files and images
    const filetypes = /glb|gltf|obj|fbx|stl|png|jpg|jpeg/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    if (extname) {
      return cb(null, true);
    } else {
      cb(new Error('Only 3D model files and images are allowed'));
    }
  }
});

// Create uploads directory if it doesn't exist
if (!fs.existsSync(path.join(__dirname, 'uploads'))) {
  fs.mkdirSync(path.join(__dirname, 'uploads'));
}

// Routes

// Get all models
app.get('/api/models', asyncHandler(async (req, res) => {
  const models = await Model.find().populate('user', 'name email');
  res.json(models);
}));

// Get a specific model
app.get('/api/models/:id', asyncHandler(async (req, res) => {
  const model = await Model.findById(req.params.id).populate('user', 'name email');
  if (model) {
    res.json(model);
  } else {
    res.status(404).json({ message: 'Model not found' });
  }
}));

// Upload a new model
app.post('/api/models', upload.fields([
  { name: 'model', maxCount: 1 },
  { name: 'thumbnail', maxCount: 1 }
]), asyncHandler(async (req, res) => {
  // Get or create user
  let user = await User.findOne({ email: req.body.email });
  if (!user) {
    user = await User.create({
      name: req.body.name,
      email: req.body.email
    });
  }

  // Upload model to Cloudinary
  const modelResult = await cloudinary.v2.uploader.upload(req.files.model[0].path, {
    resource_type: 'raw',
    folder: 'graphix3d/models',
  });

  // Upload thumbnail to Cloudinary if provided
  let thumbnailResult = null;
  if (req.files.thumbnail) {
    thumbnailResult = await cloudinary.v2.uploader.upload(req.files.thumbnail[0].path, {
      folder: 'graphix3d/thumbnails',
    });
  }

  // Create model in database
  const model = await Model.create({
    title: req.body.title,
    description: req.body.description,
    modelUrl: modelResult.secure_url,
    thumbnailUrl: thumbnailResult ? thumbnailResult.secure_url : null,
    user: user._id,
    tags: req.body.tags ? req.body.tags.split(',').map(tag => tag.trim()) : [],
  });

  // Clean up uploaded files
  fs.unlinkSync(req.files.model[0].path);
  if (req.files.thumbnail) {
    fs.unlinkSync(req.files.thumbnail[0].path);
  }

  res.status(201).json(model);
}));

// Update a model
app.put('/api/models/:id', asyncHandler(async (req, res) => {
  const model = await Model.findById(req.params.id);
  if (model) {
    model.title = req.body.title || model.title;
    model.description = req.body.description || model.description;
    model.tags = req.body.tags ? req.body.tags.split(',').map(tag => tag.trim()) : model.tags;
    
    const updatedModel = await model.save();
    res.json(updatedModel);
  } else {
    res.status(404).json({ message: 'Model not found' });
  }
}));

// Delete a model
app.delete('/api/models/:id', asyncHandler(async (req, res) => {
  const model = await Model.findById(req.params.id);
  if (model) {
    // Delete from Cloudinary
    const modelPublicId = model.modelUrl.split('/').slice(-2).join('/');
    await cloudinary.v2.uploader.destroy(modelPublicId, { resource_type: 'raw' });
    
    if (model.thumbnailUrl) {
      const thumbnailPublicId = model.thumbnailUrl.split('/').slice(-2).join('/');
      await cloudinary.v2.uploader.destroy(thumbnailPublicId);
    }
    
    await model.deleteOne();
    res.json({ message: 'Model removed' });
  } else {
    res.status(404).json({ message: 'Model not found' });
  }
}));

// Get models by user
app.get('/api/users/:email/models', asyncHandler(async (req, res) => {
  const user = await User.findOne({ email: req.params.email });
  if (user) {
    const models = await Model.find({ user: user._id });
    res.json(models);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
}));

// Root route
app.get('/', (req, res) => {
  res.send('GraphiX3D API is running');
});

app.listen(port, () => {
  console.log(`GraphiX3D server running on port ${port}`);
})