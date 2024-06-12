import mongoose, { Document, Model } from "mongoose";

export interface AuthDocument extends Document {
  email: string;
  password: string;
}

const AuthSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: [true, "An admin must have an email"],
  },
  password: {
    type: String,
    required: [true, "An admin must have a password"],
    minLength: 8,
    select: false,
  },
});

const Auth: Model<AuthDocument> =
  mongoose.models.Auth ||
  mongoose.model<AuthDocument>("Auth", AuthSchema);


export default Auth;