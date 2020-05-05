import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  const [appState, setAppState] = useState("home");

  return (
    <Router>
      <div>
        <Navbar navlinks={["home", "portfolio", "contact"]} />
        <Route exact path={["/", "/about"]} component={Home} />
      </div>
    </Router>
  );
}

export default App;
