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
          <Button size='large'>Instagram</Button>
          <Button size='large'>LinkedIn</Button>
          <Button size='small'>Github</Button>
          <Button size='medium'>Email</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
