import { d as defineEventHandler, g as getQuery, c as createError, r as readBody } from '../../../nitro/nitro.mjs';
import { t as testimonialModel } from '../../../_/testimonial.model.mjs';
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

const testimonial = defineEventHandler(async (event) => {
  const method = event.node.req.method;
  console.log(method);
  getQuery(event);
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

export { testimonial as default };
//# sourceMappingURL=testimonial.mjs.map
