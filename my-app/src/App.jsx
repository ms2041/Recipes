import { createSignal } from 'solid-js'
import { createStore } from 'solid-js/store';
import { supabase } from './supabase';
import { Recipes, recipes } from './Recipes';
import { Categories } from './Categories';
import { Account } from './Account';
import './index.css';

const showRecipeDetails = (recipe) => {
  // Logic to display recipe details
  console.log(`Clicked recipe: ${recipe.name}`);
};

function App() {
  const [displayComponent, setDisplayComponent] = createSignal('RECIPES'); // State to manage displayed component

  function handleMenuClick(menu) {
    setDisplayComponent(menu);
  }

  function renderComponent() {
    switch (displayComponent()) {
      case 'RECIPES':
        return <Recipes recipes={recipes} />;
      case 'CATEGORIES':
        return <Categories />;
      case 'ACCOUNT':
        return <Account />;
      default:
        return null;
    }
  }

  return (
    <div class="h-screen flex flex-col min-w-640">
      {/* Top Banner */}
      <div class="bg-neutral-800 text-gray-200 py-4 text-center font-sf-pro-light w-screen tracking-widest">
        <div class="pb-2"></div>
        <p class="text-4xl text-red-500">LET'S COOK</p>
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
