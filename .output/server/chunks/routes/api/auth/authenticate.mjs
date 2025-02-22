import { d as defineEventHandler, r as readBody, c as createError, s as setCookie } from '../../../nitro/nitro.mjs';
import { A as Admin } from '../../../_/user.model.mjs';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import 'node:fs/promises';
import 'node:path';
import 'nodemailer';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'mongoose';
import 'vue';
import 'node:url';
import 'consola/core';

const authenticate = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { username, password } = body;
  if (!username || !password) {
    throw createError({ statusCode: 400, statusMessage: "Username and password required" });
  }
  const admin = await Admin.findOne({ username });
  if (!admin) {
    throw createError({ statusCode: 401, statusMessage: "Invalid credentials" });
  }
  const isValid = await bcrypt.compare(password, admin.password);
  if (!isValid) {
    throw createError({ statusCode: 401, statusMessage: "Invalid credentials" });
  }
  const token = jwt.sign({ id: admin._id, username: admin.username }, process.env.JWT_SECRET || "secret", { expiresIn: "1h" });
  setCookie(event, "adminToken", token);
  return { token };
});

export { authenticate as default };
//# sourceMappingURL=authenticate.mjs.map
