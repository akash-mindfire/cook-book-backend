import multer from "multer";

// Configure Multer to Store Files in Memory
const upload = multer({ storage: multer.memoryStorage() });

export default upload;
