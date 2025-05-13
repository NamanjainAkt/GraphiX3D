# GraphiX3D Backend API

This is the backend API for the GraphiX3D application, which allows users to upload, store, and manage 3D models using MongoDB and Cloudinary.

## Setup

1. Install dependencies:
   ```
   npm install
   ```

2. Configure environment variables in `.env` file:
   ```
   PORT=3000
   MONGO_URI=mongodb://localhost:27017/graphix3d
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   ```

3. Start the server:
   ```
   npm start
   ```

## API Endpoints

### Models

#### GET `/api/models`
Get all 3D models

#### GET `/api/models/:id`
Get a specific 3D model by ID

#### POST `/api/models`
Upload a new 3D model

Request (multipart/form-data):
- `model` (file, required): The 3D model file (supported formats: glb, gltf, obj, fbx, stl)
- `thumbnail` (file, optional): A thumbnail image for the model (supported formats: png, jpg, jpeg)
- `title` (string, required): Title of the model
- `description` (string, required): Description of the model
- `name` (string, required): User's name
- `email` (string, required): User's email
- `tags` (string, optional): Comma-separated list of tags

#### PUT `/api/models/:id`
Update a 3D model

Request (JSON):
- `title` (string, optional): New title
- `description` (string, optional): New description
- `tags` (string, optional): New comma-separated list of tags

#### DELETE `/api/models/:id`
Delete a 3D model

### Users

#### GET `/api/users/:email/models`
Get all models uploaded by a specific user

## File Specifications

- Maximum file size: 50MB
- Supported 3D model formats: glb, gltf, obj, fbx, stl
- Supported image formats: png, jpg, jpeg

## Database Models

### User
- `name`: User's name
- `email`: User's email (unique)
- `timestamps`: Created and updated timestamps

### Model
- `title`: Model title
- `description`: Model description
- `modelUrl`: URL to the 3D model on Cloudinary
- `thumbnailUrl`: URL to the thumbnail image on Cloudinary (optional)
- `user`: Reference to the User who uploaded the model
- `tags`: Array of tags
- `likes`: Number of likes (default: 0)
- `downloads`: Number of downloads (default: 0)
- `timestamps`: Created and updated timestamps