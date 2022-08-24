import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Top from './pages/Top';
import Column from './pages/Column';
import Record from './pages/Record';

const CustomRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Top/>} />
      <Route path="/record" element={<Record />} />
      <Route path="/column" element={<Column />} />
    </Routes>
  );
}

export default CustomRoutes;