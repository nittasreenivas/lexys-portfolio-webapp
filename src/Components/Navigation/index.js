import "./index.css";
import { NavLink } from "react-router-dom";
export default function Navigation(props) {
  return (
    <div className="nav-container">
      <ul className="nav-list">
        <li>
          <NavLink to="/"> Home </NavLink>
        </li>
        <li>
          <NavLink to="/about"> About </NavLink>
        </li>
        <li>
          <NavLink to="/projects"> Projects </NavLink>
        </li>
        <li>
          {!props.user ? (
            <NavLink to="/signin"> Signin </NavLink>
          ) : (
            <button> Signout </button>
          )}
        </li>
      </ul>
    </div>
  );
}
