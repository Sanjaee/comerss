const Button = (props) => {
  const { children, classname, onClick = () => {}, type = "button" } = props;
  return (
    <div>
      <button className={`h-10 px-6 font-semibold rounded-lg ${classname} text-white `} type={type} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
