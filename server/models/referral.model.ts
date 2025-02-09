import mongoose from "mongoose";

const ReferralSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  code: {
    type: String,
    required: true,
    unique: true
  },
  clicks: {
    type: Number,
    default: 0
  },
  actions: {
    type: Map,
    of: Number,
    default: {}
  },
}, { timestamps: true });

const Referral = mongoose.model("Referral", ReferralSchema);

export { Referral };
