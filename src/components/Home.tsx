import React from 'react';
import { useLottie } from 'lottie-react';
import skaterboarderAnimation from '../images/skateboarder.json';

const Home = () => {
  const options = {
    animationData: skaterboarderAnimation,
    loop: true,
  }

  const { View } = useLottie(options); 
  return (
    <div className="skateboarderContainer">
      {View}
    </div>
  );
}

export default Home;
