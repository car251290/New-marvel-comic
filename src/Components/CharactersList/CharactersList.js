import React from 'react'
import Header from '../Header/Header'
import Character from '../Character/Character'
import { useState } from 'react'
import _ from 'lodash'

const CharactersList = () => {
  const [ascending,setAscending] = useState(false);
  

  const handleClick = () => {
    setAscending((prevState) => {
      return {
        setAscending: !prevState.ascending
      }
    });
  }


    const direction = ascending ? "desc" : "asc";

    const sortedCharacters = _.orderBy(this.props.characters, ["name"], [direction, "asc"])
    const characters = sortedCharacters.map(character =>
      <div key={character.name}>
        <Character handleClick={handleClick} key={character.id.characterId} character={character} showCharacter={character} />
      </div>
    )

    return(
      <div>
        <Header />
        <p>
          <button onClick={handleClick} className="sort-button">
            Sort by {ascending ? "A-Z" : "Z-A"}
          </button>
        </p>
        <div className="character-grid">
          {characters}
        </div>
      </div>
    )
  
}

export default CharactersList
