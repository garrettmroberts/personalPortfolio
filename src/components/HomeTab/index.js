import React from "react";
import ScrollingTags from "../ScrollingTags";

function HomeTab({ divID }) {
return (
  <div className="container-fluid">
    <div className="row mt-5 d-flex justify-content-center" id={divID}>
      <ScrollingTags />
      <div className="col-lg-12 mb-5 bg-light text-center text-dark">
        <h2>About Me</h2>
        <hr />
        <img src="./assets/images/profile.jpg" className="rounded float-left img-fluid mr-4 mb-2" style={{height: 175 + "px"}}
          alt="profile" />
        <p className="text-left">&emsp; Full-stack web developer making a switch from ministry to computer science.  Recently earned a certification in Full Stack Web Development from Vanderbilt University, where I gained competence in Javascript, CSS3, React.js, MySQL, MongoDB, node.js, and express servers.  I’ve actively used these skills to design and create full-scale web apps in coordination with remote teams using agile development methods.  In a recent project with two teammates, we designed and deployed a node app that alerts users when they have potentially crossed paths with someone else who has tested positive for Covid-19.   Equipped to work collaboratively either on-site or remotely in a team setting to ensure optimal results for user-centered and technology-centered designs.</p>
      </div>
    </div>
  </div>
)
};

export default HomeTab;