const express = require("express");
const cors = require("cors");
const api = express();
const PORT = 3333;

api.use(express.json());
api.use(cors());

api.get("/", (req, res) => {
  return res.json({message: "hello world"});
});

api.post("/post", (req, res) => {
  return res.json({message: post});
});

api.listen(PORT, () => console.log(`running on http://localhost:${PORT}`));
