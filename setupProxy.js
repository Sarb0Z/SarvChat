const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    ["/api", "/api/signin", "/api/signup"],
    createProxyMiddleware({
      target: "http://localhost:5000",
    })
  );
};