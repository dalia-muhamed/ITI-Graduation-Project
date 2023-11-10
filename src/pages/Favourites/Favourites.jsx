import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from '../../components/navbar/Navbar';
import { removeFromFavorites } from './FavouriteSlice';

const Favourites = () => {
  const favorites = useSelector((state) => state.favorites.favorites);
  console.log(favorites)
  const dispatch = useDispatch();

  const handleRemoveFavorite = (favoriteId) => {
    dispatch(removeFromFavorites(favoriteId));
  };

  return (
    <div>
        <Navbar navbarItem="" sticky={true} myClass="sticky" />
      <h2>Favorite Items</h2>
      {favorites.length === 0 ? (
        <p>No favorite items yet.</p>
      ) : (
        <ul>
          {favorites.map((favorite) => (
            <li key={favorite.id}>
              {favorite.name}
              <button onClick={() => handleRemoveFavorite(favorite.id)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Favourites;
