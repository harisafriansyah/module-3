import { Meal, ApiResponse } from './types';

// Function to fetch a random recipe from TheMealDB API
export async function fetchRandomRecipe(): Promise<Meal> {
  const apiUrl = "https://www.themealdb.com/api/json/v1/1/random.php";

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: ApiResponse = await response.json();
    return data.meals[0];
  } catch (error) {
    console.error("Failed to fetch the recipe:", error);
    throw error;
  }
}

// Helper function to get a formatted list of ingredients
export function getIngredients(recipe: Meal): string {
  let ingredients = '';
  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];
    if (ingredient) {
      ingredients += `${ingredient} - ${measure}<br>`;
    }
  }
  return ingredients;
}
