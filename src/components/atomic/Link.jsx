import React from "react";
import "../../styles/atomic/Nav-Link.css";
import { Link } from "react-router-dom";

export  function NavLink({ text, to }) {
  return (
    <Link to={to} className="nav-link">
      {text}
    </Link>
  );
}
