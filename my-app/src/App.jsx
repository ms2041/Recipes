import { createSignal } from 'solid-js';
import { createStore } from 'solid-js/store';
import { supabase } from './supabase';
import { Recipes, recipes, setRecipes } from './Recipes';
import { Categories } from './Categories';
import { Account } from './Account';
import { Instructions } from './Instructions';
import './index.css';

const showRecipeDetails = (recipe) => {
  // Logic to display recipe details
  console.log(`Clicked recipe: ${recipe.title}`);
};

function App() {
  const [displayComponent, setDisplayComponent] = createSignal('RECIPES'); // State to manage displayed component.
  const [selectedRecipe, setSelectedRecipe] = createStore(null); // State to manage selected recipe.

  function handleMenuClick(menu) {
    setDisplayComponent(menu);
  }

  function handleRecipeClick(recipe) {
    setSelectedRecipe(recipe); // Set the selected recipe when a recipe is clicked.
    setDisplayComponent('INSTRUCTIONS'); // Switch to the Instructions component.
  }

  function renderComponent() {
    switch (displayComponent()) {
      case 'RECIPES':
        // Pass the recipes list and handleRecipeClick function to the Recipes component.
        return <Recipes recipes={recipes} handleRecipeClick={handleRecipeClick} /> ;
      case 'CATEGORIES':
        return <Categories />;
      case 'ACCOUNT':
        return <Account />;
      case 'INSTRUCTIONS':
        // Render Instructions component with the selected recipe.
        return <Instructions recipe={selectedRecipe} />;
      default:
        return null;
    }
  }

  return (
    <div class="h-screen flex flex-col min-w-640">
      {/* Top Banner */}
      <div class="bg-neutral-800 text-gray-200 py-4 text-center font-sf-pro-light w-screen tracking-widest">
        <div class="pb-2"></div>
        <p class="text-4xl text-red-500">GASTRONAUT</p>
        <div class="pb-4"></div>
        <div class="flex justify-center pr-4">
          {/* Menu */}
          <button
            class="mx-2 text-base bg-transparent border-b-2 border-transparent hover:border-red-500 tracking-widest"
            onClick={() => handleMenuClick('RECIPES')}
          >
            RECIPES
          </button>
          <button
            class="mx-2 text-base bg-transparent border-b-2 border-transparent hover:border-red-500 tracking-widest"
            onClick={() => handleMenuClick('CATEGORIES')}
          >
            CATEGORIES
          </button>
          <button
            class="mx-2 text-base bg-transparent border-b-2 border-transparent hover:border-red-500 tracking-widest"
            onClick={() => handleMenuClick('ACCOUNT')}
          >
            ACCOUNT
          </button>
          <button
            class="mx-2 text-base bg-transparent border-b-2 border-transparent hover:border-red-500 tracking-widest"
            onClick={() => handleMenuClick('SEARCH')}
          >
            SEARCH
          </button>
        </div>
      </div>
      {/* End Top Banner */}
      
      {/* Render the appropriate component based on the state */}
      {renderComponent()}
    </div>
  );
}

export default App
