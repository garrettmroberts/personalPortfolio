import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  const [appState, setAppState] = useState("home");

  return (
    <Router>
      <div>
        <Navbar navlinks={["home", "portfolio", "contact"]} />
        <Redirect from="/personalPortfolio" to="/" />
        <Route exact path={["/", "/about"]} component={Home} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
