import "./MoreButton.css";

const MoreButton = ({ handleClick }) => {
  return (
    <button className="more" type="button" onClick={handleClick}>
      Ещё
    </button>
  );
};

export default MoreButton;
