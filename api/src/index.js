const express = require("express");
const cors = require("cors");
const api = express();
const PORT = 3333;

api.use(express.json());
api.use(cors());

api.get("/", (req, res) => {
  return res.json({message: "hello world"});
});

api.listen(PORT, () => console.log(`running on http://localhost:${PORT}`));
