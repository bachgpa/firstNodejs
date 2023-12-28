// import courseRouter from "./courses.js";
import newsRouter from "./news.js";
import siteRouter from "./site.js";
import courseRouter from "./courses.js";
// import meRouter from "./me.js";
function route(app) {
  // app.use("/me", meRouter);
  app.use("/courses", courseRouter);
  app.use("/news", newsRouter);
  app.use("/", siteRouter);
}

export default route;
