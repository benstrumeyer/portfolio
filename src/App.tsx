import './App.scss';
import Menu from './components/Menu/Menu';
import Greeting from './components/Greeting/Greeting';
import OrbitButtonComponent from './components/OrbitButtonComponent/OrbitButtonComponent';
import Button from './components/Button/Button';

const App = () => {
  return (
    <div className='App'>
      <div className='main'>
        <Menu></Menu>
        <div className='content'>
          <div className='GreetingContainer'>
            <Greeting></Greeting>
          </div>
          <div className='OrbitButtonContainer'>
            <div className='OrbitButtonContainer2'>
              <OrbitButtonComponent></OrbitButtonComponent>
            </div>
          </div>
        </div>
        <div className='ButtonContainer'>
          <Button>Instagram</Button>
          <Button>LinkedIn</Button>
          <Button>Github</Button>
          <Button>Email</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
