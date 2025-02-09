import { Blog } from "~/server/models/blog.model";

export default defineEventHandler(async (event) => {
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