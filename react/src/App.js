import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ItemDetail from "./components/ItemDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/items/:id" element={<ItemDetail />} />
    </Routes>
  );
}

export default App;
