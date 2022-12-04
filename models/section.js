import { Schema, model, models } from "mongoose";

const sectionSchema = new Schema({
  emoji: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
});

const Section = models.Section || model("Section", sectionSchema);

export default Section;
