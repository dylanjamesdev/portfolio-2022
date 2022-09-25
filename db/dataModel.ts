import mongoose from "mongoose";

const dataModel = new mongoose.Schema({
  url: String,
  comment: String,
  time: String,
});

export default mongoose.models.Comments ||
  mongoose.model("Comments", dataModel, "Comments");
