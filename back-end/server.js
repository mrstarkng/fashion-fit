import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import helmet from 'helmet'; // Add security headers
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userroute.js';

// App Config
const app = express();
const port = process.env.PORT || 4000;

// Ensure environment variables are set
if (!process.env.MONGODB_URL || !process.env.CLOUDINARY_NAME || !process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET) {
  console.error('Error: Missing required environment variables.');
  process.exit(1); // Exit the server if variables are missing
}

// Connect to Services
(async () => {
  try {
    await connectDB(); // Connect to MongoDB
    connectCloudinary(); // Configure Cloudinary
    console.log('All services connected successfully.');
  } catch (err) {
    console.error('Failed to connect to services:', err);
    process.exit(1); // Stop the server if connections fail
  }
})();

// Middlewares
app.use(express.json({ limit: '10mb' })); // Increase JSON payload limit for large requests
app.use(cors());
app.use(helmet());

// API Endpoints
app.use('/api/user', userRouter); // User routes

// Handle Undefined Routes
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Start Server
app.listen(port, () => console.log(`Server is running on port ${port}`));
