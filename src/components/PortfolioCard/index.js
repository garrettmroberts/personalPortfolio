import React from "react";
import "./style.css";
import buildPath from "../../utils/buildPath";
function PortfolioCard({ assets }) {
  return (
  <div className="col-md-4">
    <article className="card">
      <img className="card-img-top" src={buildPath(assets.image)} alt="{assets.name} screenshot" />
      <div className="card-body">
        <h4 className="card-title">{assets.name}</h4>
        <p className="card-text">{assets.desc}</p>
      </div>
      <div className="card-footer">
        <a href={assets.link} className="btn btn-primary btn-lg btn-block" rel="noopener noreferrer" target="_blank">See it here</a>
      </div>
    </article>
  </div>
  )
};

export default PortfolioCard;