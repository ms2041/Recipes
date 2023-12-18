import { createSignal } from 'solid-js'
import { createStore } from 'solid-js/store';
import './index.css';

const [recipes, setRecipes] = createStore([
  { id: 1, name: 'Spaghetti al Ragu', description: 'The staple' },
  { id: 2, name: 'San Choi Bao', description: 'Sweet pork mince in iceberg lettuce cups' },
  // Add more recipes as needed
]);

const showRecipeDetails = (recipe) => {
  // Logic to display recipe details
  console.log(`Clicked recipe: ${recipe.name}`);
};

function App() {
  const [count, setCount] = createSignal(0)

  return (
    <div class="h-screen flex flex-col">
      {/* Top Banner */}
      <div class="bg-neutral-800 text-gray-400 py-4 text-center text-2xl font-sf-pro">
        LET'S COOK
        <div class="flex justify-end pr-4">
          {/* Menu */}
          <button class="mx-2 text-base">RECIPES</button>
          <button class="mx-2 text-base">CATEGORIES</button>
          <button class="mx-2 text-base">ACCOUNT</button>
          <button class="mx-2 text-base">SEARCH</button>
        </div>
      </div>

      {/* Recipe List */}
      {/* Recipe List in Two Columns */}
      <div class="flex-1 p-4 overflow-y-auto flex">
        <div class="w-1/2 p-2">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              class="mb-4 border rounded-md cursor-pointer hover:bg-gray-100"
              onClick={() => showRecipeDetails(recipe)}
            >
              <h2 class="text-sm text-left font-semibold">{recipe.name}</h2>
            </div>
          ))}
        </div>
        <div class="w-1/2 p-2">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              class="mb-4 border rounded-md cursor-pointer hover:bg-gray-100"
              onClick={() => showRecipeDetails(recipe)}
            >
              <p class="text-sm text-left">{recipe.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
