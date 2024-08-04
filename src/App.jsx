import SimpleSidebar from './components/SimpleSidebar';
import './App.css'
import UseEffectDemo from './components/UseEffectDemo';
import { useState } from 'react';

function App() {
  const [nilai, setNilai] = useState(0);
  const [nilaiLain, setNilaiLain] = useState(0);

  return (
    <div>
      <button onClick={() => setNilai(nilai + 1)}>Ubah nilai</button>
      <button onClick={() => setNilaiLain(nilaiLain + 1)}>Ubah nilai lain</button>
      <UseEffectDemo nilai={nilai} nilaiLain={nilaiLain} />
    </div>
  )
}

export default App
