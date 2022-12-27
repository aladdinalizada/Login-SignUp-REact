import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
const Header = () => {
  return (
    <div id="header">
      <header>
        <nav>
          <ul>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
            <Link to="/users">Users</Link>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
