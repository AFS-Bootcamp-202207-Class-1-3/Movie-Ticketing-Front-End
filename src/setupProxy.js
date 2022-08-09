const { createProxyMiddleware } = require("http-proxy-middleware")
const baseURL = "https://back-end-movie.herokuapp.com/";
module.exports = function(app) {
  app.use(
    // 代理标识
    "/api",
    // 代理配置
    createProxyMiddleware({
      // 目标服务器地址
      target: baseURL,
      changeOrigin: true,
      pathRewrite: {
        // 去掉接口中的 /api 前缀
        "^/api": ""
      }
    })
  );
};
