import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RandomTodo.css";
import { axiosInstance } from "../../axios";

import like from "./heart2.png";
const RandomToDo = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axiosInstance.get("/thingsToDo");
        const allTodos = response.data.todos;
        const randomTodos = getRandomTodos(allTodos, 3);
        setTodos(randomTodos);
      } catch (error) {
        console.log("Error while fetching restaurants:", error);
      }
    };
    fetchTodos();
  }, []);
  const navigate = useNavigate();
  const getRandomTodos = (array, count) => {
    const shuffledArray = array.sort(() => Math.random() - 0.5);
    return shuffledArray.slice(0, count);
  };
  return (
    <div className="randomToDo ">
      <div className="container randomToDoContainer">
        <h4
          className="mb-4"
          style={{ color: "black", fontWeight: "700" }}
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          More Things to do
        </h4>
        <div className="row">
          {todos &&
            todos.map((todo) => (
              <div className="RandomTodoRalative col-md-4">
                <div className="LikeRounded">
                  <img src={like} className="likeImage" />
                </div>
                <div

                  onClick={() =>
                    navigate(`/cities/thingsToDo/details/${todo.id}`)
                  }
                >
                  <div class="card">
                    <img src={todo.images[0]} className="card-img-top" />
                    <div class="card-body">
                      <h6 class="card-title">{todo.name}</h6>
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
