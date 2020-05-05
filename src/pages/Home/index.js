import React from 'react';
import HomeTab from "../../components/HomeTab";
import ParallaxDiv from "../../components/ParallaxDiv";
import PortfolioTab from "../../components/PortfolioTab";
import ContactDiv from "../../components/ContactDiv";

function Home() {

  return (
    <div>
      <HomeTab divID="home" />
      <ParallaxDiv backgroundID={0} />
      <PortfolioTab divID="portfolio" />
      <ParallaxDiv backgroundID={1} />
      <ContactDiv divID="contact" />
    </div>
  );
}

export default Home;
