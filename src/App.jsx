import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getCharacters = async () => {
      const response = await fetch('https://rickandmortyapi.com/api/character');
      const data = await response.json();
      setCharacters(data.results);
    };

    getCharacters();

  }, []);


  return (
    <div>
      <h1>The Rick and Morty Character</h1>
      <div>
          {characters.map(()=>(
            </>
          ))}
      </div>

    </div>
  )
}

export default App
