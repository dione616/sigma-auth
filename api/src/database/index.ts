require("dotenv").config();
import colors from "colors";
import mongoose from "mongoose";

export const connectDatabase = async () => {
  const connection = await mongoose
    .connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_USER_PASSWORD}@cluster0.n5ags.mongodb.net/sigma?retryWrites=true&w=majority`,
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        connectTimeoutMS: 10000,
        poolSize: 10,
        useFindAndModify: false,
      }
    )
    .then(() => {
      console.log(colors.blue(`[mongodb] is connected`));
    })
    .catch((err) => {
      console.log(colors.red(`[mongodb] error ${err}`));
    });
};
