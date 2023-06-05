import './Home.scss';

import { useRef, useEffect } from 'react';
import SplitType from 'split-type';
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
    </div>
  );
}

export default Home;
