import { Schema, model, models } from "mongoose";

const linkSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  url: {
    type: String,
    required: true,
    trim: true,
  },
  section: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Section",
  },
});

const Link = models.Link || model("Link", linkSchema);

export default Link;
