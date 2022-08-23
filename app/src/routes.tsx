import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Top from './pages/Top';

const CustomRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Top/>} />
      <Route path="/entries" element={<></>} />
      <Route path="/column" element={<></>} />
    </Routes>
  );
}

export default CustomRoutes;