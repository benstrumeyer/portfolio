import './Greeting.scss';

import { TypeAnimation } from 'react-type-animation';

const greeting = {
  hello: 'This is',
  firstName: 'Ben',
  lastName: 'Strumeyer',
  title: 'Creative Developer',
}

const tags = {
  paragraphOpen: '<p>',
  paragraphClose: '</p>',
  h1Open: '<h1>',
  h1Close: '</h1>',
}

const Greeting = () => {
  const { hello, firstName, lastName, title, } = greeting;
  const { paragraphOpen, paragraphClose, h1Open, h1Close } = tags;

  return (
    <div className='Greeting'>
      <div className='Hello'>
        <TypeAnimation
          sequence={[
            `${paragraphOpen}`,
          ]}
          wrapper="span"
          speed={50}
          repeat={0}
          cursor={false}
        />
        <TypeAnimation
          sequence={[
            '',
            100,
            `${hello}`,
          ]}
          wrapper="span"
          speed={50}
          repeat={0}
          cursor={false}
        />
        <TypeAnimation
          sequence={[
            '',
            400,
            `${paragraphClose}`,
          ]}
          wrapper="span"
          speed={50}
          repeat={0}
          cursor={false}
        />
      </div>
      <div className='Name'>
        <TypeAnimation
          sequence={[
            '',
            500,
            `${h1Open}`,
          ]}
          wrapper="div"
          speed={50}
          repeat={0}
          cursor={false}
        />
        <TypeAnimation
          sequence={[
            '',
            550,
            `${firstName}`,
          ]}
          wrapper="div"
          speed={50}
          repeat={0}
          cursor={false}
        />
        <TypeAnimation
          sequence={[
            '',
            650,
            `${lastName}`,
          ]}
          wrapper="div"
          speed={50}
          repeat={0}
          cursor={false}
        />
        <TypeAnimation
          sequence={[
            '',
            900,
            `${h1Close}`,
          ]}
          wrapper="div"
          speed={50}
          repeat={0}
          cursor={false}
        />
      </div>
      <div className='Title'>
        <TypeAnimation
          sequence={[
            '',
            1000,
            `${paragraphOpen}`,
          ]}
          wrapper="span"
          speed={50}
          repeat={0}
          cursor={false}
        />
        <TypeAnimation
          sequence={[
            '',
            1050,
            `${title}`,
          ]}
          wrapper="span"
          speed={50}
          repeat={0}
          cursor={false}
        />
        <TypeAnimation
          sequence={[
            '',
            1100,
            `${paragraphClose}`,
          ]}
          wrapper="span"
          speed={50}
          repeat={0}
          cursor={true}
        />
      </div>
    </div>
  );
}

export default Greeting;
