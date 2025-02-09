import fs from "fs";
import path from "path";

export default defineEventHandler(async (event) => {
  if (event.node.req.method !== "DELETE") {
    return { error: "Method not allowed" };
  }

  const query = getQuery(event);
  const filePath = path.join("public", query.fileurl);

  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
    return { success: true, message: "File deleted successfully" };
  } else {
    return { error: "File not found" };
  }
});
