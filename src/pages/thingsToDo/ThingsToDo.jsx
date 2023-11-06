import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import axios from 'axios';
import Navbar from '../../components/navbar/Navbar';
import SearchResultPage from '../../components/searchResult/SearchResaultPage';
import LoadingComponent from '../../components/LoadingComponent/LoadingComponent';
import InnerSearchComponent from '../../components/innerSearchComponent/InnerSearchComponent';

const ThingsToDo = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const todoName = params.get('todoName');
  const cityName = params.get('cityName');
  const [filteredToDos, setFilteredToDos] = useState([]);
  const category = 'thingsToDo';

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = `https://travelya.onrender.com/cities/thingsToDo/`;
        let queryParams = '';

        if (cityName) {
          queryParams = `?cityName=${cityName}`;
        } else if (todoName) {
          queryParams = `?todoName=${todoName}`;
        }

        const response = await axios.get(url + queryParams);
        const responseData = response.data.todos;
        setFilteredToDos(responseData);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    if (cityName || todoName) {
      fetchData();
    }
  }, [cityName, todoName]);

  const searchValue = todoName || cityName;
  console.log(filteredToDos);
  return (
    <div className="matched-hotels-component">
      <Navbar />
      <InnerSearchComponent searchValue={searchValue} category={category} />
      <div
        className="w-100"
        style={{ backgroundColor: '#F2F2F2', padding: '1px' }}
      >
        <div className="matched-hotel-section-container">
          <div className="matched-hotel-section bg-white">
            <div className="d-flex justify-content-between align-items-center matchedHeaders">
              <h5 className="fw-bolder my-0">
                {todoName
                  ? `Things To Do: "${todoName}"`
                  : `Things To Do in "${cityName}"`}
              </h5>
              <small>Is Travellia missing a place?</small>
            </div>
            {filteredToDos.length > 0 ? (
              filteredToDos.map((todo, index) => (
                <SearchResultPage
                  key={index}
                  categoryId={todo.id}
                  category={category}
                  name={todo.name}
                  rating={todo.rating}
                  reviews={todo.reviews}
                  money={todo.package}
                  image={todo.images[0]}
                  tours={todo.tours}
                  rank={todo.about}
                />
              ))
            ) : (
              <LoadingComponent />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThingsToDo;
