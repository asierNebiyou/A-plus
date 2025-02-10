import { Consultation } from "~/server/models/submittion.model";
import { sendEmail } from "~/server/utils/mailer";
import { getUserEmailTemplate, getAdminEmailTemplate } from "~/server/utils/emailTemplates";

export default defineEventHandler(async (event) => {
  const method = event.node.req.method;

  if (method === "GET") {
    return await Consultation.find();
  }

  if (method === "POST") {
    const body = await readBody(event);

    try {
      const newConsultation = await Consultation.create(body);
      // const userMailTemplate = await getUserEmailTemplate(body.name)
      // await sendEmail(
      //   body.email,
      //   "We received your inquiry!",
      //   userMailTemplate
      // );

      const adminMailTemplate =  await getAdminEmailTemplate(body)
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
