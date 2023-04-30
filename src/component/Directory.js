import React from "react";
import "../style/Directory.css";
function Directory(props) {
  return (
    <div id="Directory_outer_div">
      <div>{props.Tag}</div>
      <div>{props.Name}</div>
    </div>
  );
}

export default Directory;
