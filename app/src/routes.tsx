import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Top from './pages/Top';
import Column from './pages/Column';

const CustomRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Top/>} />
      <Route path="/entries" element={<></>} />
      <Route path="/column" element={<Column />} />
    </Routes>
  );
}

export default CustomRoutes;