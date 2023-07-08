import { NavLink } from "react-router-dom";
import "./ColorList.css";
import { useEffect } from "react";

function ColorList({ colors, setBGColor }) {
  useEffect(() => {
    setBGColor("white");
  }, [setBGColor]);
  const renderList = () => {
    return colors.map((color) => {
      return (
        <li key={color.name}>
          <h3>
            <NavLink to={`/colors/${color.name}`}>{color.name}</NavLink>
          </h3>
        </li>
      );
    });
  };
  console.log("hi");
  return (
    <>
      <ul className="ColorList">{renderList()}</ul>
    </>
  );
}

export default ColorList;
