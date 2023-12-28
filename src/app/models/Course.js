import mongoose from "mongoose";
import mongooseSlugGenerator from "mongoose-slug-generator";
mongoose.plugin(mongooseSlugGenerator);
const { Schema } = mongoose;

const Course = new Schema(
  {
    name: { type: String, require: true },
    description: { type: String },
    image: { type: String },
    slug: { type: String, slug: "name", unique: true },
    videoId: { type: String, require: true },
  },
  { timestamps: true }
);

const myCourse = mongoose.model("Course", Course);
export { myCourse };
