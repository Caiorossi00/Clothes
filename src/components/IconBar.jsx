import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaCalendarAlt, FaTshirt } from "react-icons/fa";
import "../assets/styles/IconBar.scss";

const IconBar = () => {
  return (
    <div className="icon-bar">
      <Link to="/" className="icon-link">
        <FaHome size={32} />
      </Link>

      <Link to="/dias" className="icon-link">
        <FaCalendarAlt size={32} />
      </Link>

      <Link to="/conjuntos" className="icon-link">
        <FaTshirt size={32} />
      </Link>
    </div>
  );
};

export default IconBar;
