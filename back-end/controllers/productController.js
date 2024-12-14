import productModel from '../models/productModel.js'; // Assuming you have a Mongoose model for products

// Function to add a product
const addProduct = async (req, res) => {
    try {
        const { name, description, price, category, subCategory, sizes, image, date, bestseller } = req.body;

      
};

// Function to list all products
const listProducts = async (req, res) => {
    try {
        const products = await productModel.find(); // Retrieve all products
        res.status(200).json({ success: true, products });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Function to remove a product
const removeProducts = async (req, res) => {
    try {
        const { id } = req.params; // Get the product ID from the route parameter
        const deletedProduct = await productModel.findByIdAndDelete(id);

        if (!deletedProduct) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }

        res.status(200).json({ success: true, message: "Product removed successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Function to get a single product by ID
const singleProduct = async (req, res) => {
    try {
        const { id } = req.params; // Get the product ID from the route parameter
        const product = await productModel.findById(id);

        if (!product) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }

        res.status(200).json({ success: true, product });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

export { listProducts, addProduct, removeProducts, singleProduct };
