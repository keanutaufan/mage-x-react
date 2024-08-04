import './App.css'
import Counter from './components/Counter'
import Slides from './components/Slides'
import Ternary from './components/Ternary'

function App() {
  return (
    <div>
      <Ternary status="lulus" />
      <Ternary status="gagal" />
    </div>
  )
}

export default App
