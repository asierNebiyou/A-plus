import { ZoomSchedule } from "~/server/models/zoom.model";

export default defineEventHandler(async (event) => {
  const Zoom= await ZoomSchedule.findOne();

  return Zoom;
})
