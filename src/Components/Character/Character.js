import React, { useState } from 'react'

const Character = () => {
  const [showCharacter,setshowCharacter]= useState([])

  const handleClick = () => {
    setshowCharacter(showCharacter)
  }

  
    return(
      <div className="character" onClick={handleClick}>
        <img className="character-images" src={showCharacter.thumbnail.path+ '/portrait_fantastic' + '.' + showCharacter.thumbnail.extension} alt={showCharacter.name}/>
        <div className="character-name">
          {showCharacter.name}
        </div>
      </div>
    )
  
}

export default Character
