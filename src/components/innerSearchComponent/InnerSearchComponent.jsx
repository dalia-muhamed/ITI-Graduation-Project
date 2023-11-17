import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import SearchButton from '../searchbutton/SearchButton';
import './InnerSearchComponent.css';
import { useDispatch, useSelector } from 'react-redux';
import { filteredByName } from './innerSearchSlice';

const InnerSearchComponent = ({ cityName, category, categoryValue }) => {
  const [innerInput, setInnerInput] = useState(categoryValue);
  const dispatch = useDispatch();
  const searchComponentState = useSelector(
    state => state.apiData.initialSearchState
  );
  useEffect(() => {
    dispatch(
      filteredByName({ innerInput, responseData: searchComponentState })
    );
  }, [innerInput, cityName, category, dispatch]);

  const handleChange = e => {
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
