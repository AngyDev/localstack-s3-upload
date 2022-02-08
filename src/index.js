require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

const port = process.env.NODE_PORT || 3000;
const host = process.env.NODE_HOST || "localhost";
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api", require("./routes/upload"));

app.listen(port, host, () => {
  console.log(`App listening at http://${host}:${port}`);
});
