import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Course = new Schema({
  name: { type: String, maxLength: 225 },
  description: { type: String, maxLength: 600 },
  image: { type: String, maxLength: 225 },
});

const myCourse = mongoose.model("Course", Course);
export default myCourse;
