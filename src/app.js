"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
// Function to fetch a random recipe from TheMealDB API
function fetchRandomRecipe() {
    return __awaiter(this, void 0, void 0, function* () {
        const apiUrl = "https://www.themealdb.com/api/json/v1/1/random.php";
        try {
            // Fetch data from TheMealDB API
            const response = yield fetch(apiUrl);
            // Check if the response is ok (status code 200-299)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            // Parse the JSON data
            const data = yield response.json();
            // Return the first (and only) recipe from the response
            return data.meals[0];
        }
        catch (error) {
            // Log any errors to the console
            console.error("Failed to fetch the recipe:", error);
            throw error;
        }
    });
}
// Function to handle the recipe display
function onRandomRecipe() {
    return __awaiter(this, void 0, void 0, function* () {
        // Get the recipe container and button
        const recipeContainer = document.getElementById('recipeContainer');
        const getRecipeBtn = document.getElementById('getRecipeBtn');
        const recipeImage = document.querySelector('.recipe-image');
        const recipeTitle = document.querySelector('.recipe-title');
        const recipeInstructions = document.querySelector('.recipe-instructions');
        const recipeVideo = document.querySelector('.recipe-video');
        try {
            // Fetch a random recipe
            const recipe = yield fetchRandomRecipe();
            // Set content and attributes
            recipeTitle.textContent = recipe.strMeal;
            recipeInstructions.innerHTML = `
        <strong>Category:</strong> ${recipe.strCategory}<br>
        <strong>Area:</strong> ${recipe.strArea}<br><br>
        <strong>Instructions:</strong><br> ${recipe.strInstructions}<br><br>
        <strong>Ingredients:</strong><br> ${getIngredients(recipe)}
      `;
            recipeImage.src = recipe.strMealThumb;
            recipeImage.alt = recipe.strMeal; // Add alt text for accessibility
            recipeImage.style.width = '200px'; // Set the width of the image
            // Display YouTube video if available
            if (recipe.strYoutube) {
                recipeVideo.innerHTML = `<strong>Watch Recipe Video:</strong> <a href="${recipe.strYoutube}" target="_blank">Watch here</a>`;
            }
            else {
                recipeVideo.innerHTML = ''; // Hide video section if not available
            }
            // Show the recipe container
            recipeContainer.style.display = 'block';
            recipeContainer.classList.add('animate-in');
            // Hide the button after click (uncomment if needed)
            // getRecipeBtn.style.display = 'none';
            // Ensure the container is centered
            document.body.style.height = 'auto';
            document.body.style.minHeight = '100vh';
            document.body.style.display = 'flex';
            document.body.style.justifyContent = 'center';
            document.body.style.alignItems = 'center';
        }
        catch (error) {
            // Display an error message to the user
            recipeContainer.innerHTML = `<p>Failed to load recipe. Please try again later.</p>`;
        }
    });
}
// Helper function to get a formatted list of ingredients
function getIngredients(recipe) {
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
// Add click event listener to the button
(_a = document.getElementById('getRecipeBtn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', onRandomRecipe);
