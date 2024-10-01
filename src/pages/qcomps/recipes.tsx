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

function RecipeItem({name, ingredients} : {name: string, ingredients: Array<string>}) {
  return (
    <div>
    <h2>{name}</h2>
      <ul>
        {ingredients.map(i => <li id={i}>{i}</li>)}
      </ul>
    </div>
  )
}

export default function RecipeList() {
  const recipeItems = recipes.map(r => 
    <RecipeItem key={r.id} name={r.name} ingredients={Array.from(r.ingredients)}/>
  );
  return (
    <div>
      <h1>Recipes</h1>
      {recipeItems}
    </div>
  );
}