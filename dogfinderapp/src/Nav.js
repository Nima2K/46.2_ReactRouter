import { NavLink } from "react-router-dom";
import "./Nav.css";

function Nav({ dogs }) {
  function renderList() {
    return dogs.map((nav) => (
      <NavLink end to={nav.path} key={nav.name}>
        {nav.name}
      </NavLink>
    ));
  }

  return (
    <nav className="Nav">
      <NavLink end to={"/dogs"}>
        Home
      </NavLink>
      {renderList()}
    </nav>
  );
}

export default Nav;
