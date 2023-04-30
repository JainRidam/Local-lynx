import React, { useState } from "react";
import { db } from "../Firebase/Config";
import { uid } from "uid";
import { ref, set } from "firebase/database";
import "../style/Register.css";

function Register() {
  let [Business, setBusiness] = useState();
  let [tag, settag] = useState();
  let [name, setname] = useState();
  let [location, setlocation] = useState();
  let [mobile, setmobile] = useState();

  const submitdata = (e) => {
    e.preventDefault();
    const id = uid();
    set(ref(db, `/${id}`), {
      business: `${Business}`,
      fname: `${name}`,
      tag: `${tag}`,
      location: `${location}`,
      mobile: `${mobile}`,
    });
    alert("Thanks For Registering!");
  };

  console.log(tag);
  return (
    <div id="Register_outer_div">
      <div className="Register_Inner_div">
        <div id="Title_div"> Register Your Business</div>
        <form>
          <div className="Register_inner_div">Business Name</div>
          <div>
            <input
              type="text"
              placeholder="Business Name"
              onChange={(e) => {
                setBusiness(e.target.value);
              }}
            ></input>
          </div>
          <div className="Register_inner_div">Owner's Name</div>
          <div>
            <input
              type="text"
              placeholder="Name"
              onChange={(e) => {
                setname(e.target.value);
              }}
            ></input>
          </div>
          <div className="Register_inner_div">Business Tags</div>
          <div>
            <input
              type="text"
              placeholder="Tags"
              onChange={(e) => {
                settag(e.target.value);
              }}
            ></input>
          </div>
          <div className="Register_inner_div">location</div>
          <div>
            <input
              type="text"
              placeholder="Location"
              onChange={(e) => {
                setlocation(e.target.value);
              }}
            ></input>
          </div>
          <div className="Register_inner_div">Mobile No</div>
          <div>
            <input
              type="text"
              placeholder="Mobile No"
              onChange={(e) => {
                setmobile(e.target.value);
              }}
            ></input>
          </div>
          <div id="Register_button_div">
            <button onClick={submitdata}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
