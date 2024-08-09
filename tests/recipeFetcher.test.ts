import { fetchRandomRecipe } from '../src/recipeFetcher';
import { ApiResponse, Meal } from '../src/types';

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({
      meals: [{
        strMeal: 'Test Meal',
        strCategory: 'Test Category',
        strArea: 'Test Area',
        strInstructions: 'Test Instructions',
        strMealThumb: 'https://test.com/test.jpg',
        strYoutube: 'https://youtube.com/test',
      }],
    }),
  })
) as jest.Mock;

describe('fetchRandomRecipe', () => {
  it('should fetch and return a random recipe', async () => {
    const recipe = await fetchRandomRecipe();
    expect(recipe).toEqual({
      strMeal: 'Test Meal',
      strCategory: 'Test Category',
      strArea: 'Test Area',
      strInstructions: 'Test Instructions',
      strMealThumb: 'https://test.com/test.jpg',
      strYoutube: 'https://youtube.com/test',
    });
  });

  it('should handle fetch errors', async () => {
    (global.fetch as jest.Mock).mockImplementationOnce(() =>
      Promise.reject(new Error('Failed to fetch'))
    );

    await expect(fetchRandomRecipe()).rejects.toThrow('Failed to fetch');
  });
});
