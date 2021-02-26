import colors from "colors";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import bodyParser from "body-parser";
import express from "express";
import { DecodedData } from "../lib/types";
import { User } from "../schemas/UserSchema";
const app = express();

export const login = express.Router();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

login.post(`/login`, async (req, res) => {
  if (req.body.email && req.body.password) {
    const user = await User.findOne({ email: req.body.email }).catch((err) => {
      res.send(err);
    });

    if (user) {
      const decoded = jwt.verify(user.token, `${process.env.TOKEN_SECRET}`);
      const decodedPassword = (<DecodedData>decoded).password;
      if (decodedPassword === req.body.password) {
        req.session.user = user;
        return res.status(200).send({ success: true, user });
      }
      res.send({ success: false, error: "Wrong login credentials!" });
    } else {
      res.send({ success: false, error: "Wrong login credentials!" });
    }
  }
});
