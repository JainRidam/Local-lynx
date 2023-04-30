import React from "react";
import Home from "./component/Home";
import { Route, Routes } from "react-router-dom";
import Register from "./component/Register";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Register" element={<Register />}></Route>
      </Routes>
    </div>
  );
}

export default App;
