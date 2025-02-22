import { d as defineEventHandler, r as readBody } from '../../../nitro/nitro.mjs';
import { C as Consultation } from '../../../_/submittion.model.mjs';
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

const _id_ = defineEventHandler(async (event) => {
  const method = event.node.req.method;
  const id = event.context.params.id;
  const body = await readBody(event);
  if (method === "GET") {
    const consultation = await Consultation.findById(id);
    return consultation || { error: "Consultation not found" };
  }
  if (method === "PUT") {
    try {
      const updated = await Consultation.findByIdAndUpdate(id, body, { new: true });
      return updated || { error: "Consultation not found" };
    } catch (error) {
      return { error: error.message };
    }
  }
  if (method === "DELETE") {
    const deleted = await Consultation.findByIdAndDelete(id);
    return deleted ? { message: "Deleted successfully" } : { error: "Consultation not found" };
  }
});

export { _id_ as default };
//# sourceMappingURL=_id_.mjs.map
