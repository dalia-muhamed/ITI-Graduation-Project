import React from 'react';
import './SearchButton.css';
const SearchButton = ({
  color,
  padding,
  borderRadius,
  border,
  fontWeight,
  handleSearch,
}) => {
  const styles = { color, padding, borderRadius, border, fontWeight };
  return (
    <button className="searchbtn" style={styles} onClick={handleSearch}>
      Search
    </button>
  );
};

export default SearchButton;
