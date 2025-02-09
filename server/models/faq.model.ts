import {model,Schema} from "mongoose";

const FaqSchema = new Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export const Faq=  model("Faq", FaqSchema);
