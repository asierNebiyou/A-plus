import { Schema, model } from "mongoose";

const BlogSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    content: { type: String, required: true }, 
    featured: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

BlogSchema.statics.setFeatured = async function (id) {
  await this.updateMany({}, { featured: false }); 
  return this.findByIdAndUpdate(id, { featured: true }, { new: true });
};

export const Blog = model("Blog", BlogSchema);