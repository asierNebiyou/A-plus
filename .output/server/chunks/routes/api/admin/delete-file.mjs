import { d as defineEventHandler, g as getQuery } from '../../../nitro/nitro.mjs';
import fs from 'fs';
import path from 'path';
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

const deleteFile = defineEventHandler(async (event) => {
  if (event.node.req.method !== "DELETE") {
    return { error: "Method not allowed" };
  }
  const query = getQuery(event);
  const filePath = path.join("public", query.fileurl);
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
    return { success: true, message: "File deleted successfully" };
  } else {
    return { error: "File not found" };
  }
});

export { deleteFile as default };
//# sourceMappingURL=delete-file.mjs.map
