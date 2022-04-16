import mongoose, { Schema } from "mongoose";
export interface ApiKey {
  key: string;
  expires: number;
  type: string;
  count: number;
  rate: number;
}

const ApiKeySchema = new Schema<ApiKey>({
  key: {
    type: mongoose.SchemaTypes.String,
    required: true,
    unique: true,
  },
  expires: {
    type: mongoose.SchemaTypes.Number,
    required: true,
  },
  type: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
  count: {
    type: mongoose.SchemaTypes.Number,
    required: true,
  },
  rate: {
    type: mongoose.SchemaTypes.Number,
    required: true,
  },
});

export default mongoose.model("apikeys", ApiKeySchema);
