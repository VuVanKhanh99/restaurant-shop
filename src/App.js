import React,{useEffect,useState} from 'react'
import Recipe from './Recipe'
import './App.css'
import axios from 'axios'
const App=()=>{
  const APP_ID='67b5f447';
  const APP_KEY='72904a625a58eb2a512a629d089eb4a5';

  const ExampleReq= 
 `https://api.edamam.com/search?q=chicken&app_id&app_key`;

//const [counter,setCounter] =useState(0);
const [recipes,setRecipes]=useState([]);
const [search,setSearch]=useState("");
const [query,setQuery]=useState("chicken");


useEffect(()=>{

  getRecipes();
},[query]);

const getRecipes=async ()=>{
  const response=await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
  const data=await response.json();
console.log(data);
setRecipes(data.hits || 'No user data found');
}


const updateSearch= e =>{
  setSearch(e.target.value);
  console.log(search);
}
const getSearch=e =>{
  e.preventDefault();
  if(search != ""){
  setQuery(search);
  setSearch('');
  }
}
  return(
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="container">
       {
         recipes.map(recipe =>(
          <Recipe 
          key={recipe.recipe.label}
          title={recipe.recipe.label}
           calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
           />
       ))}
      </div>
    </div>
  )
}
export default App;