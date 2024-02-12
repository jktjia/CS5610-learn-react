export const recipes = [{
  id: 'greek-salad',
  name: 'Greek Salad',
  ingredients: new Set(['tomatoes', 'cucumber', 'onion', 'olives', 'feta'])
}, {
  id: 'hawaiian-pizza',
  name: 'Hawaiian Pizza',
  ingredients: new Set(['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple'])
}, {
  id: 'hummus',
  name: 'Hummus',
  ingredients: new Set(['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini'])
}];

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map(r => {
        let ingredientList = [];
        r.ingredients.forEach(i => ingredientList.push(<li key={i}>{i}</li>));
        return (
        <div key={r.id}>
          <h2>{r.name}</h2>
          <ul>{ingredientList}</ul>
          </div>
          )})}
    </div>
  );
}