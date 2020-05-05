import React, { useState } from 'react';
import HomeTab from "../../components/HomeTab";
import Parralax from "../../components/ParallaxDiv";

function Home() {
  const [appState, setAppState] = useState("home");

  return (
    <div>
      <HomeTab divID="home" />
      <Parralax backgroundID={0} />
    </div>
  );
}

export default Home;
