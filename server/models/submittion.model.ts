import { Mail } from "lucide-vue-next";
import { Schema, model } from "mongoose";

const consultationSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true
  },
  source: {
    type: String,
    required: [true, 'Source is required'],
    trim: true
  },
  status: {
    type: String,
    enum: ['pending', 'contacted', 'scheduled', 'completed', 'cancelled'],
    default: 'pending'
  },
  MailStatus:{
    type: String,
    enum: ['pending', 'sent'],
    default: 'pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },

})



export const Consultation = model('Consultation', consultationSchema)