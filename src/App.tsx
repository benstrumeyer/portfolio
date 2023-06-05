import './App.scss';
import Menu from './components/Menu/Menu';
import Greeting from './components/Greeting/Greeting';
import OrbitButton from './components/OrbitButton/OrbitButton';

const App = () => {
  return (
    <div className='App'>
      <div className='main'>
        <Menu></Menu>
        <Greeting></Greeting>
        <OrbitButton></OrbitButton>
      </div>
    </div>
  );
}

export default App;
