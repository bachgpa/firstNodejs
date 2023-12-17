class SiteController {
  // [GET] /
  home(req, res) {
    res.render("home");
  }
  //[GET] /seach
  search(req, res) {
    res.render("search");
  }
}
var siteController = new SiteController();
export default siteController;
