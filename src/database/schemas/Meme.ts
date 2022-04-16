import mongoose, { Schema } from "mongoose";

export interface Shared {
  author: string;
  url: string;
}
export interface Meme {
  type: string;
  datas: Shared[];
}

const MemeSchema = new Schema<Meme>({
  type: {
    type: mongoose.SchemaTypes.String,
    required: true,
    unique: true,
  },
  datas: [
    {
      type: mongoose.SchemaTypes.Mixed,
      required: true,
    },
  ],
});

export default mongoose.model("memes", MemeSchema);
