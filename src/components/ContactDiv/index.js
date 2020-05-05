import React from "react";

function ContactDiv({ divID }) {
  return (
    <div className="jumbotron jumbotron-fluid" id={divID}>
      <div className="container">
        <h1 className="display-4">Contact me</h1>
        <p className="lead">Feel free to reach me at 
          <a href="mailto:garrettmroberts@gmail.com"> garrettmroberts@gmail.com</a>
        </p>
        <p className="lead">Or reach me via 
          <a href="https://www.linkedin.com/in/garrett-roberts-b45640186/"> LinkedIn</a>.
        </p>
      </div>
    </div>
  );
};

export default ContactDiv;