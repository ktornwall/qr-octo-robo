import React from "react";
import { Switch, Route } from "react-router-dom";
import LibraryPage from "./pages/LibraryPage";
import SettingsPage from "./pages/SettingsPage";

const Routes: React.FunctionComponent = () => {
  return (
    <Switch>
      <Route path="/settings">
        <SettingsPage />
      </Route>
      <Route path="/">
        <LibraryPage />
      </Route>
    </Switch>
  );
};

export default Routes;
