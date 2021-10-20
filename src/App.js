import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import { tempPublicRoutes } from "./Routes";

function App() {
  return (
    <Router>
      <div className="page-container">
        <Sidebar />
        <div className="content">
          <Topbar />
          <Switch>
            {tempPublicRoutes.map((route, index) => (
              <Route
                component={route.component}
                path={route.path}
                exact={route.exact}
                key={index}
              />
            ))}
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
