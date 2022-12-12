import { Link, Outlet } from "react-router-dom";
import "./index.css";

export default function Projects() {
  return (
    <div>
      <h2> Projects </h2>
      <div className="proj-container">
        <ul className="proj-list">
          <li>
            <Link to="/projects/new"> NewProjects </Link>
          </li>
          <li>
            <Link to="/projects/featured"> FeaturedProjects </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
}
