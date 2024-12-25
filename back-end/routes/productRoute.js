import express from "express";
import { listProducts, addProduct, removeProducts, singleProduct } from "../controllers/productController.js";
import upload from '../middleware/multer.js';
import adminAuth from '../middleware/adminAuth.js';

const productRouter = express.Router();

// Route to add a product with image uploads
productRouter.post(
  '/add',adminAuth,
  upload.fields([
    { name: 'image1', maxCount: 1 }, 
    { name: 'image2', maxCount: 1 },
    { name: 'image3', maxCount: 1 },
    { name: 'image4', maxCount: 1 },

  ]), 
  addProduct
);

// Route to remove a product
productRouter.post('/remove', adminAuth, removeProducts); // Use DELETE method and pass product ID as a parameter

// Route to fetch a single product
productRouter.post('/single',adminAuth, singleProduct); // Use GET method and pass product ID as a parameter

// Route to list all products
productRouter.get('/list',adminAuth, listProducts); // Use GET method for listing all products

export default productRouter;
