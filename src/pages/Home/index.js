import React, { useState } from 'react';
import HomeTab from "../../components/HomeTab";
import "./style.css";

function Home() {
  const [appState, setAppState] = useState("home");

  return (
    <div>
      <HomeTab divID="home" />
    </div>
  );
}

export default Home;
