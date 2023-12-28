import { myCourse } from "../models/Course.js";
import mongoose from "../../ulti/mongoose.js";

class CourseController {
  create(req, res, next) {
    res.render("courses/create");
  }
  store(req, res, next) {
    const formData = req.body;
    formData.image = `https://www.youtube.com/watch?v=${req.body.videoId}`;
    const course = new myCourse(formData);
    res.send(course);
    // course
    //   .save()
    //   .then(() => res.redirect(`/`))
    //   .catch(console.error());
  }

  //[COURSE] /show
  show(req, res, next) {
    res.send("COURSE DETAILS " + req.params.slug);

    myCourse
      .findOne({ slug: req.params.slug })
      .then((course) => {
        res.render("courses/show", {
          myCourse: mongoose.mongooseToObject(course),
        });
      })
      .catch(next);
  }
}
var courseController = new CourseController();
export default courseController;
