import React from "react";
import "./app.css";
import { hydrate } from "react-dom";

import App from "./App";
import Data from "./users";

Data().then(users => {
  hydrate(<App data={users} />, document.getElementById("root"));
});
