// HeaderComponent.js
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem("LoggedInuser");
  const handleLogout = () => {
    localStorage.removeItem("login");
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row bg-primary-subtle p-2">
        <div className="col di display-6 ">
          <div>{user}</div>
        </div>
        <div className="col text-end ">
          <button className="btn btn-info mt-1" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
