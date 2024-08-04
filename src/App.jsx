import './App.css'
import Slides from './components/Slides'

function App() {
  return (
    <div>
      <Slides
        thumbnail="https://picsum.photos/320/180"
        title="Light slides"
        author="Figma"
        likes="350"
        users="232k"
      />
    </div>
  )
}

export default App
