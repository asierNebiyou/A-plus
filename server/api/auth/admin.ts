import { Admin } from "~/server/models/user.model";
import bcrypt from 'bcryptjs';
import { defineEventHandler, readBody } from "h3";

export default defineEventHandler(async (event) => {
  const method = event.node.req.method;
  const query = event.context.params;

  if (method === "GET") {
    const admins = await Admin.find({}, { password: 0 }); 
    return admins;
  }

  if (method === "POST") {
    const { username, password } = await readBody(event);
    if (!username || !password) return { error: "Username and password are required" };

    const existingAdmin = await Admin.findOne({ username });
    if (existingAdmin) return { error: "Admin already exists" };

    const hashedPassword = await bcrypt.hash(password, 10);
    const newAdmin = await Admin.create({ username, password: hashedPassword });

    return { message: "Admin registered successfully", admin: newAdmin };
  }

  if (method === "PUT") {
    const { username, password } = await readBody(event);
    if (!query.id) return { error: "Admin ID is required" };

    const updateData = { username };
    if (password) updateData.password = await bcrypt.hash(password, 10);

    const updatedAdmin = await Admin.findByIdAndUpdate(query.id, updateData, { new: true });

    return updatedAdmin ? { message: "Admin updated successfully", updatedAdmin } : { error: "Admin not found" };
  }

  if (method === "DELETE") {
    if (!query.id) return { error: "Admin ID is required" };

    const deletedAdmin = await Admin.findByIdAndDelete(query.id);
    return deletedAdmin ? { message: "Admin deleted successfully" } : { error: "Admin not found" };
  }
});
