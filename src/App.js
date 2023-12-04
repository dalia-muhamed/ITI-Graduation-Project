import './App.css';
import AppRoutes from './Approuter/AppRoutes';
import React, { useEffect, useState } from 'react';
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
        if (loader) {
          setTimeout(() => {
            loader.style.display = 'none';
            setLoading(false);
          }, 0);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return <div className="App">{!loading && apiData && <AppRoutes />}</div>;
}

export default App;
