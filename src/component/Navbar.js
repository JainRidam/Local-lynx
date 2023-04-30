import React from "react";
import "../style/Navbar.css";
function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <a href="#">HOME</a>
        </li>
        <li>
          <a href="#">ABOUT US</a>
        </li>
        <li>
          <a href="#">CONTACT US</a>
        </li>
        <li>
          <a href="#">FAQ</a>
        </li>
        <li id="Register">
          <button id="registerbutton">
            <a href="/Register">Register Your Business</a>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
