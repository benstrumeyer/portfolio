import './App.scss';
import Menu from './components/Menu/Menu';
import Greeting from './components/Greeting/Greeting';
import OrbitButtonComponent from './components/OrbitButtonComponent/OrbitButtonComponent';
import Button from './components/Button/Button';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';

import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';

const tags = {
  h4Open: '<h4>',
  h4Close: '</h4>',
}

const App = () => {
  const { h4Open, h4Close } = tags;
  const buttonContainerRef = useRef<HTMLDivElement | null>(null)
  const entry = useIntersectionObserver(buttonContainerRef, {})
  const isVisible = !!entry?.isIntersecting
  
  const [seenOnce, setSeenOnce] = useState(false);

  useEffect(() => {
    if (isVisible && buttonContainerRef.current && !seenOnce) {
      setSeenOnce(true);
      const buttons = buttonContainerRef.current.querySelectorAll('.Button');
      gsap.set(buttons, { scale: 0 });

      const tl = gsap.timeline();

      tl.to(buttons, {
        scale: 1,
        duration: 0.85,
        onComplete: () => {
          tl.to(buttons, {
            scale: 0.95,
            duration: .7,
            repeat: -1,
            yoyo: true
          });
        }
      });
    }

  }, [isVisible, seenOnce])

  return (
    <div className='App'>
      <div className='Main'>
        <Menu></Menu>
        <div className='content'>
          <div className='GreetingContainer'>
            <Greeting></Greeting>
          </div>
          <OrbitButtonComponent></OrbitButtonComponent>
        </div>
        <div className='Contact'>
          <div className='TitleContainer'>
            <div className='Tag'>{h4Open}</div>
            <div className='Title'>Connect with me</div>
            <div className='Tag'>{h4Close}</div>
          </div>
          <div ref={buttonContainerRef} className='ButtonContainer'>
            <Button>Email</Button>
            <Button>Github</Button>
            <Button>LinkedIn</Button>
            <Button>Instagram</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
