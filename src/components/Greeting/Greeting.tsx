import './Greeting.scss';

function Greeting() {
  return (
    <div className='Greeting'>
      <div className='Hello'>
        <span>&lt;p&gt;</span>
        <span>This is</span>
        <span>&lt;/p&gt;</span>
      </div>
      <div className='Name'>
        <div>&lt;h1&gt;</div>
        <div>Ben Strumeyer</div> 
        <div>&lt;h1&gt;</div>
      </div>
      <div className='Title'>
        <span>&lt;p&gt;</span>
        <span>Developer</span>
        <span>&lt;/p&gt;</span>
      </div>
    </div>
  );
}

export default Greeting;