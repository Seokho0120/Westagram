import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import View from './View';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/View" element={<View />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
