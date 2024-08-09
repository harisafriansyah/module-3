import { getIngredients } from '../src/recipeFetcher';
import { Meal } from '../src/types';

describe('getIngredients', () => {
  it('should return a formatted list of ingredients', () => {
    const recipe: Meal = {
      strMeal: 'Test Meal',
      strCategory: 'Test Category',
      strArea: 'Test Area',
      strInstructions: 'Test Instructions',
      strMealThumb: 'https://test.com/test.jpg',
      strYoutube: 'https://youtube.com/test',
      strIngredient1: 'Test Ingredient 1',
      strMeasure1: '1 cup',
      strIngredient2: 'Test Ingredient 2',
      strMeasure2: '2 tbsp',
      strIngredient3: '',
      strMeasure3: '',
      // Ensure the object allows dynamic properties
    };

    const ingredients = getIngredients(recipe);
    expect(ingredients).toBe('Test Ingredient 1 - 1 cup<br>Test Ingredient 2 - 2 tbsp<br>');
  });

  it('should return an empty string if no ingredients are provided', () => {
    const recipe: Meal = {
      strMeal: 'Test Meal',
      strCategory: 'Test Category',
      strArea: 'Test Area',
      strInstructions: 'Test Instructions',
      strMealThumb: 'https://test.com/test.jpg',
      strYoutube: 'https://youtube.com/test',
      strIngredient1: '',
      strMeasure1: '',
      strIngredient2: '',
      strMeasure2: '',
      strIngredient3: '',
      strMeasure3: '',
    };

    const ingredients = getIngredients(recipe);
    expect(ingredients).toBe('');
  });
});
