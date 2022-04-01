import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createBrowserHistory } from "history";

const history = createBrowserHistory(); 
ReactDOM.render(
  <div>
    <App history={history} />
  </div>,
  document.getElementById("root")
);

serviceWorker.unregister();