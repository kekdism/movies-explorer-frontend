import './Switch.css';

const Switch = ({ className }) => {
  return (
    <span className='switch'>
      <input type='checkbox' className='switch__input' defaultChecked />
      <span className='switch__slider'></span>
    </span>
  );
};

export default Switch;
