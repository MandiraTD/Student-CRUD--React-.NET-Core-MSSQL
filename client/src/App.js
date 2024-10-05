import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./elements/Home";
import Create from "./elements/Create";
import Auth from "./elements/Auth";
import Update from "./elements/Update";
import Students from "./elements/Students";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<Students />} />
        <Route path="/create" element={<Create />} />
        <Route path="/update/:id" element={<Update />} />
        <Route path="/register" element={<Auth />} />
        <Route path="/login" element={<Auth />} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
