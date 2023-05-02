import React from "react";
import "../style/Welcome.css";
function Welcome() {
  return (
    <div id="Welcome_Outer_div">
      <p>
        <span id="Welcome_span">
          <b style={{ fontSize: "50px" }}>W</b>elcome,
        </span>
        <div id="para_div">
          <b>Local lynx</b> help people to find business or Services <br />
          that are Running near them
        </div>
      </p>
    </div>
  );
}

export default Welcome;
