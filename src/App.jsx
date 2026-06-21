import { useEffect, useState } from 'react'
import './App.css'
import PersonajeCard from './components/PersonajeCard';

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getCharacters = async () => {
      const response = await fetch('https://rickandmortyapi.com/api/character');
      const data = await response.json();
      // Solo 12 personajes usando slice: 
      setCharacters(data.results.slice(0,12));
    };

    getCharacters();

  }, []);


  return (
    <div >
      <h1>The Rick & Morty · Multiverse Directory</h1>
      <div className="personajes-grid" >
          {characters.map((char)=>(
            <PersonajeCard key={char.id} char={char}/>
          ))}
      </div>

    </div>
  )
}

export default App
