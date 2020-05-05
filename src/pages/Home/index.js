import React, { useState } from 'react';
import HomeTab from "../../components/HomeTab";
import ParralaxDiv from "../../components/ParallaxDiv";

function Home() {
  const [appState, setAppState] = useState("home");

  return (
    <div>
      <HomeTab divID="home" />
      <ParralaxDiv backgroundID={1} />
    </div>
  );
}

export default Home;
