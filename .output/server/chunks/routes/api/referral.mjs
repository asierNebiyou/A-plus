import { d as defineEventHandler, g as getQuery, r as readBody } from '../../nitro/nitro.mjs';
import { R as Referral } from '../../_/referral.model.mjs';
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
  const query = getQuery(event);
  if (method === "GET") {
    if (query.code) {
      const referral = await Referral.findOne({ code: query.code });
      if (!referral) return { message: "Referral not found" };
      return {
        ...referral.toObject(),
        actions: Object.fromEntries(referral.actions)
        // Convert Map to Object
      };
    } else {
      const referrals = await Referral.find();
      return referrals.map((referral) => ({
        ...referral.toObject(),
        actions: Object.fromEntries(referral.actions)
        // Convert Map to Object
      }));
    }
  }
  if (method === "PUT") {
    var body = await readBody(event);
    const { code, action } = body;
    if (!code) return { error: "Referral code is required" };
    const referral = await Referral.findOne({ code });
    if (!referral) return { error: "Referral not found" };
    if (action) {
      referral.actions.set(action, (referral.actions.get(action) || 0) + 1);
    }
    referral.clicks += 1;
    await referral.save();
    return referral;
  }
});

export { referral as default };
//# sourceMappingURL=referral.mjs.map
