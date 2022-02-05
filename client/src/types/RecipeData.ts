export default interface RecipeData {
  id: string,
  photo: string,
  title: string,
  course: Array<string>,
  cuisine: Array<string>,
  servings: number,
  calories: number,
  ingredientList: {
    ingredient: string,
    quantity: string,
  }[],
  instructions: string,
  keywords: string[],
  glutenFree: boolean,
  vegan: boolean,
  vegetarian: boolean,
  nutFree: boolean,
  dairyFree: boolean,
  videoLink: string
}
