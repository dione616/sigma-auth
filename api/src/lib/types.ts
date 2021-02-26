import { Document } from "mongoose";

export interface User extends Document {
  firstname: string;
  lastname: string;
  email: string;
  token: string;
  avatar?: string;
}

export interface DecodedData {
  password: string;
  email: string;
}
