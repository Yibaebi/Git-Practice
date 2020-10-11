import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";

function NavPages(props) {
  return (
    <nav className="nav-links">
      <div className="nav-links-container">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <NavLink to="/Contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default withRouter(NavPages);
