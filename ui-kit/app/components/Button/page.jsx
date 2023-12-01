

const Button = (props) => {
  const {type, disabled, children} = props;
  return (
    <button type={type} disabled={disabled} className=".ui-button">{children}</button>
  );
}

export default Button;