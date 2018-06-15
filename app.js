import serverless from "serverless-http";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import React from "react";
import { renderToString } from "react-dom/server";
import App from "./src/App";
import Data from "./src/users";
import fs from "fs";
import path from "path";



const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, "./Browser")));


const markup = fs.readFileSync(__dirname + "/index.html",
  "utf8"
);

app.get("**", (req, res) => {
  Data().then(users => {
    const html = renderToString(<App data={users} />);
    res.send(markup.replace("<!--App-->", html));
  });
});

module.exports.ssr = serverless(app);
