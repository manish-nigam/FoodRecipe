import React, { useEffect, useState } from 'react'
import './App.css';
import Recipe from './Component/Recipe';

const App = () => {
const APP_ID = "905839c6";
const APP_KEY =  "990874efd5c30ded123377304bf18b6c";
const [recipes, setRecipes] = useState([]);
const [search, setSearch] = useState("");
const [query, setQuery] = useState("chicken");
useEffect(() => {
	getRecipes();
}, [query])
const getRecipes = async () => {
	const response = await fetch
		(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
	const data = await response.json();
	setRecipes(data.hits);
	console.log(data.hits);

};
const updateSearch = e => {
	setSearch(e.target.value);
};
const getSearch = e => {
	e.preventDefault();
	setQuery(search);
	setSearch("");
}

return (
	<div className="App">
  
	<form className="search-form" onSubmit={getSearch} >
  
		<input className="search-bar" type="text" value={search}
			onChange={updateSearch} />
		<button className="search-button" type="submit" >
			Search
		</button>
	</form>
	<div className="recipes">
		{recipes.map(ele => (
		<Recipe
			key={ele.recipe.label}
			title={ele.recipe.label}
			calories={ele.recipe.calories}
			image={ele.recipe.image}
			ingredients={ele.recipe.ingredients}
		/>

		))}
	</div>

	</div>
);
}

export default App;

