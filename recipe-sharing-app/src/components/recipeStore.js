import { create } from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: "",
  filteredRecipes: [],

  addRecipe: (newRecipe) =>
    set((state) => {
      const updatedRecipes = [...state.recipes, newRecipe];
      return {
        recipes: updatedRecipes,
        filteredRecipes: filterRecipes(updatedRecipes, state.searchTerm),
      };
    }),

  setRecipes: (recipes) =>
    set((state) => ({
      recipes: recipes,
      filteredRecipes: filterRecipes(recipes, state.searchTerm),
    })),

  deleteRecipe: (id) =>
    set((state) => {
      const updatedRecipes = state.recipes.filter((recipe) => recipe.id !== id);
      return {
        recipes: updatedRecipes,
        filteredRecipes: filterRecipes(updatedRecipes, state.searchTerm),
      };
    }),

  updateRecipe: (updatedRecipe) =>
    set((state) => {
      const updatedRecipes = state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      );
      return {
        recipes: updatedRecipes,
        filteredRecipes: filterRecipes(updatedRecipes, state.searchTerm),
      };
    }),

  setSearchTerm: (term) =>
    set((state) => ({
      searchTerm: term,
      filteredRecipes: filterRecipes(state.recipes, term),
    })),
}));

export default useRecipeStore;

const filterRecipes = (recipes, searchTerm) => {
  if (!searchTerm) return recipes;

  return recipes.filter(
    (recipe) =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
};
