import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
// import { CheckValidation } from './Pages/CheckValidation'
import { Game } from './Pages/Game/Game'
import { Deck } from './Pages/Deck/Deck'

function App() {

  return (
    <div className="App">
    <Router>
        <Routes>
          
          <Route path="/deck" element={<Deck  />} />
          <Route path="/game" element={ <Game />} />
        </Routes>
    </Router>
    </div>
  )
}

export default App
