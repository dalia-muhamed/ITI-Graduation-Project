import React, { useEffect, useState } from 'react';
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
const SearchComponent = () => {
  const [activeTab, setActiveTab] = useState('Hotels');
  const [searchPlaceholder, setSearchPlaceholder] = useState('');
  const [searchPath, setSearchPath] = useState('');
  const [searchVal, setSearchVal] = useState('');
  const [category, setCategory] = useState('');
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  const handleTabClick = tabId => {
    setActiveTab(tabId);
    updateSearchPlaceholder(tabId);
  };

  const updateSearchPlaceholder = tabId => {
    switch (tabId) {
      case 'Hotels':
        setSearchPlaceholder('Hotel name or destination');
        setCategory('hotels');
        break;
      case 'Restaurants':
        setSearchPlaceholder('Attraction, activity, or destination');
        setCategory('thingsToDo');
        break;
      case 'ThingsToDo':
        setSearchPlaceholder('Restaurant or destination');
        setCategory('restaurants');
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

  const handleInputChange = e => {
    setSearchVal(e.target.value);
  };

  const fetchData = async () => {
    try {
      const data = await Axios(activeTab, searchVal);
      setData(data);
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
            Hotel
          </div>
          <div
            className={`tab ${activeTab === 'ThingsToDo' ? 'active' : ''}`}
            onClick={() => handleTabClick('ThingsToDo')}
          >
            <img className="searchIcon" alt="logo" src={todo} />
            Things To Do
          </div>
          <div
            className={`tab ${activeTab === 'Restaurants' ? 'active' : ''}`}
            onClick={() => handleTabClick('Restaurants')}
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
            id="searchComponentInut"
            type="text"
            placeholder={searchPlaceholder}
            onKeyDown={handleEnterKey}
            onChange={handleInputChange}
            value={searchVal}
          />
          <button
            className="searchLink"
            onClick={searchBtn}
            disabled={isButtonDisabled}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;
