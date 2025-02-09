import { Schema, model } from "mongoose";

const ZoomSchema = new Schema({
  link: String,
  scheduled:String,
});

export const ZoomSchedule = model("Zoom", ZoomSchema);
