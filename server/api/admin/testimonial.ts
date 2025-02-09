import { testimonialModel } from "~/server/models/testimonial.model";

export default defineEventHandler(async (event) => {
  const method = event.node.req.method;
  console.log(method)
  const query = getQuery(event);


  switch (method) {

    case "POST":
      var body = await readBody(event);
      return await testimonialModel.create(body);

    case "PUT":
      var body = await readBody(event);

      const { _id, ...updatedData } = body;
      const updatedPlan = await testimonialModel.findByIdAndUpdate(_id, updatedData, { new: true });
      return updatedPlan || { error: "Failed to update " };

    case "DELETE":
      var body = await readBody(event);
      const { deleteId } = body;
      const deletedPlan = await testimonialModel.findByIdAndDelete(deleteId);
      return deletedPlan ? { success: true } : { error: "Failed to delete " };

    default:
      throw createError({ statusCode: 405, statusMessage: "HTTP method is not allowed." });
  }
});