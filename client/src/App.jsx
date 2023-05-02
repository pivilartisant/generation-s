import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import { CheckValidation } from './components/CheckValidation'
import { Game } from './components/Game/Game'
import { AudioPlayer } from './components/audioPlayer/AudioPlayer'

function App() {

  return (
    <div className="App">
    <Router>
        <Routes>
          
          <Route path="/interface" element={<AudioPlayer  />} />
          <Route path="/game" element={ <Game />} />
        </Routes>
    </Router>
    </div>
  )
}

export default App
