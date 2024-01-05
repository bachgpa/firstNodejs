import { myCourse } from "../models/Course.js";
import mongoose from "../../ulti/mongoose.js";
import slug from "slug";

class CourseController {
  // [update] /courses/:id
  update(req, res, next) {
    myCourse
      .updateOne({ _id: req.params.id }, req.body)
      .then(() => {
        res.redirect("/me/stored-courses");
      })
      .catch(next);
  }
  edit(req, res, next) {
    myCourse
      .findById(req.params.id)
      .then((course) => {
        res.render("courses/edit", {
          myCourse: mongoose.mongooseToObject(course),
        });
      })
      .catch(next);
  }
  create(req, res, next) {
    res.render("courses/create");
  }
  store(req, res, next) {
    const formData = req.body;
    formData.image = `https://i.ytimg.com/vi/${req.body.videoId}/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD69ebulnOlo84rn5uJezBA-avj4w`;
    formData.slug = `${slug(formData.name)}`;
    formData.softDeleted = false;
    const course = new myCourse(formData);
    // res.send(course);
    course
      .save()
      .then(() => res.redirect(`/`))
      .catch(next);
  }

  //[COURSE] /show
  show(req, res, next) {
    // res.send("COURSE DETAILS " + req.params.slug);

    myCourse
      .findOne({ slug: req.params.slug, softDeleted: false })
      .then((course) => {
        res.render("courses/show", {
          myCourse: mongoose.mongooseToObject(course),
        });
      })
      .catch(next);
  }
  sofdel(req, res, next) {
    myCourse
      .findOneAndUpdate({ _id: req.params.id }, { softDeleted: true })
      .then(() => res.redirect("back"))
      .catch(next);
  }
  delete(req, res, next) {
    myCourse
      .findByIdAndDelete({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }
  restore(req, res, next) {
    myCourse
      .findOneAndUpdate({ _id: req.params.id }, { softDeleted: false })
      .then(() => res.redirect("back"))
      .catch(next);
  }
}
var courseController = new CourseController();
export default courseController;
