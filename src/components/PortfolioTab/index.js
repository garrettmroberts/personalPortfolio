import React from "react";
import PortfolioCard from "../PortfolioCard";

function PortfolioTab({ divID }) {

  const portfolioData = [
  {
    name: "Workout Planner",
    link: "https://github.com/garrettmroberts/workout-planner",
    deployedLink: "https://workout-planner296.herokuapp.com/",
    image: "/assets/images/workoutPlannerScreenshot.png",
    desc: "Built with one partner.  This app builds a workout plan for the next two months based on user goals and available equipment.  This app runs on a full MERN stack."
  },
  {
    name: "Novel-19",
    link: "https://github.com/garrettmroberts/novel-19",
    deployedLink: "https://novel-19.herokuapp.com/home",
    image: "/assets/images/novel19Screenshot.png",
    desc: "This project was built in a small group of three.  It allows for multiple user instances, where each user can mark locations they have visited.  If a user tests positive for Covid-19, they can update their status and all of their locations are marked on a public map.  The goal is to make a safer way for people to find out if they've come ito contact with potentially infected persons within the last two weeks."
  },
  {
    name: "User Directory",
    link: "https://github.com/garrettmroberts/user_directory",
    deployedLink: "https://user-directory5467.herokuapp.com/",
    image: "/assets/images/userDirectoryScreenshot.png",
    desc: "This directory is built out of react components.  It can sort and filter any json file passed into it.  Because of it's modularity, any other json file can be fed to it, the table will populate dynamically, the sort filters work out of the box, and the filter functionality can work with minor tweaks."
  },
  // {
  //   name: "CLI Readme Generator",
  //   link: "https://github.com/garrettmroberts/goodReadmeGenerator",
  //   deployedLink: null,
  //   image: "/assets/images/cliReadmeGeneratorScreenshot.png",
  //   desc: "This application is designed for users who need a quick and efficient way to make READMEs for their repositories.Once you have the application running, it will give you a series of prompts within the terminal. After answering all of these questions, a readme will be generated for your project based on the given input."
  // },
  // {
  //   name: "Markdown Previewer",
  //   link: "https://github.com/garrettmroberts/FreeCodeCamp-Projects/tree/master/markdownPreviewer",
  //   deployedLink: null,
  //   image: "/assets/images/markdownGeneratorScreenshot.png",
  //   desc: "A simple markown previewer.  Anything can be written into the input field, and the preview dynamically updates with that text parsed from markdown to html.  Good for making sure that a markdown file is visually appealing before pushing."
  // }

];

  return (
    <div className="container-fluid bg-light py-3" id={divID}>
      <div className="row d-flex flex-column border">
        <h1 className="text-center text-dark">Portfolio</h1>
        <h2 className="text-center text-dark">Here are some things I've been working on.</h2>
      </div>
      <div className="container-fluid">
        <div className="row d-flex">
          {portfolioData.map(object => {
            return <PortfolioCard assets={object} key={object.name + "Card"} />
          })}
        </div>
      </div>
    </div>
  )
};

export default PortfolioTab;