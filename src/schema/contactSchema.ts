import mongoose, { Document, Model } from "mongoose";

export interface ContactDocument extends Document {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "The form must have a name"],
  },
  email: {
    type: String,
    required: [true, "The form must have an email"],
  },
  subject: {
    type: String,
    required: [true, "The form must have a subject"],
  },
  message: {
    type: String,
    required: [true, "The form must have a message"],
  },
});

const Contact: Model<ContactDocument> =
  mongoose.models.Contact ||
  mongoose.model<ContactDocument>("Contact", contactSchema);

export default Contact;
