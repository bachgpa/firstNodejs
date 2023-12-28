import { myCourse } from "../models/Course.js";
// import { multipleMongooseToObject } from "../../ulti/mongoose.js";
import mongoose from "../../ulti/mongoose.js";
class SiteController {
  // [GET] /
  home(req, res, next) {
    myCourse
      .find()
      // .lean()
      .then((courses) => {
        // let coursess = courses.map((course) => {
        //   return course.toObject();
        // });
        res.render("home", {
          myCourse: mongoose.multipleMongooseToObject(courses),
        });
      })
      .catch((error) => {
        console.log("loi roi ba", error);

        return next(error);
      });
  }
  //[GET] /seach
  search(req, res) {
    res.render("search");
  }
}
var siteController = new SiteController();
export default siteController;
