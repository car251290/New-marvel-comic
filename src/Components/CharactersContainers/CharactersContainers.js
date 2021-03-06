import React from 'react'
import { Route,Router } from 'react-router-dom'
import { useState,useEffect } from 'react'
import axios from 'axios'
import CharactersList from '../CharactersList/CharactersList'
import ShowCharacter from '../ShowCharacter/ShowCharacter'

const CharactersContainer = () => {
  const [Character,setCharacter] = useState([]);
  const [Characters, setCharacters]= useState([]);
 
useEffect(()=>{
  const URL = `https://gateway.marvel.com:443`
  const URI = `/v1/public/characters`
  const PARAMS = `?apikey=e2a674287cbd2b7e4916929820b966a0&ts=1538069103280&hash=a53b6090f58bc5656bb41a3fd32ff3fe`
  axios.get(`${URL}${URI}${PARAMS}`)
       .then( response => {
          const characters = response.data.results
          setCharacter({ characters })
        })
        .catch(err => {
          console.log(err)
        })
},[]);

  const showCharacter = (props) => {
    setCharacter({ Character }, props.history.push(`/characters/${ Character.id}`))
  }
      return(
        <Router> 
          <Route exact path='../characters/' render={() => <CharactersList characters={setCharacters} key={Character.id} sortEvent={Character.sortEvent} showCharacter={showCharacter}/> }/>
          <Route exact path='../characters/:id' render={() => (
            <div className='character'>
              <ShowCharacter character={setCharacter}/>
            </div>)}
          />
        </Router>
      )
  
}

export default CharactersContainer
