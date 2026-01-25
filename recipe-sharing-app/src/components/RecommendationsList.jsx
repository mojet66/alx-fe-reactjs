import useRecipeStore from "./recipeStore";

const RecommendationsList = () => {
  const getRecommendedRecipes = useRecipeStore(
    (state) => state.getRecommendedRecipes
  );

  const recommendations = getRecommendedRecipes();

  if (recommendations.length === 0) {
    return <p>No recommendations yet.</p>;
  }

  return (
    <div>
      <h2>Recommended For You</h2>

      <ul>
        {recommendations.map((recipe) => (
          <li key={recipe.id}>{recipe.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecommendationsList;
