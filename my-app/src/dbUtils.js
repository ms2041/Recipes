import { supabase } from './supabase.js';

export async function fetchRecipe() {
  console.log('fetchRecipe: ')
}

export async function updateRecipe() {
  console.log('updateRecipe: ')
}

export async function fetchRecipeTable() {
  try {
    const { data, error } = await supabase.from('recipes').select('*');
    if (error) {
      throw new Error(error.message);
    }
    return data || [];
  } catch (error) {
    throw new Error(error.message);
  }
}