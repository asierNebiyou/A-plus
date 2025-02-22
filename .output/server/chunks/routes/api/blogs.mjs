import { d as defineEventHandler, g as getQuery, r as readBody } from '../../nitro/nitro.mjs';
import { model, Schema } from 'mongoose';
import 'node:fs/promises';
import 'node:path';
import 'nodemailer';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'vue';
import 'node:url';
import 'jsonwebtoken';
import 'consola/core';

const BlogSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    content: { type: String, required: true },
    featured: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now }
  },
  { timestamps: true }
);
BlogSchema.statics.setFeatured = async function(id) {
  await this.updateMany({}, { featured: false });
  return this.findByIdAndUpdate(id, { featured: true }, { new: true });
};
const Blog = model("Blog", BlogSchema);

const blogs = defineEventHandler(async (event) => {
  const method = event.node.req.method;
  const query = getQuery(event);
  switch (method) {
    case "POST":
      var body = await readBody(event);
      return await Blog.create(body);
    case "GET":
      if (query.id) return await Blog.findById(query.id);
      return await Blog.find().sort({ createdAt: -1 });
    case "PUT":
      var body = await readBody(event);
      return await Blog.findByIdAndUpdate(body.id, body, { new: true });
    case "DELETE":
      return await Blog.findByIdAndDelete(query.id);
    case "PATCH":
      var body = await readBody(event);
      return await Blog.setFeatured(body.id);
    default:
      return { error: "Method not allowed" };
  }
});

export { blogs as default };
//# sourceMappingURL=blogs.mjs.map
