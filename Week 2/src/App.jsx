import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import './navbar/nav.css'

import Projects from "./pages/projects.jsx";
import Home from "./pages/home.jsx";
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
function App(){
  const [count, setCount] = useState(0)
  const [showIntro, setShowIntro] = useState(true);
  const hideIntro = () => setShowIntro(false);

  return (
    <>
    <div>
    </div>
      <div id="banner" className="container center">
      <h1>My About Me Website</h1>
    </div>
    <hr/>
    
    {showIntro &&(
    <div className="container intro center">
      <div>
        <h2>This is my About Me page. Click one of these links to check out my website.</h2>
      </div>
    </div>
    )}

    <BrowserRouter>
    <nav>
      <Link to="/" onClick={hideIntro}>Home</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/placeholder">placeholder</Link>
    </nav>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
      </Routes>
    </BrowserRouter>
    
 
    </>
  )
}

export default App
