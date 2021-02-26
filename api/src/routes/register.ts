import express from "express";
import colors from "colors";
import bodyParser from "body-parser";
import { User } from "../schemas/UserSchema";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const app = express();

export const register = express.Router();
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

register.post(`/register`, async (req, res) => {
  const firstname = req.body.firstname.trim();
  const lastname = req.body.lastname.trim();
  const email = req.body.email.trim();
  const password = req.body.password.trim();
  const repeat_password = req.body.repeat_password.trim();

  if (firstname && lastname && email && password && repeat_password) {
    const user = await User.findOne({ email }).catch((err) => {
      console.log(colors.red(err));
      res
        .status(401)
        .send({ success: false, error: "Something wrong with DB" });
    });

    if (user) {
      if (user.email === email) {
        res.status(401).send({ success: false, error: "Email exists" });
      }
    } else {
      const token = jwt.sign(
        { email, password },
        `${process.env.TOKEN_SECRET}`
      );

      //login: bcrypt.compare(req.body.password,user.password) but with tokens
      const userToCreate = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        token,
      };

      const dbResponse = await User.create(userToCreate).then((user) => {
        req.session.user = user;
        req.session.cookie.maxAge = 3 * 24 * 60 * 60 * 1000;
        req.session.save();
        return user;
      });

      res.status(200).send({ success: true, response: dbResponse });
    }
  }
});
