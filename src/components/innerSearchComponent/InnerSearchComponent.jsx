import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import SearchButton from "../searchbutton/SearchButton";
import "./InnerSearchComponent.css";
import { axiosInstance } from "../../axios";
import { useDispatch } from "react-redux";
import { filteredByName } from "./innerSearchSlice";

const InnerSearchComponent = ({
  cityName,
  category,
  categoryName,
  categoryValue,
}) => {
  const [innerInput, setInnerInput] = useState(categoryValue);
  const dispatch = useDispatch();

  useEffect(() => {
    if (cityName) {
      axiosInstance
        .get(`/cities/${category}?cityName=${cityName}`)
        .then((res) => {
          const data =
            res.data.todos || res.data.restaurants || res.data.hotels;
          dispatch(filteredByName({ innerInput, responseData: data }));
        })
        .catch((err) => console.log(err));
    } else if (categoryValue) {
      axiosInstance
        .get(`/cities/${category}?${categoryName}=${categoryValue}`)
        .then((res) => {
          const data =
            res.data.todos || res.data.restaurants || res.data.hotels;

          dispatch(filteredByName({ innerInput, responseData: data }));
        })
        .catch((err) => console.log(err));
    }
  }, [innerInput, cityName, category, dispatch]);

  const handleChange = (e) => {
    setInnerInput(e.target.value);
  };

  return (
    <div className="innerSearchComponent">
      <div className="matched-category-search-input position-relative">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="matchedCategoryIcon"
        />
        <input type="text" value={innerInput} onChange={handleChange} />
        <SearchButton
          color="white"
          padding="7px 70px"
          borderRadius="20px"
          border="none"
        />
      </div>
    </div>
  );
};

export default InnerSearchComponent;
