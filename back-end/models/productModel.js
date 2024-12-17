import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  subCategory: {
    type: String,
    required: true,
  },
  images: {
    type: Array,
    required: true,
  },
  sizes: {
    type: Array,
    required: true,
  },
  bestSeller: {
    type: Boolean,
    default: false, // Provide a default value
  },
  date: {
    type: Number,
    required: true,
  },
});

// Check if model already exists to avoid overwriting
const Product = mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
