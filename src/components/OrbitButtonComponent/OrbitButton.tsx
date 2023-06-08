import './OrbitButton.scss';

interface ButtonProps {
  children: React.ReactNode;
}

const OrbitButton = (props: ButtonProps) => {
  const { children } = props;
  return (
    <a className='OrbitButton'>
      <span className='text'>{children}</span>
      <span className="inner"></span>
    </a>
  );
};

export default OrbitButton;
