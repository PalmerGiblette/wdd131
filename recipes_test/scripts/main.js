// Import recipe data
import recipes from './recipes.mjs';

// Generate a random number from 0 to num - 1
function random(num) {
    return Math.floor(Math.random() * num);
}

// Get a random entry from any list
function getRandomListEntry(list) {
    const listLength = list.length;
    const randomNum = random(listLength);
    return list[randomNum];
}

// Create HTML for tag list items
function tagsTemplate(tags) {
    let html = '';
    for (let tag of tags) {
        html += `<li>${tag}</li>\n`;
    }
    return html;
}

// Create HTML for star ratings
function ratingTemplate(rating) {
    let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">\n`;
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            html += `<span aria-hidden="true" class="icon-star">⭐</span>\n`;
        } else {
            html += `<span aria-hidden="true" class="icon-star-empty">☆</span>\n`;
        }
    }
    html += `</span>`;
    return html;
}

// Build the full recipe HTML template
function recipeTemplate(recipe) {
    return `<figure class="recipe">
    <img src="${recipe.image}" alt="image of ${recipe.name}" />
    <figcaption>
      <ul class="recipe__tags">
        ${tagsTemplate(recipe.tags)}
      </ul>
      <h2><a href="${recipe.url || '#'}">${recipe.name}</a></h2>
      <p class="recipe__ratings">
        ${ratingTemplate(recipe.rating)}
      </p>
      <p class="recipe__description">
        ${recipe.description}
      </p>
    </figcaption>
  </figure>`;
}

// Renders the recipe to the page
function renderRecipes(recipeList) {
    const main = document.querySelector('main');
    const html = recipeList.map(recipe => recipeTemplate(recipe)).join('\n');
    main.innerHTML = html;
}

// Randomized recipe to appear initally
function init() {
    const recipe = getRandomListEntry(recipes);
    renderRecipes([recipe]);
}

// Filter the recipes
function filterRecipes(query) {
    const filtered = recipes.filter(recipe => {
        const nameMatch = recipe.name.toLowerCase().includes(query);
        const descriptionMatch = recipe.description.toLowerCase().includes(query);
        const tagMatch = recipe.tags.find(tag => tag.toLowerCase().includes(query));
        const ingredientMatch = recipe.recipeIngredient.find(ingredient =>
            ingredient.toLowerCase().includes(query)
        );

        return nameMatch || descriptionMatch || tagMatch || ingredientMatch;
    });

    return filtered.sort((a, b) => a.name.localeCompare(b.name));
}

// Search button function
function searchHandler(event) {
    event.preventDefault();

    const searchInput = document.querySelector('#search-input');
    const query = searchInput.value.toLowerCase();

    const filteredList = filterRecipes(query);
    renderRecipes(filteredList);
}

// Set up event listener for the search button
document.querySelector('#search-button').addEventListener('click', searchHandler);

// Run the initial render
init();