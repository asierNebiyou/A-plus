// import { ContactInfo } from "~/server/models/contact.model";
// import initGridFS from "~/server/utils/gridfs"

// export default defineEventHandler(async (event) => {
//   if (event.req.method === "GET") {
//     const contactInfo = await ContactInfo.findOne();
//     return contactInfo || {};
//   }

//   if (event.req.method === "POST") {
//     const body = await readMultipartFormData(event);
//   if (!body) throw createError({ statusCode: 400, message: "Invalid data" });

//   const formData = {};
//   let videoFile;

//   for (const field of body) {
//     if (field.name === "introVideo") {
//       videoFile = field;
//     } else {
//       formData[field.name] = field.value;
//     }
//   }

//   const gridfsBucket = await initGridFS();
//   let videoId = null;

//   if (videoFile) {
//     const uploadStream = gridfsBucket.openUploadStream(videoFile.filename, {
//       contentType: videoFile.type,
//     });
//     uploadStream.end(videoFile.data);
//     videoId = uploadStream.id.toString();
//   }

//   const updatedData = { ...formData, videoId };
//   const contactInfo = await ContactInfo.findOneAndUpdate({}, updatedData, {
//     new: true,
//     upsert: true,
//   });

//   return { success: true, contactInfo };
//   }
// });
