import "./Switch.css";

const Switch = ({ isShortsIncluded, changeShortsIncluded }) => {
  return (
    <span className="switch">
      <input
        type="checkbox"
        className="switch__input"
        checked={isShortsIncluded}
        onChange={changeShortsIncluded}
      />
      <span className="switch__slider"></span>
    </span>
  );
};

export default Switch;
