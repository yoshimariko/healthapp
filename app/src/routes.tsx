import React from "react";
import { Routes, Route } from "react-router-dom";

const CustomRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<></>} />
      <Route path="/entries" element={<></>} />
      <Route path="/column" element={<></>} />
    </Routes>
  );
}

export default CustomRoutes;