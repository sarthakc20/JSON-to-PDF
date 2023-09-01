import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Student from "./component/Student";
import AllStudent from "./component/AllStudent";
import UpdateStudent from "./component/UpdateStudent";
import MergePDF from "./component/MergePDF.js";
import './App.css';

function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student/:id" element={<Student />} />
        <Route path="/students" element={<AllStudent />} />
        <Route path="/students/:id" element={<UpdateStudent />} />
        <Route path="/merge" element={<MergePDF />} />
      </Routes>
    </>
  );
}

export default App;
