import mongoose, { Document, Model } from "mongoose";


export interface PerkDocument extends Document {
  perkImg: string;
  perkTitle: string;
  perkDescription: string;
}

const perkSchema = new mongoose.Schema({
  perkImg: {
    type: String,
  },
  perkTitle: {
    type: String,
    required: [true, "A perk must have a perk title"],
  },
  perkDescription: {
    type: String,
    required: [true, "A perk must have a perk description"],
  },
});

const Perks: Model<PerkDocument> =
  mongoose.models.Perks || mongoose.model<PerkDocument>("Perks", perkSchema);

export default Perks;
