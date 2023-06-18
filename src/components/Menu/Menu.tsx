import './Menu.scss';
import { useMediaQuery } from '../../hooks/useMatchMedia';

import { RefObject, useRef } from 'react';
import gsap from 'gsap';


interface MenuProps {
  homeRef: RefObject<HTMLDivElement>;
  contactRef: RefObject<HTMLDivElement>;
}

const Menu = (props: MenuProps) => {
  const { homeRef, contactRef } = props;
  const menuItemsRef = useRef<Array<HTMLDivElement | null>>([]);
  const isMobile = useMediaQuery('(max-width: 1200px');

  const menu = [
    {
      title: '<Home\/\>',
      link: '/home',
      ref: homeRef,
    },
    {
      title: '<Contact\/\>',
      link: '/contact',
      ref: contactRef,
    }
  ]

  const scrollToRef = (ref: RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const animateOnHover = (index: number) => {
    const menuItem = menuItemsRef.current[index];
    const content = menuItem?.querySelector('.Content');
    const scaleFactor = isMobile ? 1.1 : 1.3;
    const inverseScaleFactor = isMobile ? 0.909 : 0.7692;

    if (menuItem && content) {
      gsap.killTweensOf(menuItem);
      gsap.killTweensOf(content);

      gsap.to(menuItem, {
        scaleX: scaleFactor,
        transformOrigin: 'center',
        border: '1px solid #03FE97',
        duration: 0.5,
        backgroundColor: '#050F10',
        translateX: '3vw',
      });
      gsap.to(content, {
        color: '#03FE97',
        duration: 0.5,
        scaleX: inverseScaleFactor,
      });
    }
  };

  const resetAnimation = (index: number) => {
    const menuItem = menuItemsRef.current[index];
    const content = menuItem?.querySelector('.Content');
    if (menuItem && content) {
      gsap.killTweensOf(menuItem);
      gsap.killTweensOf(content);

      gsap.to(menuItem, {
        scaleX: 1,
        duration: 1,
        border: '1px solid #12101B',
        backgroundColor: '#12101b',
        translateX: 0,
      });
      gsap.to(content, {
        color: '#FFFFFF',
        duration: 1,
        scaleX: 1,
      });
    }
  };

  return (
    <div className='Menu'>
      {/* {menu.map((item, index) => (
        <div
          onMouseEnter={() => animateOnHover(index)}
          // onMouseLeave={() => resetAnimation(index)}
          ref={(el) => (menuItemsRef.current[index] = el)}
          onClick={() => scrollToRef(item.ref)}
          className="MenuItem">
          <div className="Content">
            <div className="Title">{item.title}</div>
          </div>
        </div>
      )
      )} */}
    </div>
  );
}

export default Menu;