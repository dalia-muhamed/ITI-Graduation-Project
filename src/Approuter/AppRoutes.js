import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import Hotels from '../pages/hotels/Hotels';
import ThingsToDo from '../pages/thingsToDo/ThingsToDo';
import Resturants from '../pages/restaurants/Resturants';
import SinglePage from '../pages/singlePage/SinglePage';
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cities/hotels" element={<Hotels />} />
        <Route path="/cities/restaurants" element={<Resturants />} />
        <Route path="/cities/thingsToDo" element={<ThingsToDo />} />
        <Route
          path="/cities/:category/:name/details/:categoryId"
          element={<SinglePage />}
        />
        <Route path="*" element={<p>error</p>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
