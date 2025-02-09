import {Faq} from '~/server/models/faq.model'

export default defineEventHandler(async (event) => {
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
