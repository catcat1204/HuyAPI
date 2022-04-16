import config from "../../config.json";
import mongoose from "mongoose";

mongoose
  .connect(config.MONGODB as string)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch(err => {
    console.log(err);
  });
