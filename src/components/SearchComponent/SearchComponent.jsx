import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,

} from "@fortawesome/free-solid-svg-icons";
import {  useNavigate } from "react-router-dom";
import Hotel from "./icon/bed.png";
import todo from "./icon/ticket.png";
import Restaurants from "./icon/fork.png";
import "./SearchComponent.css";
import { axiosInstance } from "../../axios";
import video from "./icon/video5.mp4"
const SearchComponent = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [searchPlaceholder, setSearchPlaceholder] = useState("");
  const [searchPath, setSearchPath] = useState("");
  const [searchVal, setSearchVal] = useState("");
  const [category, setCategory] = useState("");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    updateSearchPlaceholder(tabId);
  };

  const updateSearchPlaceholder = (tabId) => {
    switch (tabId) {
      case 1:
        setSearchPlaceholder("Hotel name or destination");
        setCategory("hotels");
        break;
      case 2:
        setSearchPlaceholder("Attraction, activity, or destination");
        setCategory("thingsToDo");
        break;
      case 3:
        setSearchPlaceholder("Restaurant or destination");
        setCategory("restaurants");
        break;
      default:
        setSearchPlaceholder("");
        break;
    }
  };

  useEffect(() => {
    updateSearchPlaceholder(activeTab);
  }, [activeTab]);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setSearchVal(e.target.value);
  };

  const [cities, setCities] = useState([]);
  const [hotels, setHotels] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          citiesResponse,
          hotelsResponse,
          restaurantsResponse,
          todosResponse,
        ] = await Promise.all([
          axiosInstance.get("/cities"),
          axiosInstance.get("/cities/hotels"),
          axiosInstance.get("/cities/restaurants"),
          axiosInstance.get("/cities/thingsToDo"),
        ]);

        const citiesData = citiesResponse.data.cities;
        const hotelsData = hotelsResponse.data.hotels;
        const restaurantsData = restaurantsResponse.data.restaurants;
        const todosData = todosResponse.data.todos;

        setCities(citiesData);
        setHotels(hotelsData);
        setRestaurants(restaurantsData);
        setTodos(todosData);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const cityNames = cities.map((city) => city.name.toLowerCase());
  const hotelNames = hotels.map((hotel) => hotel.name.toLowerCase());
  const todoNames = todos.map((todo) => todo.name.toLowerCase());
  const restaurantNames = restaurants.map((restaurant) =>
    restaurant.name.toLowerCase()
  );

  const searchValidate = () => {
    const matchedCity = cityNames.find((city) =>
      searchVal.toLowerCase().includes(city)
    );
    const matchedHotels = hotelNames.filter((hotel) =>
      hotel.includes(searchVal.toLowerCase())
    );
    const matchedRestaurants = restaurantNames.filter((restaurant) =>
      restaurant.includes(searchVal.toLowerCase())
    );
    const matchedTodos = todoNames.filter((todo) =>
      todo.includes(searchVal.toLowerCase())
    );

    let path = "/cities";

    if (category === "hotels" && matchedCity) {
      path += `/${category}?cityName=${matchedCity}`;
    } else if (category === "hotels" && matchedHotels.length === 0) {
      path = "*";
      navigate(path);
    } else if (category === "hotels" && matchedHotels && !matchedCity) {
      path += `/${category}?hotelName=${searchVal}`;
    } else if (category === "restaurants" && matchedCity) {
      path += `/${category}?cityName=${matchedCity}`;
    } else if (category === "restaurants" && matchedRestaurants.length === 0) {
      path = "*";
      navigate(path);
    } else if (
      category === "restaurants" &&
      matchedRestaurants &&
      !matchedCity
    ) {
      path += `/${category}?restaurantName=${searchVal}`;
    } else if (category === "thingsToDo" && matchedCity) {
      path += `/${category}?cityName=${matchedCity}`;
    } else if (category === "thingsToDo" && matchedTodos.length === 0) {
      path = "*";
      navigate(path);
    } else if (category === "thingsToDo" && matchedTodos && !matchedCity) {
      path += `/${category}?todoName=${searchVal}`;
    }
    setSearchPath(path);
    navigate(path);
  };

  const searchBtn = () => {
    searchValidate();
  };
  const handleEnterKey = (e) => {
    if (e.key === "Enter") {
      searchValidate();
    }
  };

  return (
    <div className="SearchComponent">
      <video src={video} loop autoPlay muted/>
      <div className="container searchComponentInner">
        <div className="content font-weight-bold">
          {activeTab === 1 && (
            <h1 className="content-primaryHeading">Stay Somewhere great</h1>
          )}
          {activeTab === 2 && (
            <h1 className="content-primaryHeading">Do Something fun</h1>
          )}
          {activeTab === 3 && (
            <h1 className="content-primaryHeading">Find places to eat</h1>
          )}
        </div>

        <div className="tabsContainer">
          <div
            className={`tab ${activeTab === 1 ? "active" : ""}`}
            onClick={() => handleTabClick(1)}
          >
            <img className="searchIcon" src={Hotel} alt="icon" />
            Hotel
          </div>
          <div
            className={`tab ${activeTab === 2 ? "active" : ""}`}
            onClick={() => handleTabClick(2)}
          >
            <img className="searchIcon" alt="logo" src={todo} />
            Things To Do
          </div>
          <div
            className={`tab ${activeTab === 3 ? "active" : ""}`}
            onClick={() => handleTabClick(3)}
          >
            <img className="searchIcon" alt="logo" src={Restaurants} />
            Restaurants
          </div>
        </div>
        <div className="search-bar">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="SearchComponentIcon"
          />
          <input
            type="text"
            placeholder={searchPlaceholder}
            onKeyDown={handleEnterKey}
            onChange={handleInputChange}
            value={searchVal}
          />
          <button className="searchLink" onClick={searchBtn}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;
