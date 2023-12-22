import React from "react";

const SearchBar = ({searField, searching}) => {
  return (
    <div>
      <input
        type="search"
        placeholder="Search for your Robo friend"
        className="w-25 pa2 br2 bg-light-gray"
        onChange={searching}
      />
    </div>
  );
};

export default SearchBar;
