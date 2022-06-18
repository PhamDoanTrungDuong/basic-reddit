const express = require("express");
const app = express();
app.use(express.json());
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/v1/update",
    createProxyMiddleware({
      target: "http://localhost:8000",
      changeOrigin: true,
    })
  );
};

app.post("/v1/update", (req, res) => {
  setTimeout(() => {
    res.status(200).json(req.body);
  }, [2000]);
});

app.listen("8080", () => {
  console.log("Server is running....");
});
