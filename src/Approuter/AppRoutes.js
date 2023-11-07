import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import Hotels from '../pages/hotels/Hotels';
import ThingsToDo from '../pages/thingsToDo/ThingsToDo';
import Resturants from '../pages/restaurants/Resturants';
import SinglePage from '../pages/singlePage/SinglePage';
import HotelReservation from '../pages/reservation/hotel-reservation/hotel-reservation';
import NotFound from '../NotFound/Notfound';
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cities/hotels" element={<Hotels />} />
        <Route path="/cities/hotels/reservation" element={<HotelReservation />} />
        <Route path="/cities/restaurants" element={<Resturants />} />
        <Route path="/cities/thingsToDo" element={<ThingsToDo />} />
        <Route
          path="/cities/:category/details/:categoryId"
          element={<SinglePage />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
