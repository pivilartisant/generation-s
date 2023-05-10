import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Game } from './Pages/Game/Game'
import { Deck } from './Pages/Deck/Deck'
import './App.css'

import useGameStore from "./store";

function App() {
  const toggleGameState = useGameStore((state) => state.toggleGameState);
  const gameState = useGameStore((state) => state.gameState);
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/deck" element={<Deck gameState={gameState} toggleGameState={toggleGameState} />} />
          <Route path="/game" element={<Game gameState={gameState} toggleGameState={toggleGameState} />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
