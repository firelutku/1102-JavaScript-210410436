import presentDrinks from "./src/presentDrinks_36.js";
import './src/searchForm_36.js'
const URL ='https://www.thecocktaildb.com/api/json/v1/1/search.php?s=c';

window.addEventListener('DOMContentLoaded', () => {
    presentDrinks(URL);
});