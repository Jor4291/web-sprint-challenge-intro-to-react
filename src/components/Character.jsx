import React from 'react';

// Write your Character component here
const Character = (props) => {

const { swCharacter } = props;


    console.log(props)
    return(
          <article > 
            <h1>{swCharacter.name}</h1>
            <p> {`${swCharacter.name} was born in ${swCharacter.birth_year} on their home plant of ${swCharacter.homeworld}. This ${swCharacter.eye_color} eyed, ${swCharacter.hair_color} haired ${swCharacter.species}. comes in with a height of ${swCharacter.height} and a mass of ${swCharacter.mass}.`} </p>

          <h3>If you'd like to learn more about {`${swCharacter.name}`} check out these exciting movies</h3>
          <h4>{`${swCharacter.films}`}</h4>

          </article>
    )
}

export default Character;