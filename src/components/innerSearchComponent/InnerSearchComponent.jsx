import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import SearchButton from '../searchbutton/SearchButton';
import './InnerSearchComponent.css';
import { axiosInstance } from '../../axios';

const InnerSearchComponent = ({ searchValue, category }) => {
  const [innerInput, setInnerInput] = useState('');
  const [responseData, setResponseData] = useState([]);

  useEffect(() => {
    axiosInstance
      .get(`/${category}`)
      .then(res => {
        const data = res.data.todos || res.data.restaurants || res.data.hotels;
        console.log(data);
        setResponseData(data);
      })
      .catch(err => console.log(err));
  }, []);
  const handleChange = e => {
    setInnerInput(e.target.value);
    console.log(e.target.value);
  };
  const handleClick = e => {
    const filteredRes = responseData.filter(res =>
      res.toLowerCase().includes(innerInput)
    );
    setResponseData(filteredRes);
  };
  return (
    <div className="innerSearchComponent">
      <div className="matched-category-search-input position-relative">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="matchedCategoryIcon"
        />
        <input
          type="text"
          value={innerInput || searchValue}
          onChange={handleChange}
        />
        <SearchButton
          color="white"
          padding="7px 70px"
          borderRadius="20px"
          border="none"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default InnerSearchComponent;
