

export default function ContextProvider({ children }) {
    return(
      <div className="recipe">
      <h2>{name}</h2>
      <img src={image} alt={name} style={{ width: '200px', height: '200px' }} />
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
};

// RecipeBook component to display the list of recipes
const RecipeBooks = () => {
  const recipes = [
    {
      name: 'Spaghetti Carbonara',
      image: 'https://via.placeholder.com/200',
      ingredients: ['Spaghetti', 'Eggs', 'Pancetta', 'Parmesan', 'Pepper']
    },
    {
      name: 'Chicken Alfredo',
      image: 'https://via.placeholder.com/200',
      ingredients: ['Chicken', 'Fettuccine', 'Heavy cream', 'Parmesan', 'Garlic']
    },
    {
      name: 'Spaghetti Carbonaras',
      image: 'https://via.placeholder.com/200',
      ingredients: ['Spaghetti', 'Eggs', 'Pancetta', 'Parmesan', 'Pepper']
    },
    {
      name: 'Caesar Salad',
      image: 'https://via.placeholder.com/200',
      ingredients: ['Lettuce', 'Caesar dressing', 'Croutons', 'Parmesan']
    },
    {
      name: 'Chicken Alfredos',
      image: 'https://via.placeholder.com/200',
      ingredients: ['Chicken', 'Fettuccine', 'Heavy cream', 'Parmesan', 'Garlic']
    },
    {
      name: 'CaesarSalad',
      image: 'https://via.placeholder.com/200',
      ingredients: ['Lettuce', 'Caesar dressing', 'Croutons', 'Parmesan']
    },
    {
      name: 'Caesar montano',
      image: 'https://via.placeholder.com/200',
      ingredients: ['Lettuce', 'Caesar dressing', 'Croutons', 'Parmesan']
    },
    {
      name: 'Caesar montano',
      image: 'https://via.placeholder.com/200',
      ingredients: ['Lettuce', 'Caesar dressing', 'Croutons', 'Parmesan']
    },
    {
      name: 'Caesar asdasdas',
      image: 'https://via.placeholder.com/200',
      ingredients: ['Lettuce', 'Caesar dressing', 'Croutons', 'Parmesan']
    },
    {
      name: 'Spaghetti Carbonaras',
      image: 'https://via.placeholder.com/200',
      ingredients: ['Spaghetti', 'Eggs', 'Pancetta', 'Parmesan', 'Pepper']
    },
    {
      name: 'Spaghetti Carbonaras',
      image: 'https://via.placeholder.com/200',
      ingredients: ['Spaghetti', 'Eggs', 'Pancetta', 'Parmesan', 'Pepper']
    },
    {
      name: 'Caesar montano',
      image: 'https://via.placeholder.com/200',
      ingredients: ['Lettuce', 'Caesar dressing', 'Croutons', 'Parmesan']
    }
  ];

  return (
    <div className="recipes-book">
      <h1>Recipe Book</h1>
      <div className="recipes">
        <h1>Recipe books</h1>
        {recipes.map((recipe, index) => (
          <Recipe
            key={index}
            name={recipe.name}
            image={recipe.image}
            ingredients={recipe.ingredients}
          />
        ))}
      </div>
    </div>
    );
}