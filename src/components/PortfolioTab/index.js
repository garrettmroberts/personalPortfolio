import React from "react";

function PortfolioTab() {
  return (
    <div className="container-fluid bg-light py-3" id="portfolioDiv">
      <div className="row d-flex flex-column border">
        <h1 className="text-center text-dark">Portfolio</h1>
        <h2 className="text-center text-dark">Here are some things I've been working on.</h2>
      </div>

      <div className="row">
        <div className="col-lg-6  text-center">
          <figure>
            <a href="#">
              <img src="https://via.placeholder.com/300x300" className="img-fluid my-3 w-50 img-thumbnail" />
              <figcaption>
                <h3 className="text-dark">Project 1</h3>
              </figcaption>
            </a>
          </figure>
        </div>
        <div className="col-lg-6 text-center">
          <figure>
            <a href="#">
              <img src="https://via.placeholder.com/300x300" className="img-fluid my-3 w-50 img-thumbnail" />
              <figcaption>
                <h3 className="text-dark">Project 2</h3>
              </figcaption>
            </a>
          </figure>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 text-center">
          <figure>
            <a href="#">
              <img src="https://via.placeholder.com/300x300" className="img-fluid my-3 w-50 img-thumbnail" />
              <figcaption>
                <h3 className="text-dark">Project 3</h3>
              </figcaption>
            </a>
          </figure>
        </div>
        <div className="col-lg-6 text-center">
          <figure>
            <a href="#">
              <img src="https://via.placeholder.com/300x300" className="img-fluid my-3 w-50 img-thumbnail" />
              <figcaption>
                <h3 className="text-dark">Project 4</h3>
              </figcaption>
            </a>
          </figure>
        </div>
      </div>
    </div>
  )
};

export default PortfolioTab;