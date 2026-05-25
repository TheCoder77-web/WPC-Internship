import { useState } from 'react'
import './App.css'
import Projects from "./pages/projects.jsx";
import Home from "./pages/home.jsx";
import Resume from "./pages/resume.jsx";
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";

function App(){
  const [showIntro, setShowIntro] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); 

  const hideIntro = () => setShowIntro(false);
  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    /**Appearance Theme */
    <div className={isDarkMode ? "dark-theme" : ""} style={{ minHeight: "100vh" }}>
      <div id="banner" className="container center">
        <h1>My About Me Website</h1>
        <button onClick={toggleTheme} style={{marginLeft: '20px'}}>
          {isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      {showIntro && (
        <div className="container intro center">
          <h2>This is my About Me page. Click a link below.</h2>
        </div>
      )}

      <BrowserRouter>
        <div className="nav-container">
          <nav>
            <Link to="/" onClick={hideIntro}>Home</Link>
            <Link to="/projects" onClick={hideIntro}>Projects</Link>
            <Link to="/resume" onClick={hideIntro}>Resume</Link>
          </nav>

          <div className="search-box">
            <input 
              type="text"
              className="search-input"
              placeholder="Search..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)} 
            />
            {searchQuery && (
              <button className="clear-btn" onClick={() => setSearchQuery("")}>✕</button>
            )}
          </div>
        </div>
      
        <Routes>
          <Route path="/" element={<Home searchQuery={searchQuery} />}/>
          <Route path="/projects" element={<Projects searchQuery={searchQuery} />}/>
          <Route path="/resume" element={<Resume searchQuery={searchQuery} />}/>
        </Routes>
      </BrowserRouter>
    
      <footer id="footer">
        <p>© {new Date().getFullYear()} Ruien Cao. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App;