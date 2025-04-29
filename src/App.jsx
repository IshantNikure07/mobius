import { useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import {
  Route,
  BrowserRouter as Router,
  Routes, // Ensure BrowserRouter is imported
} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>

       <Route path="/" element={ <HomePage/>}/>
      </Routes>
  </Router>
  )
}

export default App
