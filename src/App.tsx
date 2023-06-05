import './App.scss';
import Menu from './components/Menu/Menu';
import Greeting from './components/Greeting/Greeting';

function App() {
  return (
    <div className='App'>
      <div className='main'>
        <Menu></Menu>
        <Greeting></Greeting>
      </div>
    </div>
  );
}

export default App;
