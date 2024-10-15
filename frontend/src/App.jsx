import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'


//Pages
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'

//Components
import Navbar from './components/Navbar'
import Bottom  from './components/Bottomnavbar'
import { useAuthContext } from './hooks/useAuthContext'

function App() {
  const { user } = useAuthContext()

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route 
              path="/"
              element={user ? <Home /> : <Navigate to="/login" />}
            />
            <Route 
              path="/signup"
              element={!user ? <Signup /> : <Navigate to="/" />}
            />
            <Route 
              path="/login"
              element={!user ? <Login /> : <Navigate to="/" />}
            />
          </Routes>
        </div>
        <Bottom />
      </BrowserRouter>
    </div>
  )
}

export default App
