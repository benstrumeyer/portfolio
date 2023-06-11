import './App.scss';
import Menu from './components/Menu/Menu';
import Greeting from './components/Greeting/Greeting';
import OrbitButtonComponent from './components/OrbitButtonComponent/OrbitButtonComponent';
import Button from './components/Button/Button';

const tags = {
  h4Open: '<h4>',
  h4Close: '</h4>',
}

const App = () => {
  const { h4Open, h4Close } = tags;
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
          <div className='ButtonContainer'>
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
