import { useRef, useEffect } from 'react';
import skaterboarderAnimation from '../images/skateboarder.json';
import './Home.scss';

import SplitType from 'split-type';

import { useLottie } from 'lottie-react';
import { gsap } from 'gsap';

const Home = () => {
  const options = {
    animationData: skaterboarderAnimation,
    loop: true,
  }
  const { View } = useLottie(options); 

  const skateboarderRef = useRef(null);
  const greetingRef = useRef(null);

  useEffect(() => {
    gsap.set(skateboarderRef.current, { x: '-100%' });
    gsap.to(skateboarderRef.current, { x: '100%', duration: 2, ease: 'power2.out' });
  }, []);

  useEffect(() => {
    const text = SplitType.create('#greeting');
    gsap.to(text.chars, {
      y: 0,
      stagger: 0.05,
      delay: 0.2,
      duration: .1,
    });
  }, []);



  return (
    <div>
      <h1 ref={greetingRef} id="greeting">Hi, I'm Ben!</h1>
      <div ref={skateboarderRef} className="skateboarderContainer">
        {View}
      </div>
    </div>
  );
}

export default Home;
