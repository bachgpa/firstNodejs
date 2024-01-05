import mongoose from "mongoose";
// import mongooseSlugGenerator from "mongoose-slug-generator";
// import slugGenerator from "mongoose-slug-generator/lib/slug-generator";
// mongoose.plugin(mongooseSlugGenerator);
const { Schema } = mongoose;

const Course = new Schema(
  {
    name: { type: String, require: true },
    description: { type: String },
    image: { type: String },
    slug: { type: String },
    videoId: { type: String, require: true },
    softDeleted: { type: Boolean },
  },
  { timestamps: true }
);

const myCourse = mongoose.model("Course", Course);
export { myCourse };
