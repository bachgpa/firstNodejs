import mongoose from "mongoose";

async function db() {
  try {
    await mongoose.connect("mongodb://localhost:27017/f8_education_learn", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useCreateIndex: true,
    });
    console.log("Connect to database successfully!!!!!");
  } catch (error) {
    console.log("Connect to database failed!!!!!");
  }
}
export default { db };
