import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import Hotels from '../pages/hotels/Hotels';
import ThingsToDo from '../pages/thingsToDo/ThingsToDo';
import Resturants from '../pages/restaurants/Resturants';
import SinglePage from '../pages/singlePage/SinglePage';
import HotelReservation from '../pages/reservation/hotel-reservation/hotel-reservation';
import NotFound from '../NotFound/Notfound';
import SuccessPage from '../pages/success/success';
import FoodArticle from '../components/Adds/Food/FoodArticle';
import RestrauntReservation from '../pages/reservation/restraunt-reservation/restraunt-reservation';
import ThingsToDoReservation from '../pages/reservation/things-reservation/things-reservation';
import Favourites from '../pages/Favourites/Favourites';
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/get/Hotels" element={<Hotels />} />
        <Route
          path="/get/Hotels/reservation/hotel-reservation"
          element={<HotelReservation />}
        />
        <Route
          path="/get/Restaurants/reservation/restaurant-reservation"
          element={<RestrauntReservation />}
        />
        <Route
          path="/get/ThingsToDo/reservation/thingsToDo-reservation"
          element={<ThingsToDoReservation />}
        />
        <Route path="/reservation/successfully" element={<SuccessPage />} />
        <Route path="/get/Restaurants" element={<Resturants />} />
        <Route path="/get/ThingsToDo" element={<ThingsToDo />} />
        <Route path="/FoodArticle" element={<FoodArticle />} />
        <Route
          path="/get/:category/details/:categoryId"
          element={<SinglePage />}
        />
        <Route path="/Favourites" element={<Favourites />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
