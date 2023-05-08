import React, {useState} from "react";
import "./App.css"
import Home from "../Home/Home";
import Projects from "../Projects/Projects";
import About from "../About/About";
import NavigationBar from "../NavigationBar/NavigationBar";
import Contact from "../Contact/Contact";

function App() {
  // Initial states
  const [mode, setMode] = useState("light");
  
  // Logo
  const logo = <svg height="52" viewBox="0 0 73 82" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.73494" width="66" height="71" fill="white" stroke="black"/><rect x="6" y="6.23494" width="67" height="72" fill="#222222"/><path d="M43.576 27.3869L38.92 44.2349H37.744L33.136 29.0669L28.456 44.2349H27.328L22.744 27.3869H23.896L27.928 42.7229L32.56 27.3869H33.76L38.344 42.8189L42.4 27.3869H43.576Z" fill="white"/><path d="M48.572 51.7189C49.052 50.2789 49.904 49.1869 51.128 48.4429C52.352 47.6749 53.912 47.2909 55.808 47.2909V48.9829H55.268C53.348 48.9829 51.752 49.5349 50.48 50.6389C49.208 51.7189 48.572 53.4949 48.572 55.9669V67.2349H46.952V47.6869H48.572V51.7189Z" fill="white"/>
  </svg>;

  // Handlers
  const handleToggle = () => {
    setMode(mode === "light" ? "dark" : "light");
  }

  return (
    <div className={`App ${mode}`}>
      <nav>
        <NavigationBar logo={logo} mode={mode}/>
      </nav>

      <section>
        <Home onToggle={handleToggle} mode={mode} logo={logo} />
      </section>
      
      <section>
        <Projects mode={mode} />
      </section>

      <section>
        <About mode={mode}/>
      </section>

      <section>
        <Contact mode={mode}/>
      </section>
      
      <footer>
        
      </footer>
    </div>
  );
}

export default App;
