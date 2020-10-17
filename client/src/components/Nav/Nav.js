import React from "react";

function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">

            <li className="nav-item active">
              <a className="nav-link" href="#">
                <h1 class="is-size-3">select<strong>Difficulty</strong></h1> <span className="sr-only">(current)</span>
              </a>
            </li>

            <li className="text-right">
              <a className="nav-link " href="#">
                <h2 >logout</h2>
              </a>
            </li>
            
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
