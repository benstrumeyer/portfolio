import './Menu.scss';

import { RefObject } from 'react';

interface MenuProps {
  homeRef: RefObject<HTMLDivElement>;
  contactRef: RefObject<HTMLDivElement>;
}

const Menu = (props: MenuProps) => {
  const { homeRef, contactRef } = props;

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

  return (
    <div className='Menu'>
      {menu.map((item, index) => (
        <div onClick={() => scrollToRef(item.ref)}>
          <div className='Index'>//0{index}.</div>
          <div>{item.title}</div>
        </div>)
      )}
    </div>
  );
}

export default Menu;