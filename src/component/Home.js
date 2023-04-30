import React from "react";
import Navbar from "./Navbar";
import Welcome from "./Welcome";
import Filter from "./Filter";

function Home() {
  return (
    <div>
      <div style={{ backgroundColor: "#ddd0c8" }}>
        <Navbar />
        <Welcome />
      </div>
      <Filter />
    </div>
  );
}

export default Home;
