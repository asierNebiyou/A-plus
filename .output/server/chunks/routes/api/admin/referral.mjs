import { d as defineEventHandler, g as getQuery, r as readBody } from '../../../nitro/nitro.mjs';
import { R as Referral } from '../../../_/referral.model.mjs';
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

const referral = defineEventHandler(async (event) => {
  const method = event.node.req.method;
  getQuery(event);
  if (method === "POST") {
    var body = await readBody(event);
    const { email } = body;
    if (!email) return { error: "Email is required" };
    const code = Buffer.from(email).toString("base64").slice(0, 10);
    const existingReferral = await Referral.findOne({ code });
    if (existingReferral) return existingReferral;
    const newReferral = await Referral.create({
      email,
      code,
      clicks: 0,
      actions: {}
    });
    return newReferral;
  }
  if (method === "DELETE") {
    var body = await readBody(event);
    const { _id } = body;
    console.log(body);
    const deletedReferral = await Referral.findByIdAndDelete(_id);
    return deletedReferral ? { success: true } : { error: "Failed to delete referral" };
  }
});

export { referral as default };
//# sourceMappingURL=referral.mjs.map
