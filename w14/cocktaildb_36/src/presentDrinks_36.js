import fetchDrinks from './fetchDrinks_36.js';
import displayDrinks from "./displayDrinks_36.js";
const presentDrinks= async(url)=>{
    //fetch drink
   const data=await fetchDrinks(url);
   console.log('drinks data',data);
   const section =await displayDrinks(data);
};

export default presentDrinks;

