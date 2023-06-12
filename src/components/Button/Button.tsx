import './Button.scss';

interface ButtonProps {
  href: string,
  children: React.ReactNode;
}

const tags = {
  fragmentOpen: '<>',
  fragmentClose: '</>',
}

const Button = (props: ButtonProps) => {
  const { href, children } = props;
  const { fragmentOpen, fragmentClose } = tags;
  return (
    <a href={href} target="_blank" className='Button'>
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