import './LabeledInput.css';

const LabeledInput = ({ label, type, error }) => {
  return (
    <label className='label'>
      {label}
      <input className='label__input' type={type} />
    </label>
  );
};

export default LabeledInput;
