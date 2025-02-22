import { model, Schema } from 'mongoose';

const adminSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});
const Admin = model("Admin", adminSchema);

export { Admin as A };
//# sourceMappingURL=user.model.mjs.map
