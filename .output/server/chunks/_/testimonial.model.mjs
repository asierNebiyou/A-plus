import { model, Schema } from 'mongoose';

const testimonial = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String
  },
  testimonial: {
    type: String
  }
});
const testimonialModel = model("Testimonial", testimonial);

export { testimonialModel as t };
//# sourceMappingURL=testimonial.model.mjs.map
