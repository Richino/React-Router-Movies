import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./index.css";
import App from "./App";

// You'll need to wrap <App /> for routing to work
var Root = document.getElementById("root");
ReactDOM.render(
	<Router>
		<App />
	</Router>,
	Root
);
