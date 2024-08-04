import { useState } from 'react';
import SimpleSidebar from './components/SimpleSidebar';
import './App.css'

function App() {
  const [muncul, setMuncul] = useState(false);

  function handleMouseOver() {
    setMuncul(true);
  }

  function handleMouseOut() {
    setMuncul(false);
  }

  return (
    <div>
      <button onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Munculkan</button>
      <SimpleSidebar muncul={muncul} />
    </div>
  )
}

export default App
