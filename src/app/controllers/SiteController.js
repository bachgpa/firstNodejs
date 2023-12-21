import course from "../models/course.js";
class SiteController {
  // [GET] /
  home(req, res) {
    course.find(
      {}
      //     , function (err, courses) {
      //   if (!err) {
      //     res.json(courses);
      //   } else {
      //     res.status(400).json({ error: "ERROR!!!" });
      //   }
      // }
    );
    // res.render('home');
  }
  //[GET] /seach
  search(req, res) {
    res.render("search");
  }
}
var siteController = new SiteController();
export default siteController;
