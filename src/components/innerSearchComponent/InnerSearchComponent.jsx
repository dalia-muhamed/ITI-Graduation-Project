import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useCallback, useEffect, useState } from "react";
import SearchButton from "../searchbutton/SearchButton";
import "./InnerSearchComponent.css";
import { axiosInstance } from "../../axios";
import { useDispatch} from "react-redux";
import { filteredByName } from "./innerSearchSlice";
import CategoriesNavBar from "../SearchNavBar/CategoriesNavBar";

const InnerSearchComponent = ({ cityName, category ,categoryName, categoryValue }) => {
  const [innerInput, setInnerInput] = useState(cityName);
  const dispatch = useDispatch();
  const fetchData=useCallback((currentCategory=category,catName=categoryName)=>{
    
    if (cityName) {
      axiosInstance
        .get(`/cities/${currentCategory}?cityName=${cityName}`)
        .then((res) => {
          
          const data =
            res.data.todos || res.data.restaurants || res.data.hotels;
          dispatch(filteredByName({ innerInput, responseData: data }));
        })
        .catch((err) => console.log(err));
    }
     else if (categoryValue) {
      axiosInstance
        .get(`/cities/${currentCategory}?${catName}=${categoryValue}`)
        .then((res) => {
          const data =
            res.data.todos || res.data.restaurants || res.data.hotels;
  
          dispatch(filteredByName({ innerInput, responseData: data }));
        })
        .catch((err) => console.log(err));
    }
  },[category, categoryName, categoryValue, cityName, dispatch, innerInput])

  useEffect(() => {
    fetchData()
  }, [fetchData]);

  const handleChange = (e) => {
    setInnerInput(e.target.value);
  };
  const onIndexChanged= (category)=>{
    const {currentCategory,categoryName}=category
     fetchData(currentCategory,categoryName)
  }

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
            <CategoriesNavBar  selectedCategory={category}  onIndexChanged={({currentCategory,categoryName})=>onIndexChanged({currentCategory,categoryName})} />
      
    </div>
  );
};

export default InnerSearchComponent;
