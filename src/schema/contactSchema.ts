import mongoose, { Document, Model } from "mongoose";

export interface ContactDocument extends Document {
  email: string;
}

const contactSchema = new mongoose.Schema({
 
  email: {
    type: String,
    required: [true, "Must have an email"],
  }
});

const Contact: Model<ContactDocument> =
  mongoose.models.Contact ||
  mongoose.model<ContactDocument>("Contact", contactSchema);

export default Contact;
