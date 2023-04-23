const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const { useCallback } = require("react");

dotenv.config();

app.use(cors());

app.get("/api/test", (req, res) => {
  res.json({ body: "hello world " + Date.now() });
});

if (process.env.API_PORT) {
  app.listen(process.env.API_PORT, () => {
    console.log(`Server started in port ${process.env.API_PORT}...`);
  });
}

module.exports = app;
