import presentDrinks from "./src/presentDrinks_xx.js";

import './src/searchForm_xx.js'

import {LOCAL_URL, hasNetwork, searchItems } from './api/search/config_xx.js';

console.log ('config_xx.js', {LOCAL_URL, hasNetwork, searchItems }); 

const URL ='https://www.thecocktaildb.com/api/json/v1/1/search.php?s=h';


window.addEventListener('DOMContentLoaded', () => {
    if (hasNetwork){
        presentDrinks(URL);
    }else {
        presentDrinks(LOCAL_URL+ 'cha.json');
    }
});


