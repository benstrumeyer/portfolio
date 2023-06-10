import './Menu.scss';

const menu = [
  {
    title: '<Home\/\>',
    link: '/home',
  },
  {
    title: '<Contact\/\>',
    link: '/contact',
  }
]

const Menu = () => {
  return (
    <div className='Menu'>
      {menu.map((item, index) => (
        <div>
          <div className='Index'>//0{index}.</div>
          <div>{item.title}</div>
        </div>)
      )}
    </div>
  );
}

export default Menu;