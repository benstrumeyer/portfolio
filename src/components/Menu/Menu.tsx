import './Menu.scss';

const menu = [
  {
    title: '//01.  <Home\/\>',
    link: '/home',
  },
  {
    title: '//01.  <Contact\/\>',
    link: '/contact',
  }
]

function Menu() {
  return (
    <div className='Menu'>
      {menu.map(item => 
        <div>{item.title}</div>)}
    </div>
  );
}

export default Menu;