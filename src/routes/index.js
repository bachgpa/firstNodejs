// routes/index.js
// const newsRouter = require("./news");
import newsRouter from './news.js';
import siteRouter from './site.js';
function route(app) {
    app.get('/', (req, res) => {
        res.render('home');
    });
    //   app.get("/news", (req, res) => {
    //     res.render("news");
    //   });
    app.use('/news', newsRouter);
    app.use('/', siteRouter);
    //   app.get("/search", (req, res) => {
    //     res.render("search");
    //   });
}

// module.exports = route;
export default route;
