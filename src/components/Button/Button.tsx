import './Button.scss';

interface ButtonProps {
  children: React.ReactNode;
}

const Button = (props: ButtonProps) => {
  const { children } = props;
  return (
    <a className='Button'>
      <span className='buttonText'>{children}</span>
      <span className="inner"></span>
    </a>
  );
};

export default Button;