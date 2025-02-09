import { Consultation } from "~/server/models/submittion.model";

export default defineEventHandler(async (event) => {
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
