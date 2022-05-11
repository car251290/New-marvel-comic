import React, { useState, useEffect } from 'react'
import axios from 'axios'
import * as moment from 'moment'

import { Link } from 'react-router-dom'

const ShowCharacter = () => {
  const [Comics, setComics] = useState([]);
  const [Character, setCharacter]= useState([]);

useEffect(() =>{
  const URI = `/v1/public/characters/${Character.id}/comics`
  const URL = `https://gateway.marvel.com:443`
  const PARAMS = `?apikey=e2a674287cbd2b7e4916929820b966a0&ts=1538069103280&hash=a53b6090f58bc5656bb41a3fd32ff3fe`

  axios.get(`${URL}${URI}${PARAMS}`)
       .then( response => {
         const comics = response.data.data.results
         setComics({ comics })
       })
},[Character])
 
    const comics = Comics.map(comic =>
      <div key={comic.id} className="comic-container">
        <div className="comic-info">
          <img className="comic-image" src={comic.thumbnail.path + '/portrait_fantastic'+ '.' + comic.thumbnail.extension} alt={comic.name}/>
        </div>
        <div className="overlay">
            <div className="comic-text">
              <p>Comic Title: {comic.title}</p>
              <p>Comic ID: {comic.id}</p>
              <p> Release Date: {moment(comic.dates[0].date).format('MM/DD/YYYY')} </p>
              <p>Issue Number: {comic.issueNumber}</p>
            </div>
        </div>
      </div>
  )

    return(
      <div className="show-character">
        <div className="character-header">
          <div className="character-image-header">
            <img className="character-image" src={setCharacter.thumbnail.path +'/portrait_fantastic'  + '.' + setCharacter.thumbnail.extension} alt={Character.name}/>
            <svg className="svg" viewBox="0 0 100 100" preserveAspectRatio="none">
              <polygon points="0,100 100,30 100,100" />
            </svg>

            <div className="char-name">
              <h1>{Character.name}</h1>
            </div>
          </div>
        </div>
        <div className="comic-section">Comics</div>
        <div className="character-info">
          {comics}
        </div>
          <Link className='back-to-link' to='/characters/'><h2>Back to All Characters</h2></Link>
     </div>

    )
  
}

export default ShowCharacter
