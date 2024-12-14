import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // MongoDB connection
    await mongoose.connect(process.env.MONGODB_URL);

    // Connection events
    mongoose.connection.on("connected", () => {
      console.log("✅ Database connected successfully");
    });

    mongoose.connection.on("error", (err) => {
      console.error("❌ Database connection error:", err);
    });

    mongoose.connection.on("disconnected", () => {
      console.log("⚠️ Database disconnected");
    });
  } catch (error) {
    console.error("❌ Error connecting to database:", error.message);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;
