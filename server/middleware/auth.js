import jwt from "jsonwebtoken";
import { defineEventHandler, getCookie } from "h3";

const SECRET_KEY = process.env.SECRET_KEY || "secret";

export default defineEventHandler(async (event) => {
  const token = getCookie(event, "adminToken");

  if (!token) {
    event.context.auth = null;
    return;
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    event.context.auth = decoded;
    console.log("Authorization grrrrrrrrrrrrrrrrrrrrrr:", decoded);
  } catch (err) {
    // con console.log("Authorization grrsole.log(" errrrrrrrrrrrrrrrrrrrrr:", err);
    event.context.auth = null;
  }
});
