import React from "react";
import { Parallax } from 'react-parallax';

function ParallaxDiv({ backgroundID }) {

  if (backgroundID === 0) {
    return <Parallax bgImage={require('./parallax0.jpg')} strength={300} blur={{ min: -20, max: 20 }}>
      <div style={{ height: '50vh' }} />
    </Parallax>
  } else if (backgroundID === 1) {
    return <Parallax bgImage={require('./parallax1.jpg')} strength={300} blur={{ min: -20, max: 20 }}>
      <div style={{ height: '50vh' }} />
    </Parallax>
  }
};

export default ParallaxDiv;