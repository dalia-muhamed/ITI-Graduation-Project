import React from 'react';
import './SearchDropdown.css';
import Hotel from '../icon/bed.png';
import todo from '../icon/ticket.png';
import Restaurants from '../icon/fork.png';
import { Link } from 'react-router-dom';
function SearchDropdown({ data, category }) {
  console.log(category);
  return (
    <div className="search-dropdown ">
      {data.map(item => (
        <Link
          to={`/get/${category}/details/${item.id}`}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          key={item.id}
          className="dropdown-item"
        >
          {category == 'Hotels' && (
            <img className="searchIcon" src={Hotel} alt="icon" />
          )}
          {category == 'Restaurants' && (
            <img className="searchIcon" src={Restaurants} alt="icon" />
          )}
          {category == 'ThingsToDo' && (
            <img className="searchIcon" src={todo} alt="icon" />
          )}
          {item.name}
        </Link>
      ))}
    </div>
  );
}

export default SearchDropdown;
