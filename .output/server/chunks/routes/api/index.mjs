import { d as defineEventHandler, r as readBody, a as getAdminEmailTemplate, b as sendEmail } from '../../nitro/nitro.mjs';
import { C as Consultation } from '../../_/submittion.model.mjs';
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

const index = defineEventHandler(async (event) => {
  const method = event.node.req.method;
  if (method === "GET") {
    return await Consultation.find();
  }
  if (method === "POST") {
    const body = await readBody(event);
    try {
      const newConsultation = await Consultation.create(body);
      const adminMailTemplate = await getAdminEmailTemplate(body);
      await sendEmail(
        process.env.SMTP_USER,
        "New Consultation Request",
        adminMailTemplate
      );
      await Consultation.findByIdAndUpdate(newConsultation._id, { MailStatus: "sent" });
      return newConsultation;
    } catch (error) {
      return { error: error.message };
    }
  }
});

export { index as default };
//# sourceMappingURL=index.mjs.map
