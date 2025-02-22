import { d as defineEventHandler, r as readBody } from '../../../nitro/nitro.mjs';
import { google } from 'googleapis';
import mime from 'mime-types';
import { Buffer } from 'buffer';
import { Readable } from 'stream';
import 'node:fs/promises';
import 'node:path';
import 'nodemailer';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'mongoose';
import 'vue';
import 'node:url';
import 'jsonwebtoken';
import 'consola/core';

const upload = defineEventHandler(async (event) => {
  const folderId = process.env.GOOGLE_DRIVE_FOLDER_ID;
  const base64EncodedServiceAccount = process.env.GOOGLE_SERVICE_ACCOUNT_KEY;
  const decodedServiceAccount = Buffer.from(base64EncodedServiceAccount, "base64").toString("utf-8");
  const credentials = JSON.parse(decodedServiceAccount);
  console.log(credentials);
  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ["https://www.googleapis.com/auth/drive.file"]
  });
  const drive = google.drive({ version: "v3", auth });
  const { file, fileName } = await readBody(event);
  if (!file || !fileName) {
    return { error: "Missing file or fileName" };
  }
  const buffer = Buffer.from(file, "base64");
  const stream = Readable.from(buffer);
  const mimeType = mime.lookup(fileName) || "application/octet-stream";
  try {
    const response = await drive.files.create({
      requestBody: {
        name: fileName,
        parents: [folderId]
      },
      media: {
        mimeType,
        body: stream
      },
      fields: "id"
    });
    const fileId = response.data.id;
    await drive.permissions.create({
      fileId,
      requestBody: {
        role: "reader",
        type: "anyone"
      }
    });
    console.log(`https://drive.google.com/uc?id=${fileId}`);
    return { url: `https://drive.google.com/uc?id=${fileId}` };
  } catch (error) {
    console.error("Upload Error:", error);
    return { error: error.message };
  }
});

export { upload as default };
//# sourceMappingURL=upload.mjs.map
