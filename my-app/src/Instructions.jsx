function Instructions({ recipe }) {
  if (!recipe) {
    return <div>No recipe data available</div>;
  }

  console.log('Show instructions: ', recipe);

  // Get all keys from the recipe object
  const recipeKeys = Object.keys(recipe);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold">{recipe.title}</h1>
      <div className="text-base mt-4">
        <h2>All Attributes: {recipe.title}</h2>
        <ul>
          {recipeKeys.map((key, index) => (
            <li key={index}>
              <strong>{key}:</strong> {recipe[key]}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export { Instructions };
