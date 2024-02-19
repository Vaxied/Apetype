import { Routes, Route } from "react-router-dom"
import Home from './Home/Home'
import Profile from './Profile/Profile'
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </>
  )
}

export default App
