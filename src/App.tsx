import './App.scss';
import Menu from './components/Menu/Menu';
import Greeting from './components/Greeting/Greeting';
import OrbitButtonComponent from './components/OrbitButtonComponent/OrbitButtonComponent';
import Button from './components/Button/Button';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';
import Arrow from './components/Arrow/Arrow';

import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap'; 

const tags = {
  h4Open: '<h4>',
  h4Close: '</h4>',
}

const App = () => {
  const { h4Open, h4Close } = tags;
  const buttonsRef = useRef<HTMLDivElement | null>(null)!;
  const buttonsEntry = useIntersectionObserver(buttonsRef, {});
  const isButtonsVisible = !!buttonsEntry?.isIntersecting;
  const [seenOnce, setSeenOnce] = useState(false);

  const resumeRef = useRef<HTMLDivElement | null>(null)!;
  const arrowRef = useRef<HTMLDivElement | null>(null)!;
  const contactRef = useRef<HTMLDivElement | null>(null)!;
  const homeRef = useRef<HTMLDivElement | null>(null)!;

  // Resume button animation
  useEffect(() => {
    gsap.fromTo(
      resumeRef.current,
      { scale: 0, opacity: 0, duration: 0.85 },
      { scale: 1, opacity: 1, duration: 1, ease: "power2.out" }
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      arrowRef.current,
      { opacity: 0 },
      { opacity: 1, delay: .85, duration: .85 }
    )
  }, [])

  // Contact section button animation
  useEffect(() => {
    if (isButtonsVisible && buttonsRef.current && !seenOnce) {
      setSeenOnce(true);
      const buttons = buttonsRef.current.querySelectorAll('.Button');
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

  }, [isButtonsVisible, seenOnce]);

  return (
    <div ref={homeRef} className='App'>
      <div className='Main'>
        <Menu homeRef={homeRef} contactRef={contactRef}></Menu>
        <div className='content'>
          <div className='GreetingContainer'>
            <Greeting></Greeting>
          </div>
          <div ref={resumeRef}>
            <OrbitButtonComponent></OrbitButtonComponent>
          </div>
        </div>
        <div ref={arrowRef}>
          <Arrow contactRef={contactRef}></Arrow>
        </div>
        <div ref={contactRef} className='Contact'>
          <div className='TitleContainer'>
            <div className='Tag'>{h4Open}</div>
            <div className='Title'>Connect with me</div>
            <div className='Tag'>{h4Close}</div>
          </div>
          <div ref={buttonsRef} className='ButtonContainer'>
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
