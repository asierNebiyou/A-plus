import { ContactInfo } from "~/server/models/contact.model";

export default defineEventHandler(async (event) => {
  const method = event.node.req.method;

  if (method === "GET") {
    const contactinfo = await ContactInfo.findOne();
    return contactinfo || {};
  }

  if (method === "PUT") {
    const body = await readBody(event);
    await ContactInfo.ensureSingleRecord(body);
    return { success: true, message: "Contact information updated successfully" };
  }

  return { error: "Method not allowed" };
});
