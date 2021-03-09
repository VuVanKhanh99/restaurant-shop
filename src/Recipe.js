import React from 'react';
import style from './recipe.module.css';
const Recipe=({title,calories,image,ingredients})=>{
    return(
        <div className="item-contain">
           <h1>{title}</h1>
           <ol >
               {ingredients.map(ingre=>( 
                   <li >{ingre.text}</li>
               ))}
           </ol>
           <p>{calories}</p>
           <img src={image}alt=""/>
        </div>
    )
}
export default Recipe