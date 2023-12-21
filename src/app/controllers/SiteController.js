import myCourse from "../models/course.js";
class SiteController {
  // [GET] /
  async home(req, res) {
    try {
      const allCourse = await myCourse.find().lean();
      res.json(allCourse);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  }
  //[GET] /seach
  search(req, res) {
    res.render("search");
  }
}
var siteController = new SiteController();
export default siteController;
