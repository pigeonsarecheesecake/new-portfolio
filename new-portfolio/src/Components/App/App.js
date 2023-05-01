import React, {useState} from "react";
import "./App.css"
import ToggleButton from "../ToggleButton/ToggleButton";

function App() {
  // Initial states
  const [mode, setMode] = useState("light");

  // Handlers
  const handleToggle = () => {
    setMode(mode === "light" ? "dark" : "light");
  }

  return (
    <div className={`App ${mode}`}>
      {/* Toggle Button */}
      <ToggleButton mode={mode} onToggle={handleToggle} />
    </div>
  );
}

export default App;
