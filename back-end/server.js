import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import helmet from 'helmet'; // Add security headers

// App Config
const app = express();
const port = process.env.PORT || 4000;

// Ensure environment variables are set
if (!process.env.MONGODB_URL) {
  console.error('Error: MONGODB_URL is not set in the environment variables.');
  process.exit(1);
}

// Connect to Database
connectDB().catch((err) => {
  console.error('Failed to connect to MongoDB:', err);
  process.exit(1); // Stop the server if the database connection fails
});

// Middlewares
app.use(express.json());
app.use(cors());
app.use(helmet()); // Use helmet for security

// API Endpoints
app.get('/', (req, res) => res.status(200).send('Hello World'));

// Handle Undefined Routes
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Start Server
app.listen(port, () => console.log(`Server is running on port ${port}`));
