import React from "react";
import "./styles.css";
import "./styles/tailwind-pre-build.css";
import Card1 from "./CardFinal";
import Pdp1 from "./pdp1";
import f04 from "./404";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Discounts from "./discounts";
import loader from "./loader";
import Vip from "./vip";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route>
          <Route exact path="/catalog" component={Card1} />
          <Route path="/pdp" component={Pdp1} />
          <Route path="/discounts" component={Discounts} />
          <Route path="/f04" component={f04} />
          <Route path="/loader" component={loader} />
          <Route path="/vip" component={Vip} />
        </Route>
      </Switch>
    </Router>
  );
}
