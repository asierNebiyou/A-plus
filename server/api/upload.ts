import multer from "multer";
import path from "path";
import fs from "fs";

const uploadDir = "public/uploads/";
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname); 
  },
});

const upload = multer({ storage });

export default defineEventHandler(async (event) => {
  if (event.node.req.method !== "POST") {
    return { error: "Method not allowed" };
  }

  return new Promise((resolve, reject) => {
    upload.single("file")(event.node.req, event.node.res, (err) => {
      if (err) {
        reject({ error: "File upload failed" });
        return;
      }
      const file = event.node.req.file;
      if (!file) {
        reject({ error: "No file uploaded" });
        return;
      }
      resolve({ success: true, fileUrl: `/uploads/${file.filename}` });
    });
  });
});
