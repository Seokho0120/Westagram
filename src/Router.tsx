import { BrowserRouter, Route, Routes } from 'react-router-dom';

import View from './View';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Westagram" element={<View />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
