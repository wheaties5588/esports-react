import React from "react";
import  "./nav.css"

function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>

          </ul>
          <ul className="navbar-nav" >
            <li className="nav-item active">
            <a className="nav-link" href="#">
                logout
            </a>
            </li>

          </ul>

        </div>
      </nav>
    </div>
  );
}

export default Nav;
