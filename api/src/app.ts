import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { connectDatabase } from "./database";
import { register } from "./routes/register";
import { login } from "./routes/login";
import session from "express-session";
import path from "path";

declare module "express-session" {
  export interface SessionData {
    user: { [key: string]: any };
  }
  export interface Session {
    user: { [key: string]: any };
  }
}

const PORT = 3002;
const app = express();

const connect = connectDatabase();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  cors({
    origin: `http://localhost:3000`,
    optionsSuccessStatus: 200,
    credentials: true,
  })
);
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: false,
    cookie: { secure: false },
  })
);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(`${__dirname}/client`));
}
app.use(express.static(`${__dirname}/client`));
app.get("*", (req, res) => {
  res.sendFile(`${__dirname}/client/index.html`);
});

app.get(`/`, (req, res) => {
  return res.status(200).send(`<h1>Hello World!</h1>`);
});

app.use(register);
app.use(login);

app.listen(process.env.PORT || 3002, () => {
  console.log(`[app]:is running on http://localhost:${PORT}`);
});
