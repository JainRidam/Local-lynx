import React from "react";
import Navbar from "./Navbar";
import Welcome from "./Welcome";
import Filter from "./Filter";

function Home() {
  return (
    <div style={{ width: "100vw" }}>
      <div style={{ backgroundColor: "#ddd0c8", width: "100%" }}>
        <Navbar />
        <Welcome />
      </div>
      <Filter />
    </div>
  );
}

export default Home;
