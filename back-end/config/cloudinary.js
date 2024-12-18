import { v2 as cloudinary } from "cloudinary";

const connectCloudinary = () => {
  try {
    // Log the values to confirm

    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });

    console.log("Cloudinary connected successfully.");
  } catch (error) {
    console.error("Failed to connect to Cloudinary:", error.message);
    throw error;
  }
};

export default connectCloudinary;
