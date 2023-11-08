import React, {  useState } from 'react'
import Hotel from '../SearchComponent/icon/house.png';
import todo from '../SearchComponent/icon/ticket.png';
import Restaurants from '../SearchComponent/icon/fork.png';

export const CategoriesNavBar = ({selectedCategory='',categoryName,onIndexChanged}) => {
  const categories=['hotels','thingsToDo','restaurants']
  const categoriesNames=['hotelName','todoName','restaurantName']
  const selectedIndex=categories.findIndex(item=>item==selectedCategory)
  const [activeTab, setActiveTab] = useState(selectedIndex);

 
  const handleTabClick = tabId => {
    console.log(tabId)
    setActiveTab(tabId);
    
    onIndexChanged({currentCategory:categories[tabId],categoryName:categoriesNames[tabId]})
  };

 
 
 
  return (
  <div className="tabsContainer">
    {/* <div className="tab active selectAll-tab" onClick={() => handleTabClick(1)}>
      <img className="searchIcon" src={house} alt="icon" />
      Select All
    </div> */}
    <div
      className={`tab ${activeTab === 0|| selectedCategory === "hotels" ? 'active' : ''}`}
      onClick={() => handleTabClick(0)}
    >
      <img className="searchIcon" src={Hotel} alt="icon" />
      Hotel
    </div>
    <div
      onClick={() => handleTabClick(1)}
      className={`tab ${activeTab === 1 || selectedCategory === "thingsToDo"? 'active' : ''}`}
    >
      <img className="searchIcon" alt="logo" src={todo} />
      Things To Do
    </div>
    <div
      className={`tab ${activeTab === 2 || selectedCategory === "restaurants" ? 'active' : ''}`}
      onClick={() => handleTabClick(2)}
    >
      <img className="searchIcon" alt="logo" src={Restaurants} />
      Restaurants
    </div>
  </div>
  )
}

export default CategoriesNavBar