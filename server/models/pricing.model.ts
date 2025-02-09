import { Schema, model } from "mongoose";

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
    enum: ['monthly', 'yearly'],
    required: true
  },
  features: [{
    type: String
  }],
  type: {
    type: String,
    enum: ['free', 'regular', 'extended'],
    required: true
  }
});

export const Pricing= model('PricingPlan', pricingPlanSchema);