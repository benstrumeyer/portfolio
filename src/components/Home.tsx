import React, { useRef, useEffect } from 'react';
import skaterboarderAnimation from '../images/skateboarder.json';
import './Home.scss';

import { useLottie } from 'lottie-react';
import { gsap } from 'gsap';

const Home = () => {
  const options = {
    animationData: skaterboarderAnimation,
    loop: true,
  }
  const { View } = useLottie(options); 

  const elementRef = useRef(null);

  useEffect(() => {

    gsap.set(elementRef.current, { x: '-100%' });
    gsap.to(elementRef.current, { x: '100%', duration: 2, ease: 'power2.out' });
  }, []);


  return (
    <div ref={elementRef} className="skateboarderContainer">
      {View}
    </div>
  );
}

export default Home;
