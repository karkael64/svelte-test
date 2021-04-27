import dotenv from "dotenv";
dotenv.config();

import { default as express } from "express";
import { default as app } from "../api/index";

const port = 3000;

app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}/`);
});
