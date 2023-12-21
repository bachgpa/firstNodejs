import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Course = new Schema({
  name: { type: String, maxLength: 225 },
  description: { type: String, maxLength: 600 },
  image: { type: String, maxLength: 225 },
});

export default mongoose.model("Course", Course);
