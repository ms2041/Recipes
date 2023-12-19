import { createSignal } from 'solid-js';
import { createStore } from 'solid-js/store';

// Create the recipes store
const [recipes, setRecipes] = createStore([
  { id: 1, name: 'Spaghetti al Ragu', description: 'The staple' },
  { id: 2, name: 'San Choi Bao', description: 'Sweet pork mince in iceberg lettuce cups' },
  // Add more recipes as needed
]);

function Recipes() {
  function showRecipeDetails(recipe) {
    // Logic to display recipe details
    console.log(`Clicked recipe: ${recipe.name}`);
  }

  return (
    <div class="flex-1 p-4 overflow-y-auto flex sf-pro-regular text-base">
      <div class="w-2/5 p-8">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            class="mb-4 cursor-pointer"
            onClick={() => showRecipeDetails(recipe)}
          >
            <h2 class="text-left hover:text-blue-400">{recipe.name}</h2>
          </div>
        ))}
      </div>
      <div class="w-3/5 pl-2 pr-8 pt-8 pb- 8">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            class="mb-4 cursor-pointer"
            onClick={() => showRecipeDetails(recipe)}
          >
            <p class="text-left hover:text-blue-400">{recipe.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export { Recipes, recipes };
