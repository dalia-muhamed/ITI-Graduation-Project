import React from "react";
import "./SearchButton.css"
const SearchButton = ({
  color,
  padding,
  borderRadius,
  border,
  fontWeight
}) => {
  const styles = { color, padding, borderRadius, border,fontWeight };
  return (
  <button className="searchbtn" style={styles}>Search</button>)

};

export default SearchButton;