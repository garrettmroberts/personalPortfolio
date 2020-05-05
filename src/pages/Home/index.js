import React, { useState } from 'react';
import HomeTab from "../../components/HomeTab";
import ParallaxDiv from "../../components/ParallaxDiv";
import PortfolioTab from "../../components/PortfolioTab";

function Home() {
  const [appState, setAppState] = useState("home");

  return (
    <div>
      <HomeTab divID="home" />
      <ParallaxDiv backgroundID={0} />
      <PortfolioTab />
      <ParallaxDiv backgroundID={1} />
    </div>
  );
}

export default Home;
