import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Student from "./component/Student";
import './App.css';

function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student/:id" element={<Student />} />
      </Routes>
    </>
  );
}

export default App;
