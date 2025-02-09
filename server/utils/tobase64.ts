  import fs from 'node:fs/promises'; 
  import path from 'node:path';

  export async function getBase64Image(imagePath) {
    try {
      const absoluteImagePath = path.resolve(process.cwd(), imagePath); 
      const imageBuffer = await fs.readFile(absoluteImagePath);
      const base64String = imageBuffer.toString('base64');
      const mimeType = 'image/png';
      return `data:${mimeType};base64,${base64String}`;
    } catch (error) {
      console.error("Error reading image:", error);
      return ''; 
    }
  }