const Button = (props) => {
  const { language, functions } = props;
  const { id, buttonText } = language;

  const onClickButton = () => {
    functions(id);
  };

  return (
    <li>
      <button type="button" onClick={onClickButton}>
        {buttonText}
      </button>
    </li>
  );
};

export default Button;
