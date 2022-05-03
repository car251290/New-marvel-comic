import React from 'react'
import { Route } from 'react-router-dom'
import NavBar from './Components/Shared/NavBar'
import Footer from './Components/Shared/Footer'
import CharactersContainers from './Components/CharactersContainers/CharactersContainers'
import './App.css'

const App = () => (
  <div className="App">
    <NavBar/>
    <Route path="../characters" render={() => <CharactersContainers />}/>
    <Footer />
  </div>
)

export default App;
