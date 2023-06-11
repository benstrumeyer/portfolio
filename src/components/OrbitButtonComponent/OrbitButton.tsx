import './OrbitButton.scss';

interface ButtonProps {
  children: React.ReactNode;
}

const OrbitButton = (props: ButtonProps) => {
  const { children } = props;
  const pathToResume = '/Ben_Strumeyer_Resume.pdf';

  return (
    <a className='OrbitButton' href={`${process.env.PUBLIC_URL}/${pathToResume}`} target="_blank" rel="noopener noreferrer">
      <span className='text'>{children}</span>
      <span className="inner"></span>
    </a>
  );
};

export default OrbitButton;
