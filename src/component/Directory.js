import React from "react";
import "../style/Directory.css";
function Directory(props) {
  return (
    <div id="Directory_outer_div">
      <h1 style={{ textAlign: "center" }}>{props.Business}</h1>
      <div id="Directory_image_div">
        <img src={props.Link} />
      </div>

      <div>Owner's Name:{props.Name}</div>
      <div>Mobile No:-{props.Mobile}</div>
      <div>Location:-{props.Location}</div>
      <div>Tags(#):{props.Tag}</div>
    </div>
  );
}

export default Directory;
