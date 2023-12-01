

const Input = (props) => {
  const {placeholder, name, type='text'} = props;
  return (
    <input 
        className=".ui-textfield" 
        type={type}
        placeholder={placeholder}
        name={name}>
    </input>
  );
}

export default Input;