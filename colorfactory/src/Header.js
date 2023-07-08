import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/colors/new");
  }

  return (
    <div className="top-bar">
      <h3>Welcome to color factory</h3>
      <button onClick={handleClick}>Add a new color</button>
    </div>
  );
}

export default Header;
