import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import { useState } from 'react'
import { Game } from './components/Game/Game'
import { AudioPlayer } from './components/audioPlayer/AudioPlayer'


function App() {

  const [isValid, setIsValid] = useState(false);


  return (
    <div className="App">
    <Router>
        <Routes>
          <Route path="/interface" element={<AudioPlayer isValid={isValid} setIsValid={setIsValid} />} />
          <Route path="/game" element={ <Game isValid={isValid} />} />
        </Routes>
    </Router>
    </div>
  )
}

export default App
