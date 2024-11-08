import dotenv from "dotenv";
import express from "express";
import DbConnect from "./db/index.js";
const app = express();

dotenv.config({ path: "./.env" });

DbConnect()
  .then(() => {
    app.listen(
      (process.env.PORT || 8000,
      () => {
        console.log("Server is running at port ", process.env.PORT);
      })
    );
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
  });
