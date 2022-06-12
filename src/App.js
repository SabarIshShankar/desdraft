import React from "react";
import "./styles.css";
import "./styles/tailwind-pre-build.css";
import Card1 from "./Card1";
import Pdp1 from "./pdp1";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route>
          <Route exact path="/catalog" component={Card1} />
          <Route path="/pdp" component={Pdp1} />
        </Route>
      </Switch>
      <div class="App">
        <div class="bg-white">
          <div class="max-w-2xl mx-auto py-5 px-4 sm:py-5u sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 class="text-1xl font-extrabold tracking-tight text-gray-900">
              Customers also purchased
            </h2>
          </div>
        </div>
      </div>
    </Router>
  );
}
