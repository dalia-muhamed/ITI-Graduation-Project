import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from '../../components/navbar/Navbar';
import { removeFromFavorites } from './FavouriteSlice';
import SearchResultPage from '../../components/searchResult/SearchResaultPage';
import './MyFavorites.css';
import Footer from '../../footer/Footer';
const Favourites = () => {
  const favorites = useSelector(state => state.favorites.favorites);
  const dispatch = useDispatch();

  const handleRemoveFavorite = favoriteId => {
    dispatch(removeFromFavorites(favoriteId));
  };
  const category = 'thingsToDo';
  return (
    <div className="matched-hotels-component">
      <Navbar navbarItem="" sticky={true} myClass="sticky" />
      <div style={{ marginBottom: '70px' }}></div>
      <div
        className="w-100"
        style={{ backgroundColor: '#F2F2F2', padding: '1px' }}
      >
        <div className="matched-hotel-section-container">
          <div className="matched-hotel-section bg-white d-flex flex-column">
            <div
              className="d-flex justify-content-between align-items-center matchedHeaders"
              style={{ flex: '0 0 auto' }}
            >
              <h5 className="fw-bolder my-0">Favorite Items </h5>
            </div>
            {favorites.length === 0 ? (
              <div
                style={{ height: 'auto', flex: '1' }}
                className="d-flex justify-content-center align-items-center"
              >
                <p>No favorite items yet.</p>
              </div>
            ) : (
              <div>
                {favorites.map((favorite, index) => (
                  <div key={index} className="FavouritesContainer">
                    <SearchResultPage
                      categoryId={favorite.id}
                      name={favorite.name}
                      rating={favorite.rating}
                      reviews={favorite.reviews}
                      money={favorite.money}
                      image={favorite.images[0]}
                      category="thingsToDo"
                      tours={favorite.tours}
                      rank={favorite.about}
                      description={favorite.description}
                      phone={favorite.phone}
                      locationName={favorite.location?.locationName}
                    />
                    <div className="deleteFavoritebBtn deleteFavourite">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="transparent"
                        className=" deleteImage"
                        onClick={() => handleRemoveFavorite(favorite.id)}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                        />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Favourites;
