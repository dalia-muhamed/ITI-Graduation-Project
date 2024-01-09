import React from 'react';
import './SearchDropdown.css';
import Hotel from '../icon/bed.png';
import todo from '../icon/ticket.png';
import Restaurants from '../icon/fork.png';
import { Link } from 'react-router-dom';
function SearchDropdown({ data, category }) {
  return (
    <div className="search-dropdown  scrollbar-cyan bordered-cyan">
      {data.map(item => (
        <Link
          to={`/get/${category}/details/${item.id}`}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          key={item.id}
          className="dropdown-item-search"
        >
          <p
            style={{ width: '100%' }}
            className="d-flex align-items-center justify-content-center paragraph-drop-search"
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
            {<p className="drop-down-search-span mb-0">{item.name}</p>}
          </p>
        </Link>
      ))}
    </div>
  );
}

export default SearchDropdown;
