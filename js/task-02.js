
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const ulIngredients = document.getElementById('ingredients');

ingredients.forEach((ing) => {
  const listItem = document.createElement('li');
  listItem.textContent = ing;
  listItem.classList.add('li');
  ulIngredients.appendChild(listItem);
});