export interface Meal {
    strMeal: string;
    strCategory: string;
    strArea: string;
    strInstructions: string;
    strMealThumb: string;
    strYoutube: string;
    [key: string]: string; // This allows additional properties with string keys and string values
  }
  
  export interface ApiResponse {
    meals: Meal[];
  }
  