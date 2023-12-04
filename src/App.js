import './App.css';
import AppRoutes from './Approuter/AppRoutes';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Axios } from './axios';

function App() {
  const [loading, setLoading] = useState(true);
  const loader = document.getElementById('loader');
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await Axios('Hotels', 'Cairo');
        console.log(data);
        setApiData(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  if (loader) {
    setTimeout(() => {
      loader.style.display = 'none';
      setLoading(false);
    }, 3000);
  }
  return <div className="App">{!loading && apiData && <AppRoutes />}</div>;
}

export default App;
