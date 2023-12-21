import mongoose from "mongoose";

async function db() {
  try {
    await mongoose.connect("mongodb://localhost:27017/f8_education_learn", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connect successfully!!!!!");
  } catch (error) {
    console.log("Connect failed!!!!!");
  }
}
export default { db };
