import { Meal, ApiResponse } from './types';
import { fetchRandomRecipe, getIngredients } from './recipeFetcher';

// Function to handle the recipe display
async function onRandomRecipe(): Promise<void> {
  const recipeContainer = document.getElementById('recipeContainer') as HTMLElement;
  const getRecipeBtn = document.getElementById('getRecipeBtn') as HTMLButtonElement;
  const recipeImage = document.querySelector('.recipe-image') as HTMLImageElement;
  const recipeTitle = document.querySelector('.recipe-title') as HTMLElement;
  const recipeInstructions = document.querySelector('.recipe-instructions') as HTMLElement;
  const recipeVideo = document.querySelector('.recipe-video') as HTMLElement;

  try {
    const recipe = await fetchRandomRecipe();

    recipeTitle.textContent = recipe.strMeal;
    recipeInstructions.innerHTML = `
      <strong>Category:</strong> ${recipe.strCategory}<br>
      <strong>Area:</strong> ${recipe.strArea}<br><br>
      <strong>Instructions:</strong><br> ${recipe.strInstructions}<br><br>
      <strong>Ingredients:</strong><br> ${getIngredients(recipe)}
    `;
    recipeImage.src = recipe.strMealThumb;
    recipeImage.alt = recipe.strMeal;
    recipeImage.style.width = '200px';

    if (recipe.strYoutube) {
      recipeVideo.innerHTML = `<strong>Watch Recipe Video:</strong> <a href="${recipe.strYoutube}" target="_blank">Watch here</a>`;
    } else {
      recipeVideo.innerHTML = '';
    }

    recipeContainer.style.display = 'block';
    recipeContainer.classList.add('animate-in');

    document.body.style.height = 'auto';
    document.body.style.minHeight = '100vh';
    document.body.style.display = 'flex';
    document.body.style.justifyContent = 'center';
    document.body.style.alignItems = 'center';
  } catch (error) {
    recipeContainer.innerHTML = `<p>Failed to load recipe. Please try again later.</p>`;
  }
}

document.getElementById('getRecipeBtn')?.addEventListener('click', onRandomRecipe);
