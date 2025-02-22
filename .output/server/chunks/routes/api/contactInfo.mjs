import { d as defineEventHandler, r as readBody } from '../../nitro/nitro.mjs';
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

const ContactInfoSchema = new Schema(
  {
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, required: true, trim: true },
    calendarly: { type: String, required: true, trim: true },
    socialLinks: {
      facebook: { type: String, trim: true },
      twitter: { type: String, trim: true },
      linkedin: { type: String, trim: true },
      instagram: { type: String, trim: true },
      tiktok: { type: String, trim: true },
      telegram: { type: String, trim: true }
    },
    introVideo: { type: String },
    podcastVideo: { type: String }
  },
  { timestamps: true }
);
ContactInfoSchema.statics.ensureSingleRecord = async function(data, file) {
  const existingRecord = await this.findOne();
  if (existingRecord) {
    await this.updateOne({}, data);
    return this.findOne();
  } else {
    return this.create(data);
  }
};
const ContactInfo = model("ContactInfo", ContactInfoSchema);

const contactInfo = defineEventHandler(async (event) => {
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

export { contactInfo as default };
//# sourceMappingURL=contactInfo.mjs.map
