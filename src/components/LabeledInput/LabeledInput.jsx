import "./LabeledInput.css";

const LabeledInput = ({ label, isValid, error, ...rest }) => {
  return (
    <label className="label">
      {label}
      <input className={`label__input`} {...rest} />
      <p className={`label__error ${error && "label__error_show"}`}>{error}</p>
    </label>
  );
};

export default LabeledInput;
