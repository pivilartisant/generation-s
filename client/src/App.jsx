import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import { CheckValidation } from './components/Game/CheckValidation'
import { AudioPlayer } from './components/audioPlayer/AudioPlayer'

import { useStore } from "./store";
import { shallow } from "zustand/shallow";



function App() {

  return (
    <div className="App">
    <Router>
        <Routes>
          
          <Route path="/interface" element={<AudioPlayer  />} />
          <Route path="/game" element={ <CheckValidation />} />
        </Routes>
    </Router>
    </div>
  )
}

export default App
