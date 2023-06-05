import { useRef, useEffect } from 'react';
import './Home.scss';

import SplitType from 'split-type';

import { useLottie } from 'lottie-react';
import { gsap } from 'gsap';

const Home = () => {
  const greetingRef = useRef(null);

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
    </div>
  );
}

export default Home;
