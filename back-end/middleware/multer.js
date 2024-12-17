import multer from "multer";
import fs from "fs";
import path from "path";

// Ensure 'uploads' directory exists
const uploadDir = path.join(process.cwd(), "uploads");

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
  console.log("Uploads folder created at:", uploadDir);
}

// Configure Multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const uniqueName = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueName);
  },
});

// Set up Multer to handle multiple fields
const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB file size limit
});

export default upload;
