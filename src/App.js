import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Navbar navlinks={["home", "portfolio", "contact"]} />
        <Route exact path={["/", "/about"]} component={Home} />
        <Redirect from="/personalPortfolio" to="/" />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
