import { Admin } from "~/server/models/user.model";
import bcrypt from 'bcryptjs';
import { setCookie } from "h3";
import jwt from "jsonwebtoken";

export default defineEventHandler(async (event) => {
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

  const token = jwt.sign({ id: admin._id, username: admin.username }, process.env.JWT_SECRET ||"secret", { expiresIn: "1h" });
    setCookie(event, "adminToken", token);
  return { token };
});
