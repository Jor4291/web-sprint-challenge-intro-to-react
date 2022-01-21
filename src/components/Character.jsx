import React from 'react';

// Write your Character component here
const Character = (props) => {

const { swCharacter } = props;


    console.log(props)
    return(
          <article> 
            <h2>{swCharacter.name}</h2>
            <p> {`${swCharacter.name} was born in ${swCharacter.birth_year} on their home plant of ${swCharacter.homeworld}. This ${swCharacter.eye_color} eyed, ${swCharacter.hair_color} haired ${swCharacter.species}. comes in with a height of ${swCharacter.height} and a mass of ${swCharacter.mass}. You can learn more about ${swCharacter.name} and their adventures by watching ${swCharacter.films}`} </p>
          </article>
    )
}

export default Character;