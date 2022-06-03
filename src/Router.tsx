import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/App" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
