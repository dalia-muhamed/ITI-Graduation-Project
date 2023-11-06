import React from 'react';
import './SearchButton.css';
const SearchButton = ({
  color,
  padding,
  borderRadius,
  border,
  fontWeight,
  handleClick,
}) => {
  const styles = { color, padding, borderRadius, border, fontWeight };
  return (
    <button className="searchbtn" style={styles} onClick={handleClick}>
      Search
    </button>
  );
};

export default SearchButton;
