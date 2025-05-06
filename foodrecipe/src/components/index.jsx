import React from 'react';

const recipesData = [
  {
    name: 'Classic Spaghetti Carbonara',
    ingredients: [
      '200g spaghetti',
      '100g pancetta',
      '2 large eggs',
      '50g grated Parmesan cheese',
      '2 cloves garlic',
      'Salt and pepper to taste',
    ],
    procedures: [
      'Cook spaghetti in boiling salted water until al dente.',
      'Fry pancetta until crispy. Add minced garlic and cook for 1 minute.',
      'Whisk eggs and Parmesan cheese in a bowl.',
      'Drain pasta, reserve some cooking water, and mix with pancetta.',
      'Remove from heat and quickly stir in egg mixture, adding reserved water if needed.',
      'Season with salt and pepper, serve immediately.',
    ],
  },
  // Add more recipes here
  {
    name: 'Margherita Pizza',
    ingredients: [
      '1 pizza doughs',
      '200g tomato sauces',
      '200g tomato sauces',
      '150g mozzarella cheeses',
      '150g mozzarella cheeses',
      'Fresh basil leaves',
      'Olive oils',
      'Olive oils',
      'Salt to taste',
      'Salt to taste',
    ],
    name: 'Margherita Pizza',
    ingredients: [
      '1 pizza doughs',
      '200g tomato sauce',
      '150g mozzarella cheese',
      'Fresh basil leaves',
      'Olive oils',
      'Salt to taste',
    ],
    procedures: [
      'Preheat oven to 250°C (482°F).',
      'Spread tomato sauce over the pizza dough.',
      'Add sliced mozzarella cheese on top.',
      'Bake for 10-12 minutes until crust is golden.',
      'Bake for 10-12 minutes until crust is golden.',

      'Bake for 10-12 minutes until crust is golden.',
      'Preheat oven to 250°C (482°F).',
      'Garnish with fresh basil leaves and drizzle with olive oil.',
      'Serve hot.',
    ],
  },
];

const RecipesSection = () => {
  return (
    <section id="recipes" style={{ padding: '20px', backgroundColor: '#f9f9f9' }}>
      <h2>Our Recipes</h2>
      {recipesData.map((recipe, index) => (
        <div key={index} className="recipe" style={{
          border: '1px solid #ccc',
          padding: '15px',
          marginBottom: '20px',
          borderRadius: '8px'
        }}>
          <h3 style={{ color: '#333' }}>Recipe Name: {recipe.name}</h3>
          
          <h4 style={{ marginTop: '10px', color: '#555' }}>Ingredients:</h4>
          <ul>
            {recipe.ingredients.map((ingredient, idx) => (
              <li key={idx}>{ingredient}</li>
            ))}
          </ul>
          
          <h4 style={{ marginTop: '10px', color: '#555' }}>Procedures:</h4>
          <ol>
            {recipe.procedures.map((step, idx) => (
              <li key={idx}>{step}</li>
            ))}
          </ol>
        </div>
      ))}
    </section>
  );
};

export default RecipesSection;
