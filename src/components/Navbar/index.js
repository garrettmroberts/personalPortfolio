import React from "react";
import { HashLink as Link } from 'react-router-hash-link';
// import { Link } from "react-router-dom";

function Navbar({ navlinks }) {
  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <Link className="navbar-brand py-2" to="/">Garrett Roberts</Link>

      {/* Navbar toggle Button */}
      <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navBarToggler">
        <span className="navbar-toggler-icon">
        </span>
      </button>

      {/* Nav Links */}
      <div className="collapse navbar-collapse" id="navBarToggler">
        <ul className="navbar-nav">
          {navlinks.map(navlink => {
            return (
              <li className="nav-item px-3" key={navlink}>
                <Link className="nav-link" to={`/#${navlink}`} smooth="true">
                  {navlink.charAt(0).toUpperCase() + navlink.slice(1)}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
};

export default Navbar;