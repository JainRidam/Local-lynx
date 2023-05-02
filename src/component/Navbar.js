import React from "react";
import "../style/Navbar.css";
function Navbar() {
  return (
    <div id="Navbar_outer_div">
      <nav>
        <ul>
          <div className="li_div">
            <li>
              <a href="#">HOME</a>
            </li>
          </div>
          <div className="li_div">
            <li>
              <a href="#">ABOUT US</a>
            </li>
          </div>
          <div className="li_div">
            <li>
              <a href="#">CONTACT US</a>
            </li>
          </div>
          <div className="li_div">
            <li>
              <a href="#">FAQ</a>
            </li>
          </div>
          <div id="navbar_button">
            <button id="registerbutton">
              <a href="/Register">Register Your Business</a>
            </button>
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
