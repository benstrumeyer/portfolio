import './App.scss';
import Menu from './components/Menu/Menu';
import Greeting from './components/Greeting/Greeting';
import OrbitButton from './components/OrbitButton/OrbitButton';

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
              <OrbitButton></OrbitButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
