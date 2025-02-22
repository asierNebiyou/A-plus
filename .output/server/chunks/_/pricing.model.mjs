import { model, Schema } from 'mongoose';

const pricingPlanSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  period: {
    type: String,
    enum: ["monthly", "yearly"],
    required: true
  },
  features: [{
    type: String
  }],
  type: {
    type: String,
    enum: ["free", "regular", "extended"],
    required: true
  }
});
const Pricing = model("PricingPlan", pricingPlanSchema);

export { Pricing as P };
//# sourceMappingURL=pricing.model.mjs.map
