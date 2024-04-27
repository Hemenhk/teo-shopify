import mongoose, { Document, Model } from "mongoose";
interface LucideIcon {
  name: string;
  size?: string;
  color?: string;
  strokeWidth?: string;
}

export interface PerkdDocument extends Document {
  perkImg: LucideIcon;
  perkTitle: string;
  perkDescription: string;
}

const perkSchema = new mongoose.Schema({
  perkImg: {
    type: {
      name: String,
      size: { type: String, default: "24px" },
      color: String,
      strokeWidth: String,
    },
    required: [true, "A perk must have an icon"],
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

const Perks: Model<PerkdDocument> =
  mongoose.models.Perks ||
  mongoose.model<PerkdDocument>("Perks", perkSchema);

export default Perks;
