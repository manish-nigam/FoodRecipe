import React from 'react'
import "./Recipe.css"
const Recipe = ({title,calories,image,ingredients}) => {
  return (
    <div className='recipe'>
        <h1>{title}</h1>
        <ol>
            {ingredients.map(ele=>(
                <li>{ele.text}</li>
            ))}
        </ol>
        <p>Calories : {calories}</p>
        <img className='image' src={image}  />
    </div>
  )
}

export default Recipe