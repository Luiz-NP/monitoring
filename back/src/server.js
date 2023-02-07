const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  return res.json({message: "hello joaquim"})
});

app.listen(PORT, () => console.log(`running on http://localhost:${PORT}`));
