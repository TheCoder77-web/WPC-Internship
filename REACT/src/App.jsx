import { useState } from 'react'
import './App.css'
import Projects from "./pages/projects.jsx";
import Home from "./pages/home.jsx";
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";

function App(){
  const [showIntro, setShowIntro] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false); // Theme State

  const hideIntro = () => setShowIntro(false);
  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    // This wrapper applies the 'dark-theme' class based on state
    <div className={isDarkMode ? "dark-theme" : ""}>
      <div id="banner" className="container center">
        <h1>My About Me Website</h1>
        <button onClick={toggleTheme} style={{marginLeft: '20px'}}>
          {isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>
      
      <hr/>
      
      {showIntro && (
        <div className="container intro center">
          <h2>This is my About Me page. Click a link below.</h2>
        </div>
      )}

      <BrowserRouter>
        <nav>
          <Link to="/" onClick={hideIntro}>Home</Link>
          <Link to="/projects">Projects</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;