import React from "react";
import { Parallax } from 'react-parallax';

function ParallaxDiv({ backgroundID }) {

  if (backgroundID === 0) {
    return <Parallax bgImage={require('./parallax0.jpg')} blur={{ min: -20, max: 20 }}>
      <div style={{ height: '50vh' }} />
    </Parallax>
  } else {
    return <Parallax bgImage={require('./parallax1.jpg')}>
      <div style={{ height: '50vh' }} />
    </Parallax>
  }
};

export default ParallaxDiv;