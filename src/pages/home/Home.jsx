import React from 'react';

import SearchComponent from '../../components/SearchComponent/SearchComponent';
import Navbar from '../../components/navbar/Navbar';
import Owl from '../../components/owl/Owl';

const Home = () => {
  return (
    <div>
      <Navbar />
      <SearchComponent />
      <Owl />
    </div>
  );
};

export default Home;
