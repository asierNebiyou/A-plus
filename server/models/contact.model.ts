import {model,Schema} from "mongoose";

const ContactInfoSchema = new Schema(
  {
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, required: true, trim: true },
    stats:{
      studentsEmpowered:{type:Number},
      gradeImprovement:{type:Number},
      tutorialHours:{type:Number}
    },
    address: {
      street: { type: String, required: true, trim: true },
      city: { type: String, required: true, trim: true },
      state: { type: String, required: true, trim: true },
      zipCode: { type: String, trim: true },
      country: { type: String, required: true, trim: true },
    },
    socialLinks: {
      facebook: { type: String, trim: true },
      twitter: { type: String, trim: true },
      linkedin: { type: String, trim: true },
      instagram: { type: String, trim: true },
    },
    introVideo: {type:String},
    podcastVideo: {type:String},
  },
  { timestamps: true }
);

ContactInfoSchema.statics.ensureSingleRecord = async function (data, file) {
  const existingRecord = await this.findOne();
  if (existingRecord) {
    await this.updateOne({}, data);
    return this.findOne();
  } else {
   
    return this.create(data);
  }
};

export const ContactInfo = model("ContactInfo", ContactInfoSchema);
