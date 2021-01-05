import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar";
import Routes from "./Routes";

const App: React.FunctionComponent<{}> = () => {
  return (
    <Router>
      <NavBar />
      <main className="pt-16 h-screen">
        <Routes />
      </main>
    </Router>
  );
};

export default App;
