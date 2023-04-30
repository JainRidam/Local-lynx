import React, { useState, useEffect } from "react";
import { db } from "../Firebase/Config";
import { ref, onValue } from "firebase/database";
import Directory from "./Directory";
import "../style/Filter.css";
// import ReactHTMLDatalist from "react-html-datalist";
function Filter() {
  const [DirectoryFetched, setDirectoryFetched] = useState([]);
  const [filterS, setfilterS] = useState("All");
  const [Alltags, setAlltags] = useState([]);
  useEffect(() => {
    getDirectory();
  }, [filterS]);
  let intial_load = 1;
  let Uniquetag = ["All"];
  const getDirectory = async () => {
    onValue(ref(db), (snapshot) => {
      if (snapshot.val()) {
        const values = Object.values(snapshot.val());
        let directories = [];
        values.map((data_of_values) => {
          if (filterS == "All") {
            directories.push(data_of_values);
          }
          data_of_values.tag.split(",").map((tags) => {
            if (tags == filterS) {
              directories.push(data_of_values);
            }
          });
        });
        setDirectoryFetched(directories);
        if (filterS == "All") {
          setAlltags(directories);
        }
      }
    });
  };
  let count = 0;
  Alltags.map((data_of_Alltags) => {
    data_of_Alltags.tag.split(",").map((split_data) => {
      count = 0;
      Uniquetag.map((value) => {
        if (value == split_data) {
          count = 1;
        }
      });
      if (count == 0) {
        Uniquetag.push(split_data);
      }
    });
  });
  console.log(Uniquetag);
  console.log(Alltags);
  return (
    <div>
      <div id="Filter_first_div">
        <label style={{ color: "#d7182e" }}>Apply Filter:</label>
        <input
          list="data"
          onChange={(e) => {
            console.log("Hello");
            setfilterS(e.target.value);
          }}
        />
        <datalist id="data" name="cars">
          {/* <option value="All" /> */}
          {Uniquetag.map((data_of_Uniquetag) => {
            return <option value={data_of_Uniquetag} />;
          })}
        </datalist>
      </div>
      <div id="Filter_second_div">
        {DirectoryFetched.map((data) => {
          return (
            <Directory
              Business={data.business}
              Location={data.location}
              Mobile={data.mobile}
              Tag={data.tag}
              Name={data.name}
              Link={data.link}
            />
            // <div>
            //   <div>{data.tag}</div>
            //   <div>{data.name}</div>
            // </div>
          );
        })}
      </div>
    </div>
  );
}

export default Filter;
