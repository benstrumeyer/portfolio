import './App.scss';
import Greeting from './components/Greeting/Greeting';
import OrbitButtonComponent from './components/OrbitButtonComponent/OrbitButtonComponent';
import Button from './components/Button/Button';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';
import Arrow from './components/Arrow/Arrow';
import BackgroundAnimation from './components/BackgroundAnimation/BackgroundAnimation';

import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';

const tags = {
  h4Open: '<h4>',
  h4Close: '</h4>',
}

const urls = {
  email: 'ben.strumeyer@gmail.com',
  github: 'https://github.com/benstrumeyer',
  instagram: 'https://instagram.com/ben_strumeyer',
  linkedIn: 'https://www.linkedin.com/in/ben-strumeyer-8aa897113/',
}

const App = () => {
  const { h4Open, h4Close } = tags;
  const { email, github, instagram, linkedIn } = urls;

  // Button animation for contact section
  const buttonsRef = useRef<HTMLDivElement | null>(null)!;
  const buttonsEntry = useIntersectionObserver(buttonsRef, {});
  const isButtonsVisible = !!buttonsEntry?.isIntersecting;
  const [seenOnce, setSeenOnce] = useState(false);

  const resumeRef = useRef<HTMLDivElement | null>(null)!;
  const arrowRef = useRef<HTMLDivElement | null>(null)!;
  const contactRef = useRef<HTMLDivElement | null>(null)!;

  // Button animation for Download CV
  useEffect(() => {
    gsap.fromTo(
      resumeRef.current,
      { scale: 0, opacity: 0, duration: 0.85 },
      { scale: 1, opacity: 1, duration: 1, ease: "power2.out" }
    );
  }, []);

  // Button animation for arrow
  useEffect(() => {
    gsap.fromTo(
      arrowRef.current,
      { opacity: 0 },
      { opacity: 1, delay: 1.8, duration: .85 }
    )
  }, [])

  // Contact section button animation
  useEffect(() => {
    if (isButtonsVisible && buttonsRef.current && !seenOnce) {
      const buttons = buttonsRef.current.querySelectorAll('.Button');
      gsap.set(buttons, { scale: 0 });

      gsap.fromTo(
        buttons,
        { scale: 0 },
        {
          scale: 1,
          duration: 1,
          stagger: 0.1,
          onComplete: () => {
            gsap.to(buttons, {
              scale: 0.95,
              duration: 1.5,
              repeat: -1,
              yoyo: true,
              stagger: {
                each: .2,
                from: 'random',
              },
            });
          },
        }
      );

      setSeenOnce(true);
    }
  }, [isButtonsVisible, seenOnce]);






  return (
    <div className='App'>
      <BackgroundAnimation></BackgroundAnimation>
      <div className='Content'>
        <div className='GreetingContainer'>
          <Greeting></Greeting>
        </div>
        <div className='OrbitButtonContainer' ref={resumeRef}>
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
          <Button href={`mailto:${email}`}>Email</Button>
          <Button href={github}>Github</Button>
          <Button href={linkedIn}>LinkedIn</Button>
          <Button href={instagram}>Instagram</Button>
        </div>
      </div>
    </div >
  );
}

export default App;
