import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./ColorForm.css";
function ColorForm({ colors, setColors }) {
  const [colorVals, setColorVals] = useState({ name: "", hex: "" });
  const navigate = useNavigate(); // Add this line to get the navigate function.

  function handleChange(e) {
    setColorVals({ ...colorVals, [e.target.name]: e.target.value });
    console.log({ [e.target.name]: e.target.value });
  }
  function handleClick(e) {
    e.preventDefault();
    if (
      colorVals.name &&
      colorVals.hex &&
      !colors.find((color) => color.name === colorVals.name)
    ) {
      setColors([...colors, { name: colorVals.name, hex: colorVals.hex }]);
      setColorVals({ name: "", hex: "" });
      navigate(`/colors/${colorVals.name}`); // Redirect to the new color's page
    }
  }

  return (
    <>
      <h3>
        <NavLink to={"/colors"}>Home</NavLink>
      </h3>
      <form className="ColorForm">
        <label>Name: </label>
        <input
          type="text"
          placeholder="name"
          name="name"
          onChange={handleChange}
        />
        <label>Choose Color: </label>
        <input
          type="color"
          placeholder="hex"
          name="hex"
          onChange={handleChange}
        />
        <button onClick={handleClick}>Add</button>
      </form>
    </>
  );
}

export default ColorForm;
