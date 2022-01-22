import React, { useState, useEffect } from "react";
import './App.css';
import axios from 'axios';
import Character from './components/Character';
import styled from 'styled-components';


const Div = styled.div`
color: ${props => props.currentPage>1 ? 'blue' : 'red'};
`


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
const [swData, setSWData] = useState([]);
const [currentPage, setPage] = useState(1);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.





const pageSelector = (newPageNumber) =>{
  setPage(newPageNumber);
}

  useEffect(()=> {
    axios.get(`https://swapi.dev/api/people?page=${currentPage}`)
    .then(res =>{
      setSWData(res.data)
      console.log(res.data)
    })
     .catch(err => console.log(err))
   }, [currentPage])


  return (
    
    <div className="App">
      <button onClick ={() =>pageSelector(currentPage -1)}>previous</button>
      <button onClick ={() =>pageSelector(currentPage +1)}>next</button>
      <h1 className="Header">Characters</h1>

      {
        swData.map(swCharacter => {
          return (
             <Character 
            key={`${swCharacter.id}`} 
            swCharacter={swCharacter}/>
          )
          })
        }
          
    </div>
  );
      }



export default App;
