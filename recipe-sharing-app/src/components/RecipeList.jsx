import useRecipeStore from "./recipeStore";
import { Link } from "react-router-dom";

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => filteredRecipes);

  if (filteredRecipes.length === 0) {
    return <p>No recipes found.</p>;
  }
  return (
    <>
      {filteredRecipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>
            <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
          </h3>

          <p>{recipe.description}</p>
        </div>
      ))}
    </>
  );
};

export default RecipeList;
