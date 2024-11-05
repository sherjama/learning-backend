import "dotenv/config";
import express from "express";
const app = express();

const data = {
  name: "sherjama",
  class: "BCA 2-year",
  skills: ["react", "tailwind", "redux-toolkit", "nodejs"],
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/you", (req, res) => {
  res.send(`hello ${port}`);
});
app.get("/data", (req, res) => {
  res.json(data);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
