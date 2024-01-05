import { myCourse } from "../models/Course.js";
import mongoose from "../../ulti/mongoose.js";

class MeController {
  storedCourses(req, res, next) {
    myCourse
      .find({ softDeleted: false })
      .then((course) =>
        res.render("me/stored-courses", {
          myCourse: mongoose.multipleMongooseToObject(course),
        })
      )
      .catch(next);
  }
  softDeletedCourses(req, res, next) {
    myCourse
      .find({ softDeleted: true })
      .then((course) =>
        res.render("me/deleted-courses", {
          myCourse: mongoose.multipleMongooseToObject(course),
        })
      )
      .catch(next);
  }
}
var meController = new MeController();
export default meController;
