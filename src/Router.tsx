import { BrowserRouter, Route, Routes } from 'react-router-dom';
import View from './View';

const Router = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/View" element={<View />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
