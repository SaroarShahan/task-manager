import React from "react";
import ReactDOM from "react-dom";
import App from "./modules/common/App";
import "./styles/style.scss";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
