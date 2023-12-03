import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Hotel from './icon/bed.png';
import todo from './icon/ticket.png';
import Restaurants from './icon/fork.png';
import './SearchComponent.css';
import { Axios } from '../../axios';
import video from './icon/video5.mp4';
import { useDispatch } from 'react-redux';
import { getData } from '../../app/apiDataSlice';
import SearchDropdown from './SearchDropdown/SearchDropdown';
const SearchComponent = () => {
  const [activeTab, setActiveTab] = useState('Hotels');
  const [searchPlaceholder, setSearchPlaceholder] = useState('');
  const [searchVal, setSearchVal] = useState('');
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const handleTabClick = tabId => {
    setActiveTab(tabId);
    updateSearchPlaceholder(tabId);
  };

  const updateSearchPlaceholder = tabId => {
    switch (tabId) {
      case 'Hotels':
        setSearchPlaceholder('Hotel name or destination');
        break;
      case 'Restaurants':
        setSearchPlaceholder('Attraction, activity, or destination');
        break;
      case 'ThingsToDo':
        setSearchPlaceholder('Restaurant or destination');
        break;
      default:
        setSearchPlaceholder('');
        break;
    }
  };

  useEffect(() => {
    updateSearchPlaceholder(activeTab);
  }, [activeTab]);

  const navigate = useNavigate();

  const handleInputChange = async e => {
    setSearchVal(e.target.value);
    if (e.target.value.trim() === '') {
      setShowDropdown(false);
    } else {
      try {
        const searchData = await Axios(activeTab, e.target.value);
        setData(searchData);
        setShowDropdown(true);
        if (showDropdown) {
          window.onclick();
        }
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    }
  };

  const handleClickOutside = event => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };
  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
  const handleDropdownItemClick = item => {
    setSearchVal(item.name);
    setShowDropdown(false);
    fetchData();
  };
  const fetchData = async () => {
    try {
      const data = await Axios(activeTab, searchVal);
      setData(data);
      setShowDropdown(true);
      data.length > 0
        ? navigate(`/get/${activeTab}?queryName=${searchVal}`)
        : navigate('*');
      dispatch(getData({ data }));
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  const searchBtn = () => {
    fetchData();
  };
  const handleEnterKey = e => {
    if (e.key === 'Enter') {
      fetchData();
    }
  };
  const isInputEmpty = searchVal.trim() === '';
  const isButtonDisabled = isInputEmpty;
  return (
    <div className="SearchComponent">
      <video src={video} loop autoPlay muted />
      <div className="container searchComponentInner">
        <div className="content font-weight-bold">
          {activeTab === 'Hotels' && (
            <h1 className="content-primaryHeading">Stay Somewhere great</h1>
          )}
          {activeTab === 'ThingsToDo' && (
            <h1 className="content-primaryHeading">Do Something fun</h1>
          )}
          {activeTab === 'Restaurants' && (
            <h1 className="content-primaryHeading">Find places to eat</h1>
          )}
        </div>

        <div className="tabsContainer">
          <div
            className={`tab ${activeTab === 'Hotels' ? 'active' : ''}`}
            onClick={() => handleTabClick('Hotels')}
          >
            <img className="searchIcon" src={Hotel} alt="icon" />
            <span className="tabSearch">Hotel</span>
          </div>
          <div
            className={`tab ${activeTab === 'ThingsToDo' ? 'active' : ''}`}
            onClick={() => handleTabClick('ThingsToDo')}
          >
            <img className="searchIcon" alt="logo" src={todo} />
            <span className="tabSearch">Things To Do</span>
          </div>
          <div
            className={`tab ${activeTab === 'Restaurants' ? 'active' : ''}`}
            onClick={() => handleTabClick('Restaurants')}
          >
            <img className="searchIcon" alt="logo" src={Restaurants} />
            <span className="tabSearch">Restaurants</span>
          </div>
        </div>
        <div className="search-bar">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="SearchComponentIcon"
          />
          <input
            id="searchComponentInut"
            type="text"
            ref={dropdownRef}
            placeholder={searchPlaceholder}
            onKeyDown={handleEnterKey}
            onChange={handleInputChange}
            value={searchVal}
            autoComplete="off"
            className={
              showDropdown && data.length > 0
                ? 'showDropdownClass'
                : 'hideDropdownwnClass'
            }
          />
          {showDropdown && data.length > 0 && (
            <SearchDropdown
              data={data}
              category={activeTab}
              onItemClick={handleDropdownItemClick}
            />
          )}
          <button
            onClick={searchBtn}
            disabled={isButtonDisabled}
            className={
              showDropdown && data.length > 0
                ? 'hideSearchButton'
                : 'searchLink'
            }
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;
