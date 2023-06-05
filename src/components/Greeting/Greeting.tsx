import './Greeting.scss';

const greeting = {
  hello: 'This is',
  name: 'Ben Strumeyer',
  title: 'Developer',
}

const tags = {
  paragraphOpen: '<p>',
  paragraphClose: '</p>',
  h1Open: '<h1>',
  h1Close: '</h1>',
}

const Greeting = () => {
  const { hello, name, title, } = greeting;
  const { paragraphOpen, paragraphClose, h1Open, h1Close } = tags;
  return (
    <div className='Greeting'>
      <div className='Hello'>
        <span>{paragraphOpen}</span>
        <span>{hello}</span>
        <span>{paragraphClose}</span>
      </div>
      <div className='Name'>
        <div>{h1Open}</div>
        <div>{name}</div> 
        <div>{h1Close}</div>
      </div>
      <div className='Title'>
        <span>{paragraphOpen}</span>
        <span>{title}</span>
        <span>{paragraphClose}</span>
      </div>
    </div>
  );
}

export default Greeting;