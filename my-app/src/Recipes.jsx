import { onMount } from 'solid-js';
import { createStore } from 'solid-js/store';
import { fetchRecipeTable } from './dbUtils';

// Create the recipes store
const [recipes, setRecipes] = createStore([]);
export { recipes, setRecipes };

// Internal state to track the selected recipe
const [selectedRecipe, setSelectedRecipe] = createStore(null);
export { selectedRecipe, setSelectedRecipe };

async function loadRecipeTable() {
  try {
    const data = await fetchRecipeTable();
    setRecipes(data);
    console.log('loadRecipeTable: ', data);
  } catch (error) {
    console.error('Error fetching recipes:', error);
  }
}

function Recipes({ handleRecipeClick }) {
  function showFullDescription(description) {
    // Logic to display the full description (e.g., show in a modal)
    // console.log(`Full description: ${description}`);
    // Replace this with your preferred logic to display the full description, such as a modal or tooltip
  }

  function truncateString(str, maxLength) {
    return str.length > maxLength ? str.substring(0, maxLength) + '...' : str;
  }

  onMount(() => {
    loadRecipeTable();
  });

  return (
    <div className="flex-1 p-4 overflow-y-auto flex sf-pro-regular text-base">
      <div className="w-2/5 p-8">
        {recipes.map((recipe) => (
          <div key={recipe.id}
          className="mb-4 cursor-pointer"
          onClick={() => handleRecipeClick(recipe)}
          >
            <h2 className="text-left hover:text-blue-400">
              {truncateString(recipe.title, 32)}
            </h2>
          </div>
        ))}
      </div>
      <div className="w-3/5 pl-2 pr-8 pt-8 pb-8">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="mb-4 cursor-pointer relative"
            onMouseEnter={() => showFullDescription(recipe.description)}
            onMouseLeave={() => showFullDescription("")}
          >
            <p className="text-left hover:text-blue-400">{truncateString(recipe.description, 48)}</p>
            {showFullDescription === recipe.description && (
              <div className="absolute bg-white p-2 shadow-md rounded-md z-10 top-full -left-1/2 transform -translate-x-1/2">{recipe.description}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export { Recipes };
