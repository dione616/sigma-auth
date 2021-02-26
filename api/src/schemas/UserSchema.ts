import mongoose from "mongoose";
import { User as IUser } from "../lib/types";

const Schema = mongoose.Schema;

const validateEmail = (email: string) => {
  const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return reg.test(email);
};

const UserSchema = new Schema(
  {
    firstname: {
      type: String,
      required: true,
      trim: true,
      minLength: 1,
      maxLength: 30,
    },
    lastname: {
      type: String,
      required: true,
      trim: true,
      minLength: 1,
      maxLength: 30,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      maxLength: 100,
      validate: [validateEmail, "Please fill a valid email address"],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
    },
    token: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model<IUser>("User", UserSchema);
