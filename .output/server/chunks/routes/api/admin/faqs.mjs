import { d as defineEventHandler, r as readBody, c as createError } from '../../../nitro/nitro.mjs';
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

const FaqSchema = new Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});
const Faq = model("Faq", FaqSchema);

const faqs = defineEventHandler(async (event) => {
  const method = event.node.req.method;
  if (method === "GET") {
    return await Faq.find().sort({ createdAt: -1 });
  }
  if (method === "POST") {
    const body = await readBody(event);
    if (!body.question || !body.answer) throw createError({ statusCode: 400, statusMessage: "Invalid data" });
    const faq = new Faq(body);
    await faq.save();
    return { message: "FAQ created", faq };
  }
  if (method === "PUT") {
    const body = await readBody(event);
    if (!body.id || !body.question || !body.answer) throw createError({ statusCode: 400, statusMessage: "Missing fields" });
    await Faq.findByIdAndUpdate(body.id, { question: body.question, answer: body.answer });
    return { message: "FAQ updated" };
  }
  if (method === "DELETE") {
    const body = await readBody(event);
    if (!body.id) throw createError({ statusCode: 400, statusMessage: "Missing FAQ ID" });
    await Faq.findByIdAndDelete(body.id);
    return { message: "FAQ deleted" };
  }
  throw createError({ statusCode: 405, statusMessage: "Method Not Allowed" });
});

export { faqs as default };
//# sourceMappingURL=faqs.mjs.map
