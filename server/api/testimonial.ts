import { testimonialModel } from "~/server/models/testimonial.model";

export default defineEventHandler(async (event) => {
  const method = event.node.req.method;
  console.log(method)
  const query = getQuery(event);


  switch (method) {
    case "GET":
      const testimonial = await testimonialModel.find();

      return testimonial;

    default:
      throw createError({ statusCode: 405, statusMessage: "HTTP method is not allowed." });
  }
});