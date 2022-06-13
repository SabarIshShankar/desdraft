import React from "react";
import "./styles.css";
import "./styles/tailwind-pre-build.css";
import Card1 from "./CardFinal";
import Pdp1 from "./pdp1";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Modal from "./modal1";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route>
          <Route exact path="/catalog" component={Card1} />
          <Route path="/pdp" component={Pdp1} />
          <Route path="/modal" component={Modal} />
        </Route>
      </Switch>
    </Router>
  );
}
