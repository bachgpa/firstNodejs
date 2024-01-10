import { myCourse } from "../models/Course.js";
import mongoose from "../../ulti/mongoose.js";
class MeController {
  storedCourses(req, res, next) {
    // var deletedCount;
    // myCourse.find({ softDeleted: true }).then((courses) => {
    //   deletedCount = courses.length;
    //   console.log(deletedCount);
    // });
    // myCourse
    //   .find({ softDeleted: false })
    //   .then((course) =>
    //     res.render("me/stored-courses", {
    //       myCourse: mongoose.multipleMongooseToObject(course),
    //       deletedCount,
    //     })
    //   )
    //   .catch(next);
    Promise.all([
      myCourse.find({ softDeleted: false }),
      myCourse.find({ softDeleted: true }),
    ]).then(([aliveCourses, deletedCourses]) => {
      res.render("me/stored-courses", {
        myCourse: mongoose.multipleMongooseToObject(aliveCourses),
        deletedCount: deletedCourses.length,
      });
    });
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
