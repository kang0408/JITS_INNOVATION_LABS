import './Button.css';

export default function Button({
  children = 'Button',
  color = 'default',
  handleClick,
  type = 'button',
  ...rest
}) {
  return (
    <>
      <button
        className={`btn btn-${color}`}
        onClick={handleClick}
        type={type}
        {...rest}
      >
        {children}
      </button>
    </>
  );
}
