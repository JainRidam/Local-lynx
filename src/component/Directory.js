import React from "react";
import "../style/Directory.css";
function Directory(props) {
  return (
    <div id="Directory_outer_div">
      <h1 style={{ textAlign: "center" }}>{props.Business}</h1>
      <div id="Directory_image_div">
        <img src={props.Link} />
      </div>

      <div className="Directory_inner_div">Owner's Name:{props.Name}</div>
      <div className="Directory_inner_div">Mobile No:-{props.Mobile}</div>
      <div className="Directory_inner_div">Location:-{props.Location}</div>
      <div className="Directory_inner_div">Tags(#):{props.Tag}</div>
    </div>
  );
}

export default Directory;
