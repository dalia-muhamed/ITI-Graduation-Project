import React from "react";
import { useState, useEffect } from "react";

const NearbyPlaces = () => {
  function deg2rad(deg) {
    return deg * (Math.PI / 180);
  }
  function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the earth in km
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in km
    return distance;
  }
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const getCurrentLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setLocation({ latitude, longitude });
          },
          (error) => {
            console.error("Error getting location:", error);
          },
          { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    };

    getCurrentLocation();
  }, []);

  const compareWithCities = () => {
    if (location) {
      const cairo = { latitude: 30.033, longitude: 31.235 };
      const rome = { latitude: 41.9028, longitude: 12.4964 };

      const distanceToCairo = getDistanceFromLatLonInKm(
        location.latitude,
        location.longitude,
        cairo.latitude,
        cairo.longitude
      );
      const distanceToRome = getDistanceFromLatLonInKm(
        location.latitude,
        location.longitude,
        rome.latitude,
        rome.longitude
      );

      if (distanceToCairo < distanceToRome) {
        return "Cairo is nearest to you!";
      } else {
        return "Rome is nearest to you!";
      }
    }

    return "Fetching location...";
  };

  return (
    <div>
      <div>
        <button>Nearby Places ...</button>
      </div>
    </div>
  );
};

export default NearbyPlaces;
