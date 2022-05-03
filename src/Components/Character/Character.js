import React from 'react'

const Character = (props) => {
  
  const handleClick = () => {
    props.showCharacter(props.character)
  }

  
    return(
      <div className="character" onClick={handleClick}>
        <img className="character-images" src={props.character.thumbnail.path+ '/portrait_fantastic' + '.' + props.character.thumbnail.extension} alt={props.character.name}/>
        <div className="character-name">
          {props.character.name}
        </div>
      </div>
    )
  
}

export default Character
