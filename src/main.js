// Define the recipe data
const recipe = {
    title: "Spaghetti Carbonara",
    instructions:
      "1. Cook spaghetti according to package instructions. 2. In a separate pan, cook pancetta until crispy. 3. In a bowl, whisk eggs and grated cheese. 4. Combine spaghetti, pancetta, and egg mixture, stirring quickly. 5. Serve immediately with additional cheese and black pepper.",
    image: "https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg",
  };
  
  // Function to handle the recipe display
  function onRandomRecipe() {
    // Get the recipe container and button
    const recipeContainer = document.getElementById('recipeContainer');
    const getRecipeBtn = document.getElementById('getRecipeBtn');
    
    // Create new elements
    const recipeContent = document.createElement('div');
    const recipeTitle = document.createElement('h2');
    const recipeInstructions = document.createElement('p');
    const recipeImage = document.createElement('img');
    
    // Set content and attributes
    recipeTitle.textContent = recipe.title;
    recipeInstructions.textContent = recipe.instructions;
    recipeImage.src = recipe.image;
    recipeImage.alt = recipe.title; // Add alt text for accessibility
    recipeImage.style.width = '200px'; // Set the width of the image
    
    // Add classes for styling and animation
    recipeContent.classList.add('recipe-content');
    recipeImage.classList.add('recipe-image');
    
    // Append title and instructions to recipeContent
    recipeContent.appendChild(recipeTitle);
    recipeContent.appendChild(recipeInstructions);
    
    // Add flex container styling to recipeContainer
    recipeContainer.style.display = 'flex';
    recipeContainer.style.flexDirection = 'row-reverse';
    recipeContainer.style.alignItems = 'center';
    
    // Clear existing content in recipeContainer and append new elements
    recipeContainer.innerHTML = ''; // Clear existing content
    recipeContainer.appendChild(recipeImage);
    recipeContainer.appendChild(recipeContent);
  
    // Hide the button after click
    getRecipeBtn.style.display = 'none';
  }
  
  // Add click event listener to the button
  document.getElementById('getRecipeBtn').addEventListener('click', onRandomRecipe);
  