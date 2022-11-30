export interface RecipeModel {
  name: string;
  ingredients: Ingredient[];
  steps: string[];
}

export interface Ingredient {
  name: string;
  amount: number;
  measurement: string;
}