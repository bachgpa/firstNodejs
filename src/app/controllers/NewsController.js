class NewsController {
    // [GET] /news
    index(req, res) {
        res.render('news');
    }
    //[GET] /news/details
    show(req, res) {
        res.send('NEWS DETAILS SHOW');
    }
}
var newsController = new NewsController();
// module.exports = new NewsController();
export default newsController;
