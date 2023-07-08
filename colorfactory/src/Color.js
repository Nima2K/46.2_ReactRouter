import { NavLink, useParams } from "react-router-dom";
import { useEffect } from "react";

function Color({ colors, setBGColor }) {
  const { color } = useParams();
  const colorObj = colors.find(
    (c) => c.name.toLowerCase() === color.toLowerCase()
  );

  useEffect(() => {
    setBGColor(colorObj.hex);
  }, [setBGColor]);

  return (
    <div>
      <h3>
        <NavLink to={"/colors"}>Home</NavLink>
      </h3>
      <h3>{colorObj.name}</h3>
    </div>
  );
}

export default Color;
