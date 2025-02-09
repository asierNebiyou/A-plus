import { Schema, model } from "mongoose";

const testimonial = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
  },
  testimonial: {
    type: String,
  },

});

export const testimonialModel= model('Testimonial', testimonial);