import React from "react";
import useRecipeStore from "./recipeStore";

const SearchBar = () => {
  const searchTerm = useRecipeStore((state) => state.searchTerm);
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <input
      type="text"
      placeholder="Search recipes..."
      value={searchTerm}
      onChange={handleChange}
    />
  );
};

export default SearchBar;
