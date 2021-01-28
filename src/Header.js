import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

function Header({ title, username }) {
  return (
    <>
      <h1>{title}</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </>
  );
}

Header.propTypes = {
  title: PropTypes.string,
};

Header.defaultProps = {
  title: "Titulo",
};

export default Header;
