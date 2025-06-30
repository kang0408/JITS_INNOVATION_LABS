import './Input.css';

export default function Input({
  label = '',
  name,
  type = 'text',
  value,
  onChange,
  onKeyDown,
  required = false,
  validateMsg,
}) {
  return (
    <>
      <div className="input-wrapper">
        {label ? (
          <label htmlFor={name}>
            {label}
            {required ? <span>*</span> : ''}
          </label>
        ) : (
          ''
        )}

        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
        <p className="msg">{validateMsg ? validateMsg[name] : ''}</p>
      </div>
    </>
  );
}
