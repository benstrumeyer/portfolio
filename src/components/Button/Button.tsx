import './Button.scss';

interface ButtonProps {
  children: React.ReactNode;
}

const tags = {
  fragmentOpen: '<>',
  fragmentClose: '</>',
}

const Button = (props: ButtonProps) => {
  const { children } = props;
  const { fragmentOpen, fragmentClose } = tags;
  return (
    <a className='Button'>
      <div className='content'>
        <div>{fragmentOpen}</div>
        <div className='text'>{children}</div>
        <div>{fragmentClose}</div>
      </div>
      <div className="background"></div>
    </a>
  );
};

export default Button;