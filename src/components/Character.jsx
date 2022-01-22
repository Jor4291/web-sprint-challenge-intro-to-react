import React from 'react';
import styled from 'styled-components';



const H1 = styled.h1`
  font-weight: 950;
  display:flex;
  justify-content: center;
  align-item: baseline;
  background: #C7C7C1;
  margin-left:120px;
  margin-right:120px;
`
const P = styled.p`
  display: flex;
  justify-content: wrap;
  align-item: center;
  background: #C7C7C1;
  margin-left:250px;
  margin-right: 250px;
`
const H3 = styled.h3`
   display: flex;
  justify-content: center;
  align-item: center;
  background: #C7C7C1;
  margin-left:350px;
  margin-right: 350px;
`
const H4 = styled.h4`
   display: flex;
  justify-content: center;
  align-item: center;
  background: #C7C7C1;
  margin-left:250px;
  margin-right: 250px;
`
// Write your Character component here
const Character = (props) => {

const { swCharacter } = props;


    
    return(
          <article > 
            <H1>{swCharacter.name}</H1>
            <P> {`${swCharacter.name} was born in ${swCharacter.birth_year} on their home plant of ${swCharacter.homeworld}. This ${swCharacter.eye_color} eyed, ${swCharacter.hair_color} haired ${swCharacter.species}. comes in with a height of ${swCharacter.height} and a mass of ${swCharacter.mass}.`} </P>

          <H3>If you'd like to learn more about {`${swCharacter.name}`} check out these exciting movies</H3>
          <H4>{`${swCharacter.films}`}</H4>

          </article>
    )
}

export default Character;