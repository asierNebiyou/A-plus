import { Pricing } from "~/server/models/pricing.model";


export default defineEventHandler(async (event) => {

  const method = event.node.req.method;
  const query = getQuery(event);


  switch (method) {
    case "POST":
      var body = await readBody(event);
      return await Pricing.create(body);

    case "PUT":
      var body = await readBody(event);

      const { _id, ...updatedData } = body;
      const updatedPlan = await Pricing.findByIdAndUpdate(_id, updatedData, { new: true });
      return updatedPlan || { error: "Failed to update pricing plan" };

    case "DELETE":
      var body = await readBody(event);
      const { id: deleteId } = body;
      console.log(deleteId)
      const deletedPlan = await Pricing.findByIdAndDelete(deleteId);
      return deletedPlan ? { success: true } : { error: "Failed to delete pricing plan" };

    default:
      throw createError({ statusCode: 405, statusMessage: "HTTP method is not allowed." });
  }
});
