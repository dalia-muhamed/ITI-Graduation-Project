import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RandomTodo.css';
import { axiosInstance } from '../../axios';
import Rating from '../owl/Rating';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToFavorites,
  removeFromFavorites,
} from '../../pages/Favourites/FavouriteSlice';
const RandomToDo = () => {
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axiosInstance.get('/thingsToDo');
        const allTodos = response.data.todos;
        const randomTodos = getRandomTodos(allTodos, 3);
        setTodos(randomTodos);
      } catch (error) {
        console.log('Error while fetching restaurants:', error);
      }
    };
    fetchTodos();
  }, []);

  const getRandomTodos = (array, count) => {
    const shuffledArray = array.sort(() => Math.random() - 0.5);
    return shuffledArray.slice(0, count);
  };
  const favorites = useSelector(state => state.favorites.favorites);
  const isFavorite = todoId => {
    return favorites.some(item => item.id === todoId);
  };

  const handleFavoriteToggle = todo => {
    if (isFavorite(todo.id)) {
      dispatch(removeFromFavorites(todo.id));
    } else {
      dispatch(addToFavorites(todo));
    }
  };
  return (
    <div className="randomToDo ">
      <div className="container randomToDoContainer">
        <h4
          className="mb-4"
          style={{ color: 'black', fontWeight: '700' }}
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          More Things to do
        </h4>
        <div className="row randomTodo-row" style={{ margin: '0 auto' }}>
          {todos &&
            todos.map(todo => (
              <div className="RandomTodoRalative col-md-4 " key={todo.id}>
                <div className="LikeRounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="gray"
                    className={`w-6 h-6 likeImage ${
                      isFavorite(todo.id) ? 'favorite' : ''
                    }`}
                    onClick={() => handleFavoriteToggle(todo)}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                </div>
                <div
                  onClick={() => {
                    navigate(`/get/ThingsToDo/details/${todo.id}`);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  <div className="card">
                    <img src={todo.images[0]} className="card-img-top" />
                    <div className="card-body flex-column">
                      <Rating rating={todo.rating} reviews={todo.reviews} />
                      <h6 className="card-title mt-2">{todo.name}</h6>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default RandomToDo;
