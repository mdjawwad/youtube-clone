import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

import "./_base.scss";
import store from "./redux/store";
import { BrowserRouter as Router } from "react-router-dom";
import Hooks from "./Hooks";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
   
    </Router>
  </Provider>,
  document.getElementById("root")
);
