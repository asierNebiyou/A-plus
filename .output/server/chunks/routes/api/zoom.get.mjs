import { d as defineEventHandler } from '../../nitro/nitro.mjs';
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

const ZoomSchema = new Schema({
  link: String,
  scheduled: String
});
const ZoomSchedule = model("Zoom", ZoomSchema);

const zoom_get = defineEventHandler(async (event) => {
  const Zoom = await ZoomSchedule.findOne();
  return Zoom;
});

export { zoom_get as default };
//# sourceMappingURL=zoom.get.mjs.map
