import Product from '../models/productModel.js'; // Assuming you have a Mongoose model for products

// Function to add a product
const addProduct = async (req, res) => {
  try {
    const { name, description, price, category, subCategory, sizes, date, bestseller } = req.body;

    // Access uploaded files
    const image1 = req.files.image1 ? req.files.image1[0].filename : null;
    const image2 = req.files.image2 ? req.files.image2[0].filename : null;
    const image3 = req.files.image3 ? req.files.image3[0].filename : null;
      const image4 = req.files.image4 ? req.files.image4[0].filename : null;
      
      const images =[image1, image2, image3, image4].filter.

    console.log("Product Data:", name, description, price, category, subCategory, sizes, bestseller);
    console.log("Uploaded Images:", image1, image2, image3, image4);

    // Create and save the product
    const product = new Product({
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestseller,
      images: [image1, image2, image3, image4].filter(Boolean), // Store filenames in an array
      date: date || new Date(),
    });

    await product.save();

    res.status(201).json({
      success: true,
      message: "Product added successfully",
      product,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// Function to list all products
const listProducts = async (req, res) => {
    try {
        const products = await Product.find(); // Retrieve all products
        res.status(200).json({ success: true, products });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Function to remove a product
const removeProducts = async (req, res) => {
    try {
        const { id } = req.params; // Get the product ID from the route parameter
        const deletedProduct = await Product.findByIdAndDelete(id);

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
        const product = await Product.findById(id);

        if (!product) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }

        res.status(200).json({ success: true, product });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

export { listProducts, addProduct, removeProducts, singleProduct };
