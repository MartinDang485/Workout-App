import { BrowserRouter, Routes, Route} from 'react-router-dom'

//Pages
import Home from './pages/Home'
//Components
import Navbar from './components/Navbar'
import Bottom  from './components/Bottomnavbar'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route 
              path="/"
              element={<Home />}
            />
          </Routes>
        </div>
        <Bottom />
      </BrowserRouter>
    </div>
  )
}

export default App
