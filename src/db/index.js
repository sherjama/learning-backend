import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const DbConnect = async () => {
  try {
    const connect = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );

    console.log("\n mogodb connected !! DB HOST : ", connect.connection.host);

    console.log("\n ", connect);
  } catch (error) {
    console.log(process.env.MONGODB_URI);

    console.error("Db connection FAILED :", error);
    process.exit(1);
  }
};

export default DbConnect;
